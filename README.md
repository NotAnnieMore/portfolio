# Ivo Camacho — Portfolio

Source code for [ivocamacho.com](https://ivocamacho.com), a bilingual professional portfolio built as a static React application.

## Stack

- React and TypeScript
- Vite
- Tailwind CSS
- React Router
- i18next and react-i18next
- Lucide React

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
npm run preview
```

## Static deployment

`npm run build` creates the production output in `dist/`. Upload the contents of that directory to the document root configured for `ivocamacho.com` in OVHcloud.

The `.htaccess` file included in `public/` is copied to `dist/` and provides the fallback required for client-side routes such as `/en/projects` and `/pt/about`.

## Project context

Product, design, content, accessibility, and workflow requirements are versioned in [`docs/context`](docs/context).

