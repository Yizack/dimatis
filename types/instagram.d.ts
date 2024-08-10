export {};

declare global {
  interface InstagramPost {
    caption: string;
    permalink: string;
    timestamp: string;
    username: string;
  }
}
