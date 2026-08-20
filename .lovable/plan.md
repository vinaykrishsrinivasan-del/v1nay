# Build a working 55gms-style portal (black / red / gold)

## Goal
Create a deployable TanStack Start site that mirrors the structure and browser-side behavior of https://55gms.com/ — the "Reds Exploit Corner" game/app/media portal — with a black, red, and gold color scheme. The clone will use the reference site's public game/app metadata (names, thumbnail URLs, and play links) so the grids are populated, but will not host any copyrighted game or media assets locally.

## Pages / routes

| Route | Purpose |
|-------|---------|
| `/` | Home: branded title, random tagline, search bar, quick-link shortcuts, social buttons. |
| `/games` | Games grid with live search and loading state; links to a generic play page or external URLs. |
| `/apps` | Apps grid with live search; opens external URLs. |
| `/media` | Movies/TV trending grid (sample TMDB data). |
| `/settings` | Theme picker, tab cloak presets/custom, about:blank popup cloak, panic key, import/export settings. |
| `/dashboard` | Shortcut dashboard (mirrors the `/d` page concept). |
| `/play` | Generic game player route (`/play?title=&author=&link=` or `?url=`) that embeds the target in an iframe. |
| `/movie` / `/tv` | Media detail/player routes (`?id=`) that embed the reference-style media player. |
| `/chat` / `/profile` | Placeholder routes (full backend chat/profile is out of scope for this build). |

## Shared functionality in the root layout
- Fixed top navigation: logo, Games, Apps, Media, Settings, Chat, Profile.
- Theme provider driven by `localStorage` with a black/red/gold default plus a few variants.
- Tab cloak: apply saved custom title/favicon on mount.
- Panic key listener: jump to a saved URL when the configured key is pressed.
- About:blank cloak helper: open the current route in a hidden `about:blank` popup when enabled.
- Footer social links (Discord, GitHub).

## Home page
- Large "Reds Exploit Corner" title.
- Rotating/random tagline (e.g. "55gms is better than frogiees arcade").
- Centered search bar: if input is a URL, navigate to it; otherwise perform a Google search.
- Quick-link shortcut grid: Dashboard, Discord, ESPN, FreeGPT, GitHub, Google, Now.gg, GMS Movies, TikTok, Twitch.

## Games / Apps pages
- Search input that filters the grid client-side.
- Loading progress UI when fetching the JSON dataset.
- Responsive card grid with thumbnail and title.
- Games link to `/play?title=...&author=...&link=...` (or directly to `url` when provided).
- Apps open their external URL.
- Seed data: import the reference site's public `g.json` and `apps.json` into `src/data/games.json` and `src/data/apps.json`.

## Media page
- Trending movies/TV grid with poster, rating, and year.
- Cards link to `/movie?id=...` or `/tv?id=...`.
- Player route embeds a media player iframe using the TMDB id.
- Seed with a small sample set of trending items. Live TMDB fetching can be enabled by adding a TMDB API key.

## Settings page
- **Theme**: radio/select for presets (Black/Red/Gold, Midnight, Forest, Sunset, High Contrast, Legacy Blue).
- **Tab cloak**: preset buttons (Google Classroom, Drive, Gmail, etc.) plus custom title/icon inputs.
- **About:blank cloak**: toggle + "Open popup" button.
- **Panic key**: input for key and exit URL.
- **Save data**: Import/Export localStorage settings as JSON.
- **Site info**: version, last updated, support link.

## Styling
- Update `src/styles.css` with a black/red/gold token set using Tailwind v4 `@theme inline` and oklch values.
- Keep dark mode as the default; theme presets swap CSS variables.
- Use shadcn/ui components (Button, Input, Card, Select, Dialog, etc.) styled with the new tokens.
- Avoid hardcoded colors; everything flows from CSS variables.

## SEO / head metadata
- Give every route its own `head()` with title, description, og:title, og:description, og:type, and twitter:card.
- Root `__root.tsx` keeps global viewport/favicon links only.

## Data & assets
- Store game/app metadata as static JSON under `src/data/`.
- Use external image URLs for thumbnails (no local image hosting).
- Do not copy game binaries, media streams, or ad scripts.

## Out-of-scope / follow-up
- Real-time chat and user profiles require a backend/auth layer (Lovable Cloud) and are not included in this build.
- Live media trending requires a TMDB API key; the build ships with sample data and a placeholder integration point.
- Ad scripts and analytics from the reference site are intentionally omitted.
