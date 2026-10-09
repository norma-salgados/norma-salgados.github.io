# Norma Salgados

Site single page (Astro 5 + TypeScript) em português (padrão), inglês e japonês.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/ (site estático)
```

Rotas: `/` (PT), `/en/`, `/ja/`.

## Onde editar

- **Telefone / WhatsApp / logo:** `src/config/site.ts`
- **Salgados do cardápio (e fotos):** `src/config/menu.ts`
- **Textos e traduções:** `src/i18n/ui.ts`
- **Cores e estilo:** `src/styles/global.css`

## Adicionando imagens

1. Fotos dos salgados em `public/images/salgados/` (ex.: `coxinha.jpg`) e, em `src/config/menu.ts`:
   `{ id: 'coxinha', image: '/images/salgados/coxinha.jpg' }`
2. Logo em `public/images/logo.png` e, em `src/config/site.ts`: `logo: '/images/logo.png'`.
   Troque também `public/favicon.svg` se quiser.
