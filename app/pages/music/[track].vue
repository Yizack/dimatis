<script setup lang="ts">
definePageMeta({ layout: "site" });

const param = ref(useRoute("music-track").params.track);
const track = computed(() => tracks.find(track => track.id === param.value)!);

if (!track.value) {
  throw createError({
    statusCode: 404,
    message: `Track not found: '${param.value}'`,
    fatal: true
  });
}

const genreURL = computed(() => track.value.genre.replace(/\s+/g, "-").toLowerCase());

const moreTracks = computed(() => {
  return tracks.reduce((acc, t) => {
    if (t.genre === track.value.genre && t.id !== track.value.id && acc.length < 8) {
      acc.push(t);
    }
    return acc;
  }, [] as DimatisTrack[]);
});

const musicSchemaOrg = computed(() => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "MusicRecording",
    "name": track.value.title,
    "url": `${SITE.url}/music/${param.value}`,
    "image": {
      "@type": "ImageObject",
      "url": `${SITE.url}/images/${"cover" in track.value ? track.value.cover : param.value}.jpg`
    },
    "genre": track.value.genre,
    "duration": `PT${"hh" in track.value ? track.value.hh : 0}H${"mm" in track.value ? track.value.mm : 0}M${"ss" in track.value ? track.value.ss : 0}S`,
    "datePublished": track.value.date.split("T")[0],
    "inAlbum": [] as { "@type": string, "name"?: string, "url": string }[],
    "byArtist": [] as { "@type": string, "name"?: string }[]
  };

  if (track.value.album) {
    schema.inAlbum.push({
      "@type": "MusicAlbum",
      "name": track.value.album,
      "url": `${SITE.url}/album/${track.value.album?.replace(/\s+/g, "-").toLowerCase()}`
    });
  }

  track.value.person.forEach((person) => {
    schema.byArtist.push({
      "@type": "MusicGroup",
      "name": person
    });
  });

  return schema;
});

useSeoMeta({
  title: `${track.value.artists} - ${track.value.title}`,
  description: track.value.description,
  keywords: `release, ${track.value.title}, ${track.value.genre}, play, stream, download, fanlink`,
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/music/${param.value}`,
  ogType: "website",
  ogTitle: `${track.value.artists} - ${track.value.title}`,
  ogSiteName: SITE.name,
  ogImage: `${SITE.url}/images/${"cover" in track.value ? track.value.cover : param.value}.jpg`,
  ogImageWidth: "500",
  ogImageHeight: "500",
  ogImageAlt: `${track.value.artists} - ${track.value.title}`,
  ogDescription: track.value.description,
  // Twitter Card
  twitterCard: "summary",
  twitterImage: `${SITE.url}/images/${"cover" in track.value ? track.value.cover : param.value}.jpg`,
  twitterTitle: `${track.value.artists} - ${track.value.title}`,
  twitterDescription: track.value.description,
  twitterSite: `@${SITE.twitter}`
});

useHead({
  script: [
    // Schema.org
    { type: "application/ld+json", children: JSON.stringify(musicSchemaOrg.value) }
  ],
  link: [
    { rel: "canonical", href: `${SITE.url}/music/${param.value}` }
  ]
});

const lyricsFile = await import(`~/assets/lyrics/${param.value}.txt?raw`).catch(() => ({ default: null }));
const lyricsContent = lyricsFile.default;
const lyrics = lyricsContent ? normalizeLyrics(lyricsContent) : null;

const showFullLyrics = ref(lyricsContent ? lyricsContent.match(/\n/g).length < 6 : true);

const readLyrics = () => {
  showFullLyrics.value = !showFullLyrics.value;
};
</script>

<template>
  <main>
    <section id="music" class="py-lg-5 py-4">
      <div class="container">
        <div class="pb-3 text-center">
          <h1 class="mb-1">{{ track.title }}</h1>
          <h3 class="text-secondary mb-0">{{ track.artists }}</h3>
        </div>
        <MusicPlayer class="rounded-3" :size="{ height: '450px', width: '100%' }" :track="track" :param="param" />
        <div class="row my-3 mx-0 bg-secondary rounded p-3">
          <div class="col-12 col-md-8 mb-3 mb-md-0 text-secondary p-0">
            <div class="description">
              <h3 class="text-white">Description</h3>
              <p>{{ track.description }}</p>
            </div>
            <div v-if="lyrics" class="lyrics mt-3" :class="{ 'lyrcs-fade': !showFullLyrics }">
              <h3 class="text-white">Lyrics</h3>
              <p class="m-0 pre-line overflow-hidden position-relative overflow-hidden" :style="showFullLyrics ? 'height:auto' : 'height: 140px;'">{{ lyrics }}</p>
              <a v-if="!showFullLyrics" class="small" role="button" @click="readLyrics">
                <span class="text-decoration-underline">Read lyrics</span>
                <Icon name="solar:alt-arrow-down-bold" />
              </a>
            </div>
            <div v-if="track.credits" class="credits mt-3">
              <h3 class="text-white">Credits</h3>
              <template v-for="(credits, index) of track.credits" :key="index">
                <div :class="{ 'mb-3': track.credits.length - 1 !== index }">
                  <h5>{{ credits.title }}</h5>
                  <template v-for="socials in credits.socials" :key="socials.name">
                    <p class="m-0">{{ socials.name }}: <a :href="socials.link" target="_blank">{{ socials.link }}</a></p>
                  </template>
                </div>
              </template>
            </div>
          </div>
          <div class="col-12 col-md-4 ps-md-3 p-0">
            <div id="tags">
              <div class="mb-0">Genre</div>
              <div class="tag mb-2"><NuxtLink :to="`/tag/${genreURL}`">{{ track.genre }}</NuxtLink></div>
              <template v-if="track.album">
                <div class="mb-0">Album</div>
                <div class="tag mb-2"><NuxtLink :to="`/album/${track.album.replace(/\s+/g, '-').toLowerCase()}`">{{ track.album }}</NuxtLink></div>
              </template>
              <div class="mb-0">Release date</div>
              <div class="tag mb-2">{{ new Date(track.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) }}</div>
              <div class="mb-0">Duration</div>
              <div class="tag mb-2">{{ track.mm }}:{{ String(track.ss).padStart(2, "0") }}</div>
              <template v-if="track.label">
                <div class="mb-0">Record label</div>
                <div class="tag mb-2">{{ track.label }}</div>
              </template>
              <div class="mb-0">Fanlink</div>
              <div class="tag">
                <a class="d-flex align-items-center gap-2" :href="`${SITE.fanlinkUrl}/${param}`" target="_blank">
                  <span>{{ SITE.fanlinkDomain }}/{{ param }}</span>
                  <Icon name="fa6-solid:arrow-up-right-from-square" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="moreTracks.length" id="more-tracks" class="pt-3">
          <h3 class="text-center">More <NuxtLink class="tag" :to="`/tag/${genreURL}`">{{ track.genre }}</NuxtLink> music</h3>
          <div class="row gallery text-center">
            <template v-for="more in moreTracks" :key="more.id">
              <div class="col-6 col-lg-3">
                <NuxtLink :to="`/music/${more.id}`">
                  <img class="img-fluid scale-on-hover rounded-3" :src="`/images/${more.cover ? more.cover : more.id}.jpg`" :alt="`${more.artists} - ${more.title}`">
                  <p class="mt-2 mb-0">{{ more.title }}</p>
                  <p><small>{{ more.artists }}</small></p>
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
