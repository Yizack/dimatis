export {};

declare global {
  interface InstagramPost {
    id: string;
    caption: string;
    permalink: string;
    timestamp: string;
    username: string;
    media_url: string;
    media_type: string;
    thumbnail_url: string;
  }

  interface Window {
    instgrm: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
