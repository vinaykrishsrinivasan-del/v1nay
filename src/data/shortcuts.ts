export interface Shortcut {
  name: string;
  href: string;
  image: string;
  external?: boolean;
}

export const shortcuts: Shortcut[] = [
  { name: "Dashboard", href: "/d", image: "https://55gms.com/img/shortcuts/Dashboard.webp" },
  { name: "Discord", href: "https://discord.com", image: "https://55gms.com/img/shortcuts/dc.webp", external: true },
  { name: "ESPN", href: "https://www.espn.com/watch/", image: "https://55gms.com/img/shortcuts/ESPN.webp", external: true },
  { name: "FreeGPT", href: "https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1", image: "https://55gms.com/img/shortcuts/freegpt.webp", external: true },
  { name: "GitHub", href: "https://github.com", image: "https://55gms.com/img/shortcuts/GitHub.webp", external: true },
  { name: "Google", href: "https://google.com", image: "https://55gms.com/img/shortcuts/Google.webp", external: true },
  { name: "Now.gg", href: "https://nowgg.lol", image: "https://55gms.com/img/shortcuts/nowgg.webp", external: true },
  { name: "GMS Movies", href: "/-", image: "https://55gms.com/img/shortcuts/gmsmovies.webp" },
  { name: "TikTok", href: "https://tiktok.com", image: "https://55gms.com/img/shortcuts/tt.webp", external: true },
  { name: "Twitch", href: "https://twitch.tv", image: "https://55gms.com/img/shortcuts/Twitch.webp", external: true },
];
