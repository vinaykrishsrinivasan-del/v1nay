import { createFileRoute } from "@tanstack/react-router";
import { sampleMedia } from "@/data/media";
import { MediaCard } from "@/components/MediaCard";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Movies/TV — Reds Exploit Corner" },
      { name: "description", content: "Trending movies and TV shows." },
      { property: "og:title", content: "Movies/TV — Reds Exploit Corner" },
      { property: "og:description", content: "Trending movies and TV shows." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/-" }],
  }),
  component: MediaPage,
});

export function MediaPage() {
  return (
    <main className="min-h-screen px-4 pt-28 pb-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-foreground">Movies / TV</h1>
        <p className="mt-2 text-muted-foreground">Trending titles. Click any to watch.</p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {sampleMedia.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
