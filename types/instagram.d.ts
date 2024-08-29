export {};

declare global {
  interface InstagramPost {
    id: string;
    caption: string;
    permalink: string;
    timestamp: string;
    username: string;
  }

  interface Window {
    instgrm: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
