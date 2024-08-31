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
    cover?: string;
    label?: string;
    instrumental?: string;
    remix?: string;
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
