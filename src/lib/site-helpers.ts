import type { GameItem } from "./site-types";

export function resolveImageUrl(src: string): string {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("//")) return `https:${src}`;
  const base = "https://55gms.com";
  return `${base}${src.startsWith("/") ? "" : "/"}${src}`;
}

export function resolveGameHref(game: GameItem): string {
  if (game.url) {
    if (game.url.startsWith("http")) return `/play?url=${encodeURIComponent(game.url)}`;
    return `/play?url=${encodeURIComponent(`https://55gms.com${game.url.startsWith("/") ? "" : "/"}${game.url}`)}`;
  }
  const gameLink = game.image.split("/").filter(Boolean).at(-2) ?? "";
  if (gameLink) {
    return `/play?title=${encodeURIComponent(game.name)}&author=${encodeURIComponent(game.author ?? "")}&link=${encodeURIComponent(gameLink)}`;
  }
  return "#";
}

export function randomTagline(taglines: string[]): string {
  return taglines[Math.floor(Math.random() * taglines.length)] ?? "";
}
