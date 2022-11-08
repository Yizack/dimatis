import { readFile, writeFile, appendFile } from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const tracks = require("./public/data/tracks.json");

let contents;
Object.keys(tracks).forEach((key) => {
    contents = contents + `key`;
});

writeFile("./assets/css/player-styles.css", contents, "utf-8", () => {
    console.log("Generated styles");
});