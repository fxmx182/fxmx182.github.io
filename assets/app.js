// Site da LibertyX: uma página só, com rotas no endereço (#/player/baixar).
// O conteúdo mora em produtos.js; aqui só se desenha.

(() => {
  "use strict";

  const app = document.getElementById("app");
  const PRODUTOS = window.PRODUTOS;
  const LOJA = window.LOJA;
  const GH = "https://github.com/fxmx182";

  const ABAS = [
    ["visao", "Visão geral"],
    ["recursos", "Recursos"],
    ["specs", "Especificações"],
    ["baixar", "Baixar"],
    ["preco", "Preço"],
  ];

  const LOJAS = {
    play: { icone: "play", pre: "Google Play", nome: "Google Play" },
    amazon: { icone: "amazon", pre: "Amazon Appstore", nome: "Amazon Appstore" },
    appstore: { icone: "apple", pre: "App Store", nome: "App Store" },
    cartao: { icone: "cartao", pre: "Loja com cartão", nome: "Cartão de crédito" },
  };

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ic = (nome, cls = "i") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${nome}"/></svg>`;
  const externo = 'target="_blank" rel="noopener"';
  // ?estatico: tudo visível de uma vez, sem animação de entrada (para capturas de tela)
  const ESTATICO = /[?&]estatico\b/.test(location.search);
  if (ESTATICO) document.documentElement.classList.add("estatico");
  const lazy = ESTATICO ? "" : ' loading="lazy"';

  const urlArquivo = (p, arquivo) =>
    p.tag === "latest-release"
      ? `${GH}/${p.repo}/releases/latest/download/${arquivo}`
      : `${GH}/${p.repo}/releases/download/${p.tag}/${arquivo}`;

  // ---------- dados ao vivo do GitHub (versão, data e tamanho) ----------

  const cacheRelease = new Map();
  function release(p) {
    if (cacheRelease.has(p.repo)) return cacheRelease.get(p.repo);
    const chave = `lx-rel-${p.repo}`;
    try {
      const salvo = JSON.parse(sessionStorage.getItem(chave) || "null");
      if (salvo && Date.now() - salvo.t < 30 * 60 * 1000) {
        const pr = Promise.resolve(salvo.d);
        cacheRelease.set(p.repo, pr);
        return pr;
      }
    } catch (_) { /* sem armazenamento: busca de novo */ }
    const api = p.tag === "latest-release"
      ? `https://api.github.com/repos/fxmx182/${p.repo}/releases/latest`
      : `https://api.github.com/repos/fxmx182/${p.repo}/releases/tags/${p.tag}`;
    const pr = fetch(api, { headers: { Accept: "application/vnd.github+json" } })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (!j) return null;
        const d = {
          tag: j.tag_name,
          data: j.published_at,
          assets: Object.fromEntries((j.assets || []).map((a) => [a.name, a.size])),
        };
        try { sessionStorage.setItem(chave, JSON.stringify({ t: Date.now(), d })); } catch (_) {}
        return d;
      })
      .catch(() => null);
    cacheRelease.set(p.repo, pr);
    return pr;
  }

  const tamanho = (b) => {
    const mb = b / 1048576;
    return (mb < 10 ? mb.toFixed(1) : Math.round(mb)).toString().replace(".", ",") + " MB";
  };
  const dataBonita = (iso) =>
    new Date(iso).toLocaleDateString("pt-BR", { day: "numeric", month: "short", year: "numeric" }).replace(".", "");

  function aplicarRelease(p) {
    release(p).then((d) => {
      if (!d) return;
      document.querySelectorAll(`[data-arquivo]`).forEach((el) => {
        const t = d.assets[el.dataset.arquivo];
        if (t) el.textContent = tamanho(t);
      });
      const v = document.querySelector(`[data-versao="${p.id}"]`);
      if (v) {
        const num = (d.tag.match(/^v?(\d+\.\d+(?:\.\d+)?)/) || [])[1];
        v.innerHTML = `${ic("ok")} ${num ? `Versão <b>${esc(num)}</b> · ` : ""}atualizado em <b>${esc(dataBonita(d.data))}</b> · <a href="${GH}/${p.repo}/releases" ${externo}>histórico</a>`;
        v.hidden = false;
      }
    });
  }

  // ---------- pedaços ----------

  const orbita = () => `
    <div class="orbita" aria-hidden="true">
      <svg viewBox="-300 -300 600 600">
        <g class="aneis">
          <g class="gira"><ellipse rx="290" ry="290"/></g>
          <g class="gira-inv"><ellipse rx="262" ry="262"/></g>
        </g>
        <use href="#lx-x" x="-260" y="-260" width="520" height="520"/>
        <g transform="rotate(45)">
          <circle class="luz" r="7"><animateMotion dur="7s" repeatCount="indefinite" path="M-222,0a222,104 0 1,0 444,0a222,104 0 1,0 -444,0"/></circle>
        </g>
        <g transform="rotate(-45)">
          <circle class="luz" r="5"><animateMotion dur="9.5s" begin="-3s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear" path="M-222,0a222,104 0 1,0 444,0a222,104 0 1,0 -444,0"/></circle>
        </g>
      </svg>
    </div>`;

  const cartao = (p) => `
    <a class="cartao surge" href="#/${p.id}">
      <div class="cartao-topo">
        <img class="cartao-icone" src="${p.icone}" alt="" width="68" height="68">
        <span class="selo selo-ok">Disponível</span>
      </div>
      <div class="cartao-corpo">
        <span class="rotulo">${esc(p.plataformas.join(" · "))}</span>
        <h3><span>LibertyX</span> ${esc(p.nome)}</h3>
        <p>${esc(p.resumo)}</p>
      </div>
      <div class="cartao-tela"><img src="${p.capa || p.destaque}" alt=""></div>
      <span class="cartao-ir">${ic("seta")}</span>
    </a>`;

  const canais = () => `
    <section class="secao" id="comprar" style="margin-top:110px">
      <span class="rotulo rotulo-ouro">${ic("chave")} Como comprar</span>
      <h2 class="titulo-secao">O mesmo app. <em>Três jeitos</em> de pagar.</h2>
      <p class="lead">Tudo é grátis para começar, e o Pro vem com teste. Muda só por onde você instala — e, com isso, como paga o Pro.</p>
      <div class="canais">
        <article class="canal vidro canal-destaque surge">
          <div class="canal-cabeca"><span class="canal-icone">${ic("telegram")}</span><span class="selo selo-ok">Aberto</span></div>
          <h3>APK + chave pelo Telegram</h3>
          <p>Baixe o APK direto daqui e compre o Pro com Bitcoin ou USDT no bot da loja. A chave chega na hora.</p>
          <ul>
            <li>${ic("ok")}Lightning, on-chain, USDT e USDC</li>
            <li>${ic("ok")}Funciona sem internet depois de ativada</li>
            <li>${ic("ok")}Na TV, a chave é colada pelo celular</li>
          </ul>
          <a class="botao botao-ouro" href="${LOJA.bot}" ${externo}>${ic("telegram")} Abrir a loja</a>
        </article>
        <article class="canal vidro surge">
          <div class="canal-cabeca"><span class="canal-icone">${ic("play")}</span><span class="selo selo-breve">Em breve</span></div>
          <h3>Google Play</h3>
          <p>Para celular e Google TV. O Pro é comprado dentro do app, pela cobrança da Play.</p>
          <ul>
            <li>${ic("ok")}Cartão, saldo Google e o que a Play aceitar</li>
            <li>${ic("ok")}7 dias com tudo liberado</li>
            <li>${ic("ok")}Atualiza sozinho pela loja</li>
          </ul>
        </article>
        <article class="canal vidro surge">
          <div class="canal-cabeca"><span class="canal-icone">${ic("amazon")}</span><span class="selo selo-breve">Em breve</span></div>
          <h3>Amazon Appstore</h3>
          <p>Para o Fire TV. O Pro é comprado dentro do app, pela conta Amazon.</p>
          <ul>
            <li>${ic("ok")}Cobrança da Amazon, sem cadastro extra</li>
            <li>${ic("ok")}7 dias com tudo liberado</li>
            <li>${ic("ok")}Fire TV Stick, Cube e TVs Fire</li>
          </ul>
        </article>
      </div>
      <div class="nota">${ic("estrela")}<span><b>A compra fica onde foi feita.</b> A Play não enxerga o que foi pago na Amazon, e a chave do Telegram vale no APK baixado daqui e no Partition — as lojas não permitem outro meio de pagamento dentro delas.</span></div>
    </section>`;

  const pacote = () => `
    <section class="secao">
      <div class="pacote surge">
        <svg class="pacote-x" viewBox="-260 -260 520 520" aria-hidden="true"><use href="#lx-x" x="-260" y="-260" width="520" height="520"/></svg>
        <div>
          <span class="rotulo rotulo-ouro">${ic("estrela")} Pacote completo</span>
          <h2 class="titulo-secao">Uma chave. <em>Todos os apps.</em></h2>
          <p class="lead">Player Pro, Folder Pro e Partition Premium numa chave só, ativada em cada app sem internet.</p>
          <div class="pacote-icones">${PRODUTOS.map((p) => `<img src="${p.icone}" alt="${esc(p.titulo)}" width="52" height="52">`).join("")}</div>
        </div>
        <div class="pacote-preco">
          <div class="preco-grande"><small>US$</small>35</div>
          <p>em vez de US$ 39 · vitalício</p>
          <a class="botao botao-ouro" href="${LOJA.pacote.url}" ${externo}>${ic("telegram")} Comprar o pacote</a>
        </div>
      </div>
    </section>`;

  // ---------- telas ----------

  function telaInicio() {
    document.title = "LibertyX — apps sem anúncio, sem conta";
    app.innerHTML = `
      <section class="heroi">
        <div>
          <span class="rotulo rotulo-ouro">${ic("estrela")} Família LibertyX</span>
          <h1>Software que é <em>seu</em>.</h1>
          <p class="lead">Um player que abre tudo, um gerenciador de arquivos feito para a TV e uma ferramenta que devolve os dados do seu disco. Independentes, bonitos e sem amarras.</p>
          <div class="heroi-acoes">
            <a class="botao botao-ouro" href="#apps">Conhecer os apps ${ic("seta")}</a>
            <a class="botao" href="${GH}" ${externo}>${ic("github")} Código no GitHub</a>
          </div>
          <ul class="principios">
            <li>${ic("ok")}Sem anúncios</li>
            <li>${ic("ok")}Sem conta</li>
            <li>${ic("ok")}Sem rastreamento</li>
            <li>${ic("ok")}Compra única</li>
          </ul>
        </div>
        ${orbita()}
      </section>

      <section class="secao" id="apps">
        <span class="rotulo">Os apps</span>
        <h2 class="titulo-secao">Feitos com <em>capricho</em>, um por um.</h2>
        <p class="lead">Cada app tem a sua página com recursos, especificações, downloads e as lojas onde ele estiver.</p>
        <div class="vitrine">${PRODUTOS.map(cartao).join("")}</div>
      </section>

      ${pacote()}
      ${canais()}
    `;
    document.querySelectorAll(".cartao").forEach((c) =>
      c.addEventListener("pointermove", (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", `${e.clientX - r.left}px`);
        c.style.setProperty("--my", `${e.clientY - r.top}px`);
      })
    );
    pausarSeReduzido();
  }

  function painel(p, aba) {
    switch (aba) {
      case "recursos":
        return `
          <h2>O que ele faz</h2>
          <p class="lead">${esc(p.slogan)}</p>
          <div class="recursos">
            ${p.recursos.map(([i, t, d]) => `
              <article class="recurso vidro surge">
                <span class="canal-icone">${ic(i)}</span>
                <h3>${esc(t)}</h3>
                <p>${esc(d)}</p>
              </article>`).join("")}
          </div>`;

      case "specs":
        return `
          <h2>Especificações</h2>
          <p class="lead">Onde roda, o que abre e como foi feito.</p>
          <div class="vidro specs-caixa">
            <table class="specs"><tbody>
              ${p.specs.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${v}</td></tr>`).join("")}
            </tbody></table>
          </div>`;

      case "baixar": {
        const tv = p.downloads.find((d) => d.icone === "tv");
        return `
          <h2>Baixar</h2>
          <p class="lead">Sempre a versão mais recente, direto do GitHub, assinada com a mesma chave — uma atualiza por cima da outra.</p>
          <div class="baixar-grade">
            ${p.downloads.map((d) => `
              <a class="arquivo vidro${d.principal ? " principal" : ""}" href="${urlArquivo(p, d.arquivo)}">
                <span class="canal-icone">${ic(d.icone)}</span>
                <div>
                  <h3>${esc(d.nome)}${d.principal ? '<span class="principal-selo">Recomendado</span>' : ""}</h3>
                  <p>${esc(d.detalhe)}</p>
                  <code>${esc(d.arquivo)}</code>
                </div>
                <span class="arquivo-baixar">${ic("download")} <span data-arquivo="${esc(d.arquivo)}">${esc(d.tamanho)}</span></span>
              </a>`).join("")}
          </div>
          <p class="versao" data-versao="${p.id}" hidden></p>

          <h3 class="subtitulo">Lojas</h3>
          <div class="lojas">
            ${p.lojas.map((l) => {
              const L = LOJAS[l.loja];
              const nota = l.nota ? ` · ${esc(l.nota)}` : "";
              return l.url
                ? `<a class="loja" href="${esc(l.url)}" ${externo}>${ic(L.icone)}<div><small>Disponível${nota}</small><strong>${L.nome}</strong></div>${ic("seta")}</a>`
                : `<div class="loja breve">${ic(L.icone)}<div><small>Em breve${nota}</small><strong>${L.nome}</strong></div></div>`;
            }).join("")}
            <a class="loja" href="${p.telegram}" ${externo}>${ic("telegram")}<div><small>Aberto · Bitcoin e USDT</small><strong>Chave no Telegram</strong></div>${ic("seta")}</a>
          </div>

          ${tv && p.instalarTv ? `
          <section class="instalar vidro">
            <div>
              <h3>Instalar na TV</h3>
              <p class="lead" style="font-size:15.5px">Google TV e Fire TV instalam o APK pelo app <b>Downloader</b>, que está na loja das duas. É feito uma vez; depois o app atualiza por cima.</p>
              <div class="endereco">
                <code>${urlArquivo(p, tv.arquivo)}</code>
                <button class="copiar" data-copiar="${urlArquivo(p, tv.arquivo)}">${ic("copiar")} Copiar</button>
              </div>
            </div>
            <ol>
              <li><span>Instale o <b>Downloader</b> pela loja da TV.</span></li>
              <li><span>Libere a instalação: <b>Fire TV</b> — Configurações › Minha Fire TV › Opções do desenvolvedor › Instalar apps desconhecidos. <b>Google TV</b> — Configurações › Sistema › Sobre, clique 7 vezes em “Versão”, depois Apps › Segurança › Apps desconhecidos.</span></li>
              <li><span>No Downloader, digite o endereço deste quadro e confirme a instalação.</span></li>
              <li><span>Para o Pro: na tela do Pro escolha <b>Tenho uma chave</b> e cole a chave pelo celular no endereço que a TV mostrar.</span></li>
            </ol>
          </section>` : ""}`;
      }

      case "preco": {
        const g = p.gratisPro;
        const [nomeGratis, nomePro] = g.nomes || ["Grátis", "Pro"];
        return `
          <h2>${esc(nomeGratis)} e ${esc(nomePro)}</h2>
          <p class="lead">Sem assinatura: o ${esc(nomePro)} é uma compra única e fica para sempre.</p>
          <div class="planos">
            <article class="plano vidro">
              <h3>${esc(nomeGratis)}</h3>
              <div class="preco-grande"><small>US$</small>0</div>
              <p class="preco-nota">para sempre</p>
              <ul>${g.gratis.map((t) => `<li>${ic("ok")}${esc(t)}</li>`).join("")}</ul>
              <a class="botao" href="#/${p.id}/baixar">${ic("download")} Baixar grátis</a>
            </article>
            <article class="plano vidro plano-pro">
              <span class="selo selo-ok teste">${esc(g.teste)}</span>
              <h3>${esc(nomePro)}</h3>
              <div class="preco-grande"><small>US$</small>${esc(g.preco.replace("US$ ", ""))}</div>
              <p class="preco-nota">${esc(g.precoNota)}</p>
              <ul>${["Tudo do " + nomeGratis, ...g.pro].map((t) => `<li>${ic("ok")}${esc(t)}</li>`).join("")}</ul>
              <a class="botao botao-ouro" href="${p.telegram}" ${externo}>${ic("telegram")} Comprar com Bitcoin ou USDT</a>
            </article>
          </div>
          <div class="nota">${ic("chave")}<span>${p.id === "partition"
            ? "<b>A chave chega na hora pelo Telegram</b> e é conferida no próprio PC, sem internet. O pagamento com cartão abre em breve."
            : "<b>Pelo APK daqui</b>, o Pro se compra com a chave do Telegram. <b>Na Google Play e na Amazon</b>, quando abrirem, o Pro é comprado dentro do app, pela própria loja."}
            Quer todos os apps? O <a href="${LOJA.pacote.url}" ${externo} style="color:var(--ouro)">pacote completo</a> sai por ${LOJA.pacote.preco}.</span></div>`;
      }

      default:
        return `
          <div class="sobre">${p.sobre.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
          <div class="galeria">
            ${p.galeria.map(([src, leg], i) => `
              <figure>
                <button data-lupa="${i}" aria-label="Ampliar: ${esc(leg)}"><img src="${src}" alt="${esc(leg)}"${lazy}></button>
                <figcaption>${esc(leg)}</figcaption>
              </figure>`).join("")}
          </div>`;
    }
  }

  let atual = { id: null, aba: null };

  function telaProduto(p, aba) {
    const mesmo = atual.id === p.id;
    document.title = `${p.titulo} — LibertyX`;

    if (!mesmo) {
      app.innerHTML = `
        <section class="prod-heroi">
          <div>
            <a class="voltar" href="#/">${ic("voltar")} Todos os apps</a>
            <div class="prod-id">
              <img src="${p.icone}" alt="" width="84" height="84">
              <h1><span>LibertyX</span>${esc(p.nome)}</h1>
            </div>
            <p class="prod-slogan">${esc(p.slogan)}</p>
            <p class="lead">${esc(p.resumo)}</p>
            <ul class="chips">${p.plataformas.map((x) => `<li class="chip">${esc(x)}</li>`).join("")}</ul>
            <div class="prod-acoes">
              <a class="botao botao-ouro" href="#/${p.id}/baixar">${ic("download")} Baixar grátis</a>
              <a class="botao" href="#/${p.id}/preco">${ic("chave")} ${p.gratisPro.nomes ? p.gratisPro.nomes[1] : "Pro"} · ${esc(p.gratisPro.preco)}</a>
            </div>
          </div>
          <div class="prod-tela"><img src="${p.destaque}" alt="${esc(p.titulo)}"></div>
        </section>
        <div class="abas-faixa">
          <div class="abas" role="tablist" aria-label="Seções do ${esc(p.titulo)}">
            ${ABAS.map(([k, t]) => `<button class="aba" role="tab" id="aba-${k}" aria-controls="painel" data-aba="${k}">${t}</button>`).join("")}
          </div>
        </div>
        <section class="painel" id="painel" role="tabpanel" tabindex="-1"></section>
        <section class="outros">
          <span class="rotulo">Também da LibertyX</span>
          <div class="outros-grade">
            ${PRODUTOS.filter((o) => o.id !== p.id).map((o) => `
              <a class="outro vidro" href="#/${o.id}">
                <img src="${o.icone}" alt="" width="54" height="54">
                <div><strong>${esc(o.titulo)}</strong><span>${esc(o.plataformas.join(" · "))}</span></div>
                ${ic("seta")}
              </a>`).join("")}
          </div>
        </section>`;
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    document.querySelectorAll(".aba").forEach((b) => {
      const sel = b.dataset.aba === aba;
      b.setAttribute("aria-selected", sel);
      b.tabIndex = sel ? 0 : -1;
    });
    const pn = document.getElementById("painel");
    pn.setAttribute("aria-labelledby", `aba-${aba}`);
    pn.innerHTML = painel(p, aba);
    // a aba escolhida não pode ficar escondida atrás do topo
    const faixa = document.querySelector(".abas-faixa");
    if (mesmo && faixa) {
      const alvo = faixa.offsetTop - parseInt(getComputedStyle(document.documentElement).getPropertyValue("--topo"));
      if (window.scrollY > alvo) window.scrollTo({ top: alvo, behavior: "smooth" });
    }
    document.querySelector(`.aba[data-aba="${aba}"]`)?.scrollIntoView({ block: "nearest", inline: "center" });
    if (aba === "baixar") aplicarRelease(p);
    if (aba === "visao") ligarLupa(p);
    atual = { id: p.id, aba };
  }

  // ---------- rotas ----------

  function rota() {
    const partes = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    const p = PRODUTOS.find((x) => x.id === partes[0]);
    if (p) {
      const aba = ABAS.some(([k]) => k === partes[1]) ? partes[1] : "visao";
      telaProduto(p, aba);
    } else {
      const ancora = partes[0] === "comprar" ? "comprar" : location.hash.startsWith("#apps") ? "apps" : null;
      if (atual.id !== "inicio") telaInicio();
      atual = { id: "inicio", aba: null };
      if (ancora) requestAnimationFrame(() => document.getElementById(ancora)?.scrollIntoView({ behavior: "smooth" }));
      else if (!location.hash || location.hash === "#/") window.scrollTo({ top: 0, behavior: "instant" });
    }
    document.querySelectorAll("[data-nav]").forEach((a) =>
      a.classList.toggle("ativo", (a.dataset.nav === "comprar") === (partes[0] === "comprar") && !p)
    );
    revelar();
  }

  // ---------- comportamentos ----------

  let observador;
  function revelar() {
    const els = document.querySelectorAll(".surge:not(.visivel)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("visivel")); return; }
    observador ??= new IntersectionObserver((ents) => ents.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visivel"); observador.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((e, i) => { e.style.transitionDelay = `${(i % 3) * 80}ms`; observador.observe(e); });
  }

  function pausarSeReduzido() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches)
      document.querySelectorAll(".orbita svg").forEach((s) => s.pauseAnimations?.());
  }

  const lupa = document.getElementById("lupa");
  let fotos = [], foto = 0;
  function mostrarFoto(i) {
    foto = (i + fotos.length) % fotos.length;
    const [src, leg] = fotos[foto];
    lupa.querySelector("img").src = src;
    lupa.querySelector("img").alt = leg;
    lupa.querySelector("figcaption").textContent = leg;
  }
  function ligarLupa(p) {
    fotos = p.galeria;
    document.querySelectorAll("[data-lupa]").forEach((b) =>
      b.addEventListener("click", () => { mostrarFoto(+b.dataset.lupa); lupa.showModal(); })
    );
  }
  lupa.querySelector(".lupa-fechar").onclick = () => lupa.close();
  lupa.querySelector(".lupa-ant").onclick = () => mostrarFoto(foto - 1);
  lupa.querySelector(".lupa-prox").onclick = () => mostrarFoto(foto + 1);
  lupa.addEventListener("click", (e) => { if (e.target === lupa) lupa.close(); });
  lupa.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") mostrarFoto(foto - 1);
    if (e.key === "ArrowRight") mostrarFoto(foto + 1);
  });

  // cliques: abas e copiar
  app.addEventListener("click", (e) => {
    const aba = e.target.closest(".aba");
    if (aba) { location.hash = `#/${atual.id}/${aba.dataset.aba}`; return; }
    const cp = e.target.closest("[data-copiar]");
    if (cp) {
      const texto = cp.dataset.copiar;
      const feito = () => { cp.innerHTML = `${ic("ok")} Copiado`; setTimeout(() => (cp.innerHTML = `${ic("copiar")} Copiar`), 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(texto).then(feito, () => {});
      else {
        const t = Object.assign(document.createElement("textarea"), { value: texto });
        document.body.append(t); t.select(); document.execCommand("copy"); t.remove(); feito();
      }
    }
  });
  // setas entre as abas, como pede o padrão de abas
  app.addEventListener("keydown", (e) => {
    const aba = e.target.closest(".aba");
    if (!aba || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const todas = [...document.querySelectorAll(".aba")];
    let i = todas.indexOf(aba);
    i = e.key === "Home" ? 0 : e.key === "End" ? todas.length - 1 : (i + (e.key === "ArrowRight" ? 1 : -1) + todas.length) % todas.length;
    location.hash = `#/${atual.id}/${todas[i].dataset.aba}`;
    requestAnimationFrame(() => document.querySelector(".aba[aria-selected=true]")?.focus());
  });

  const topo = document.querySelector(".topo");
  addEventListener("scroll", () => topo.classList.toggle("rolou", scrollY > 8), { passive: true });
  addEventListener("hashchange", rota);
  document.getElementById("ano").textContent = new Date().getFullYear();
  rota();
})();
