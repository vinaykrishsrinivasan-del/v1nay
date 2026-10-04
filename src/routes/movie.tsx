import { createFileRoute, useSearch } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/movie")({
  head: () => ({
    meta: [
      { title: "Movie — Reds Exploit Corner" },
      { name: "description", content: "Watch a movie." },
      { property: "og:title", content: "Movie — Reds Exploit Corner" },
      { property: "og:description", content: "Watch a movie." },
      { property: "og:type", content: "video.movie" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/movie" }],
  }),
  component: MoviePage,
});

function MoviePage() {
  const { id } = useSearch({ from: "/movie" }) as { id?: string };
  const src = id ? `https://55gms.com/misc/media/movie.html?id=${id}` : "";

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
        <h1 className="text-lg font-semibold text-card-foreground">Movie</h1>
      </div>
      {src ? (
        <iframe
          src={src}
          title="Movie player"
          className="w-full flex-1 border-0"
          allow="fullscreen"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      ) : (
        <div className="flex flex-1 items-center justify-center text-muted-foreground">
          No movie selected.
        </div>
      )}
    </main>
  );
}
