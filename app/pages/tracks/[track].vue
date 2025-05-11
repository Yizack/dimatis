<script setup lang="ts">
const param = ref(useRoute("tracks-track").params.track);
const track = computed<DimatisTrack>(() => tracks.find(track => track.id === param.value)!);

if (!track.value) {
  throw createError({
    statusCode: ErrorCode.NOT_FOUND,
    message: `Track not found: '${param.value}'`,
    fatal: true
  });
}

const { data: download } = useLazyFetch("/api/download/count", {
  query: { file: param.value },
  getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key]
});

const genreURL = computed(() => track.value.genre.replace(/\s+/g, "-").toLowerCase());

const moreTracks = computed(() => {
  return tracks.reduce((acc, t) => {
    if (t.genre === track.value.genre && t.id !== track.value.id && acc.length < 8) {
      acc.push(t);
    }
    return acc;
  }, [] as DimatisTrack[]);
});

const trackSchemaOrg = computed(() => ({
  "@context": "http://schema.org",
  "@type": ["MusicRecording", "MusicRelease"],
  "@id": `${SITE.url}/tracks/${param.value}`,
  "url": `${SITE.url}/tracks/${param.value}`,
  "name": track.value.title,
  "description": track.value.description,
  "image": {
    "@type": "ImageObject",
    "url": `${SITE.url}/images/${track.value.art || param.value}.jpg`
  },
  "musicReleaseFormat": "http://schema.org/DigitalFormat",
  "genre": track.value.genre,
  "duration": `PT${track.value.hh || 0}H${track.value.mm || 0}M${track.value.ss || 0}S`,
  "isrcCode": track.value.isrc,
  "datePublished": track.value.date.split("T")[0],
  "inAlbum": [{
    "@type": "MusicAlbum",
    "name": track.value.album || track.value.title,
    "url": track.value.album ? `${SITE.url}/albums/${track.value.album.replace(/\s+/g, "-").toLowerCase()}` : `${SITE.url}/tracks/${param.value}`
  }],
  "byArtist": track.value.person.map(person => ({
    "@type": "MusicGroup",
    "@id": person === "Dimatis" ? SITE.url : undefined,
    "url": person === "Dimatis" ? SITE.url : undefined,
    "name": person
  }))
}));

useSeoMeta({
  title: `${track.value.title} by ${track.value.artists}`,
  description: track.value.description,
  keywords: `release, ${track.value.title}, ${track.value.genre}, play, stream, download, fanlink`,
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/tracks/${param.value}`,
  ogType: "website",
  ogTitle: `${track.value.title} by ${track.value.artists}`,
  ogSiteName: SITE.name,
  ogImage: `${SITE.url}/images/${track.value.art || param.value}.jpg`,
  ogImageWidth: 500,
  ogImageHeight: 500,
  ogImageAlt: `${track.value.title} by ${track.value.artists}`,
  ogDescription: track.value.description,
  // Twitter Card
  twitterCard: "summary",
  twitterImage: `${SITE.url}/images/${track.value.art || param.value}.jpg`,
  twitterTitle: `${track.value.title} by ${track.value.artists}`,
  twitterDescription: track.value.description,
  twitterSite: `@${SITE.twitter}`
});

useHead({
  script: [
    // Schema.org
    { type: "application/ld+json", innerHTML: JSON.stringify(trackSchemaOrg.value) }
  ],
  link: [
    { rel: "canonical", href: `${SITE.url}/tracks/${param.value}` }
  ]
});

const assets = import.meta.glob("~~/server/assets/lyrics/*", {
  eager: true
});

const existLyrics = assets["../server/assets/lyrics/" + param.value + ".txt"] !== undefined;
const lyrics = ref<string>();
const showFullLyrics = ref<boolean>(false);

if (existLyrics) {
  const { data: lyricsData } = await useFetch("/api/lyrics", {
    params: { track: param.value },
    getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key]
  });
  lyrics.value = lyricsData.value;
  showFullLyrics.value = lyrics.value ? (lyrics.value.match(/\n/g)?.length || 0) < 6 : true;
}
</script>

<template>
  <main>
    <section id="music" class="py-lg-5 py-4 bg-body-secondary">
      <div class="container">
        <div class="pb-3 text-center">
          <h1 class="mb-1">{{ track.title }}</h1>
          <h2 class="text-secondary mb-0">{{ track.artists }}</h2>
        </div>
        <MusicPlayer class="rounded-3" :size="{ height: '450px', width: '100%' }" :track="track" :param="param" />
        <div class="row my-3 mx-0 bg-body rounded p-3">
          <div class="col-12 col-md-8 mb-3 mb-md-0 text-secondary p-0">
            <div class="description">
              <h3 class="text-white">Description</h3>
              <p v-for="(paragraph, i) of track.description.split('\n')" :key="i">{{ paragraph }}</p>
            </div>
            <div v-if="lyrics" class="lyrics mt-3" :class="{ 'lyrics-fade': !showFullLyrics }">
              <h3 class="text-white">Lyrics</h3>
              <p class="m-0 pre-line overflow-hidden position-relative overflow-hidden" :style="showFullLyrics ? 'height:auto' : 'height: 140px;'">{{ lyrics }}</p>
              <a v-if="!showFullLyrics" class="small" role="button" @click="showFullLyrics = true">
                <span class="text-decoration-underline">Read lyrics</span>
                <Icon name="tabler:caret-down-filled" />
              </a>
              <a v-else class="small" role="button" @click="showFullLyrics = false">
                <span class="text-decoration-underline">Show less</span>
                <Icon name="tabler:caret-up-filled" />
              </a>
            </div>
            <div v-if="track.credits" class="credits mt-3">
              <h3 class="text-white">Credits</h3>
              <template v-for="(credits, index) of track.credits" :key="index">
                <div :class="{ 'mb-3': track.credits.length - 1 !== index }">
                  <h5>{{ credits.title }}</h5>
                  <template v-for="socials in credits.socials" :key="socials.name">
                    <p class="m-0">{{ socials.name }}: <NuxtLink :to="socials.link" target="_blank">{{ socials.link }}</NuxtLink></p>
                  </template>
                </div>
              </template>
            </div>
          </div>
          <div class="col-12 col-md-4 ps-md-3 p-0">
            <div id="tags">
              <div class="mb-2">
                <div class="mb-0">Genre</div>
                <div class="tag"><NuxtLink :to="`/tag/${genreURL}`">{{ track.genre }}</NuxtLink></div>
              </div>
              <div v-if="track.album" class="mb-2">
                <div class="mb-0">Album</div>
                <div class="tag"><NuxtLink :to="`/albums/${track.album.replace(/\s+/g, '-').toLowerCase()}`">{{ track.album }}</NuxtLink></div>
              </div>
              <div class="mb-2">
                <div class="mb-0">Release date</div>
                <div class="tag">{{ formatDate(track.date) }}</div>
              </div>
              <div class="mb-2">
                <div class="mb-0">Duration</div>
                <div class="tag">{{ track.mm }}:{{ String(track.ss).padStart(2, "0") }}</div>
              </div>
              <div v-if="track.label" class="mb-2">
                <div class="mb-0">Record label</div>
                <div class="tag">{{ track.label }}</div>
              </div>
              <div class="mb-2">
                <div class="mb-0">Fanlink</div>
                <div class="tag">
                  <NuxtLink class="d-flex align-items-center gap-2" :to="`${SITE.fanlinksUrl}/${param}`" target="_blank">
                    <span>{{ SITE.fanlinksDomain }}/{{ param }}</span>
                    <Icon name="tabler:external-link" size="1.3rem" />
                  </NuxtLink>
                </div>
              </div>
              <div v-if="download && download.count">
                <div class="mb-0">Downloaded for free</div>
                <div class="tag">{{ download.count }} times</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="moreTracks.length" id="more-tracks" class="pt-3">
          <h3 class="text-center mb-3">More <NuxtLink class="tag" :to="`/tag/${genreURL}`">{{ track.genre }}</NuxtLink> music</h3>
          <div class="row gallery text-center">
            <template v-for="more of moreTracks" :key="more.id">
              <div class="col-6 col-lg-3">
                <NuxtLink :to="`/tracks/${more.id}`" class="text-decoration-none">
                  <img class="img-fluid scale-on-hover rounded-3" :src="`/images/${more.art || more.id}.jpg`" :alt="`${more.artists} - ${more.title}`">
                  <p class="mt-2 mb-0">{{ more.title }}</p>
                  <p class="text-secondary"><small>{{ more.artists }}</small></p>
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
