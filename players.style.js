import { writeFile } from "fs";
import { createRequire } from "module";
import { resolve } from "path";
import ColorThief from "colorthief";

const require = createRequire(import.meta.url);
const tracks = require("./public/data/tracks.json");
let styles = {};
let css_content = "";

Object.keys(tracks).forEach((param) => {
  const filename = "cover" in tracks[param] ? tracks[param].cover : param;
  const img = resolve(process.cwd(), `./public/images/${filename}.jpg`);
  ColorThief.getColor(img).then(color => {
    if (!(filename in styles)) {
      styles[filename] = {
        color: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
      };
      css_content += `.${filename} { background-color: ${styles[filename].color} }\n`;
      writeFile("./assets/css/player-styles.css", css_content, "utf-8", () => {
        console.log(`Generated style: ${filename}`);
      });
    }
    else {
      console.log(`Already exists: ${filename}, skipping`);
    }
  }).catch(err => {
    console.log(err);
  });
});
