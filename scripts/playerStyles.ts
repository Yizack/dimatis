import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import ColorThief from "colorthief";
import tracks from "../app/assets/data/tracks";

const colors = {} as Record<string, string>;
let css_content = "";

console.info("Generating CSS...");

for (const track of tracks) {
  const filename = track.art ?? track.id;
  const img = fileURLToPath(new URL(`./../public/images/${filename}.jpg`, import.meta.url));
  await ColorThief.getColor(img).then(async (color: number[]) => {
    if (!colors[filename]) {
      colors[filename] = `rgb(${color[0]} ${color[1]} ${color[2]})`;
      css_content += `.${/^\d/.test(filename) ? `\\3${filename}` : filename} { background-color: ${colors[filename]}; }\n`;
      await writeFile(fileURLToPath(new URL("./../app/assets/scss/_player-styles.scss", import.meta.url)), css_content, "utf-8").then(() => {
        console.info(`Generated style: ${filename}`);
      }).catch(console.warn);
    }
    else {
      console.info(`Already exists: ${filename}, skipping`);
    }
  }).catch(console.warn);
}

if (Object.keys(colors).length > 0) {
  console.info("player-styles.scss generated successfully!");
}
