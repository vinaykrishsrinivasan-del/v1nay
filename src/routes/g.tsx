import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import games from "@/data/games.json";
import { GameCard } from "@/components/GameCard";
import { LoadingProgress } from "@/components/LoadingProgress";
import type { GameItem } from "@/lib/site-types";

export const Route = createFileRoute("/g")({
  head: () => ({
    meta: [
      { title: "Games — Reds Exploit Corner" },
      { name: "description", content: "Browse and play hundreds of games." },
      { property: "og:title", content: "Games — Reds Exploit Corner" },
      { property: "og:description", content: "Browse and play hundreds of games." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/g" }],
  }),
  component: GamesPage,
});

function GamesPage() {
  const [query, setQuery] = useState("");
  const [loaded, setLoaded] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return games as GameItem[];
    return (games as GameItem[]).filter((g) => g.name.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    setLoaded(0);
  }, [filtered.length]);

  return (
    <main className="min-h-screen px-4 pt-28 pb-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-foreground">Games</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search through our ${games.length} games`}
          autoComplete="off"
          className="mt-4 h-12 w-full rounded-xl border border-input bg-muted/50 px-4 text-foreground placeholder:text-muted-foreground/60 focus:border-ring focus:bg-background focus:outline-none focus:ring-2 focus:ring-ring/50 sm:max-w-md"
        />

        <div className="mt-6">
          <LoadingProgress total={filtered.length} loaded={loaded} />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {filtered.map((game) => (
            <GameCard key={game.name} game={game} />
          ))}
        </div>
      </div>
    </main>
  );
}
