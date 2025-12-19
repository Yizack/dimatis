<script setup lang="ts">
const param = ref(useRoute("albums-album").params.album);
const album = computed<DimatisAlbum>(() => albums.find(a => a.id === param.value)!);

if (!album.value) {
  throw createError({
    status: ErrorCode.NOT_FOUND,
    message: `Album not found: '${param.value}'`
  });
}

const moreAlbums = computed(() => albums.reduce((acc, a) => {
  if (a.id !== album.value.id && acc.length < 8) {
    acc.push(a);
  }
  return acc;
}, [] as DimatisAlbum[]));

const albumTracks = computed(() => album.value.tracks.reduce((acc, track) => {
  const albumTrack = tracks.find(t => t.id === track);
  if (albumTrack) acc.push(albumTrack);
  return acc;
}, [] as DimatisTrack[]));

const goTrack = (track: string) => {
  navigateTo(`/tracks/${track}`);
};

const albumSchemaOrg = computed(() => ({
  "@context": "http://schema.org",
  "@type": ["MusicAlbum", "MusicRelease"],
  "@id": `${SITE.url}/albums/${param.value}`,
  "url": `${SITE.url}/albums/${param.value}`,
  "name": album.value.title,
  "description": album.value.description,
  "image": {
    "@type": "ImageObject",
    "url": `${SITE.url}/images/${album.value.art}.jpg`
  },
  "datePublished": album.value.date.split("T")[0],
  "musicReleaseFormat": "http://schema.org/DigitalFormat",
  "albumReleaseType": "http://schema.org/AlbumRelease",
  "numTracks": albumTracks.value.length,
  "albumRelease": albumTracks.value.map(track => ({
    "@type": ["MusicRecording", "MusicRelease"],
    "@id": `${SITE.url}/tracks/${track.id}`,
    "url": `${SITE.url}/tracks/${track.id}`,
    "name": track.title,
    "duration": `PT${track.hh || 0}H${track.mm || 0}M${track.ss || 0}S`
  })),
  "byArtist": [{
    "@type": "MusicGroup",
    "@id": SITE.url,
    "url": SITE.url,
    "name": SITE.name
  }]
}));

useSeoMeta({
  title: `${album.value.title} (${album.value.type}) by ${album.value.artists}`,
  description: album.value.description,
  keywords: `album, ${album.value.title}, fanlink, download`,
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/albums/${param.value}`,
  ogType: "website",
  ogTitle: `${album.value.title} (${album.value.type}) by ${album.value.artists}`,
  ogSiteName: SITE.name,
  ogImage: `${SITE.url}/images/${album.value.art}.jpg`,
  ogImageWidth: "500",
  ogImageHeight: "500",
  ogImageAlt: `${album.value.title} (${album.value.type}) by ${album.value.artists}`,
  ogDescription: album.value.description,
  // Twitter Card
  twitterCard: "summary_large_image",
  twitterImage: `${SITE.url}/images/${album.value.art}.jpg`,
  twitterTitle: `${album.value.title} (${album.value.type}) by ${album.value.artists}`,
  twitterDescription: album.value.description,
  twitterSite: `@${SITE.twitter}`
});

useHead({
  script: [
    // Schema.org
    { type: "application/ld+json", innerHTML: JSON.stringify(albumSchemaOrg.value) }
  ],
  link: [
    { rel: "canonical", href: `${SITE.url}/albums/${param.value}` }
  ]
});
</script>

<template>
  <main>
    <section id="album" class="py-lg-5 py-4 bg-body-secondary">
      <div class="container">
        <div class="pb-3 text-center">
          <h1 class="mb-1">{{ album.title }} ({{ album.type }})</h1>
          <h2 class="text-secondary mb-0">{{ album.artists }}</h2>
        </div>
        <div class="text-center my-3">
          <img :src="`/images/${album.art}.jpg`" class="album-image rounded-3" width="300" height="300">
          <span class="album-image-blurry" :style="`background: url('/images/${album.art}.jpg')`" />
        </div>
        <div class="row mx-0 my-3">
          <div class="col-12 info mx-0 p-0">
            <h3 class="mb-1">Tracks</h3>
            <table class="table">
              <thead class="text-white">
                <tr class="small text-uppercase">
                  <th>#</th>
                  <th>Artists</th>
                  <th>Title</th>
                  <th><Icon name="tabler:clock-hour-5" size="1rem" /></th>
                </tr>
              </thead>
              <tbody class="text-secondary">
                <template v-for="(track, index) of albumTracks" :key="track.id">
                  <tr role="button" @click="goTrack(track.id)">
                    <td>{{ index + 1 }}</td>
                    <td>{{ track.artists }}</td>
                    <td>{{ track.title }}</td>
                    <td>{{ track.mm }}:{{ String(track.ss).padStart(2, "0") }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <div class="col-12 row mt-3 mb-3 mb-md-0 mx-0 bg-body rounded p-3">
            <div class="col-12 col-md-8 text-secondary p-0">
              <h3 class="mb-0 text-white">Description</h3>
              <p v-for="(paragraph, i) of album.description.split('\n')" :key="i">{{ paragraph }}</p>
            </div>
            <div class="col-12 col-md-4 ps-md-3 p-0">
              <div class="tags">
                <div class="mb-2">
                  <div class="mb-0">Type</div>
                  <div class="tag">{{ album.type }}</div>
                </div>
                <div class="mb-2">
                  <div class="mb-0">Release date</div>
                  <div class="tag">{{ formatDate(album.date) }}</div>
                </div>
                <div class="mb-2">
                  <div class="mb-0">Fanlink</div>
                  <div class="tag">
                    <NuxtLink class="d-flex align-items-center gap-2" :to="`${SITE.fanlinksUrl}/${album.art}`" target="_blank">
                      <span>{{ SITE.fanlinksDomain }}/{{ album.art }}</span>
                      <Icon name="tabler:external-link" size="1.3rem" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="more-albums" class="pt-3">
          <h3 class="text-center mb-3">More <NuxtLink class="tag" to="/albums">Albums</NuxtLink></h3>
          <div class="row gallery text-center">
            <template v-for="more of moreAlbums" :key="more.id">
              <div class="col-6 col-lg-3">
                <div class="item">
                  <NuxtLink :to="`/albums/${more.id}`" class="text-decoration-none">
                    <img class="img-fluid scale-on-hover rounded-3" :src="`/images/${more.art}.jpg`" :alt="`${more.artists} - ${more.title} (${more.type})`">
                    <h3 class="mt-2 mb-0 fs-5 fst-normal fw-normal">{{ more.title }} ({{ more.type }})</h3>
                    <p class="text-secondary"><small>{{ more.artists }}</small></p>
                  </NuxtLink>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
