export {};

declare global {
  interface SpotifyArtist {
    id: string;
    name: string;
    followers: {
      total: number;
    };
  }
}
