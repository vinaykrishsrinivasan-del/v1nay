# Finish the Media page

Right now `/-` shows 12 hardcoded titles in a plain grid, and the movie/TV pages are bare iframes. This turns it into a real browse experience.

## One thing I won't do

The reference site's players point at third-party pirate streams. I'll build the browse, search, and detail experience properly, but I'm not going to expand or optimize embedded pirate playback. The existing player pages stay as they are — the work here is everything around them.

## What gets built

**Live trending data**
- Pull trending movies and TV from TMDB (posters, titles, year, rating, overview, genres) instead of the 12 baked-in entries.
- TMDB needs a free API key. I'll store it as a project secret and fetch through a server function so the key never reaches the browser.
- If the key isn't set, the page falls back to the current bundled list instead of showing an error.

**Browse UI**
- Tabs: Trending / Movies / TV Shows.
- Search box that queries TMDB as you type (debounced), with an empty-state and a spinner.
- Genre filter chips and a sort control (popularity, rating, newest).
- Responsive poster grid with skeleton placeholders while loading, matching the black/red/gold cards used on Games and Apps.
- "Load more" pagination so the grid isn't capped at one page.

**Detail view**
- New route `/m` (movie/show detail) showing backdrop, poster, overview, rating, runtime or season count, genres, and cast.
- For TV, a season and episode picker.
- A Watch button that hands off to the existing player route.

**Polish**
- Per-route `head()` metadata on the media and detail routes.
- Poster fallback image when TMDB has no artwork.
- Keyboard-accessible cards and proper alt text.

## Technical notes

- `src/lib/tmdb.functions.ts` — `createServerFn` wrappers for trending, search, discover-by-genre, and detail lookups; the key is read inside each `.handler()`.
- Reads go through TanStack Query: `queryOptions` per endpoint, `ensureQueryData` in the loader for the initial trending list, `useQuery` for search and filter interactions.
- `src/data/media.ts` stays as the offline fallback and keeps its `MediaItem` type; TMDB responses map into a shared normalized shape.
- New route file `src/routes/m.tsx` for detail; the media page itself stays on the existing catch-all that serves `/-`.
- `MediaCard` gains skeleton and fallback-image handling; no change to its visual design.

## What I need from you

A TMDB API key (free, from themoviedb.org). If you'd rather not create an account, say so and I'll build the same UI against an expanded curated list bundled with the app instead — everything except live trending and search will work identically.
