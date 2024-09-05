export const tracksCollabs = computed(() => {
  return tracks.filter(({ title, person, id }) => {
    const lowerTitle = title.toLowerCase();
    const isFeat = lowerTitle.includes("feat.") || lowerTitle.includes("ft.");
    const isRemix = id.includes("remix");
    const isCollab = person.includes("Dimatis") && person.length > 1;
    const dimatisMention = lowerTitle.includes("dimatis &") || lowerTitle.includes("& dimatis") || lowerTitle.includes("dimatis x") || lowerTitle.includes("x dimatis");
    return isCollab || (isFeat && !isRemix) || (isRemix && dimatisMention);
  });
});

export const tracksUnofficials = computed(() => {
  return tracks.filter(({ fanlink }) => Boolean(!fanlink.links.spotify));
});

export const tracksRemixes = computed(() => {
  return tracks.filter(({ id }) => id.includes("remix"));
});

export const tracksOfficialRemixes = computed(() => {
  return tracks.filter(({ id, fanlink }) => id.includes("remix") && Boolean(fanlink.links.spotify));
});

export const tracksSolo = computed(() => {
  return tracks.filter(({ title, person, id }) => {
    const lowerTitle = title.toLowerCase();
    const isSoloTrack = person.includes("Dimatis") && person.length === 1;
    const isNotFeat = !lowerTitle.includes("feat.");
    const isNotRemix = !id.includes("remix");
    const isSoloRemix = id.includes("remix") && lowerTitle.includes("(dimatis remix)");

    return (isSoloTrack && isNotFeat && isNotRemix) || isSoloRemix;
  });
});

export const getStats = () => {
  return [
    {
      title: "Total Tracks",
      value: tracks.length,
      icon: "tabler:disc",
      description: "All tracks including remixes produced by Dimatis"
    },
    {
      title: "Released Tracks",
      value: tracks.length - tracksUnofficials.value.length,
      icon: "tabler:building-store",
      description: "All tracks including remixes released on streaming platforms and music stores"
    },
    {
      title: "Original Tracks",
      value: tracks.length - tracksRemixes.value.length,
      icon: "tabler:file-music",
      description: "All original tracks produced by Dimatis (excluding remixes)"
    },
    {
      title: "Remixes",
      value: tracksRemixes.value.length,
      icon: "tabler:device-speaker",
      description: "All remixes produced by Dimatis"
    },
    {
      title: "Official Remixes",
      value: tracksOfficialRemixes.value.length,
      icon: "tabler:medal",
      description: "All remixes released on streaming platforms and music stores as a result of a winning contest or official release"
    },
    {
      title: "Unofficial Releases",
      value: tracksUnofficials.value.length,
      icon: "tabler:shopping-bag-x",
      description: "All tracks including remixes that were not released on streaming platforms and music stores. (e.g. SoundCloud and YouTube only releases)"
    },
    {
      title: "Solo Tracks",
      value: tracksSolo.value.length,
      icon: "tabler:user",
      description: "All tracks including remixes produced by Dimatis without any collaborations"
    },
    {
      title: "Collaborations",
      value: tracksCollabs.value.length,
      icon: "tabler:users-group",
      description: "All tracks including remixes produced by Dimatis in collaboration with other artists"
    }
  ];
};

export const isTrackSearchMatch = (track: DimatisTrack, query: string) => {
  return query === "" || track.title.toLowerCase().includes(query.toLowerCase()) || track.artists.toLowerCase().includes(query.toLowerCase());
};

export const isTrackYearMatch = (track: DimatisTrack, year: number) => {
  return year === 0 || track.date.split("-")[0] === year.toString();
};
