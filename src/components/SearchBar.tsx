import { useState, FormEvent } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export function SearchBar({ placeholder = "Search...", onSearch, className = "" }: SearchBarProps) {
  const [query, setQuery] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    if (onSearch) {
      onSearch(trimmed);
      return;
    }

    // Default behavior: URL -> navigate, otherwise Google search
    const isUrl = /^https?:\/\//i.test(trimmed) || /^[a-z0-9-]+\.[a-z]{2,}/i.test(trimmed);
    if (isUrl) {
      const url = trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
      window.location.href = url;
    } else {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(trimmed)}`;
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`relative w-full max-w-2xl ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="h-14 w-full rounded-xl border border-input bg-muted/50 px-5 pl-12 text-center text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-ring focus:bg-background focus:outline-none focus:ring-2 focus:ring-ring/50"
      />
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
    </form>
  );
}
