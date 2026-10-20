# Vó Maria Choperia e Pizzaria — site

Site de página única da **Vó Maria Choperia e Pizzaria** (Itapetininga, SP).
HTML, CSS e JavaScript puros: não precisa instalar nada nem rodar build.

## Estrutura

```
vo-maria-site/
├── index.html              Página principal
├── 404.html                Página de "não encontrada"
├── robots.txt              Regras para buscadores
├── sitemap.xml             Mapa do site para o Google
├── llms.txt                Resumo do restaurante para IAs (ChatGPT, Claude, etc.)
├── site.webmanifest        Ícone e cores ao "adicionar à tela inicial"
├── favicon.ico
├── _headers                Cache para Netlify / Cloudflare Pages (opcional)
└── assets/
    ├── css/style.css       Todos os estilos
    ├── js/main.js          Programação da semana e carrosséis
    ├── fonts/              Lilita One, Nunito e Caveat (hospedadas no próprio site)
    ├── icons/              Favicon, ícone da Apple e ícones do app
    └── img/
        ├── fotos/          Fotos em WebP, em 2 ou 3 tamanhos cada (ex.: feijoada-480.webp, feijoada-800.webp)
        ├── logo/           Logo em SVG, PNG transparente e WebP
        ├── texturas/       Reboco laranja, reboco café e madeira
        └── og-image.jpg    Imagem que aparece ao compartilhar o link (1200x630)
```

## Antes de publicar: troque o domínio

O endereço `https://www.seudominio.com.br` é provisório. Troque pelo domínio real
(ou pelo endereço do GitHub Pages) nestes arquivos:

- `index.html` (link canônico, Open Graph e dados estruturados)
- `robots.txt`
- `sitemap.xml`
- `llms.txt`

Dica: no VS Code, use **Ctrl+Shift+H** para substituir em todos os arquivos de uma vez.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `vo-maria-site`) e envie esta pasta:
   ```bash
   git init
   git add .
   git commit -m "Site Vó Maria"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/vo-maria-site.git
   git push -u origin main
   ```
2. No repositório: **Settings → Pages → Branch: main / root → Save**.
3. Em 1 ou 2 minutos o site fica em `https://SEU-USUARIO.github.io/vo-maria-site/`.

Com domínio próprio (ex.: `vomaria.com.br`), configure em **Settings → Pages → Custom domain**.
A página 404 usa caminhos que começam com `/`, então ela funciona melhor com domínio próprio.

Alternativas com cache e compressão automáticos: **Netlify** ou **Cloudflare Pages**
(é só arrastar a pasta; o arquivo `_headers` já configura o cache).

## Como editar o conteúdo

| O que mudar | Onde |
|---|---|
| Preços, pratos e drinks do cardápio | `index.html`, seção `id="cardapio"` |
| O que aparece em cada dia da semana | `assets/js/main.js`, função `prog(d)` |
| Telefone / WhatsApp | procure por `5515996621621` e `99662-1621` |
| Cores | `assets/css/style.css`, bloco `:root` no topo |
| Fotos | substitua os arquivos em `assets/img/fotos/` mantendo o mesmo nome |

## Desempenho e acessibilidade

- Fotos em WebP com vários tamanhos (`srcset`): o celular baixa a versão menor.
- Fotos abaixo da primeira tela carregam só quando o visitante chega nelas (`loading="lazy"`).
- Foto da capa e fontes principais pré-carregadas; fontes no próprio site (sem Google Fonts).
- Texturas de parede e madeira como imagens leves (sem filtros pesados no navegador).
- JavaScript pequeno, sem bibliotecas, carregado com `defer`.
- Respeita "reduzir movimento" do sistema; navegação por teclado com foco visível.

Teste local com Lighthouse (celular, sem compressão do servidor): Desempenho 91,
Acessibilidade 100, Boas práticas 100, SEO 100. Hospedado com compressão, o resultado tende a ser melhor.

## Créditos

Fotos: Instagram oficial [@vomariaitape](https://www.instagram.com/vomariaitape/).
Fontes: Lilita One, Nunito e Caveat (SIL Open Font License).
