import { Link } from "@tanstack/react-router";
import type { MediaItem } from "@/data/media";
import { Star } from "lucide-react";

interface MediaCardProps {
  item: MediaItem;
}

export function MediaCard({ item }: MediaCardProps) {
  return (
    <Link
      to={item.type === "movie" ? "/movie" : "/tv"}
      search={{ id: item.id }}
      className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-2 transition-all hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-muted">
        <img
          src={item.poster}
          alt={item.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="px-1">
        <h3 className="line-clamp-1 text-sm font-semibold text-card-foreground">{item.title}</h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-0.5 text-accent">
            <Star className="h-3 w-3 fill-current" />
            {item.rating.toFixed(1)}
          </span>
          <span>{item.year}</span>
          <span className="ml-auto uppercase">{item.type}</span>
        </div>
      </div>
    </Link>
  );
}
