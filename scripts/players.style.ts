import { writeFile } from "fs";
import { resolve } from "path";
// @ts-expect-error - no types
import ColorThief from "colorthief";
import tracks from "../public/data/tracks.json";

const styles = {} as Record<string, { color: string }>;
let css_content = "";

for (const param in tracks) {
  // @ts-expect-error - no types
  const filename = "cover" in tracks[param] ? tracks[param].cover : param;
  const img = resolve(process.cwd(), `./public/images/${filename}.jpg`);
  ColorThief.getColor(img).then((color: number[]) => {
    if (!(filename in styles)) {
      styles[filename] = {
        color: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
      };
      css_content += `.${/^\d/.test(filename) ? `\\3${filename}` : filename} { background-color: ${styles[filename].color}; }\n`;
      writeFile("./assets/css/player-styles.css", css_content, "utf-8", () => {
        console.info(`Generated style: ${filename}`);
      });
    }
    else {
      console.info(`Already exists: ${filename}, skipping`);
    }
  }).catch((err: unknown) => {
    console.warn(err);
  });
}
