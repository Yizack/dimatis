import tracks from "~/assets/data/tracks";
import albums from "~/assets/data/albums";

export default defineSitemapEventHandler(() => {
  return [
    { loc: "/", priority: 1 },
    ...tracks.map(t => asSitemapUrl({
      loc: "music/" + t.id,
      priority: 0.8
    })),
    ...albums.map(a => asSitemapUrl({
      loc: "album/" + a.id,
      priority: 0.8
    }))
  ];
});
