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

## Search roadmap and editorial conventions

Search has its own future development phase. Keep search data local to this project. Plan shared identifiers for verses, roots and topics; independently authored language versions; multilingual aliases, common translations and spelling variants. Ranking should favor the page language without excluding strong matches in other languages. Search aliases are discovery aids, not assertions of correct translations. Advanced matching is not implemented yet.

In English, the definite article is part of divine names: write **The God** and **The One God** with capitalized **The**.

The search panel presents chapter/verse navigation, filters (All initially selected), the query, then results. Filter hints change without clearing the query. Verse numbers are corrected to the chapter range on blur or submission, with a localized explanation.

## Introduction, methodology and verse references

The English and Farsi introduction and methodology were adapted from the original Forqan source files. Their prose is in `src/content/`; legacy styles and scripts were not imported. Arabic editions are adapted from the Farsi prose. In Arabic, Quran quotations use the master text directly without a translation beneath; commentary remains separate.

Keep the introduction address `/[lang]/introduction/`, with the descriptive heading “About The Furqan.” The methodology lives at `/[lang]/methodology/`; both lead to `/[lang]/chapters/`.

All 114 chapters have placeholder pages per language. The 11 distinct cited verses currently have placeholders generated from `src/data/references.json`. Add further references there until the complete verse corpus is introduced. A verse uses `/[lang]/[chapter]/[verse]/`; its chapter anchor is `#verse-[verse]`. Reference links are ordinary anchors enhanced with a preview dialog. Modified clicks remain normal browser navigation.

Invocation rule: English **By name of The God, The Merciful, The Compassionate**; Farsi **به نام آن معبود یگانه فرابخشاینده فرامهربان**.

Development `noindex` remains enabled. Review it before public launch; a page title alone does not make content indexable.

## Quran text source

All Arabic Quran quotations must come from `src/data/quran-uthmani.txt`, the user-supplied Tanzil Uthmani Minimal 1.1 master. Preserve spelling, marks, and its copyright block exactly. Use `quranText("3:7")` in Astro or `{{quran:3:7}}` in imported article HTML, rendered through `renderQuran`. Excerpts must be exact substrings of the master and labeled as excerpts. Never paste alternate Quran text into content or use quotation slots for Quran text. Some chapter-opening records include the basmala; do not silently remove it.

Source: [Tanzil Project](https://tanzil.net), Copyright 2007–2026, Creative Commons Attribution 3.0 with the supplied verbatim-use notice. Article translations are separate editorial content.
