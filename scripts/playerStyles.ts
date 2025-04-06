import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { getAverageColor } from "fast-average-color-node";
import tracks from "../app/assets/data/tracks";

const colors = {} as Record<string, string>;
const css = { content: "" };

console.info("Generating CSS...");

for (const track of tracks) {
  const filename = track.art || track.id;
  const imagePath = fileURLToPath(new URL(`./../public/images/${filename}.jpg`, import.meta.url));
  const color = await getAverageColor(imagePath);

  if (!colors[filename]) {
    colors[filename] = color.rgb;
    css.content += `.${/^\d/.test(filename) ? `\\3${filename}` : filename} { background-color: ${colors[filename]}; }\n`;
    await writeFile(fileURLToPath(new URL("./../app/assets/scss/_player-styles.scss", import.meta.url)), css.content, "utf-8").then(() => {
      console.info(`Generated style: ${filename}`);
    }).catch(console.warn);
  }
  else {
    console.info(`Already exists: ${filename}, skipping`);
  }
}

if (Object.keys(colors).length > 0) {
  console.info("player-styles.scss generated successfully!");
}
