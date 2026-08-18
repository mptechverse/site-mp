# MP Technologies — Landing Page

Landing page institucional da MP Technologies, desenvolvida em Next.js com foco em conversão, branding premium e experiência visual moderna. A página apresenta uma narrativa forte da marca, com hero animado, blocos de serviços, diferenciais, processo, FAQ e chamada para ação.

## Visão geral

Este projeto foi construído para apresentar a MP Technologies como uma empresa de tecnologia com posicionamento de inovação, estratégia digital e execução. A interface combina estética premium, animações fluidas e componentes personalizados para oferecer uma experiência impactante em dispositivos desktop e mobile.

## Stack principal

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis
- Radix UI
- Lucide Icons
- shadcn/ui-inspired components

## Funcionalidades

- Hero section com visual dinâmico e forte proposta de valor
- Navegação fixa com links internos para seções da página
- Blocos de apresentação de soluções e projetos
- Seção de diferenciais com storytelling visual
- Etapas do processo / metodologia
- Conteúdo editorial para reforçar posicionamento da marca
- FAQ interativo
- Chamada para ação final (CTA)
- Layout responsivo e elementos com animações suaves

## Estrutura do projeto

```bash
site-mp/
├── public/
│   ├── icons/
│   ├── img/
│   └── originkit/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── originkit-section-theme.css
│   ├── components/
│   │   ├── accordion.tsx
│   │   ├── cta.tsx
│   │   ├── editorial.tsx
│   │   ├── footerr.tsx
│   │   ├── navbar.tsx
│   │   ├── secPassos.tsx
│   │   ├── secProjects.tsx
│   │   ├── secWorld.tsx
│   │   ├── scrollPorqueNos.tsx
│   │   ├── whyUs.tsx
│   │   └── originkit/
│   └── lib/
│       ├── useInView.tsx
│       └── utils.ts
├── .eslintrc.*
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
└── next-env.d.ts
```

## Requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js 20+
- npm, pnpm, yarn ou bun
- Git

## Instalação

Clone o projeto:

```bash
git clone <url-do-repositorio>
cd site-mp
```

Instale as dependências:

```bash
npm install
```

## Executando o projeto

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```bash
http://localhost:3000
```

## Scripts disponíveis

No arquivo `package.json`, os scripts principais são:

```bash
npm run dev     # inicia o servidor em modo desenvolvimento
npm run build   # gera a build de produção
npm run start   # inicia a aplicação em produção
npm run lint    # executa a checagem lint do projeto
```

## Como a página está organizada

A landing page está centralizada em `src/app/page.tsx`, onde as principais seções são montadas:

- `inicio`
- `world`
- `solucoes`
- `diferenciais`
- `processo`
- `editorial`
- `cta`
- `footer`

Cada bloco é importado de um componente específico dentro de `src/components` e pode ser customizado individualmente.

## Personalização

### Alterar textos e conteúdo

Os textos principais da landing page estão distribuídos entre os componentes em `src/components`. Para atualizar:

- navegação: `src/components/navbar.tsx`
- hero: `src/components/originkit/hero-11.tsx`
- soluções/projetos: `src/components/secProjects.tsx`
- diferenciais: `src/components/scrollPorqueNos.tsx`
- processo: `src/components/secPassos.tsx`
- CTA: `src/components/cta.tsx`
- footer: `src/components/footerr.tsx`

### Alterar branding e fontes

As fontes globais e metadados da aplicação estão em `src/app/layout.tsx`.

### Ajustar estilos gerais

Os estilos globais e temas visuais podem ser alterados em:

- `src/app/globals.css`
- `src/app/originkit-section-theme.css`
- `src/app/originkit-section-themes.css`

## Deploy

O projeto pode ser implantado em plataformas como:

- Vercel
- Netlify
- Railway
- Docker + servidor Node

Para Vercel, o processo mais simples é conectar o repositório ao painel e configurar a build padrão do Next.js.

## Boas práticas

- Sempre rode `npm run build` antes de fazer deploy
- Manter textos e imagens alinhados com a identidade da marca
- Testar a responsividade em telas mobile, tablet e desktop
- Revisar SEO e metadata para melhorar posicionamento orgânico

## Observações

Este projeto utiliza componentes customizados e animações avançadas para criar uma experiência premium. O projeto foi desenvolvido como landing page institucional, então a lógica está mais focada em apresentação e conversão do que em back-end ou autenticação.

## Licença

Este projeto não possui um arquivo de licença definido no repositório.

## Autor

MP Technologies

## Dúvidas e manutenção

Para continuar evoluindo a landing page, os próximos passos mais comuns são:

1. integrar formulário de contato real
2. conectar analytics e pixel de conversão
3. melhorar SEO e schema markup
4. criar versões específicas para campanhas
5. adicionar blog, estudo de caso ou páginas internas

Se você quiser, também posso criar uma segunda versão deste README em inglês, ou transformar esse README em um formato mais profissional para apresentação para cliente ou portfólio.
