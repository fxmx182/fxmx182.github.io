// Catálogo do site. É o único arquivo a mexer quando algo for lançado:
//
//   - loja lançada → troque `url: null` pela página da loja (Google Play, Amazon…);
//     o selo "Em breve" vira o botão na hora.
//   - plataforma nova → acrescente um item em `downloads`.
//
// Tamanho e versão dos downloads vêm ao vivo da API do GitHub (`repo` + `tag`);
// os valores daqui são só o que aparece se a API não responder.

const BOT = "https://t.me/libertx_partition_bot";
const GH = "https://github.com/fxmx182";

window.LOJA = {
  bot: BOT,
  pacote: { preco: "US$ 35", url: `${BOT}?start=pacote` },
};

window.PRODUTOS = [
  {
    id: "player",
    nome: "Player",
    titulo: "LibertyX Player",
    icone: "img/icone-player.png",
    cor: "#FBC501",
    slogan: "Sua mídia. Sua liberdade.",
    resumo:
      "Player de vídeo no espírito do MX Player: abre qualquer formato, rola quadro a quadro e toca direto do servidor de casa — sem anúncio, sem conta.",
    plataformas: ["Android", "Google TV", "Fire TV", "PC"],
    estado: "disponivel",
    destaque: "img/player-celular-player.webp",
    repo: "libertyx-player-android",
    tag: "latest-release", // o release mais recente marcado como "latest"
    sobre: [
      "O LibertyX Player nasceu porque nenhum player juntava as duas coisas que importam: abrir tudo (MKV, HEVC, AC-3, DTS, legenda ASS) e rolar o vídeo liso, vendo cada quadro debaixo do dedo.",
      "O servidor de casa vem em primeiro plano. Ele acha sozinho os computadores e NAS da rede e toca o arquivo sem baixar antes. Na TV, a primeira faixa da tela inicial é o servidor, porque é lá que o acervo mora.",
      "O mesmo app vira o app de televisão: na Google TV e no Fire TV ele troca a grade por faixas horizontais, ganha um realce de foco legível a três metros e passa a obedecer ao controle remoto.",
    ],
    galeria: [
      ["img/player-tv-inicio.webp", "TV — tela inicial com o servidor na primeira faixa"],
      ["img/player-celular-player.webp", "Reprodução no celular"],
      ["img/player-tv-biblioteca.webp", "TV — biblioteca"],
      ["img/player-celular-ferramentas.webp", "Ferramentas do player"],
      ["img/player-tablet-player.webp", "Tablet"],
      ["img/player-tv-player.webp", "TV — reprodução"],
    ],
    recursos: [
      ["scrub", "Rolagem quadro a quadro", "Arraste e veja o quadro exato, sem pular para o keyframe mais próximo."],
      ["rede", "SMB direto", "Acha o servidor sozinho (mDNS + varredura) e toca sem baixar."],
      ["formatos", "Abre tudo", "libVLC completo: MKV, HEVC, AC-3/DTS, ASS e PGS, decodificação por hardware."],
      ["tv", "App de TV de verdade", "Faixas horizontais, foco legível de longe, teclas de mídia do controle."],
      ["gestos", "Gestos do MX Player", "Brilho, volume, ±10 s, 2× segurando, pinça até 6× — com guia interativo."],
      ["carro", "Android Auto e tela apagada", "Áudio no carro e em segundo plano, com controles na tela de bloqueio."],
      ["pip", "Janela flutuante", "Continue vendo por cima de qualquer app."],
      ["retomar", "Continuar de onde parou", "Em todos os arquivos, locais e da rede."],
      ["idiomas", "Três idiomas", "Português, inglês e espanhol, seguindo o aparelho."],
    ],
    gratisPro: {
      gratis: ["Player completo, todos os formatos", "Biblioteca do aparelho e pendrive", "Rolagem quadro a quadro e gestos", "Retomar de onde parou", "Sem anúncios, sem conta"],
      pro: ["Pastas da rede (SMB)", "Segundo plano + Android Auto", "Janela flutuante", "Timer para dormir", "Captura de quadro"],
      teste: "7 dias com tudo liberado",
      preco: "US$ 5",
      precoNota: "compra única, vitalícia",
    },
    specs: [
      ["Plataformas", "Android 7.0+ (celular e tablet), Google TV, Android TV, Fire TV, Nvidia Shield, PC com emulador ou Waydroid"],
      ["Arquiteturas", "arm64-v8a, armeabi-v7a (o APK da TV leva as duas), x86_64"],
      ["Motor", "libVLC — decodificação por hardware, com software como reserva"],
      ["Vídeo", "MKV, MP4, AVI, TS, MOV, WebM, HEVC/H.265, H.264, VP9, AV1"],
      ["Áudio", "AC-3, E-AC-3, DTS, AAC, FLAC, Opus, MP3"],
      ["Legendas", "SRT, ASS/SSA, PGS, embutidas ou ao lado do arquivo"],
      ["Rede", "SMB 2/3 com usuário e senha ou convidado; descoberta por mDNS e porta 445"],
      ["Idiomas", "Português, English, Español"],
      ["Privacidade", "Sem anúncios, sem conta, sem rastreamento"],
      ["Código", `<a href="${GH}/libertyx-player-android">github.com/fxmx182/libertyx-player-android</a>`],
    ],
    downloads: [
      { nome: "Televisão", detalhe: "Google TV · Fire TV · Shield", arquivo: "LibertyXPlayer-TV.apk", tamanho: "109 MB", icone: "tv", principal: true },
      { nome: "Celular e tablet", detalhe: "Android de 2015 para cá", arquivo: "LibertyXPlayer-Celular.apk", tamanho: "70 MB", icone: "celular" },
      { nome: "Celular antigo", detalhe: "Aparelhos de 32 bits", arquivo: "LibertyXPlayer-Celular-Antigo.apk", tamanho: "56 MB", icone: "celular" },
      { nome: "PC e Chromebook", detalhe: "Waydroid · BlueStacks · emulador", arquivo: "LibertyXPlayer-PC-x86_64.apk", tamanho: "78 MB", icone: "pc" },
    ],
    lojas: [
      { loja: "play", url: null },
      { loja: "amazon", url: null, nota: "Fire TV" },
      { loja: "appstore", url: null, nota: "iPhone" },
    ],
    telegram: `${BOT}?start=player`,
    instalarTv: true,
  },

  {
    id: "folder",
    nome: "Folder",
    titulo: "LibertyX Folder",
    icone: "img/icone-folder.png",
    cor: "#FBC501",
    slogan: "Seus arquivos, na TV e na rede.",
    resumo:
      "Gerenciador de arquivos no estilo do Meus Arquivos, feito para a TV: categorias, cópia com progresso e os computadores da casa a um clique — vídeo e foto abrem direto do servidor.",
    plataformas: ["Google TV", "Fire TV"],
    estado: "disponivel",
    destaque: "img/folder-tv-inicio.webp",
    capa: "img/folder-tv-rede.webp",
    repo: "libertyx-folder-android",
    tag: "latest-release",
    sobre: [
      "Na TV, mexer em arquivo costuma ser um castigo. O LibertyX Folder foi desenhado para o controle remoto: realce de foco forte, setas que andam entre os campos, um painel de progresso que some sozinho quando termina e um guia de dez páginas na primeira abertura.",
      "A rede é de primeira classe. Ele acha os computadores e NAS da casa sozinho, lista os compartilhamentos e abre vídeo, foto e música em outros apps sem baixar antes — com busca para frente e para trás.",
      "Os arquivos da TV são grátis para sempre. A rede vem liberada por 7 dias e depois é Pro, uma compra única.",
    ],
    galeria: [
      ["img/folder-tv-inicio.webp", "Tela inicial"],
      ["img/folder-tv-rede.webp", "Computadores da rede"],
      ["img/folder-tv-pasta.webp", "Dentro de uma pasta"],
      ["img/folder-tv-selecao.webp", "Seleção e ações"],
      ["img/folder-tv-guia-rede.webp", "Guia — rede"],
      ["img/folder-tv-guia-selecao.webp", "Guia — seleção"],
    ],
    recursos: [
      ["controle", "Feito para o controle", "Foco forte, D-pad em tudo, toque longo no centro seleciona."],
      ["rede", "Rede automática", "mDNS, varredura da porta 445 e nome NetBIOS — o PC aparece sozinho."],
      ["stream", "Abrir sem baixar", "Vídeo do servidor abre no seu player com busca, sem cópia antes."],
      ["copiar", "Copiar e mover", "Entre a TV, o pendrive e a rede, com progresso e cancelamento."],
      ["categorias", "Categorias", "Imagens, vídeos, áudio, documentos, downloads, APKs e compactados."],
      ["busca", "Busca", "No aparelho, na pasta e nas subpastas — e na rede."],
      ["guia", "Guia animado", "Dez páginas com cenas do próprio app na primeira abertura."],
      ["seguro", "Nunca sobrescreve", "Arquivo repetido vira “nome (1).ext”."],
      ["idiomas", "Três idiomas", "Português, inglês e espanhol."],
    ],
    gratisPro: {
      gratis: ["Todos os arquivos da TV e do pendrive", "Copiar, mover, renomear, excluir", "Categorias e busca no aparelho", "Instalar APKs", "Para sempre"],
      pro: ["Servidores de rede (SMB)", "Busca automática na rede", "Abrir e copiar da rede", "Assistir sem baixar"],
      teste: "7 dias com a rede liberada",
      preco: "US$ 5",
      precoNota: "compra única, vitalícia",
    },
    specs: [
      ["Plataformas", "Google TV, Android TV 8.0+, Fire TV Stick, Fire TV Cube"],
      ["Arquiteturas", "Todas — sem biblioteca nativa (ARM 32/64 e x86)"],
      ["Tamanho", "≈ 4 MB"],
      ["Rede", "SMB 2/3 (smbj + dcerpc), usuário e senha ou convidado"],
      ["Descoberta", "mDNS, varredura da porta 445, nome NetBIOS"],
      ["Streaming", "Arquivos da rede abertos em outros apps sem baixar (com seek)"],
      ["Idiomas", "Português, English, Español"],
      ["Privacidade", "Sem anúncios, sem conta, sem rastreamento"],
      ["Código", `<a href="${GH}/libertyx-folder-android">github.com/fxmx182/libertyx-folder-android</a>`],
    ],
    downloads: [
      { nome: "Google TV e Fire TV", detalhe: "Um APK para todas as TVs", arquivo: "LibertyXFolder-TV.apk", tamanho: "3,6 MB", icone: "tv", principal: true },
    ],
    lojas: [
      { loja: "play", url: null, nota: "celular e TV" },
      { loja: "amazon", url: null, nota: "Fire TV" },
    ],
    telegram: `${BOT}?start=folder`,
    instalarTv: true,
  },

  {
    id: "partition",
    nome: "Partition",
    titulo: "LibertyX Partition",
    icone: "img/icone-partition.png",
    cor: "#FBC501",
    slogan: "Seus discos. Seus dados de volta.",
    resumo:
      "Ferramenta de discos para Windows com foco em recuperação: devolve arquivos apagados com nome e pasta, acha partições perdidas, migra o sistema para SSD e grava pendrives de boot.",
    plataformas: ["Windows 10", "Windows 11"],
    estado: "disponivel",
    destaque: "img/partition-discos.webp",
    capa: "img/partition-recuperar.webp",
    repo: "libertyx-partition",
    tag: "latest", // o Partition publica sempre no release de etiqueta "latest"
    sobre: [
      "O LibertyX Partition tem motor próprio: lê NTFS, FAT, exFAT, ext2/3/4, HFS+ e APFS direto dos setores. Arquivo apagado volta com o nome, a pasta e a data originais — e o que perdeu o nome ainda é reconhecido pelo conteúdo, em mais de 30 formatos.",
      "Tudo o que muda o disco vai para uma fila, como nos melhores do mercado: nada é gravado antes de você confirmar, e toda escrita de tabela guarda um backup restaurável.",
      "O autoteste roda a cada versão num disco virtual do Windows: cria, apaga e recupera, reduz, move, converte, formata e restaura — antes de chegar a você.",
    ],
    galeria: [
      ["img/partition-discos.webp", "Discos e partições"],
      ["img/partition-recuperar.webp", "Arquivos recuperados com prévia"],
      ["img/partition-premium.webp", "Básico e Premium"],
      ["img/partition-benchmark.webp", "Benchmark"],
      ["img/partition-espaco.webp", "Analisador de espaço"],
      ["img/partition-boot.webp", "Pendrive de boot"],
    ],
    recursos: [
      ["resgate", "Recuperar arquivos", "NTFS, FAT, exFAT, ext, HFS+, APFS — com nome, pasta e data."],
      ["assinatura", "Varredura profunda", "Fotos, RAW, vídeos, Office, PDF, ZIP… pelo conteúdo, com o tamanho exato."],
      ["particao", "Partições perdidas", "Busca rápida e completa por setores de boot e suas cópias."],
      ["migrar", "Migrar para SSD", "Com instantâneo VSS, só o espaço usado, e o boot refeito."],
      ["disco", "Tudo de partição", "Mover, redimensionar, unir, dividir, converter GPT ⇄ MBR sem perda."],
      ["saude", "Saúde do disco", "S.M.A.R.T. (SATA e NVMe), teste de superfície e benchmark."],
      ["imagem", "Imagem de disco", "Estilo ddrescue, com SHA-256."],
      ["boot", "Pendrive de boot", "ISO do Windows em FAT32 UEFI+BIOS, ou gravação DD como o Rufus."],
      ["seguro", "Seguro por projeto", "Fila de alterações, backup de tabela e nada destrutivo no disco do Windows."],
    ],
    gratisPro: {
      gratis: ["Criar, formatar, mover e redimensionar partições", "Saúde, superfície, benchmark e duplicados", "Procurar e pré-visualizar apagados", "Recuperar até 1 GB", "Criar imagem de disco"],
      pro: ["Recuperar sem limite", "Restaurar partições perdidas", "Migrar o sistema e copiar disco", "Converter MBR ⇄ GPT com os dados", "Restaurar imagem e pendrive de boot"],
      teste: "Sem limite",
      preco: "US$ 29",
      precoNota: "Premium vitalício",
      nomes: ["Básico", "Premium"],
    },
    specs: [
      ["Sistema", "Windows 10 e 11, 64 bits (x64)"],
      ["Sistemas de arquivos", "NTFS, FAT12/16/32, exFAT, ext2/3/4, HFS+/HFSX, APFS, ReFS (detecção)"],
      ["Tabelas", "MBR e GPT"],
      ["Formatos por conteúdo", "JPEG, PNG, HEIC, RAW de câmera, MP4/MOV, MKV, AVI, MP3, WAV, PDF, Office, ZIP, RAR, 7z, SQLite e mais"],
      ["Saúde", "S.M.A.R.T. para SATA e NVMe"],
      ["Interface", "Avalonia / .NET 10, sem dependências para instalar"],
      ["Instalação", "Instalador (atualiza por cima) ou portátil, para levar no pendrive"],
      ["Licença", "Chave LibertyX conferida no próprio PC, sem internet"],
      ["Código", `<a href="${GH}/libertyx-partition">github.com/fxmx182/libertyx-partition</a>`],
    ],
    downloads: [
      { nome: "Instalador", detalhe: "Recomendado — Menu Iniciar e atualizações", arquivo: "LibertyXPartition-Setup.exe", tamanho: "42 MB", icone: "windows", principal: true },
      { nome: "Portátil", detalhe: "Roda sem instalar, bom para pendrive", arquivo: "LibertyXPartition.exe", tamanho: "47 MB", icone: "pendrive" },
    ],
    lojas: [
      { loja: "cartao", url: null, nota: "Premium com cartão" },
    ],
    telegram: `${BOT}?start=partition`,
  },
];
