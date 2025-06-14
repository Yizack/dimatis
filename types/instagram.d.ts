export {};

declare global {
  interface InstagramPost {
    id: string;
    caption: string;
    permalink: string;
    timestamp: string;
    media_url: string;
    media_type: string;
    thumbnail_url: string;
    is_shared_to_feed: boolean;
  }
}
