export {};

declare global {
  interface DimatisAlbum {
    id: string;
    artists: string;
    title: string;
    description: string;
    tracks: string[];
    art: string;
    type: string;
    date: TDate;
    person: string[];
    dropbox?: {
      id: string;
      rlkey?: string;
    };
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
