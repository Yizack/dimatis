export {};

declare global {
  interface DimatisTrack {
    id: string;
    artists: string;
    title: string;
    description: string;
    genre: string;
    date: TDate;
    person: string[];
    hh?: number;
    mm: number;
    ss: number;
    album?: string;
    art?: string;
    label?: string;
    related?: string[];
    isrc?: string;
    dropbox: {
      id: string;
      rlkey?: string;
    };
    credits?: {
      title: string;
      socials: {
        name: string;
        link: string;
      }[];
    }[];
    fanlink: {
      download: boolean;
      dark: boolean;
      links: {
        spotify?: string;
        soundcloud?: string;
        youtube?: string;
        apple?: string;
        itunes?: string;
        bandcamp?: string;
        deezer?: string;
        tidal?: string;
        yandex?: string;
        amazon?: string;
        tiktok?: string;
        beatport?: string;
        netease?: string;
      };
    };
  }
}
