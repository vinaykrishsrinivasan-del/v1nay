import type { AppItem } from "@/lib/site-types";
import { resolveImageUrl } from "@/lib/site-helpers";

interface AppCardProps {
  app: AppItem;
}

export function AppCard({ app }: AppCardProps) {
  const href = app.url.startsWith("http")
    ? app.url
    : `https://55gms.com${app.url.startsWith("/") ? "" : "/"}${app.url}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 transition-all hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted p-2">
        <img
          src={resolveImageUrl(app.image)}
          alt={app.name}
          className="h-full w-full object-contain transition-transform group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <span className="line-clamp-1 text-center text-sm font-medium text-card-foreground">
        {app.name}
      </span>
    </a>
  );
}
