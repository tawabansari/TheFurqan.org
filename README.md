# TheFurqan.org

A multilingual Qur’an learning platform with concise reflections, interactive Arabic words, and root studies. Independent and noncommercial, promoting thoughtful understanding, peace, and interfaith coexistence. Built with Astro.

## Development

Minimal static Astro foundation; homepage design and content are still to be developed.

Use Node.js 24.19.0 (also specified in `.node-version`).

```sh
npm ci
npm run dev
```

`npm run build` generates `dist/`. `npm run preview` previews that build.

## Cloudflare Pages

- Production branch: `main`
- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root
- Environment variables: none required

The initial page requests no search indexing. This is not access protection.
Licensing for original content and source code is pending; third-party dependencies retain their own licences.

## Homepage foundation

- `/en/`, `/fa/`, `/ar/`: shared homepage with localized draft copy.
- `src/data/locales.ts`: language names and UI/content strings.
- `src/styles/global.css`: shared semantic theme colors, typography and responsive layout.
- `src/components/Quotation.astro`: separate Qur’an, hadith and other quotation treatments, with mandatory labels and references.
- Theme and six text sizes (80–130%) persist locally in the browser; no account required.
- Search currently finds section entries and recognizes verse references. Chapter/verse selection validates against chapter lengths. Reading content, topic/root indexing, bookmarks and reading history are not yet implemented; the UI identifies these as unavailable.
- Homepage copy is a design draft and needs editorial review in each language.
- Fonts are self-hosted; their individual OFL notices are in `public/fonts/`.

Change shared theme variables rather than adding page-specific light/dark overrides. Keep quotation labels visible: color alone must never identify scripture.
