import { Link } from "@tanstack/react-router";
import type { GameItem } from "@/lib/site-types";
import { resolveImageUrl, resolveGameHref } from "@/lib/site-helpers";

interface GameCardProps {
  game: GameItem;
}

export function GameCard({ game }: GameCardProps) {
  const href = resolveGameHref(game);

  return (
    <Link
      to={href}
      className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 transition-all hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
        <img
          src={resolveImageUrl(game.image)}
          alt={game.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <span className="line-clamp-1 text-center text-sm font-medium text-card-foreground">
        {game.name}
      </span>
    </Link>
  );
}
