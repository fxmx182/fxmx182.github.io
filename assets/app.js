// Site da LibertyX: uma página só, com rotas no endereço (#/pt/player/baixar,
// #/en/player/download). O conteúdo mora em produtos.js; aqui só se desenha.
//
// O idioma vem do endereço; sem ele, da última escolha; sem ela, do navegador
// (português para quem usa português, inglês para o resto).

(() => {
  "use strict";

  const app = document.getElementById("app");
  const PRODUTOS = window.PRODUTOS;
  const LOJA = window.LOJA;
  const GH = "https://github.com/fxmx182";
  const IDIOMAS = ["pt", "en"];

  // ---------- textos da interface ----------

  const U = {
    pt: {
      htmlLang: "pt-BR", locale: "pt-BR", moeda: "US$", moedaTexto: (n) => `US$ ${n}`,
      tituloInicio: "LibertyX — apps sem anúncio, sem conta",
      descricao: "LibertyX Player, Folder e Partition — apps independentes, sem anúncio e sem conta, para Android, TV, Windows e Linux.",
      navApps: "Apps", navComprar: "Como comprar", navLoja: "Loja", idioma: "Idioma",
      abas: { visao: "Visão geral", recursos: "Recursos", specs: "Especificações", baixar: "Baixar", preco: "Preço" },
      slugs: { visao: "visao", recursos: "recursos", specs: "specs", baixar: "baixar", preco: "preco", comprar: "comprar" },
      familia: "Família LibertyX",
      heroiTitulo: "Software que é <em>seu</em>.",
      heroiTexto: "Um player que abre tudo, um gerenciador de arquivos feito para a TV e uma ferramenta que devolve os dados do seu disco. Independentes, bonitos e sem amarras.",
      conhecer: "Conhecer os apps", codigoGithub: "Código no GitHub",
      principios: ["Sem anúncios", "Sem conta", "Sem rastreamento", "Compra única"],
      osApps: "Os apps", appsTitulo: "Feitos com <em>capricho</em>, um por um.",
      appsTexto: "Cada app tem a sua página com recursos, especificações, downloads e as lojas onde ele estiver.",
      disponivel: "Disponível", emBreve: "Em breve", aberto: "Aberto",
      pacoteRotulo: "Pacote completo", pacoteTitulo: "Uma chave. <em>Todos os apps.</em>",
      pacoteTexto: "Player Pro, Folder Pro e Partition Premium numa chave só, ativada em cada app sem internet.",
      pacoteEmVez: (n) => `em vez de US$ ${n} · vitalício`, pacoteComprar: "Comprar o pacote",
      comprarRotulo: "Como comprar", comprarTitulo: "O mesmo app. <em>Três jeitos</em> de pagar.",
      comprarTexto: "Tudo é grátis para começar, e o Pro vem com teste. Muda só por onde você instala — e, com isso, como paga o Pro.",
      canalTg: ["APK + chave pelo Telegram", "Baixe o APK direto daqui e compre o Pro com Bitcoin ou USDT no bot da loja. A chave chega na hora.",
        ["Lightning, on-chain, USDT e USDC", "Funciona sem internet depois de ativada", "Na TV, a chave é colada pelo celular"]],
      abrirLoja: "Abrir a loja",
      canalPlay: ["Google Play", "Para celular e Google TV. O Pro é comprado dentro do app, pela cobrança da Play.",
        ["Cartão, saldo Google e o que a Play aceitar", "7 dias com tudo liberado", "Atualiza sozinho pela loja"]],
      canalAmazon: ["Amazon Appstore", "Para o Fire TV. O Pro é comprado dentro do app, pela conta Amazon.",
        ["Cobrança da Amazon, sem cadastro extra", "7 dias com tudo liberado", "Fire TV Stick, Cube e TVs Fire"]],
      notaCompra: "<b>A compra fica onde foi feita.</b> A Play não enxerga o que foi pago na Amazon, e a chave do Telegram vale no APK baixado daqui e no Partition — as lojas não permitem outro meio de pagamento dentro delas.",
      todosApps: "Todos os apps", baixarGratis: "Baixar grátis", secoesDo: (t) => `Seções do ${t}`, tambem: "Também da LibertyX",
      recursosTitulo: "O que ele faz",
      specsTitulo: "Especificações", specsTexto: "Onde roda, o que abre e como foi feito.",
      baixarTitulo: "Baixar", baixarTexto: "Sempre a versão mais recente, direto do GitHub, assinada com a mesma chave — uma atualiza por cima da outra.",
      recomendado: "Recomendado", lojas: "Lojas",
      chaveTg: ["Aberto · Bitcoin e USDT", "Chave no Telegram"],
      versao: (num, data) => `${num ? `Versão <b>${num}</b> · ` : ""}atualizado em <b>${data}</b>`, historico: "histórico",
      instalarTitulo: "Instalar na TV",
      instalarTexto: "Google TV e Fire TV instalam o APK pelo app <b>Downloader</b>, que está na loja das duas. É feito uma vez; depois o app atualiza por cima.",
      copiar: "Copiar", copiado: "Copiado",
      passos: [
        "Instale o <b>Downloader</b> pela loja da TV.",
        "Libere a instalação: <b>Fire TV</b> — Configurações › Minha Fire TV › Opções do desenvolvedor › Instalar apps desconhecidos. <b>Google TV</b> — Configurações › Sistema › Sobre, clique 7 vezes em “Versão”, depois Apps › Segurança › Apps desconhecidos.",
        "No Downloader, digite o endereço deste quadro e confirme a instalação.",
        "Para o Pro: na tela do Pro escolha <b>Tenho uma chave</b> e cole a chave pelo celular no endereço que a TV mostrar.",
      ],
      nomesPlano: ["Grátis", "Pro"],
      planosTitulo: (a, b) => `${a} e ${b}`,
      planosTexto: (b) => `Sem assinatura: o ${b} é uma compra única e fica para sempre.`,
      paraSempre: "para sempre", tudoDo: (a) => `Tudo do ${a}`, comprarCripto: "Comprar com Bitcoin ou USDT",
      notaPartition: "<b>A chave chega na hora pelo Telegram</b> e é conferida no próprio PC, sem internet. O pagamento com cartão abre em breve.",
      notaApps: "<b>Pelo APK daqui</b>, o Pro se compra com a chave do Telegram. <b>Na Amazon</b> (e na Google Play, quando abrir), o Pro é comprado dentro do app, pela própria loja.",
      notaPacote: (url, preco) => `Quer todos os apps? O <a href="${url}" target="_blank" rel="noopener" style="color:var(--ouro)">pacote completo</a> sai por ${preco}.`,
      ampliar: "Ampliar", fechar: "Fechar", anterior: "Anterior", proxima: "Próxima",
      lojasNome: { play: "Google Play", amazon: "Amazon Appstore", appstore: "App Store", cartao: "Cartão de crédito" },
      rodape: {
        lema: "Apps independentes. Sem anúncio, sem conta, sem rastreamento.",
        apps: "Apps", loja: "Loja", codigo: "Código", comprar: "Como comprar", pacote: "Pacote completo",
        privPlayer: "Privacidade — Player", privFolder: "Privacidade — Folder", feito: "feito à mão por",
      },
    },

    en: {
      htmlLang: "en", locale: "en-US", moeda: "$", moedaTexto: (n) => `$${n}`,
      tituloInicio: "LibertyX — no ads, no account",
      descricao: "LibertyX Player, Folder and Partition — independent apps with no ads and no account, for Android, TV, Windows and Linux.",
      navApps: "Apps", navComprar: "How to buy", navLoja: "Store", idioma: "Language",
      abas: { visao: "Overview", recursos: "Features", specs: "Specs", baixar: "Download", preco: "Pricing" },
      slugs: { visao: "overview", recursos: "features", specs: "specs", baixar: "download", preco: "pricing", comprar: "buy" },
      familia: "The LibertyX family",
      heroiTitulo: "Software that's <em>yours</em>.",
      heroiTexto: "A player that opens everything, a file manager built for TV and a tool that gets your disk's data back. Independent, beautiful and with no strings attached.",
      conhecer: "Meet the apps", codigoGithub: "Source on GitHub",
      principios: ["No ads", "No account", "No tracking", "One-time purchase"],
      osApps: "The apps", appsTitulo: "Crafted with <em>care</em>, one by one.",
      appsTexto: "Every app has its own page with features, specs, downloads and the stores where you can find it.",
      disponivel: "Available", emBreve: "Coming soon", aberto: "Open",
      pacoteRotulo: "Complete bundle", pacoteTitulo: "One key. <em>Every app.</em>",
      pacoteTexto: "Player Pro, Folder Pro and Partition Premium in a single key, activated in each app offline.",
      pacoteEmVez: (n) => `instead of $${n} · lifetime`, pacoteComprar: "Buy the bundle",
      comprarRotulo: "How to buy", comprarTitulo: "Same app. <em>Three ways</em> to pay.",
      comprarTexto: "Everything is free to start, and Pro comes with a trial. The only difference is where you install from — and therefore how you pay for Pro.",
      canalTg: ["APK + key via Telegram", "Download the APK right here and buy Pro with Bitcoin or USDT from the store bot. Your key arrives instantly.",
        ["Lightning, on-chain, USDT and USDC", "Works offline once activated", "On TV, paste the key from your phone"]],
      abrirLoja: "Open the store",
      canalPlay: ["Google Play", "For phones and Google TV. Pro is bought inside the app, through Google Play billing.",
        ["Card, Google balance and anything Play accepts", "7-day free trial", "Updates automatically from the store"]],
      canalAmazon: ["Amazon Appstore", "For Fire TV. Pro is bought inside the app, with your Amazon account.",
        ["Amazon billing, no extra sign-up", "7-day free trial", "Fire TV Stick, Cube and Fire TVs"]],
      notaCompra: "<b>Purchases stay where they were made.</b> Google Play can't see what was paid on Amazon, and the Telegram key works in the APK downloaded here and in Partition — the stores don't allow other payment methods inside them.",
      todosApps: "All apps", baixarGratis: "Download free", secoesDo: (t) => `${t} sections`, tambem: "More from LibertyX",
      recursosTitulo: "What it does",
      specsTitulo: "Specifications", specsTexto: "Where it runs, what it opens and how it's built.",
      baixarTitulo: "Download", baixarTexto: "Always the latest version, straight from GitHub, signed with the same key — each one updates over the last.",
      recomendado: "Recommended", lojas: "Stores",
      chaveTg: ["Open · Bitcoin and USDT", "Key via Telegram"],
      versao: (num, data) => `${num ? `Version <b>${num}</b> · ` : ""}updated <b>${data}</b>`, historico: "history",
      instalarTitulo: "Install on your TV",
      instalarTexto: "Google TV and Fire TV install the APK through the <b>Downloader</b> app, available in both stores. You do it once; after that the app updates over itself.",
      copiar: "Copy", copiado: "Copied",
      passos: [
        "Install <b>Downloader</b> from your TV's store.",
        "Allow installs: <b>Fire TV</b> — Settings › My Fire TV › Developer options › Install unknown apps. <b>Google TV</b> — Settings › System › About, click “Version” 7 times, then Apps › Security › Unknown sources.",
        "In Downloader, type the address in this box and confirm the install.",
        "For Pro: on the Pro screen choose <b>I have a key</b> and paste it from your phone at the address the TV shows.",
      ],
      nomesPlano: ["Free", "Pro"],
      planosTitulo: (a, b) => `${a} and ${b}`,
      planosTexto: (b) => `No subscription: ${b} is a one-time purchase that's yours forever.`,
      paraSempre: "forever", tudoDo: (a) => `Everything in ${a}`, comprarCripto: "Buy with Bitcoin or USDT",
      notaPartition: "<b>Your key arrives instantly via Telegram</b> and is checked on your own PC, offline. Card payments are coming soon.",
      notaApps: "<b>With the APK from here</b>, Pro is bought with a Telegram key. <b>On Amazon</b> (and on Google Play, once it opens), Pro is bought inside the app, through the store itself.",
      notaPacote: (url, preco) => `Want every app? The <a href="${url}" target="_blank" rel="noopener" style="color:var(--ouro)">complete bundle</a> is ${preco}.`,
      ampliar: "Enlarge", fechar: "Close", anterior: "Previous", proxima: "Next",
      lojasNome: { play: "Google Play", amazon: "Amazon Appstore", appstore: "App Store", cartao: "Credit card" },
      rodape: {
        lema: "Independent apps. No ads, no account, no tracking.",
        apps: "Apps", loja: "Store", codigo: "Source", comprar: "How to buy", pacote: "Complete bundle",
        privPlayer: "Privacy — Player", privFolder: "Privacy — Folder", feito: "handmade by",
      },
    },
  };

  const ABAS = ["visao", "recursos", "specs", "baixar", "preco"];
  const LOJA_ICONE = { play: "play", amazon: "amazon", appstore: "apple", cartao: "cartao" };

  // ---------- idioma ----------

  const salvo = (() => { try { return localStorage.getItem("lx-lang"); } catch (_) { return null; } })();
  let lang = IDIOMAS.includes(salvo) ? salvo : (navigator.language || "").toLowerCase().startsWith("pt") ? "pt" : "en";
  let L = U[lang];

  // texto que muda de idioma é { pt, en }; o resto passa direto
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) && ("pt" in v || "en" in v) ? v[lang] ?? v.pt : v);
  const link = (caminho = "") => `#/${lang}${caminho ? "/" + caminho : "/"}`;
  const linkAba = (id, aba) => link(`${id}/${L.slugs[aba]}`);
  // aceita a aba escrita em qualquer idioma (um link em português aberto em inglês ainda funciona)
  const abaDoSlug = (s) => ABAS.find((k) => IDIOMAS.some((i) => U[i].slugs[k] === s));

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ic = (nome, cls = "i") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${nome}"/></svg>`;
  const externo = 'target="_blank" rel="noopener"';
  // ?estatico: tudo visível de uma vez, sem animação de entrada (para capturas de tela)
  const ESTATICO = /[?&]estatico\b/.test(location.search);
  if (ESTATICO) document.documentElement.classList.add("estatico");
  const lazy = ESTATICO ? "" : ' loading="lazy"';

  // cada download sai do release do seu grupo: o Linux do Partition mora na etiqueta "linux-latest",
  // o do Player num repositório próprio (o grupo diz `repo` e/ou `tag`; sem eles, os do produto)
  const grupoDe = (p, d) => p.grupos?.find((g) => g.id === d.grupo);
  const tagDe = (p, d) => grupoDe(p, d)?.tag || p.tag;
  const repoDe = (p, d) => grupoDe(p, d)?.repo || p.repo;
  const urlArquivo = (p, arquivo, tag = p.tag, repo = p.repo) =>
    tag === "latest-release"
      ? `${GH}/${repo}/releases/latest/download/${arquivo}`
      : `${GH}/${repo}/releases/download/${tag}/${arquivo}`;

  // ---------- dados ao vivo do GitHub (versão, data e tamanho) ----------

  const cacheRelease = new Map();
  function release(repo, tag) {
    const id = `${repo}@${tag}`;
    if (cacheRelease.has(id)) return cacheRelease.get(id);
    const chave = `lx-rel-${id}`;
    try {
      const s = JSON.parse(sessionStorage.getItem(chave) || "null");
      if (s && Date.now() - s.t < 30 * 60 * 1000) {
        const pr = Promise.resolve(s.d);
        cacheRelease.set(id, pr);
        return pr;
      }
    } catch (_) { /* sem armazenamento: busca de novo */ }
    const api = tag === "latest-release"
      ? `https://api.github.com/repos/fxmx182/${repo}/releases/latest`
      : `https://api.github.com/repos/fxmx182/${repo}/releases/tags/${tag}`;
    const pr = fetch(api, { headers: { Accept: "application/vnd.github+json" } })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (!j) return null;
        const d = {
          tag: j.tag_name,
          // etiqueta fixa ("latest", "linux-latest"): o número vem do texto do release ("Versão 1.0.4 …")
          versao: (j.tag_name.match(/^v?(\d+\.\d+(?:\.\d+)?)/) || (j.body || "").match(/Vers[ãa]o (\d+\.\d+(?:\.\d+)?)/) || [])[1],
          data: j.published_at,
          assets: Object.fromEntries((j.assets || []).map((a) => [a.name, a.size])),
        };
        try { sessionStorage.setItem(chave, JSON.stringify({ t: Date.now(), d })); } catch (_) {}
        return d;
      })
      .catch(() => null);
    cacheRelease.set(id, pr);
    return pr;
  }

  const tamanho = (b) => {
    const mb = b / 1048576;
    return (mb < 10 ? mb.toFixed(1) : String(Math.round(mb))).replace(".", lang === "pt" ? "," : ".") + " MB";
  };
  const tamanhoFixo = (s) => (lang === "pt" ? s : s.replace(",", "."));
  const dataBonita = (iso) =>
    new Date(iso).toLocaleDateString(L.locale, { day: "numeric", month: "short", year: "numeric" }).replace(".", "");

  function aplicarRelease(p) {
    const origens = [...new Set(p.downloads.map((d) => `${repoDe(p, d)}@${tagDe(p, d)}`))];
    origens.forEach((o) => {
      const [repo, tag] = o.split("@");
      release(repo, tag).then((d) => {
        if (!d) return;
        document.querySelectorAll("[data-arquivo]").forEach((el) => {
          const n = d.assets[el.dataset.arquivo];
          if (n) el.textContent = tamanho(n);
        });
        document.querySelectorAll(`[data-versao="${p.id}"][data-tag="${tag}"][data-repo="${repo}"]`).forEach((v) => {
          v.innerHTML = `${ic("ok")} ${L.versao(d.versao && esc(d.versao), esc(dataBonita(d.data)))} · <a href="${GH}/${repo}/releases" ${externo}>${L.historico}</a>`;
          v.hidden = false;
        });
      });
    });
  }

  // ---------- partes fixas da página (topo, rodapé, lupa) ----------

  function traduzirMoldura() {
    document.documentElement.lang = L.htmlLang;
    document.querySelector('meta[name="description"]').content = L.descricao;
    document.querySelectorAll("[data-t]").forEach((el) => {
      const [grupo, chave] = el.dataset.t.split(".");
      el.textContent = chave ? L[grupo][chave] : L[grupo];
    });
    document.querySelectorAll("[data-link]").forEach((el) => {
      const [id, aba] = el.dataset.link.split("/");
      el.href = id === "comprar" ? link(L.slugs.comprar) : aba ? linkAba(id, aba) : link(id);
    });
    document.querySelectorAll("[data-pacote]").forEach((el) => (el.href = LOJA.pacote.url));
    document.querySelectorAll(".idioma button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    document.querySelector(".idioma").setAttribute("aria-label", L.idioma);
    const lp = document.getElementById("lupa");
    lp.querySelector(".lupa-fechar").setAttribute("aria-label", L.fechar);
    lp.querySelector(".lupa-ant").setAttribute("aria-label", L.anterior);
    lp.querySelector(".lupa-prox").setAttribute("aria-label", L.proxima);
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
    <a class="cartao surge" href="${link(p.id)}">
      <div class="cartao-topo">
        <img class="cartao-icone" src="${p.icone}" alt="" width="68" height="68">
        <span class="selo selo-ok">${L.disponivel}</span>
      </div>
      <div class="cartao-corpo">
        <span class="rotulo">${esc(p.plataformas.join(" · "))}</span>
        <h3><span>LibertyX</span> ${esc(p.nome)}</h3>
        <p>${esc(t(p.resumo))}</p>
      </div>
      <div class="cartao-tela"><img src="${t(p.capa || p.destaque)}" alt=""></div>
      <span class="cartao-ir">${ic("seta")}</span>
    </a>`;

  const recursosGrade = (itens) => `
    <div class="recursos">
      ${itens.map(([i, ti, d]) => `
        <article class="recurso vidro surge">
          <span class="canal-icone">${ic(i)}</span>
          <h3>${esc(ti)}</h3>
          <p>${esc(d)}</p>
        </article>`).join("")}
    </div>`;

  const arquivo = (p, d) => `
    <a class="arquivo vidro${d.principal ? " principal" : ""}" href="${urlArquivo(p, d.arquivo, tagDe(p, d), repoDe(p, d))}">
      <span class="canal-icone">${ic(d.icone)}</span>
      <div>
        <h3>${esc(t(d.nome))}${d.principal ? `<span class="principal-selo">${L.recomendado}</span>` : ""}</h3>
        <p>${esc(t(d.detalhe))}</p>
        <code>${esc(d.arquivo)}</code>
      </div>
      <span class="arquivo-baixar">${ic("download")} <span data-arquivo="${esc(d.arquivo)}">${esc(tamanhoFixo(d.tamanho))}</span></span>
    </a>`;

  const linhaVersao = (p, tag, repo = p.repo) => `<p class="versao" data-versao="${p.id}" data-tag="${tag}" data-repo="${repo}" hidden></p>`;

  // sem `grupos`, uma grade só; com eles, um bloco por grupo, cada um com a versão do seu release
  const downloads = (p) =>
    p.grupos
      ? p.grupos.map((g) => `
          <section class="grupo" id="baixar-${g.id}">
            <h3 class="grupo-titulo">${ic(g.icone)} ${esc(t(g.titulo))}</h3>
            ${g.texto ? `<p class="grupo-texto">${esc(t(g.texto))}</p>` : ""}
            <div class="baixar-grade">${p.downloads.filter((d) => d.grupo === g.id).map((d) => arquivo(p, d)).join("")}</div>
            ${g.id === p.grupos.findLast((o) => (o.tag || p.tag) === (g.tag || p.tag) && (o.repo || p.repo) === (g.repo || p.repo)).id ? linhaVersao(p, g.tag || p.tag, g.repo || p.repo) : ""}
          </section>`).join("")
      : `<div class="baixar-grade">${p.downloads.map((d) => arquivo(p, d)).join("")}</div>
         ${linhaVersao(p, p.tag)}`;

  const canal = (icone, [titulo, texto, itens], aberto, extra = "") => `
    <article class="canal vidro surge${aberto ? " canal-destaque" : ""}">
      <div class="canal-cabeca"><span class="canal-icone">${ic(icone)}</span>
        <span class="selo ${aberto ? "selo-ok" : "selo-breve"}">${aberto ? L.aberto : L.emBreve}</span></div>
      <h3>${titulo}</h3>
      <p>${texto}</p>
      <ul>${itens.map((x) => `<li>${ic("ok")}${x}</li>`).join("")}</ul>
      ${extra}
    </article>`;

  const canais = () => `
    <section class="secao" id="comprar" style="margin-top:110px">
      <span class="rotulo rotulo-ouro">${ic("chave")} ${L.comprarRotulo}</span>
      <h2 class="titulo-secao">${L.comprarTitulo}</h2>
      <p class="lead">${L.comprarTexto}</p>
      <div class="canais">
        ${canal("telegram", L.canalTg, true, `<a class="botao botao-ouro" href="${LOJA.bot}" ${externo}>${ic("telegram")} ${L.abrirLoja}</a>`)}
        ${canal("play", L.canalPlay, false)}
        ${canal("amazon", L.canalAmazon, false)}
      </div>
      <div class="nota">${ic("estrela")}<span>${L.notaCompra}</span></div>
    </section>`;

  const pacote = () => `
    <section class="secao">
      <div class="pacote surge">
        <svg class="pacote-x" viewBox="-260 -260 520 520" aria-hidden="true"><use href="#lx-x" x="-260" y="-260" width="520" height="520"/></svg>
        <div>
          <span class="rotulo rotulo-ouro">${ic("estrela")} ${L.pacoteRotulo}</span>
          <h2 class="titulo-secao">${L.pacoteTitulo}</h2>
          <p class="lead">${L.pacoteTexto}</p>
          <div class="pacote-icones">${PRODUTOS.map((p) => `<img src="${p.icone}" alt="${esc(p.titulo)}" width="52" height="52">`).join("")}</div>
        </div>
        <div class="pacote-preco">
          <div class="preco-grande"><small>${L.moeda}</small>${LOJA.pacote.preco}</div>
          <p>${L.pacoteEmVez(LOJA.pacote.soma)}</p>
          <a class="botao botao-ouro" href="${LOJA.pacote.url}" ${externo}>${ic("telegram")} ${L.pacoteComprar}</a>
        </div>
      </div>
    </section>`;

  // ---------- telas ----------

  function telaInicio() {
    document.title = L.tituloInicio;
    app.innerHTML = `
      <section class="heroi">
        <div>
          <span class="rotulo rotulo-ouro">${ic("estrela")} ${L.familia}</span>
          <h1>${L.heroiTitulo}</h1>
          <p class="lead">${L.heroiTexto}</p>
          <div class="heroi-acoes">
            <a class="botao botao-ouro" href="#apps" data-ancora="apps">${L.conhecer} ${ic("seta")}</a>
            <a class="botao" href="${GH}" ${externo}>${ic("github")} ${L.codigoGithub}</a>
          </div>
          <ul class="principios">${L.principios.map((x) => `<li>${ic("ok")}${x}</li>`).join("")}</ul>
        </div>
        ${orbita()}
      </section>

      <section class="secao" id="apps">
        <span class="rotulo">${L.osApps}</span>
        <h2 class="titulo-secao">${L.appsTitulo}</h2>
        <p class="lead">${L.appsTexto}</p>
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
          <h2>${L.recursosTitulo}</h2>
          <p class="lead">${esc(t(p.slogan))}</p>
          ${recursosGrade(t(p.recursos))}
          ${p.recursosExtra ? `
          <h2 class="recursos-extra">${esc(t(p.recursosExtra.titulo))}</h2>
          <p class="lead">${esc(t(p.recursosExtra.texto))}</p>
          ${recursosGrade(t(p.recursosExtra.itens))}` : ""}`;

      case "specs":
        return `
          <h2>${L.specsTitulo}</h2>
          <p class="lead">${L.specsTexto}</p>
          <div class="vidro specs-caixa">
            <table class="specs"><tbody>
              ${t(p.specs).map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${v}</td></tr>`).join("")}
            </tbody></table>
          </div>`;

      case "baixar": {
        const tv = p.downloads.find((d) => d.icone === "tv");
        return `
          <h2>${L.baixarTitulo}</h2>
          <p class="lead">${L.baixarTexto}</p>
          ${downloads(p)}

          ${p.guiaBaixar ? `
          <section class="instalar vidro">
            <div>
              <h3>${esc(t(p.guiaBaixar.titulo))}</h3>
              <p class="lead" style="font-size:15.5px">${t(p.guiaBaixar.texto)}</p>
              ${p.guiaBaixar.comando ? `
              <div class="endereco">
                <code>${esc(p.guiaBaixar.comando)}</code>
                <button class="copiar" data-copiar="${esc(p.guiaBaixar.comando)}">${ic("copiar")} ${L.copiar}</button>
              </div>` : ""}
            </div>
            <ol>${t(p.guiaBaixar.passos).map((x) => `<li><span>${x}</span></li>`).join("")}</ol>
          </section>` : ""}

          <h3 class="subtitulo">${L.lojas}</h3>
          <div class="lojas">
            ${p.lojas.map((l) => {
              const nome = L.lojasNome[l.loja];
              const nota = l.nota ? ` · ${esc(t(l.nota))}` : "";
              return l.url
                ? `<a class="loja" href="${esc(l.url)}" ${externo}>${ic(LOJA_ICONE[l.loja])}<div><small>${L.disponivel}${nota}</small><strong>${nome}</strong></div>${ic("seta")}</a>`
                : `<div class="loja breve">${ic(LOJA_ICONE[l.loja])}<div><small>${L.emBreve}${nota}</small><strong>${nome}</strong></div></div>`;
            }).join("")}
            <a class="loja" href="${p.telegram}" ${externo}>${ic("telegram")}<div><small>${L.chaveTg[0]}</small><strong>${L.chaveTg[1]}</strong></div>${ic("seta")}</a>
          </div>

          ${tv && p.instalarTv ? `
          <section class="instalar vidro">
            <div>
              <h3>${L.instalarTitulo}</h3>
              <p class="lead" style="font-size:15.5px">${L.instalarTexto}</p>
              <div class="endereco">
                <code>${urlArquivo(p, tv.arquivo)}</code>
                <button class="copiar" data-copiar="${urlArquivo(p, tv.arquivo)}">${ic("copiar")} ${L.copiar}</button>
              </div>
            </div>
            <ol>${L.passos.map((x) => `<li><span>${x}</span></li>`).join("")}</ol>
          </section>` : ""}`;
      }

      case "preco": {
        const g = p.gratisPro;
        const [nomeGratis, nomePro] = t(g.nomes) || L.nomesPlano;
        return `
          <h2>${esc(L.planosTitulo(nomeGratis, nomePro))}</h2>
          <p class="lead">${esc(L.planosTexto(nomePro))}</p>
          <div class="planos">
            <article class="plano vidro">
              <h3>${esc(nomeGratis)}</h3>
              <div class="preco-grande"><small>${L.moeda}</small>0</div>
              <p class="preco-nota">${L.paraSempre}</p>
              <ul>${t(g.gratis).map((x) => `<li>${ic("ok")}${esc(x)}</li>`).join("")}</ul>
              <a class="botao" href="${linkAba(p.id, "baixar")}">${ic("download")} ${L.baixarGratis}</a>
            </article>
            <article class="plano vidro plano-pro">
              <span class="selo selo-ok teste">${esc(t(g.teste))}</span>
              <h3>${esc(nomePro)}</h3>
              <div class="preco-grande"><small>${L.moeda}</small>${g.preco}</div>
              <p class="preco-nota">${esc(t(g.precoNota))}</p>
              <ul>${[L.tudoDo(nomeGratis), ...t(g.pro)].map((x) => `<li>${ic("ok")}${esc(x)}</li>`).join("")}</ul>
              <a class="botao botao-ouro" href="${p.telegram}" ${externo}>${ic("telegram")} ${L.comprarCripto}</a>
            </article>
          </div>
          <div class="nota">${ic("chave")}<span>${p.id === "partition" ? L.notaPartition : L.notaApps}
            ${L.notaPacote(LOJA.pacote.url, L.moedaTexto(LOJA.pacote.preco))}</span></div>`;
      }

      default:
        return `
          <div class="sobre">${t(p.sobre).map((x) => `<p>${esc(x)}</p>`).join("")}</div>
          <div class="galeria">
            ${p.galeria.map(([src, leg], i) => `
              <figure>
                <button data-lupa="${i}" aria-label="${L.ampliar}: ${esc(t(leg))}"><img src="${t(src)}" alt="${esc(t(leg))}"${lazy}></button>
                <figcaption>${esc(t(leg))}</figcaption>
              </figure>`).join("")}
          </div>`;
    }
  }

  let atual = { id: null, aba: null, lang: null };

  function telaProduto(p, aba) {
    const mesmo = atual.id === p.id && atual.lang === lang;
    document.title = `${p.titulo} — LibertyX`;
    const nomePro = (t(p.gratisPro.nomes) || L.nomesPlano)[1];

    if (!mesmo) {
      const voltaPara = atual.id === p.id ? scrollY : 0;
      app.innerHTML = `
        <section class="prod-heroi">
          <div>
            <a class="voltar" href="${link()}">${ic("voltar")} ${L.todosApps}</a>
            <div class="prod-id">
              <img src="${p.icone}" alt="" width="84" height="84">
              <h1><span>LibertyX</span>${esc(p.nome)}</h1>
            </div>
            <p class="prod-slogan">${esc(t(p.slogan))}</p>
            <p class="lead">${esc(t(p.resumo))}</p>
            <ul class="chips">${p.plataformas.map((x) => `<li class="chip">${esc(x)}</li>`).join("")}</ul>
            <div class="prod-acoes">
              <a class="botao botao-ouro" href="${linkAba(p.id, "baixar")}">${ic("download")} ${L.baixarGratis}</a>
              <a class="botao" href="${linkAba(p.id, "preco")}">${ic("chave")} ${esc(nomePro)} · ${L.moedaTexto(p.gratisPro.preco)}</a>
            </div>
          </div>
          <div class="prod-tela"><img src="${t(p.destaque)}" alt="${esc(p.titulo)}"></div>
        </section>
        <div class="abas-faixa">
          <div class="abas" role="tablist" aria-label="${esc(L.secoesDo(p.titulo))}">
            ${ABAS.map((k) => `<button class="aba" role="tab" id="aba-${k}" aria-controls="painel" data-aba="${k}">${L.abas[k]}</button>`).join("")}
          </div>
        </div>
        <section class="painel" id="painel" role="tabpanel" tabindex="-1"></section>
        <section class="outros">
          <span class="rotulo">${L.tambem}</span>
          <div class="outros-grade">
            ${PRODUTOS.filter((o) => o.id !== p.id).map((o) => `
              <a class="outro vidro" href="${link(o.id)}">
                <img src="${o.icone}" alt="" width="54" height="54">
                <div><strong>${esc(o.titulo)}</strong><span>${esc(o.plataformas.join(" · "))}</span></div>
                ${ic("seta")}
              </a>`).join("")}
          </div>
        </section>`;
      // trocar de idioma não tira a pessoa do lugar; abrir outro app volta ao topo
      window.scrollTo({ top: voltaPara, behavior: "instant" });
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
    atual = { id: p.id, aba, lang };
  }

  // ---------- rotas ----------

  function lerEndereco() {
    const partes = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    const idioma = IDIOMAS.includes(partes[0]) ? partes.shift() : null;
    return { idioma, partes };
  }

  function rota() {
    const { idioma, partes } = lerEndereco();
    if (idioma && idioma !== lang) definirIdioma(idioma);
    const p = PRODUTOS.find((x) => x.id === partes[0]);
    if (p) {
      telaProduto(p, abaDoSlug(partes[1]) || "visao");
    } else {
      const ancora = IDIOMAS.some((i) => U[i].slugs.comprar === partes[0]) ? "comprar" : null;
      const jaNoInicio = atual.id === "inicio";
      const redesenhar = !(jaNoInicio && atual.lang === lang);
      const y = scrollY;
      if (redesenhar) telaInicio();
      atual = { id: "inicio", aba: null, lang };
      if (ancora) requestAnimationFrame(() => document.getElementById(ancora)?.scrollIntoView({ behavior: "smooth" }));
      else if (!jaNoInicio) window.scrollTo({ top: 0, behavior: "instant" });
      else if (redesenhar) window.scrollTo({ top: y, behavior: "instant" }); // só trocou o idioma
    }
    document.querySelectorAll("[data-nav]").forEach((a) =>
      a.classList.toggle("ativo", !p && (a.dataset.nav === "comprar") === (partes[0] === L.slugs.comprar))
    );
    revelar();
  }

  function definirIdioma(novo) {
    lang = novo;
    L = U[lang];
    try { localStorage.setItem("lx-lang", lang); } catch (_) {}
    traduzirMoldura();
  }

  // o seletor no topo: mesmo lugar do site, no outro idioma
  document.querySelector(".idioma").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-lang]");
    if (!b || b.dataset.lang === lang) return;
    const { partes } = lerEndereco();
    definirIdioma(b.dataset.lang);
    const p = PRODUTOS.find((x) => x.id === partes[0]);
    let caminho = "";
    if (p) caminho = `${p.id}/${L.slugs[abaDoSlug(partes[1]) || atual.aba || "visao"]}`;
    else if (IDIOMAS.some((i) => U[i].slugs.comprar === partes[0])) caminho = L.slugs.comprar;
    history.replaceState(null, "", link(caminho));
    rota();
  });

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
    lupa.querySelector("img").src = t(src);
    lupa.querySelector("img").alt = t(leg);
    lupa.querySelector("figcaption").textContent = t(leg);
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

  // cliques: abas, âncoras da página inicial e copiar
  app.addEventListener("click", (e) => {
    const aba = e.target.closest(".aba");
    if (aba) { location.hash = linkAba(atual.id, aba.dataset.aba); return; }
    const anc = e.target.closest("[data-ancora]");
    if (anc) { e.preventDefault(); document.getElementById(anc.dataset.ancora)?.scrollIntoView({ behavior: "smooth" }); return; }
    const cp = e.target.closest("[data-copiar]");
    if (cp) {
      const texto = cp.dataset.copiar;
      const feito = () => { cp.innerHTML = `${ic("ok")} ${L.copiado}`; setTimeout(() => (cp.innerHTML = `${ic("copiar")} ${L.copiar}`), 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(texto).then(feito, () => {});
      else {
        const x = Object.assign(document.createElement("textarea"), { value: texto });
        document.body.append(x); x.select(); document.execCommand("copy"); x.remove(); feito();
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
    location.hash = linkAba(atual.id, todas[i].dataset.aba);
    requestAnimationFrame(() => document.querySelector(".aba[aria-selected=true]")?.focus());
  });

  const topo = document.querySelector(".topo");
  addEventListener("scroll", () => topo.classList.toggle("rolou", scrollY > 8), { passive: true });
  addEventListener("hashchange", rota);
  document.getElementById("ano").textContent = new Date().getFullYear();

  // endereço sem idioma (links antigos, #/player) ganha o idioma sem criar histórico
  const { idioma } = lerEndereco();
  if (idioma) definirIdioma(idioma);
  else {
    traduzirMoldura();
    const resto = location.hash.replace(/^#\/?/, "");
    if (resto && !resto.startsWith("apps")) history.replaceState(null, "", link(resto));
  }
  rota();
})();
