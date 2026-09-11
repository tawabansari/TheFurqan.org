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
