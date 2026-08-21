import { createFileRoute, useLocation } from "@tanstack/react-router";
import { MediaPage } from "./media";

export const Route = createFileRoute("/$")({
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
  component: CatchAllPage,
});

function CatchAllPage() {
  const { pathname } = useLocation();
  if (pathname === "/-") {
    return <MediaPage />;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-28 pb-24">
      <h1 className="text-7xl font-bold text-foreground">404</h1>
      <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
    </main>
  );
}
