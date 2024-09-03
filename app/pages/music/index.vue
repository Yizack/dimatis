<script setup lang="ts">
definePageMeta({ layout: "site" });

const tracksArray = ref<DimatisTrack[]>(tracks.slice(0, 15).reduce((acc, t) => {
  acc.push(t);
  return acc;
}, [] as DimatisTrack[]));

const { reset } = useInfiniteScroll(document,
  () => {
    tracksArray.value = tracks.slice(0, tracksArray.value.length + 15);
  },
  { distance: 300 }
);

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
          <TransitionGroup name="fade">
            <div v-for="track of tracksArray" :key="track.id" class="col-12 col-lg-4 mb-3">
              <div class="item">
                <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{ width: '300px', height: '385px' }" :track="track" :param="track.cover ? track.cover : track.id" />
                <NuxtLink class="text-decoration-none" :to="`/music/${track.id}`">
                  <p class="mb-0">{{ track.title }}</p>
                  <p class="text-secondary"><small>{{ track.artists }}</small></p>
                </NuxtLink>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </section>
  </main>
</template>
