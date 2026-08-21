import { createFileRoute } from "@tanstack/react-router";
import { QuickLinks } from "@/components/QuickLinks";

export const Route = createFileRoute("/d")({
  head: () => ({
    meta: [
      { title: "Dashboard — Reds Exploit Corner" },
      { name: "description", content: "Your favorite shortcuts in one place." },
      { property: "og:title", content: "Dashboard — Reds Exploit Corner" },
      { property: "og:description", content: "Your favorite shortcuts in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/d" }],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-28 pb-24">
      <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">Quick access to your go-to links.</p>
      <div className="mt-10 w-full max-w-3xl">
        <QuickLinks />
      </div>
    </main>
  );
}
