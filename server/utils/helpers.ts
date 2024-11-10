export { z } from "zod";

export const normalizeLyrics = (lyrics: string) => {
  return lyrics.replace(/\r\n/g, "\n").trim();
};
