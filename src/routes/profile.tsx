import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Reds Exploit Corner" },
      { name: "description", content: "Your profile." },
      { property: "og:title", content: "Profile — Reds Exploit Corner" },
      { property: "og:description", content: "Your profile." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/profile" }],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-28 pb-24">
      <h1 className="text-3xl font-bold text-foreground">Profile</h1>
      <p className="mt-2 text-muted-foreground">Profiles are coming soon.</p>
    </main>
  );
}
