export interface MediaItem {
  id: number;
  title: string;
  year: number;
  rating: number;
  poster: string;
  type: "movie" | "tv";
}

export const sampleMedia: MediaItem[] = [
  {
    id: 95350,
    title: "Lanterns",
    year: 2026,
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w500/gpC7h43xPMEV3goYMQShfJbTtLq.jpg",
    type: "tv",
  },
  {
    id: 1288445,
    title: "Mutiny",
    year: 2026,
    rating: 6.9,
    poster: "https://image.tmdb.org/t/p/w500/lsYSWqj6i2iyUDJoLA2cazFJYlC.jpg",
    type: "movie",
  },
  {
    id: 1084244,
    title: "Toy Story 5",
    year: 2026,
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/sfQtVlIHljToOwYjhe21KPGzZWK.jpg",
    type: "movie",
  },
  {
    id: 969681,
    title: "Spider-Man: Brand New Day",
    year: 2026,
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/iPOn6DinuVyLY17YM9mKuPofV08.jpg",
    type: "movie",
  },
  {
    id: 108978,
    title: "Reacher",
    year: 2022,
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w500/f1VCQIG2iCyOookdgOzwtUpwWC0.jpg",
    type: "tv",
  },
  {
    id: 1368337,
    title: "The Odyssey",
    year: 2026,
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
    type: "movie",
  },
  {
    id: 1315772,
    title: "Minions & Monsters",
    year: 2026,
    rating: 7.5,
    poster: "https://image.tmdb.org/t/p/w500/4LwvU9SZc8QQzW1X1FAPhNbXnEU.jpg",
    type: "movie",
  },
  {
    id: 1339713,
    title: "Obsession",
    year: 2026,
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg",
    type: "movie",
  },
  {
    id: 125988,
    title: "Silo",
    year: 2023,
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/gMYZZvnkVNTqSVnVCphWbPXwWwb.jpg",
    type: "tv",
  },
  {
    id: 1101383,
    title: "The End of Oak Street",
    year: 2026,
    rating: 6.5,
    poster: "https://image.tmdb.org/t/p/w500/fYXqpgPmHMphSF2W30GbTeJVIa5.jpg",
    type: "movie",
  },
  {
    id: 94997,
    title: "House of the Dragon",
    year: 2022,
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg",
    type: "tv",
  },
  {
    id: 100757,
    title: "Outer Banks",
    year: 2020,
    rating: 8.3,
    poster: "https://image.tmdb.org/t/p/w500/ovDgO2LPfwdVRfvScAqo9aMiIW.jpg",
    type: "tv",
  },
];
