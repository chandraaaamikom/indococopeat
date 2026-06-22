# INDOCOCOPEAT Website

Official static website for INDOCOCOPEAT / PT. Abbasy Jaya Makmur, a premium Indonesian cocopeat and coconut fiber export brand.

The site is built as a private multi-page Astro website. Visitors enter through an access-code page, then continue to Home, Products, Farm, and Contact pages.

## Tech Stack

- Astro
- TypeScript
- CSS custom design system
- Static site output
- No backend
- No database

## Demo Access

Access code:

```text
INDOCO2024
```

The access session is stored in `localStorage` with the key `indococopeat_access`.

## Routes

```text
/access    Private access validation
/          Home
/products  Product catalog
/farm      Our farm and supply chain
/contact   Contact
```

Legacy redirects:

```text
/home      Redirects to /
/product   Redirects to /products
```

## Install

```sh
npm install
```

## Run Local

```sh
npm run dev
```

The local dev server usually runs at:

```text
http://localhost:4321
```

## Build

```sh
npm run build
```

The production output is generated in:

```text
dist/
```

## Preview Build

```sh
npm run preview
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Astro settings:
   - Framework Preset: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

No backend or environment variables are required for the current static access-code flow.

## Folder Structure

```text
/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   └── Navbar.astro
│   ├── config/
│   │   └── access.ts
│   ├── data/
│   │   ├── company.ts
│   │   ├── farms.ts
│   │   ├── products.ts
│   │   └── social.ts
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── access.astro
│   │   ├── contact.astro
│   │   ├── farm.astro
│   │   ├── home.astro
│   │   ├── index.astro
│   │   ├── product.astro
│   │   └── products.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```
