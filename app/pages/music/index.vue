<script setup lang="ts">
definePageMeta({ layout: "site" });

const showMore = ref(false);

const latestTracks = computed(() => {
  return tracks.slice(0, 15).reduce((acc, t) => {
    acc.push(t);
    return acc;
  }, [] as DimatisTrack[]);
});

const moreTracks = computed(() => {
  return tracks.slice(15).reduce((acc, t) => {
    acc.push(t);
    return acc;
  }, [] as DimatisTrack[]);
});

const more = () => {
  showMore.value = true;
};

useSeoMeta({
  title: `Music | ${SITE.name}`,
  description: `All ${SITE.name} releases`,
  keywords: "discography, releases, singles, remixes, songs, listen",
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/music`,
  ogType: "website",
  ogTitle: `Music | ${SITE.name}`,
  ogSiteName: SITE.name,
  ogDescription: `All ${SITE.name} releases`,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: "300",
  ogImageHeight: "200",
  ogImageAlt: `${SITE.name} cover image`,
  // Protocolo Twitter
  twitterCard: "summary",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: `Music | ${SITE.name}`,
  twitterDescription: `All ${SITE.name} releases`,
  twitterImage: `${SITE.url}/${SITE.logo}`
});

useHead({
  link: [
    { rel: "canonical", href: `${SITE.url}/music` }
  ]
});
</script>

<template>
  <main class="page">
    <section>
      <div class="container py-5 text-center">
        <h3 class="text-uppercase">Music</h3>
        <p class="mb-0">Listen to all my music</p>
        <div class="row my-4">
          <template v-for="track of latestTracks" :key="track.id">
            <div class="col-12 col-lg-4">
              <div class="item">
                <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{ width: '300px', height: '385px' }" :track="track" :param="track.cover ? track.cover : track.id" />
                <NuxtLink :to="`/music/${track.id}`">
                  <p class="mb-0">{{ track.title }}</p>
                  <p><small>{{ track.artists }}</small></p>
                </NuxtLink>
              </div>
            </div>
          </template>
          <template v-for="track of moreTracks" :key="track.id">
            <Transition name="tab" mode="out-in">
              <div v-if="showMore" class="col-12 col-lg-4">
                <div class="item">
                  <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{ width: '300px', height: '385px' }" :track="track" :param="track.cover ? track.cover : track.id" />
                  <NuxtLink :to="`/music/${track.id}`">
                    <p class="mb-0">{{ track.title }}</p>
                    <p><small>{{ track.artists }}</small></p>
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </template>
        </div>
        <div v-if="!showMore && moreTracks.length" class="text-uppercase">
          <a class="btn btn-outline-white rounded-pill text-decoration-none" role="button" @click="more()">Load more</a>
        </div>
      </div>
    </section>
  </main>
</template>
