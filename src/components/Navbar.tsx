import { Link, useLocation } from "@tanstack/react-router";
import { Gamepad2, Box, Tv, Settings, MessageSquare, User } from "lucide-react";

const mediaPath = "/-";

const navItems = [
  { to: "/g", label: "Games", icon: Gamepad2 },
  { to: "/a", label: "Apps", icon: Box },
  { to: "/$", label: "Media", icon: Tv, params: { _splat: "-" }, match: mediaPath },
  { to: "/s", label: "Settings", icon: Settings },
];

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Reds Exploit Corner
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === (item.match ?? item.to);
            return (
            <Link
              key={item.to + (item.match ?? "")}
              to={item.to}
              {...(item.params ? { params: item.params } : {})}
              className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <Link
            to="/chat"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title="Chat"
          >
            <MessageSquare className="h-5 w-5" />
          </Link>
          <Link
            to="/profile"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title="Profile"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Mobile nav strip */}
      <div className="flex items-center justify-around border-t border-border/50 px-2 pb-2 md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === (item.match ?? item.to);
          return (
            <Link
              key={item.to + (item.match ?? "")}
              to={item.to}
              {...(item.params ? { params: item.params } : {})}
              className={`flex flex-col items-center gap-0.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
