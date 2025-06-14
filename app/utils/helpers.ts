export { useInfiniteScroll } from "@vueuse/core";
export { withQuery } from "ufo";
export { default as tracks } from "~/assets/data/tracks";
export { default as albums } from "~/assets/data/albums";

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

export const getGenreNameFromURI = (id: string) => {
  return id.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};
