import { Link } from "@tanstack/react-router";
import { shortcuts } from "@/data/shortcuts";
import { resolveImageUrl } from "@/lib/site-helpers";

export function QuickLinks() {
  return (
    <div className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-5">
      {shortcuts.map((item) => {
        const content = (
          <div className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 transition-all hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10">
            <img
              src={resolveImageUrl(item.image)}
              alt={item.name}
              className="h-12 w-12 rounded-lg object-cover"
              loading="lazy"
            />
            <span className="text-xs font-medium text-card-foreground">{item.name}</span>
          </div>
        );

        if (item.external) {
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {content}
            </a>
          );
        }

        if (item.href === "/-") {
          return (
            <Link key={item.name} to="/$" params={{ _splat: "-" }} className="block">
              {content}
            </Link>
          );
        }

        return (
          <Link key={item.name} to={item.href} className="block">
            {content}
          </Link>
        );
      })}
    </div>
  );
}
