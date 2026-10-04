import { createFileRoute, useSearch } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tv")({
  head: () => ({
    meta: [
      { title: "TV Show — Reds Exploit Corner" },
      { name: "description", content: "Watch a TV show." },
      { property: "og:title", content: "TV Show — Reds Exploit Corner" },
      { property: "og:description", content: "Watch a TV show." },
      { property: "og:type", content: "video.tv_show" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tv" }],
  }),
  component: TvPage,
});

function TvPage() {
  const { id } = useSearch({ from: "/tv" }) as { id?: string };
  const src = id ? `https://55gms.com/misc/media/tv.html?id=${id}` : "";

  return (
    <main className="flex min-h-screen flex-col pt-20">
      <div className="flex items-center gap-3 border-b border-border bg-card px-4 py-3">
        <Link
          to="/$"
          params={{ _splat: "-" }}
          className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <h1 className="text-lg font-semibold text-card-foreground">TV Show</h1>
      </div>
      {src ? (
        <iframe
          src={src}
          title="TV player"
          className="w-full flex-1 border-0"
          allow="fullscreen"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      ) : (
        <div className="flex flex-1 items-center justify-center text-muted-foreground">
          No show selected.
        </div>
      )}
    </main>
  );
}
