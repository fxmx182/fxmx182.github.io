// Catálogo do site. É o único arquivo a mexer quando algo for lançado:
//
//   - loja lançada → troque `url: null` pela página da loja (Google Play, Amazon…);
//     o selo "Em breve" vira o botão na hora, nos dois idiomas.
//   - plataforma nova → acrescente um item em `downloads`. Quem publica em mais de um release
//     (o Partition: Windows em "latest", Linux em "linux-latest") separa os arquivos em `grupos`,
//     cada um com a sua etiqueta; o item diz a qual grupo pertence.
//
// Texto que muda de idioma é `{ pt: …, en: … }`; o que é igual nos dois (nomes, preços,
// links) fica escrito uma vez só.
//
// Tamanho e versão dos downloads vêm ao vivo da API do GitHub (`repo` + `tag`);
// os valores daqui são só o que aparece se a API não responder.

const BOT = "https://t.me/libertx_partition_bot";
const GH = "https://github.com/fxmx182";

window.LOJA = {
  bot: BOT,
  pacote: { preco: 35, soma: 39, url: `${BOT}?start=pacote` },
};

window.PRODUTOS = [
  {
    id: "player",
    nome: "Player",
    titulo: "LibertyX Player",
    icone: "img/icone-player.png",
    slogan: { pt: "Sua mídia. Sua liberdade.", en: "Your media. Your freedom." },
    resumo: {
      pt: "Player de vídeo no espírito do MX Player: abre qualquer formato, rola quadro a quadro e toca direto do servidor de casa — sem anúncio, sem conta.",
      en: "A video player in the spirit of MX Player: opens any format, scrubs frame by frame and plays straight from your home server — no ads, no account.",
    },
    plataformas: ["Android", "Google TV", "Fire TV", "PC"],
    destaque: { pt: "img/player-celular-player.webp", en: "img/player-celular-player-en.webp" },
    repo: "libertyx-player-android",
    tag: "latest-release", // o release mais recente marcado como "latest"
    sobre: {
      pt: [
        "O LibertyX Player nasceu porque nenhum player juntava as duas coisas que importam: abrir tudo (MKV, HEVC, AC-3, DTS, legenda ASS) e rolar o vídeo liso, vendo cada quadro debaixo do dedo.",
        "O servidor de casa vem em primeiro plano. Ele acha sozinho os computadores e NAS da rede e toca o arquivo sem baixar antes. Na TV, a primeira faixa da tela inicial é o servidor, porque é lá que o acervo mora.",
        "O mesmo app vira o app de televisão: na Google TV e no Fire TV ele troca a grade por faixas horizontais, ganha um realce de foco legível a três metros e passa a obedecer ao controle remoto.",
      ],
      en: [
        "LibertyX Player exists because no player got both things that matter right: open everything (MKV, HEVC, AC-3, DTS, ASS subtitles) and scrub smoothly, with the exact frame under your finger.",
        "Your home server comes first. It finds the computers and NAS boxes on your network by itself and plays files without downloading them. On TV, the first row of the home screen is the server — that's where your library lives.",
        "The same app becomes the TV app: on Google TV and Fire TV it swaps the grid for horizontal rows, gets a focus highlight you can read from across the room and follows the remote.",
      ],
    },
    galeria: [
      ["img/player-tv-inicio.webp", { pt: "TV — tela inicial com o servidor na primeira faixa", en: "TV — home screen with the server in the first row" }],
      [{ pt: "img/player-celular-player.webp", en: "img/player-celular-player-en.webp" }, { pt: "Reprodução no celular", en: "Playback on a phone" }],
      ["img/player-tv-biblioteca.webp", { pt: "TV — biblioteca", en: "TV — library" }],
      [{ pt: "img/player-celular-ferramentas.webp", en: "img/player-celular-ferramentas-en.webp" }, { pt: "Ferramentas do player", en: "Player tools" }],
      [{ pt: "img/player-tablet-player.webp", en: "img/player-tablet-player-en.webp" }, { pt: "Tablet", en: "Tablet" }],
      ["img/player-tv-player.webp", { pt: "TV — reprodução", en: "TV — playback" }],
    ],
    recursos: {
      pt: [
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
      en: [
        ["scrub", "Frame-accurate scrubbing", "Drag and see the exact frame, without jumping to the nearest keyframe."],
        ["rede", "Direct SMB", "Finds your server by itself (mDNS + scan) and plays without downloading."],
        ["formatos", "Opens everything", "Full libVLC: MKV, HEVC, AC-3/DTS, ASS and PGS, hardware decoding."],
        ["tv", "A real TV app", "Horizontal rows, focus you can read from afar, remote media keys."],
        ["gestos", "MX Player gestures", "Brightness, volume, ±10 s, hold for 2×, pinch up to 6× — with an interactive guide."],
        ["carro", "Android Auto and screen off", "Audio in the car and in the background, with lock-screen controls."],
        ["pip", "Picture-in-picture", "Keep watching on top of any app."],
        ["retomar", "Resume where you left off", "For every file, local or on the network."],
        ["idiomas", "Three languages", "English, Portuguese and Spanish, following your device."],
      ],
    },
    gratisPro: {
      gratis: {
        pt: ["Player completo, todos os formatos", "Biblioteca do aparelho e pendrive", "Rolagem quadro a quadro e gestos", "Retomar de onde parou", "Sem anúncios, sem conta"],
        en: ["Full player, every format", "Device library and USB drives", "Frame-accurate scrubbing and gestures", "Resume where you left off", "No ads, no account"],
      },
      pro: {
        pt: ["Pastas da rede (SMB)", "Segundo plano + Android Auto", "Janela flutuante", "Timer para dormir", "Captura de quadro"],
        en: ["Network folders (SMB)", "Background play + Android Auto", "Picture-in-picture", "Sleep timer", "Frame capture"],
      },
      teste: { pt: "7 dias com tudo liberado", en: "7-day free trial" },
      preco: 5,
      precoNota: { pt: "compra única, vitalícia", en: "one-time purchase, lifetime" },
    },
    specs: {
      pt: [
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
      en: [
        ["Platforms", "Android 7.0+ (phone and tablet), Google TV, Android TV, Fire TV, Nvidia Shield, PC via emulator or Waydroid"],
        ["Architectures", "arm64-v8a, armeabi-v7a (the TV APK ships both), x86_64"],
        ["Engine", "libVLC — hardware decoding with software fallback"],
        ["Video", "MKV, MP4, AVI, TS, MOV, WebM, HEVC/H.265, H.264, VP9, AV1"],
        ["Audio", "AC-3, E-AC-3, DTS, AAC, FLAC, Opus, MP3"],
        ["Subtitles", "SRT, ASS/SSA, PGS, embedded or next to the file"],
        ["Network", "SMB 2/3 with user and password or guest; discovery via mDNS and port 445"],
        ["Languages", "English, Português, Español"],
        ["Privacy", "No ads, no account, no tracking"],
        ["Source", `<a href="${GH}/libertyx-player-android">github.com/fxmx182/libertyx-player-android</a>`],
      ],
    },
    downloads: [
      { nome: { pt: "Televisão", en: "TV" }, detalhe: "Google TV · Fire TV · Shield", arquivo: "LibertyXPlayer-TV.apk", tamanho: "109 MB", icone: "tv", principal: true },
      { nome: { pt: "Celular e tablet", en: "Phone and tablet" }, detalhe: { pt: "Android de 2015 para cá", en: "Android from 2015 onwards" }, arquivo: "LibertyXPlayer-Celular.apk", tamanho: "70 MB", icone: "celular" },
      { nome: { pt: "Celular antigo", en: "Older phone" }, detalhe: { pt: "Aparelhos de 32 bits", en: "32-bit devices" }, arquivo: "LibertyXPlayer-Celular-Antigo.apk", tamanho: "56 MB", icone: "celular" },
      { nome: { pt: "PC e Chromebook", en: "PC and Chromebook" }, detalhe: { pt: "Waydroid · BlueStacks · emulador", en: "Waydroid · BlueStacks · emulator" }, arquivo: "LibertyXPlayer-PC-x86_64.apk", tamanho: "78 MB", icone: "pc" },
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
    slogan: { pt: "Seus arquivos, na TV e na rede.", en: "Your files, on TV and across the network." },
    resumo: {
      pt: "Gerenciador de arquivos no estilo do Meus Arquivos, feito para a TV: categorias, cópia com progresso e os computadores da casa a um clique — vídeo e foto abrem direto do servidor.",
      en: "A file manager in the style of Samsung My Files, built for TV: categories, copying with progress and every computer in the house one click away — videos and photos open straight from the server.",
    },
    plataformas: ["Google TV", "Fire TV"],
    destaque: { pt: "img/folder-tv-inicio.webp", en: "img/folder-tv-inicio-en.webp" },
    capa: { pt: "img/folder-tv-rede.webp", en: "img/folder-tv-rede-en.webp" },
    repo: "libertyx-folder-android",
    tag: "latest-release",
    sobre: {
      pt: [
        "Na TV, mexer em arquivo costuma ser um castigo. O LibertyX Folder foi desenhado para o controle remoto: realce de foco forte, setas que andam entre os campos, um painel de progresso que some sozinho quando termina e um guia de dez páginas na primeira abertura.",
        "A rede é de primeira classe. Ele acha os computadores e NAS da casa sozinho, lista os compartilhamentos e abre vídeo, foto e música em outros apps sem baixar antes — com busca para frente e para trás.",
        "Os arquivos da TV são grátis para sempre. A rede vem liberada por 7 dias e depois é Pro, uma compra única.",
      ],
      en: [
        "Managing files on a TV is usually a chore. LibertyX Folder was designed for the remote: a strong focus highlight, arrows that move between fields, a progress panel that disappears by itself when done and a ten-page guide on first launch.",
        "The network is first-class. It finds the computers and NAS boxes in your home by itself, lists their shares and opens videos, photos and music in other apps without downloading first — with seeking both ways.",
        "Files on the TV are free forever. The network is unlocked for 7 days, then it's Pro — a one-time purchase.",
      ],
    },
    galeria: [
      [{ pt: "img/folder-tv-inicio.webp", en: "img/folder-tv-inicio-en.webp" }, { pt: "Tela inicial", en: "Home screen" }],
      [{ pt: "img/folder-tv-rede.webp", en: "img/folder-tv-rede-en.webp" }, { pt: "Computadores da rede", en: "Computers on the network" }],
      [{ pt: "img/folder-tv-pasta.webp", en: "img/folder-tv-pasta-en.webp" }, { pt: "Dentro de uma pasta", en: "Inside a folder" }],
      [{ pt: "img/folder-tv-selecao.webp", en: "img/folder-tv-selecao-en.webp" }, { pt: "Seleção e ações", en: "Selection and actions" }],
      [{ pt: "img/folder-tv-guia-rede.webp", en: "img/folder-tv-guia-rede-en.webp" }, { pt: "Guia — rede", en: "Guide — network" }],
      [{ pt: "img/folder-tv-guia-selecao.webp", en: "img/folder-tv-guia-selecao-en.webp" }, { pt: "Guia — seleção", en: "Guide — selection" }],
    ],
    recursos: {
      pt: [
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
      en: [
        ["controle", "Built for the remote", "Strong focus, D-pad everywhere, long-press center to select."],
        ["rede", "Automatic network", "mDNS, port 445 scan and NetBIOS names — your PC just shows up."],
        ["stream", "Open without downloading", "Server videos open in your player with seeking, no copy first."],
        ["copiar", "Copy and move", "Between the TV, USB drives and the network, with progress and cancel."],
        ["categorias", "Categories", "Images, videos, audio, documents, downloads, APKs and archives."],
        ["busca", "Search", "On the device, in the folder and subfolders — and on the network."],
        ["guia", "Animated guide", "Ten pages with scenes from the app itself on first launch."],
        ["seguro", "Never overwrites", "Duplicates become “name (1).ext”."],
        ["idiomas", "Three languages", "English, Portuguese and Spanish."],
      ],
    },
    gratisPro: {
      gratis: {
        pt: ["Todos os arquivos da TV e do pendrive", "Copiar, mover, renomear, excluir", "Categorias e busca no aparelho", "Instalar APKs", "Para sempre"],
        en: ["Every file on the TV and USB drives", "Copy, move, rename, delete", "Categories and device search", "Install APKs", "Forever"],
      },
      pro: {
        pt: ["Servidores de rede (SMB)", "Busca automática na rede", "Abrir e copiar da rede", "Assistir sem baixar"],
        en: ["Network servers (SMB)", "Automatic network discovery", "Open and copy from the network", "Watch without downloading"],
      },
      teste: { pt: "7 dias com a rede liberada", en: "7 days of network free" },
      preco: 5,
      precoNota: { pt: "compra única, vitalícia", en: "one-time purchase, lifetime" },
    },
    specs: {
      pt: [
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
      en: [
        ["Platforms", "Google TV, Android TV 8.0+, Fire TV Stick, Fire TV Cube"],
        ["Architectures", "All — no native libraries (ARM 32/64 and x86)"],
        ["Size", "≈ 4 MB"],
        ["Network", "SMB 2/3 (smbj + dcerpc), user and password or guest"],
        ["Discovery", "mDNS, port 445 scan, NetBIOS names"],
        ["Streaming", "Network files open in other apps without downloading (with seeking)"],
        ["Languages", "English, Português, Español"],
        ["Privacy", "No ads, no account, no tracking"],
        ["Source", `<a href="${GH}/libertyx-folder-android">github.com/fxmx182/libertyx-folder-android</a>`],
      ],
    },
    downloads: [
      { nome: { pt: "Google TV e Fire TV", en: "Google TV and Fire TV" }, detalhe: { pt: "Um APK para todas as TVs", en: "One APK for every TV" }, arquivo: "LibertyXFolder-TV.apk", tamanho: "3,6 MB", icone: "tv", principal: true },
    ],
    lojas: [
      { loja: "play", url: null, nota: { pt: "celular e TV", en: "phone and TV" } },
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
    slogan: { pt: "Seus discos. Seus dados de volta.", en: "Your disks. Your data, back." },
    resumo: {
      pt: "Ferramenta de discos para Windows e Linux com foco em recuperação: devolve arquivos apagados com nome e pasta, acha partições perdidas, migra o sistema para outro disco e grava pendrives de boot.",
      en: "A disk tool for Windows and Linux focused on recovery: brings deleted files back with their names and folders, finds lost partitions, migrates your system to another disk and makes bootable USB drives.",
    },
    plataformas: ["Windows 10", "Windows 11", "Linux"],
    destaque: "img/partition-discos.webp",
    capa: "img/partition-recuperar.webp",
    repo: "libertyx-partition",
    tag: "latest", // o Partition do Windows publica sempre no release "latest"; o do Linux, em "linux-latest" (ver `grupos`)
    sobre: {
      pt: [
        "O LibertyX Partition tem motor próprio: lê NTFS, FAT, exFAT, ext2/3/4, HFS+ e APFS direto dos setores. Arquivo apagado volta com o nome, a pasta e a data originais — e o que perdeu o nome ainda é reconhecido pelo conteúdo, em mais de 30 formatos.",
        "Tudo o que muda o disco vai para uma fila, como nos melhores do mercado: nada é gravado antes de você confirmar, e toda escrita de tabela guarda um backup restaurável.",
        "A edição Linux usa o mesmo motor e soma o que é do Linux: ext4, XFS e Btrfs recuperados direto dos setores, LUKS e BitLocker, LVM e RAID, e o sistema inteiro levado para outro disco, pronto para dar boot. Roda em x64 e ARM64, do PC ao Raspberry Pi.",
        "O autoteste roda a cada versão — num disco virtual do Windows e, no Linux, num disco loop em x64 e ARM64: cria, apaga e recupera, reduz, move, converte, formata e restaura. A migração do Linux e o reparo do boot são provados em máquinas virtuais UEFI e BIOS antes de chegar a você.",
      ],
      en: [
        "LibertyX Partition has its own engine: it reads NTFS, FAT, exFAT, ext2/3/4, HFS+ and APFS straight from the sectors. Deleted files come back with their original name, folder and date — and files that lost their name are still recognized by content, in more than 30 formats.",
        "Everything that changes a disk goes into a queue, like the best tools out there: nothing is written until you confirm, and every partition-table write keeps a restorable backup.",
        "The Linux edition runs the same engine and adds what Linux needs: ext4, XFS and Btrfs recovered straight from the sectors, LUKS and BitLocker, LVM and RAID, and your whole system moved to another disk, ready to boot. It runs on x64 and ARM64, from PCs to the Raspberry Pi.",
        "Every release runs a self-test — on a virtual Windows disk and, on Linux, on a loop disk on x64 and ARM64: create, delete and recover, shrink, move, convert, format and restore. Linux system migration and boot repair are proven in UEFI and BIOS virtual machines before they ever reach you.",
      ],
    },
    galeria: [
      ["img/partition-discos.webp", { pt: "Discos e partições", en: "Disks and partitions" }],
      ["img/partition-recuperar.webp", { pt: "Arquivos recuperados com prévia", en: "Recovered files with preview" }],
      ["img/partition-premium.webp", { pt: "Básico e Premium", en: "Basic and Premium" }],
      ["img/partition-benchmark.webp", { pt: "Benchmark", en: "Benchmark" }],
      ["img/partition-espaco.webp", { pt: "Analisador de espaço", en: "Space analyzer" }],
      ["img/partition-boot.webp", { pt: "Pendrive de boot", en: "Bootable USB" }],
    ],
    recursos: {
      pt: [
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
      en: [
        ["resgate", "Recover files", "NTFS, FAT, exFAT, ext, HFS+, APFS — with name, folder and date."],
        ["assinatura", "Deep scan", "Photos, RAW, videos, Office, PDF, ZIP… by content, with the exact size."],
        ["particao", "Lost partitions", "Quick and full search for boot sectors and their backups."],
        ["migrar", "Migrate to SSD", "With a VSS snapshot, used space only, and boot rebuilt."],
        ["disco", "Every partition task", "Move, resize, merge, split, convert GPT ⇄ MBR without data loss."],
        ["saude", "Disk health", "S.M.A.R.T. (SATA and NVMe), surface test and benchmark."],
        ["imagem", "Disk imaging", "ddrescue-style, with SHA-256."],
        ["boot", "Bootable USB", "Windows ISO on FAT32 UEFI+BIOS, or raw DD writes like Rufus."],
        ["seguro", "Safe by design", "Change queue, partition-table backups and nothing destructive on the Windows disk."],
      ],
    },
    // o que só a edição Linux tem, numa grade abaixo dos recursos
    recursosExtra: {
      titulo: { pt: "Na edição Linux", en: "In the Linux edition" },
      texto: { pt: "O mesmo motor, mais o que é do Linux — em x64 e ARM64.", en: "The same engine, plus what Linux needs — on x64 and ARM64." },
      itens: {
        pt: [
          ["resgate", "ext4, XFS e Btrfs", "Apagados de volta também em NTFS, FAT e exFAT — lidos dos setores, mesmo em volume que não monta."],
          ["particao", "Partições como no GParted", "ext4, XFS, Btrfs, F2FS, NTFS, exFAT, FAT e swap; o / cresce montado e partição perdida volta."],
          ["chave", "LUKS e BitLocker", "Desbloqueia, monta e recupera de dentro; senhas, cópia do cabeçalho e LUKS2 novo."],
          ["disco", "LVM e RAID", "Volumes lógicos e RAID por software aparecem como discos: recuperar, verificar, formatar."],
          ["saude", "S.M.A.R.T. nativo", "NVMe, SATA e USB direto pelo kernel, sem programa externo."],
          ["apagar", "Apagamento seguro", "TRIM do SSD inteiro ou o apagamento do fabricante (NVMe Format, ATA Secure Erase)."],
          ["migrar", "Migrar o sistema", "O Linux inteiro para outro disco, com UUIDs novos, fstab e GRUB corrigidos — liga de primeira."],
          ["reparar", "Reparar a inicialização", "Refaz o initramfs e reinstala o GRUB (UEFI ou BIOS) ou o systemd-boot."],
          ["boot", "Pendrive do Windows", "Grava o ISO do Windows num pendrive de instalação, direto do Linux."],
        ],
        en: [
          ["resgate", "ext4, XFS and Btrfs", "Deleted files back on NTFS, FAT and exFAT too — read from the sectors, even on volumes that won't mount."],
          ["particao", "Partitions like GParted", "ext4, XFS, Btrfs, F2FS, NTFS, exFAT, FAT and swap; / grows while mounted and lost partitions come back."],
          ["chave", "LUKS and BitLocker", "Unlock, mount and recover from inside; passphrases, header backups and new LUKS2."],
          ["disco", "LVM and RAID", "Logical volumes and software RAID show up as disks: recover, check, format."],
          ["saude", "Native S.M.A.R.T.", "NVMe, SATA and USB straight through the kernel, no external tools."],
          ["apagar", "Secure erase", "Whole-SSD TRIM or the manufacturer's erase (NVMe Format, ATA Secure Erase)."],
          ["migrar", "Migrate the system", "Your whole Linux to another disk, with new UUIDs and fstab and GRUB fixed — boots first time."],
          ["reparar", "Repair boot", "Rebuilds the initramfs and reinstalls GRUB (UEFI or BIOS) or systemd-boot."],
          ["boot", "Windows USB installer", "Writes a Windows ISO to a bootable installer USB drive, right from Linux."],
        ],
      },
    },
    gratisPro: {
      gratis: {
        pt: ["Criar, formatar, mover e redimensionar partições", "Saúde, superfície, benchmark e duplicados", "Procurar e pré-visualizar apagados", "Recuperar até 1 GB", "Criar imagem de disco"],
        en: ["Create, format, move and resize partitions", "Health, surface test, benchmark and duplicates", "Find and preview deleted files", "Recover up to 1 GB", "Create disk images"],
      },
      pro: {
        pt: ["Recuperar sem limite", "Restaurar partições perdidas", "Migrar o sistema e copiar disco", "Converter MBR ⇄ GPT com os dados", "Restaurar imagem e pendrive de boot"],
        en: ["Unlimited recovery", "Restore lost partitions", "Migrate the system and clone disks", "Convert MBR ⇄ GPT keeping data", "Restore images and bootable USB"],
      },
      teste: { pt: "Sem limite", en: "No limits" },
      preco: 29,
      precoNota: { pt: "Premium vitalício", en: "lifetime Premium" },
      nomes: { pt: ["Básico", "Premium"], en: ["Basic", "Premium"] },
    },
    specs: {
      pt: [
        ["Windows", "Windows 10 e 11, 64 bits (x64)"],
        ["Linux", "x64 e ARM64 — Ubuntu, Debian, Mint, Fedora, openSUSE, Arch e as demais (AppImage); Raspberry Pi 4/5 com sistema de 64 bits"],
        ["Sistemas de arquivos", "NTFS, FAT12/16/32, exFAT, ext2/3/4, HFS+/HFSX, APFS, ReFS (detecção); no Linux também XFS, Btrfs e F2FS"],
        ["Tabelas", "MBR e GPT"],
        ["Criptografia", "BitLocker; no Linux também LUKS1 e LUKS2"],
        ["Formatos por conteúdo", "JPEG, PNG, HEIC, RAW de câmera, MP4/MOV, MKV, AVI, MP3, WAV, PDF, Office, ZIP, RAR, 7z, SQLite e mais"],
        ["Saúde", "S.M.A.R.T. para SATA e NVMe"],
        ["Interface", "Avalonia / .NET 10, sem dependências para instalar"],
        ["Idioma", "Português"],
        ["Instalação", "Windows: instalador (atualiza por cima) ou portátil, para levar no pendrive. Linux: AppImage, .deb, .rpm ou .tar.gz"],
        ["Licença", "Chave LibertyX conferida no próprio PC, sem internet — a mesma no Windows e no Linux"],
        ["Código", `<a href="${GH}/libertyx-partition">github.com/fxmx182/libertyx-partition</a>`],
      ],
      en: [
        ["Windows", "Windows 10 and 11, 64-bit (x64)"],
        ["Linux", "x64 and ARM64 — Ubuntu, Debian, Mint, Fedora, openSUSE, Arch and everything else (AppImage); Raspberry Pi 4/5 with a 64-bit OS"],
        ["File systems", "NTFS, FAT12/16/32, exFAT, ext2/3/4, HFS+/HFSX, APFS, ReFS (detection); on Linux also XFS, Btrfs and F2FS"],
        ["Partition tables", "MBR and GPT"],
        ["Encryption", "BitLocker; on Linux also LUKS1 and LUKS2"],
        ["Content formats", "JPEG, PNG, HEIC, camera RAW, MP4/MOV, MKV, AVI, MP3, WAV, PDF, Office, ZIP, RAR, 7z, SQLite and more"],
        ["Health", "S.M.A.R.T. for SATA and NVMe"],
        ["Interface", "Avalonia / .NET 10, nothing else to install"],
        ["Language", "Portuguese"],
        ["Install", "Windows: installer (updates in place) or portable, to carry on a USB drive. Linux: AppImage, .deb, .rpm or .tar.gz"],
        ["License", "LibertyX key checked on your PC, offline — the same on Windows and Linux"],
        ["Source", `<a href="${GH}/libertyx-partition">github.com/fxmx182/libertyx-partition</a>`],
      ],
    },
    grupos: [
      { id: "windows", titulo: "Windows", icone: "windows", texto: { pt: "Windows 10 e 11, 64 bits.", en: "Windows 10 and 11, 64-bit." } },
      { id: "linux", titulo: { pt: "Linux · x64", en: "Linux · x64" }, icone: "linux", tag: "linux-latest",
        texto: { pt: "PCs e notebooks com Intel ou AMD. Os quatro trazem o mesmo programa — muda só o jeito de instalar.", en: "PCs and laptops with Intel or AMD. All four carry the same program — only the way you install it changes." } },
      { id: "arm64", titulo: { pt: "Linux · ARM64", en: "Linux · ARM64" }, icone: "linux", tag: "linux-latest",
        texto: { pt: "Raspberry Pi 4 e 5 com sistema de 64 bits, notebooks e placas ARM.", en: "Raspberry Pi 4 and 5 with a 64-bit OS, ARM laptops and boards." } },
    ],
    downloads: [
      { grupo: "windows", nome: { pt: "Instalador", en: "Installer" }, detalhe: { pt: "Recomendado — Menu Iniciar e atualizações", en: "Recommended — Start menu and updates" }, arquivo: "LibertyXPartition-Setup.exe", tamanho: "42 MB", icone: "windows", principal: true },
      { grupo: "windows", nome: { pt: "Portátil", en: "Portable" }, detalhe: { pt: "Roda sem instalar, bom para pendrive", en: "Runs without installing, great on a USB drive" }, arquivo: "LibertyXPartition.exe", tamanho: "47 MB", icone: "pendrive" },
      { grupo: "linux", nome: "AppImage", detalhe: { pt: "Qualquer distribuição, sem instalar — atualiza sozinho", en: "Any distribution, no install — updates itself" }, arquivo: "LibertyXPartition-x86_64.AppImage", tamanho: "55 MB", icone: "linux", principal: true },
      { grupo: "linux", nome: ".deb", detalhe: "Ubuntu · Debian · Mint · Pop!_OS", arquivo: "libertyx-partition_amd64.deb", tamanho: "53 MB", icone: "disco" },
      { grupo: "linux", nome: ".rpm", detalhe: "Fedora · openSUSE · RHEL", arquivo: "libertyx-partition.x86_64.rpm", tamanho: "54 MB", icone: "disco" },
      { grupo: "linux", nome: ".tar.gz", detalhe: { pt: "O programa solto, para quem prefere", en: "The bare program, for those who prefer it" }, arquivo: "LibertyXPartition-linux.tar.gz", tamanho: "54 MB", icone: "pc" },
      { grupo: "arm64", nome: "AppImage", detalhe: { pt: "Qualquer distribuição ARM64, sem instalar", en: "Any ARM64 distribution, no install" }, arquivo: "LibertyXPartition-aarch64.AppImage", tamanho: "53 MB", icone: "linux" },
      { grupo: "arm64", nome: ".deb", detalhe: "Raspberry Pi OS · Ubuntu · Debian", arquivo: "libertyx-partition_arm64.deb", tamanho: "50 MB", icone: "disco" },
      { grupo: "arm64", nome: ".rpm", detalhe: "Fedora · openSUSE", arquivo: "libertyx-partition.aarch64.rpm", tamanho: "52 MB", icone: "disco" },
      { grupo: "arm64", nome: ".tar.gz", detalhe: { pt: "O programa solto", en: "The bare program" }, arquivo: "LibertyXPartition-linux-arm64.tar.gz", tamanho: "52 MB", icone: "pc" },
    ],
    // quadro "Qual pacote escolher", depois dos downloads (os passos aceitam <b> e <code>)
    guiaBaixar: {
      titulo: { pt: "Qual pacote escolher no Linux", en: "Which Linux package to pick" },
      texto: {
        pt: "Todos trazem o .NET embutido, não pedem nada a mais. Na dúvida, o <b>AppImage</b> roda em qualquer distribuição. Para saber se a máquina é x64 (<code>x86_64</code>) ou ARM64 (<code>aarch64</code>), rode no terminal:",
        en: "All of them ship with .NET built in and need nothing else. When in doubt, the <b>AppImage</b> runs on any distribution. To tell whether your machine is x64 (<code>x86_64</code>) or ARM64 (<code>aarch64</code>), run in a terminal:",
      },
      comando: "uname -m",
      passos: {
        pt: [
          "<b>Ubuntu, Debian, Mint, Pop!_OS, Zorin</b> — o <b>.deb</b>: dois cliques nele, ou <code>sudo apt install ./libertyx-partition_amd64.deb</code>.",
          "<b>Fedora, openSUSE, RHEL, Rocky, Alma</b> — o <b>.rpm</b>: <code>sudo dnf install ./libertyx-partition.x86_64.rpm</code> (no openSUSE, <code>sudo zypper install</code>).",
          "<b>Arch, Manjaro e as demais</b> — o <b>AppImage</b>: <code>chmod +x LibertyXPartition-x86_64.AppImage</code> e dois cliques. Ele entra no menu de aplicativos e se atualiza sozinho.",
          "<b>Raspberry Pi e ARM</b> — os mesmos pacotes da faixa ARM64, num sistema de 64 bits.",
          "Ao abrir, o app pede a senha de administrador numa janela do sistema. Se faltar alguma ferramenta (cryptsetup, xfsprogs…), ele mesmo instala pelo gerenciador de pacotes.",
        ],
        en: [
          "<b>Ubuntu, Debian, Mint, Pop!_OS, Zorin</b> — the <b>.deb</b>: double-click it, or <code>sudo apt install ./libertyx-partition_amd64.deb</code>.",
          "<b>Fedora, openSUSE, RHEL, Rocky, Alma</b> — the <b>.rpm</b>: <code>sudo dnf install ./libertyx-partition.x86_64.rpm</code> (on openSUSE, <code>sudo zypper install</code>).",
          "<b>Arch, Manjaro and everything else</b> — the <b>AppImage</b>: <code>chmod +x LibertyXPartition-x86_64.AppImage</code> and double-click. It adds itself to the app menu and updates itself.",
          "<b>Raspberry Pi and ARM</b> — the same packages from the ARM64 row, on a 64-bit OS.",
          "On launch the app asks for the administrator password in a system dialog. If a tool is missing (cryptsetup, xfsprogs…), it installs it through your package manager.",
        ],
      },
    },
    lojas: [
      { loja: "cartao", url: null, nota: { pt: "Premium com cartão", en: "Premium by card" } },
    ],
    telegram: `${BOT}?start=partition`,
  },
];
