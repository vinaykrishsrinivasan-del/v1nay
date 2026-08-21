export const themes = [
  { id: "default", label: "Black / Red / Gold" },
  { id: "legacy", label: "Legacy Blue" },
  { id: "midnight", label: "Midnight" },
  { id: "forest", label: "Forest" },
  { id: "sunset", label: "Sunset" },
  { id: "contrast", label: "High Contrast" },
];

export type ThemeId = (typeof themes)[number]["id"];

export function getStoredTheme(): ThemeId {
  if (typeof window === "undefined") return "default";
  const raw = window.localStorage.getItem("siteTheme");
  const allowed = new Set(themes.map((t) => t.id));
  if (raw === "classic") return "legacy";
  return allowed.has(raw as ThemeId) ? (raw as ThemeId) : "default";
}

export function setStoredTheme(theme: ThemeId) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("siteTheme", theme);
  applyTheme(theme);
}

export function applyTheme(theme: ThemeId) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset["theme"] = theme;
  document.documentElement.classList.add("dark");
}
