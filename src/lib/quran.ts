import master from "../data/quran-uthmani.txt?raw";
// Preserve the supplied Tanzil Uthmani Minimal master verbatim.
const verses = new Map<string, string>();
for (const line of master.split(/\r?\n/)) {
  const match = line.match(/^(\d+)\|(\d+)\|(.+)$/);
  if (match) {
    const key = `${match[1]}:${match[2]}`;
    if (verses.has(key)) throw new Error(`Duplicate Quran verse ${key}`);
    verses.set(key, match[3]);
  }
}
if (verses.size !== 6236) throw new Error("Incomplete Quran master");
export function quranText(reference: string, excerpt?: string): string {
  const text = verses.get(reference);
  if (!text) throw new Error(`Unknown Quran verse ${reference}`);
  if (excerpt && !text.includes(excerpt))
    throw new Error(`Excerpt differs from master: ${reference}`);
  return excerpt || text;
}
export function renderQuran(content: string): string {
  return content.replace(
    /\{\{quran:(\d+:\d+)(?:\|([^}]+))?\}\}/g,
    (_, reference, excerpt) => quranText(reference, excerpt),
  );
}
