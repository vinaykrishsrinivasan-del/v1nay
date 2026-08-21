export interface GameItem {
  name: string;
  url?: string;
  image: string;
  author?: string;
  usesProxy?: boolean;
  alert?: string;
}

export interface AppItem {
  name: string;
  url: string;
  image: string;
  alert?: string;
}
