# GF Advogados — Landing Page

Site estático simples (HTML + CSS + JavaScript puro, sem frameworks) para a
landing page do escritório. Pronto para hospedagem gratuita.

## Estrutura de arquivos

```
site/
├── index.html          -> estrutura da página (todo o conteúdo/texto)
├── css/
│   └── style.css        -> cores, fontes e layout (comece por aqui para estilizar)
├── js/
│   └── script.js         -> menu mobile + vídeo que toca ao rolar a página
├── images/
│   └── LEIA-ME.txt       -> lista dos nomes de arquivo de imagem esperados
├── videos/
│   └── LEIA-ME.txt       -> nome do arquivo de vídeo esperado
└── README.md             -> este arquivo
```

Praticamente tudo que você vai querer ajustar de **conteúdo (textos)** está em
`index.html`, e tudo que você vai querer ajustar de **aparência (cores e
fontes)** está no topo de `css/style.css`, na seção `:root { ... }`.

## Como rodar localmente (no seu computador)

Você **não precisa instalar nada** para simplesmente ver o site: dê duplo
clique no arquivo `index.html` e ele abre no navegador. Isso já é suficiente
para ir ajustando o HTML/CSS e ver o resultado.

Só tem uma pegadinha: o navegador pode bloquear o carregamento do vídeo de
fundo quando o arquivo é aberto diretamente (protocolo `file://`). Se isso
acontecer, rode um servidor local — é simples e gratuito:

**Opção A — VS Code (mais fácil)**
1. Abra a pasta do site no VS Code.
2. Instale a extensão gratuita "Live Server".
3. Clique com o botão direito em `index.html` -> "Open with Live Server".
4. O site abre em algo como `http://127.0.0.1:5500` e atualiza sozinho
   sempre que você salva um arquivo.

**Opção B — Python (se já tiver Python instalado)**
No terminal, dentro da pasta do site:
```bash
python3 -m http.server 8000
```
Depois abra `http://localhost:8000` no navegador.

**Opção C — Node.js**
```bash
npx serve .
```

## Como publicar de graça (hospedagem gratuita)

Qualquer uma destas opções funciona bem para um site estático como este —
não precisa de servidor, banco de dados nem configuração complicada.

### Opção 1: GitHub Pages (recomendado para quem já usa Git/GitHub)
1. Crie um repositório no GitHub (ex.: `gf-advogados-site`).
2. Suba os arquivos desta pasta para o repositório:
   ```bash
   git init
   git add .
   git commit -m "primeira versão do site"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/gf-advogados-site.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings -> Pages**.
4. Em "Branch", selecione `main` e a pasta `/ (root)`, depois clique em
   **Save**.
5. Em alguns minutos o site estará no ar em algo como:
   `https://SEU-USUARIO.github.io/gf-advogados-site/`

### Opção 2: Netlify (mais simples, com "arrastar e soltar")
1. Crie uma conta gratuita em https://www.netlify.com
2. No painel, procure a opção de arrastar uma pasta ("Deploys" ->
   arraste a pasta do site direto na página).
3. Pronto — o Netlify te dá um link público na hora (algo como
   `https://nome-aleatorio.netlify.app`), que dá pra personalizar depois.

### Opção 3: Vercel
1. Crie uma conta gratuita em https://vercel.com
2. Crie um novo projeto e importe a pasta (ou conecte com o GitHub, se
   você tiver seguido a Opção 1).
3. Não precisa configurar nada (é um site estático) — clique em Deploy.

### Opção 4: Cloudflare Pages
Funciona de forma parecida com o Netlify/Vercel: conecte o repositório do
GitHub (ou envie os arquivos direto) em https://pages.cloudflare.com

## Próximos passos sugeridos

- [ ] Trocar as fotos placeholder pelas fotos reais (pasta `images/`)
- [ ] Trocar o vídeo placeholder pelo vídeo real (pasta `videos/`)
- [ ] Revisar todos os textos entre colchetes `[assim]` no `index.html`
- [ ] Trocar o endereço/telefone/e-mail na seção de localização
- [ ] Gerar o link real do Google Maps (instruções dentro do próprio
      `index.html`, na seção de localização)
- [ ] Ajustar cores e fontes no topo do `css/style.css`, se quiser
- [ ] Registrar um domínio próprio (opcional) e apontar para a hospedagem
      escolhida

Qualquer ajuste que precisar (adicionar seção, mudar cores, resolver algum
comportamento estranho no celular etc.), é só chamar.
