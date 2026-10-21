# Site da LibertyX

Página dos apps LibertyX (Player, Folder, Partition): vitrine na página inicial e, para cada
app, abas com visão geral, recursos, especificações, downloads e preço. HTML, CSS e JS puros,
sem build — o GitHub Pages serve a pasta como está.

## Idiomas

Português e inglês, com o seletor PT/EN no topo. O idioma fica no endereço
(`#/pt/player/baixar`, `#/en/player/download`). Sem idioma no endereço, vale a última
escolha da pessoa e, na falta dela, o idioma do navegador: português para quem usa
português, inglês para os demais.

- Textos dos apps: em `produtos.js`, cada texto que muda de idioma é `{ pt: …, en: … }`
  (inclusive as capturas, quando há versão em inglês).
- Textos da interface: no dicionário `U` do `app.js`, um bloco por idioma.
- Para acrescentar um idioma: um bloco novo em `U`, a sigla em `IDIOMAS`, um botão em
  `.idioma` no `index.html` e a chave nova nos textos de `produtos.js`. Texto sem tradução
  cai no português.

## Lançou numa loja?

Tudo o que muda mora em [`assets/produtos.js`](assets/produtos.js). Em `lojas`, troque
`url: null` pelo link da página da loja (vale para os dois idiomas):

```js
lojas: [
  { loja: "play", url: "https://play.google.com/store/apps/details?id=com.mauricio.libertyx" },
  { loja: "amazon", url: null, nota: "Fire TV" },
],
```

O selo "Em breve" vira o botão na hora. Lojas conhecidas: `play`, `amazon`, `appstore`,
`cartao`. Os cartões da seção "Como comprar" da página inicial ficam em `canais()`, em
[`assets/app.js`](assets/app.js).

## Downloads

Os links apontam para o release mais recente de cada repositório, então nunca envelhecem.
Versão, data e tamanho vêm ao vivo da API do GitHub; o `tamanho` escrito em `produtos.js` só
aparece se a API não responder.

## Ver localmente

```bash
python3 -m http.server 8799
```

`?estatico` no endereço desliga as animações de entrada (para capturas de tela).
As capturas do Partition saem de `libertyx-partition/tests/Snap`; as do Player e do Folder,
de `loja/imagens/` de cada repositório.
