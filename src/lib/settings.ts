export interface TabCloak {
  title?: string;
  icon?: string;
}

export interface SiteSettings {
  theme?: string;
  tab?: TabCloak;
}

const STORAGE_KEY = "gms-settings-v1";

export const tabCloakPresets: { label: string; title: string; icon: string }[] = [
  { label: "Google Classroom", title: "Home", icon: "https://ssl.gstatic.com/classroom/favicon.png" },
  { label: "Google Drive", title: "My Drive - Google Drive", icon: "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png" },
  { label: "Gmail", title: "Inbox", icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" },
  { label: "Google Search", title: "Google", icon: "https://www.google.com/favicon.ico" },
  { label: "Canvas", title: "Dashboard", icon: "https://55gms.com/img/favicon.ico" },
  { label: "Khan Academy", title: "Khan Academy", icon: "https://www.khanacademy.org/favicon.ico" },
  { label: "Wikipedia", title: "Wikipedia", icon: "https://en.wikipedia.org/static/favicon/wikipedia.ico" },
  { label: "Zoom", title: "Zoom", icon: "https://st1.zoom.us/zoom.ico" },
];

export function loadSettings(): SiteSettings {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SiteSettings) : {};
  } catch {
    return {};
  }
}

export function saveSettings(settings: SiteSettings) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

export function exportSettings(): string {
  return JSON.stringify(loadSettings(), null, 2);
}

export function importSettings(json: string): boolean {
  try {
    const parsed = JSON.parse(json) as SiteSettings;
    saveSettings(parsed);
    return true;
  } catch {
    return false;
  }
}

export function applyTabCloak(cloak?: TabCloak) {
  if (typeof document === "undefined" || !cloak) return;
  if (cloak.title) document.title = cloak.title;
  if (cloak.icon) {
    let link = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = cloak.icon;
  }
}
