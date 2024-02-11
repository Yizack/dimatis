export {};

declare global {
  interface DimatisLyrics {
    [key: string]: {
      lyrics: string;
    } | undefined;
  }
}
