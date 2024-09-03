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

export const getTracksPerYear = (year: number) => {
  return tracks.filter(track => new Date(track.date).getFullYear() === year);
};

export const getStats = () => {
  const totalTracks = tracks.length;
  const unofficialReleases = tracks.filter(track => Boolean(!track.fanlink.links.spotify)).length;
  const releasedTracks = totalTracks - unofficialReleases;
  const collabsCount = tracks.filter((track) => {
    return (track.person.includes("Dimatis") && track.person.length > 1) || (track.title.includes("Dimatis &") || track.title.includes("& Dimatis"));
  }).length;
  const soloTracksCount = totalTracks - collabsCount;
  const remixesCount = tracks.filter(track => track.id.includes("remix")).length;
  const officialRemixes = tracks.filter(track => track.id.includes("remix") && Boolean(track.fanlink.links.spotify)).length;
  const originalsCount = totalTracks - remixesCount;

  return [
    {
      title: "Total Tracks",
      value: totalTracks,
      icon: "tabler:disc",
      description: "All tracks produced by Dimatis"
    },
    {
      title: "Released Tracks",
      value: releasedTracks,
      icon: "tabler:building-store",
      description: "All tracks released on streaming platforms and music stores"
    },
    {
      title: "Original Tracks",
      value: originalsCount,
      icon: "tabler:file-music",
      description: "All original tracks produced by Dimatis (excluding remixes)"
    },
    {
      title: "Remixes",
      value: remixesCount,
      icon: "tabler:device-speaker",
      description: "All remixes produced by Dimatis"
    },
    {
      title: "Official Remixes",
      value: officialRemixes,
      icon: "tabler:medal",
      description: "All remixes released on streaming platforms and music stores as a result of a winning contest or official release"
    },
    {
      title: "Unofficial Releases",
      value: unofficialReleases,
      icon: "tabler:shopping-bag-x",
      description: "All tracks that were not released on streaming platforms and music stores. (e.g. SoundCloud and Youtube only releases)"
    },
    {
      title: "Solo Tracks",
      value: soloTracksCount,
      icon: "tabler:user",
      description: "All tracks produced by Dimatis without any collaborations"
    },
    {
      title: "Collaborations",
      value: collabsCount,
      icon: "tabler:users-group",
      description: "All tracks produced by Dimatis in collaboration with other artists"
    }
  ];
};
