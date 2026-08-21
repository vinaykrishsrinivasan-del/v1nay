import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { themes, type ThemeId, setStoredTheme, getStoredTheme, applyTheme } from "@/lib/theme";
import {
  loadSettings,
  saveSettings,
  exportSettings,
  importSettings,
  tabCloakPresets,
  applyTabCloak,
  type SiteSettings,
} from "@/lib/settings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/s")({
  head: () => ({
    meta: [
      { title: "Settings — Reds Exploit Corner" },
      { name: "description", content: "Customize your portal experience." },
      { property: "og:title", content: "Settings — Reds Exploit Corner" },
      { property: "og:description", content: "Customize your portal experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/s" }],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>({});
  const [importText, setImportText] = useState("");
  const [importError, setImportError] = useState(false);

  useEffect(() => {
    const s = loadSettings();
    setSettings(s);
    applyTheme((s.theme as ThemeId) ?? getStoredTheme());
  }, []);

  function update(patch: Partial<SiteSettings>) {
    const next = { ...settings, ...patch };
    setSettings(next);
    saveSettings(next);
    if (patch.theme) setStoredTheme(patch.theme as ThemeId);
    if ("tab" in patch) applyTabCloak(next.tab);
  }

  function handleAboutBlank() {
    const enabled = !settings.aboutBlank;
    update({ aboutBlank: enabled });
    if (enabled) openAboutBlank();
  }

  function openAboutBlank() {
    if (typeof window === "undefined") return;
    const popup = window.open("about:blank", "_blank");
    if (!popup || popup.closed) {
      alert("Please allow popups and redirects for about:blank cloak to work.");
      return;
    }
    popup.document.title = "My Drive - Google Drive";
    const link = popup.document.createElement("link");
    link.rel = "icon";
    link.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
    popup.document.head.appendChild(link);
    const iframe = popup.document.createElement("iframe");
    iframe.src = window.location.href;
    iframe.style.position = "fixed";
    iframe.style.inset = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    popup.document.body.appendChild(iframe);
  }

  function handleImport() {
    const ok = importSettings(importText);
    setImportError(!ok);
    if (ok) {
      const s = loadSettings();
      setSettings(s);
      applyTheme((s.theme as ThemeId) ?? getStoredTheme());
      applyTabCloak(s.tab);
      setImportText("");
    }
  }

  return (
    <main className="min-h-screen px-4 pt-28 pb-24">
      <div className="mx-auto grid max-w-4xl gap-8">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>

        {/* Theme */}
        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold text-card-foreground">Theme</h2>
          <p className="text-sm text-muted-foreground">Choose the site colors.</p>
          <div className="mt-4">
            <Select value={settings.theme ?? "default"} onValueChange={(v) => update({ theme: v })}>
              <SelectTrigger className="w-full sm:w-72">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                {themes.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Tab cloak */}
        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold text-card-foreground">Tab cloak</h2>
          <p className="text-sm text-muted-foreground">Change the tab title and icon.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tabCloakPresets.map((preset) => (
              <Button
                key={preset.label}
                variant="outline"
                size="sm"
                onClick={() => update({ tab: { title: preset.title, icon: preset.icon } })}
              >
                {preset.label}
              </Button>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="custom-title">Custom title</Label>
              <Input
                id="custom-title"
                value={settings.tab?.title ?? ""}
                onChange={(e) => update({ tab: { ...settings.tab, title: e.target.value } })}
                placeholder="Tab title"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="custom-icon">Custom icon URL</Label>
              <Input
                id="custom-icon"
                value={settings.tab?.icon ?? ""}
                onChange={(e) => update({ tab: { ...settings.tab, icon: e.target.value } })}
                placeholder="https://example.com/favicon.ico"
                className="mt-1"
              />
            </div>
          </div>
        </section>

        {/* About:blank */}
        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold text-card-foreground">About:blank</h2>
          <p className="text-sm text-muted-foreground">Open the site in a hidden tab.</p>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch
                id="about-blank"
                checked={settings.aboutBlank ?? false}
                onCheckedChange={handleAboutBlank}
              />
              <Label htmlFor="about-blank">Enable popup mode</Label>
            </div>
            <Button variant="outline" onClick={openAboutBlank}>
              Open popup
            </Button>
          </div>
        </section>

        {/* Panic key */}
        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold text-card-foreground"> Panic key</h2>
          <p className="text-sm text-muted-foreground">Set a quick exit key and destination.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="panic-key">Key</Label>
              <Input
                id="panic-key"
                value={settings.panicKey ?? ""}
                onChange={(e) => update({ panicKey: e.target.value })}
                placeholder="e.g. `"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="panic-link">Exit URL</Label>
              <Input
                id="panic-link"
                value={settings.panicLink ?? ""}
                onChange={(e) => update({ panicLink: e.target.value })}
                placeholder="https://google.com"
                className="mt-1"
              />
            </div>
          </div>
        </section>

        {/* Save data */}
        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold text-card-foreground">Save data</h2>
          <p className="text-sm text-muted-foreground">Import or export browser settings.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() => {
                const blob = new Blob([exportSettings()], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "gms-settings.json";
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              Export data
            </Button>
          </div>
          <div className="mt-4 grid gap-2">
            <Textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Paste exported JSON here"
            />
            {importError && <p className="text-sm text-destructive">Invalid JSON.</p>}
            <Button variant="outline" onClick={handleImport}>
              Import data
            </Button>
          </div>
        </section>

        {/* Site info */}
        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold text-card-foreground">Site info</h2>
          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-card-foreground">Updated:</span> August 08, 2026
            </p>
            <p>
              <span className="font-medium text-card-foreground">Version:</span> 3.1.0
            </p>
            <p>
              <span className="font-medium text-card-foreground">Support:</span>{" "}
              <a
                href="https://discord.gg/vV7mkcPhMy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Discord
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
