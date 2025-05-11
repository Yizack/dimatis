<script setup lang="ts">
const genreURI = ref(useRoute("tag-genre").params.genre);
const showMore = ref(false);

const genre = computed(() => {
  return genres.find(g => g.id === genreURI.value)?.name || getGenreNameFromURI(genreURI.value);
});

const allTracksGenre = computed(() => {
  return tracks.reduce((acc, track) => {
    if (track.genre === genre.value) {
      acc.push(track);
    }
    return acc;
  }, [] as DimatisTrack[]);
});

const latestTracks = computed(() => {
  return allTracksGenre.value.slice(0, 15).reduce((acc, t) => {
    acc.push(t);
    return acc;
  }, [] as DimatisTrack[]);
});

const moreTracks = computed(() => {
  return allTracksGenre.value.slice(15).reduce((acc, t) => {
    acc.push(t);
    return acc;
  }, [] as DimatisTrack[]);
});

const more = () => {
  showMore.value = true;
};

useSeoMeta({
  title: `${genre.value} | ${SITE.name}`,
  description: `${genre.value} music by ${SITE.name}`,
  keywords: `genre, ${genre.value}, tag, style, electronic`,
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/tag/${genreURI.value}`,
  ogType: "website",
  ogTitle: `${genre.value} | ${SITE.name}`,
  ogDescription: `${genre.value} music by ${SITE.name}`,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: 750,
  ogImageHeight: 375,
  ogImageAlt: `${SITE.name} cover image`,
  // Protocolo Twitter
  twitterCard: "summary_large_image",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: `${genre.value} | ${SITE.name}`,
  twitterDescription: `${genre.value} music by ${SITE.name}`,
  twitterImage: `${SITE.url}/${SITE.cover}`
});

useHead({
  link: [
    { rel: "canonical", href: `${SITE.url}/tag/${genreURI.value}` }
  ]
});
</script>

<template>
  <main class="py-lg-5 py-4 bg-body-secondary">
    <section id="tag">
      <div class="container text-center">
        <h1 class="text-uppercase">{{ genre }}</h1>
        <p>Listen to all my music in this genre</p>
        <div class="row my-4">
          <template v-for="track of latestTracks" :key="track.id">
            <article class="col-12 col-lg-4">
              <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{ width: '300px', height: '385px' }" :track="track" :param="track.id" />
              <NuxtLink class="text-decoration-none" :to="`/tracks/${track.id}`">
                <h3 class="mb-0 fs-5 fst-normal fw-normal">{{ track.title }}</h3>
                <p class="text-secondary"><small>{{ track.artists }}</small></p>
              </NuxtLink>
            </article>
          </template>
          <template v-for="track of moreTracks" :key="track.id">
            <article v-if="showMore" class="col-12 col-lg-4">
              <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{ width: '300px', height: '385px' }" :track="track" :param="track.id" />
              <NuxtLink class="text-decoration-none" :to="`/tracks/${track.id}`">
                <h3 class="mb-0 fs-5 fst-normal fw-normal">{{ track.title }}</h3>
                <p class="text-secondary"><small>{{ track.artists }}</small></p>
              </NuxtLink>
            </article>
          </template>
        </div>
        <div v-if="!showMore && moreTracks.length" class="text-uppercase">
          <a class="btn btn-outline-white rounded-pill text-decoration-none" role="button" @click="more()">Load more</a>
        </div>
      </div>
    </section>
  </main>
</template>
