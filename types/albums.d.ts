export {};

declare global {
  interface DimatisAlbum {
    id: string;
    artists: string;
    title: string;
    description: string;
    tracks: string[];
    cover: string;
    type: string;
    date: string;
    person: string[];
    dropbox?: string;
    fanlink?: {
      download: boolean;
      dark: boolean;
      links?: {
        spotify?: string;
        soundcloud?: string;
        youtube?: string;
        itunes?: string;
        apple?: string;
        bandcamp?: string;
        deezer?: string;
        tidal?: string;
        amazon?: string;
        netease?: string;
      };
    };
  }
}
