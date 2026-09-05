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

## Updating the CVs

The website uses stable public paths:

- `/cv/ivo-camacho-cv-en.pdf`
- `/cv/ivo-camacho-cv-pt.pdf`

For a normal versioned update, replace the corresponding file in `public/cv/`, commit the change, run the validation commands, and deploy the new `dist/` output.

For an urgent CV-only update on OVHcloud, the matching PDF can instead be replaced directly in the deployed `/cv/` directory. No JavaScript or CSS rebuild is required when the filename remains unchanged. The replacement should still be copied back into `public/cv/` and committed afterwards so the repository remains the source of truth.

## Project context

Product, design, content, accessibility, and workflow requirements are versioned in [`docs/context`](docs/context).
