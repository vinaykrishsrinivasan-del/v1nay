import { createFileRoute, useSearch } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/play")({
  head: () => ({
    meta: [
      { title: "Play — Reds Exploit Corner" },
      { name: "description", content: "Play your favorite game." },
      { property: "og:title", content: "Play — Reds Exploit Corner" },
      { property: "og:description", content: "Play your favorite game." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/play" }],
  }),
  component: PlayPage,
});

function PlayPage() {
  const { title, author, link, url } = useSearch({ from: "/play" }) as {
    title?: string;
    author?: string;
    link?: string;
    url?: string;
  };

  let src = "";
  if (url) {
    src = url;
  } else if (link) {
    src = `https://55gms.com/misc/play/?title=${encodeURIComponent(title ?? "")}&author=${encodeURIComponent(
      author ?? "",
    )}&link=${encodeURIComponent(link)}`;
  }

  const displayTitle = title || "Game";

  return (
    <main className="flex min-h-screen flex-col pt-20">
      <div className="flex items-center gap-3 border-b border-border bg-card px-4 py-3">
        <Link
          to="/g"
          className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <h1 className="text-lg font-semibold text-card-foreground">{displayTitle}</h1>
      </div>
      {src ? (
        <iframe
          src={src}
          title={displayTitle}
          className="w-full flex-1 border-0"
          allow="fullscreen"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      ) : (
        <div className="flex flex-1 items-center justify-center text-muted-foreground">
          No game URL provided.
        </div>
      )}
    </main>
  );
}
