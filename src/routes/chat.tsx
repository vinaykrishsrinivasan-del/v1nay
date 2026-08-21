import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "Chat — Reds Exploit Corner" },
      { name: "description", content: "Chat with other users." },
      { property: "og:title", content: "Chat — Reds Exploit Corner" },
      { property: "og:description", content: "Chat with other users." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/chat" }],
  }),
  component: ChatPage,
});

function ChatPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-28 pb-24">
      <h1 className="text-3xl font-bold text-foreground">Chat</h1>
      <p className="mt-2 text-muted-foreground">Chat is coming soon.</p>
    </main>
  );
}
