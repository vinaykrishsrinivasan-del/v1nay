import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import apps from "@/data/apps.json";
import { AppCard } from "@/components/AppCard";
import type { AppItem } from "@/lib/site-types";

export const Route = createFileRoute("/a")({
  head: () => ({
    meta: [
      { title: "Apps — Reds Exploit Corner" },
      { name: "description", content: "Browse useful apps and sites." },
      { property: "og:title", content: "Apps — Reds Exploit Corner" },
      { property: "og:description", content: "Browse useful apps and sites." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/a" }],
  }),
  component: AppsPage,
});

function AppsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return apps as AppItem[];
    return (apps as AppItem[]).filter((a) => a.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <main className="min-h-screen px-4 pt-28 pb-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-foreground">Apps</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Click here to search through our ${apps.length} apps`}
          autoComplete="off"
          className="mt-4 h-12 w-full rounded-xl border border-input bg-muted/50 px-4 text-foreground placeholder:text-muted-foreground/60 focus:border-ring focus:bg-background focus:outline-none focus:ring-2 focus:ring-ring/50 sm:max-w-md"
        />

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filtered.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </main>
  );
}
