import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { QuickLinks } from "@/components/QuickLinks";
import { taglines } from "@/data/taglines";
import { randomTagline } from "@/lib/site-helpers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reds Exploit Corner" },
      { name: "description", content: "Games, apps, and media — all in one place." },
      { property: "og:title", content: "Reds Exploit Corner" },
      { property: "og:description", content: "Games, apps, and media — all in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const [tagline, setTagline] = useState(taglines[0]);

  useEffect(() => {
    setTagline(randomTagline(taglines));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-28 pb-24">
      <h1 className="text-center text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl">
        V
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground">{tagline}</p>

      <div className="mt-10 w-full px-4">
        <SearchBar placeholder="Search Google or Enter a Link" />
      </div>

      <div className="mt-10 w-full">
        <QuickLinks />
      </div>
    </main>
  );
}
