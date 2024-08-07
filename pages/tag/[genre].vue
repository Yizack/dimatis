<script setup lang="ts">
definePageMeta({ layout: "site" });

const genreURL = ref(useRoute().params.genre.toString());
const showMore = ref(false);

const genre = computed(() => {
  return genres.find(g => g.id === genreURL.value)?.name;
});

const allTracksGenre = computed(() => {
  return Object.entries(tracks).reduce((obj: DimatisTracks, [key, value]) => {
    if (value.genre === genre.value) {
      obj[key] = value;
    }
    return obj;
  }, {});
});

const latestTracks = computed(() => {
  return Object.entries(allTracksGenre.value).slice(0, 15).reduce((obj: DimatisTracks, [key, value]) => {
    obj = { ...obj, [key]: value };
    return obj;
  }, {});
});

const moreTracks = computed(() => {
  return Object.entries(allTracksGenre.value).slice(15).reduce((obj: DimatisTracks, [key, value]) => {
    obj = { ...obj, [key]: value };
    return obj;
  }, {});
});

const more = () => {
  showMore.value = true;
};

useSeoMeta({
  title: `${genre.value} | ${SITE.name}`,
  description: `${genre.value} music by ${SITE.name}`,
  keywords: `genre, ${genre.value}, tag, style, electronic`,
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/tag/${genreURL.value}`,
  ogType: "website",
  ogTitle: `${genre.value} | ${SITE.name}`,
  ogDescription: `${genre.value} music by ${SITE.name}`,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: "300",
  ogImageHeight: "200",
  ogImageAlt: `${SITE.name} cover image`,
  // Protocolo Twitter
  twitterCard: "summary",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: `${genre.value} | ${SITE.name}`,
  twitterDescription: `${genre.value} music by ${SITE.name}`,
  twitterImage: `${SITE.url}/${SITE.logo}`
});

useHead({
  link: [
    { rel: "canonical", href: `${SITE.url}/tag/${genreURL.value}` }
  ]
});
</script>

<template>
  <main>
    <section>
      <div class="container py-5 text-center">
        <h3 class="text-uppercase">{{ genre }}</h3>
        <p>Listen to all my music in this genre</p>
        <div class="row my-4">
          <template v-for="(track, param) in latestTracks" :key="param">
            <div class="col-12 col-lg-4">
              <div class="item">
                <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{ width: '300px', height: '385px' }" :track="track" :param="String(param)" />
                <NuxtLink :to="`/music/${param}`">
                  <p class="mb-0">{{ track.title }}</p>
                  <p><small>{{ track.artists }}</small></p>
                </NuxtLink>
              </div>
            </div>
          </template>
          <template v-for="(track, param) in moreTracks" :key="param">
            <div v-if="showMore" class="col-12 col-lg-4">
              <div class="item">
                <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{ width: '300px', height: '385px' }" :track="track" :param="String(param)" />
                <NuxtLink :to="`/music/${param}`">
                  <p class="mb-0">{{ track.title }}</p>
                  <p><small>{{ track.artists }}</small></p>
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>
        <div v-if="!showMore && Object.keys(moreTracks).length" class="text-uppercase">
          <a class="btn btn-outline-white rounded-pill text-decoration-none" role="button" @click="more()">Load more</a>
        </div>
      </div>
    </section>
  </main>
</template>
