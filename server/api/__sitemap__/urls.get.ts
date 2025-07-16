import tracks from "~/assets/data/tracks";
import albums from "~/assets/data/albums";

export default defineSitemapEventHandler(() => {
  return [
    ...tracks.map(t => asSitemapUrl({
      loc: "tracks/" + t.id
    })),
    ...albums.map(a => asSitemapUrl({
      loc: "albums/" + a.id
    }))
  ];
});
