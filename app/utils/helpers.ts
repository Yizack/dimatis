export const genres = [
  { id: "bounce", name: "Bounce" },
  { id: "chill", name: "Chill" },
  { id: "chillstep", name: "Chillstep" },
  { id: "dance", name: "Dance" },
  { id: "dubstep", name: "Dubstep" },
  { id: "electronic", name: "Electronic" },
  { id: "electropop", name: "Electropop" },
  { id: "future-bass", name: "Future Bass" },
  { id: "future-garage", name: "Future Garage" },
  { id: "liquid-drum-&-bass", name: "Liquid Drum & Bass" },
  { id: "melodic-dubstep", name: "Melodic Dubstep" },
  { id: "piano", name: "Piano" }
];

export const normalizeLyrics = (lyrics: string) => {
  return lyrics.replace(/\r\n/g, "\n").trim();
};
