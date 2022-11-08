import { writeFile } from "fs";
import { createRequire } from "module";
import { resolve } from "path";
import ColorThief from "colorthief";

const require = createRequire(import.meta.url);
const tracks = require("./public/data/tracks.json");
let contents = "";

Object.keys(tracks).forEach((param) => {
  const img = resolve(process.cwd(), `./public/images/${tracks[param]?.cover ? tracks[param].cover : param}.jpg`);
  ColorThief.getColor(img).then(color => {
    contents += `.${param} {\n  background-color: rgb(${color[0]}, ${color[1]}, ${color[2]});\n}\n`;
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    writeFile("./assets/css/player-styles.css", contents, "utf-8", () => {
      console.log(`Generated style: ${param}`);
    });
  });
});
