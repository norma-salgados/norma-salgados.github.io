# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static single-page marketing site for **Norma Salgados** (Brazilian savory snacks, based in Japan). Built with Astro 7 + React 19 (via `@astrojs/react`) + TypeScript (strict). Customers order exclusively via WhatsApp — there is no backend, cart, or form. User-facing copy is in three languages; the project owner communicates in Portuguese.

## Commands

- `npm run dev` — dev server on http://localhost:4321
- `npm run build` — runs `astro check` (type-check, must report 0 errors) then `astro build` to `dist/`
- `npm run preview` — serve the built `dist/`

There are no tests or linter configured.

## Node / version constraints

Astro 7 requires Node ≥ 22.12 (the machine runs Node 24). `typescript` is kept on **6.x** because `@astrojs/check` 0.9.x only accepts TypeScript `^5 || ^6` as a peer — don't bump to TypeScript 7 until `@astrojs/check` supports it.

## Deploy

Hosted on **GitHub Pages** at `https://norma-salgados.github.io` (repo `norma-salgados.github.io`, served at the root — no `base` in the Astro config). `.github/workflows/deploy.yml` builds with `withastro/action` and publishes on every push to `main`; in the repo settings, Pages → Source must be "GitHub Actions".

## Architecture

### i18n: one component, three routes

- Locales `pt` (default, served at `/`), `en` (`/en/`), `ja` (`/ja/`) — configured in `astro.config.mjs` with `prefixDefaultLocale: false`.
- `src/pages/index.astro`, `src/pages/en/index.astro`, `src/pages/ja/index.astro` are thin wrappers that render `<Layout lang><Home lang /></Layout>`. Never duplicate markup per language.
- UI is written as **React components** (`src/components/*.tsx`): `Home.tsx` composes one component per section (`Header`, `Hero`, `MenuSection`, `DeliverySection`, `AboutSection`, `HowToOrderSection`, `ContactSection`, `Footer`), each taking `lang`. They are rendered to static HTML at build time with **no `client:*` directive, so no JS ships to the browser** — only add `client:load`/`client:visible` to a component that truly needs interactivity. `src/layouts/Layout.astro` (the `<head>`: meta, hreflang, OG, fonts) intentionally stays Astro.
- All user-visible strings live in `src/i18n/ui.ts` in a typed `Dictionary`. Adding a key means adding it to the interface and to all three locales (TypeScript enforces this). `pathFor(lang)` builds locale URLs; `htmlLang` maps to `pt-BR`/`en`/`ja`.
- `src/layouts/Layout.astro` emits per-locale `<title>`, description, canonical, `hreflang` alternates (+ `x-default`), OG/Twitter tags (`og:image` = `public/og-image.jpg`, 1200×630), and a schema.org `FoodEstablishment` JSON-LD block (address, phone, area served, menu). All absolute URLs derive from `site` in `astro.config.mjs`.
- SEO: `@astrojs/sitemap` generates `sitemap-index.xml` with hreflang; `public/robots.txt` points to it (update the URL there if the domain changes). The hero `<h1>` is the small "eyebrow" tagline (it carries the location keywords); the big slogan is a `<p class="hero__title">`.

### Business config

- `src/config/site.ts` — company name, displayed phone (`070-8972-8458`), and `whatsappNumber` in international format (`81` + number without leading `0`). `whatsappLink(message)` builds `wa.me` URLs; every CTA uses it with a pre-filled message in the current language (`whatsappMessage` / `whatsappItemMessage` in `ui.ts`).
- `src/config/menu.ts` — also holds `itemWeightGrams` (25), `priceYen` (`{ fried: 4500, frozen: 4000 }`) and `unitsPerPrice` (100): price per cento, same for every flavor, flavors can be mixed. The price box in the menu section and the JSON-LD `offers`/`priceRange` read from these; the `priceDetail` strings in `ui.ts` repeat "25 g"/"100" as text. Ordered list of menu items: `MenuItemId` is a union type that also keys `ui[lang].menu.items`, so adding a snack requires updating the union, the array, and all three translations.

### Sweets

`src/config/sweets.ts` lists the sweets (`SweetId` union keys `ui[lang].sweets.items`, same pattern as the menu). Each has its own price: brigadeiro/beijinho ¥6,000 per cento (12 g each), bolo gelado ¥3,500 whole cake. `SweetsSection` and `MenuSection` both render `MenuCard`. Bolo gelado is doce de leite with walnuts (confirmed by owner); brigadeiro/beijinho descriptions are sample copy.

### Images

- Logo: the hero uses `public/images/logo.webp` (680×784, transparent margins cropped, made with `sharp` — `sips` can't write WebP). The original PNG was deleted; if the logo changes, crop/resize the new file the same way. The header shows only the text "Norma Salgados" (no logo image, by owner's request).
- Menu/sweets photos: **originals live in `imagens-originais/{salgados,doces}/`** (outside `public/`, not deployed), named with SEO-friendly kebab-case (`coxinha-de-frango.jpg`). `npm run imagens` (`scripts/otimizar-imagens.mjs`, uses `sharp`) writes 800×600-max, 4:3 center-cropped WebP files with the same name to `public/images/{salgados,doces}/`; then point `MenuItem.image` / `SweetItem.image` at the `.webp`. Never hand-edit the files in `public/images/`. All photos are illustrative (a note is shown under each grid). The bolo gelado photo is a coconut cake while the product is doce de leite + walnuts — replace when possible.
- `imagens-originais/logo/logo-recortado.png` is the only full-res copy of the logo (transparent margins already cropped); the original uncropped PNG was deleted.
- `public/favicon.svg` is a temporary "N" icon.

### Styling

Single global stylesheet `src/styles/global.css` with CSS custom properties in `:root` (orange/brown palette, WhatsApp green for order buttons). Fonts from Google Fonts: Fraunces (display), Nunito Sans (body), Noto Sans JP as fallback for Japanese. Section anchor IDs (`#cardapio` (salgados), `#doces`, `#entrega`, `#sobre`, `#como-pedir`, `#contato`) are shared across all languages.

## Placeholder content to confirm with the owner

The menu items are confirmed by the owner (coxinha de frango, bolinho de queijo, bolinho de carne, bolinho de pizza, kibe). The salgados are **machine-made**, so never describe them as handmade / artesanal / feito à mão / 手作り. Item descriptions, "About us" text, and the Japanese translations are still sample copy that needs the owner's review.
