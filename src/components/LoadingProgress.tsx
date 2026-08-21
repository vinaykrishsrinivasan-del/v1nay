import { useEffect, useState } from "react";

interface LoadingProgressProps {
  total: number;
  loaded: number;
}

export function LoadingProgress({ total, loaded }: LoadingProgressProps) {
  const [visible, setVisible] = useState(true);
  const pct = total > 0 ? Math.round((loaded / total) * 100) : 0;

  useEffect(() => {
    if (loaded >= total && total > 0) {
      const t = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [loaded, total]);

  if (!visible) return null;

  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-border bg-card p-4 text-center">
      <p className="text-sm font-medium text-card-foreground">Loading {total} items…</p>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{pct}%</p>
    </div>
  );
}
