# Content data

This directory contains language-neutral, factual portfolio data. Editorial copy belongs in the translation resources under `src/i18n/locales`.

## Adding a project

1. Confirm that the project should be public and whether it is featured.
2. Add one `Project` entry to `projects.ts` with a stable ID and slug.
3. Add matching English and Portuguese copy using the same `translationKey`.
4. Add optimised screenshots with explicit dimensions and translated alt text.
5. Verify every technology, link, decision, challenge, and outcome with the project owner.
6. Test its index preview and case study in both languages, themes, and responsive layouts.

Dates use ISO-style values (`YYYY` or `YYYY-MM`) in data and are formatted for the active locale in the UI.

