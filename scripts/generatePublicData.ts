import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import tracks from "../app/assets/data/tracks";
import albums from "../app/assets/data/albums";
import lyrics from "../app/assets/data/lyrics";

const dataPath = fileURLToPath(new URL("./../public/data", import.meta.url));
await mkdir(dataPath, { recursive: true }).catch((e) => {
  console.warn(e);
  process.exit(1);
});

const files = [
  { data: tracks, name: "tracks.json" },
  { data: albums, name: "albums.json" },
  { data: lyrics, name: "lyrics.json" }
];

console.info("Minifying data to JSON files...");

for (const file of files) {
  const minifiedData = JSON.stringify(file.data);
  const path = fileURLToPath(new URL(`./../public/data/${file.name}`, import.meta.url));
  await writeFile(path, minifiedData, "utf-8").then(() => {
    console.info(`Minified output: ${file.name}`);
  }).catch(console.warn);
}

console.info("Data generated successfully!");
