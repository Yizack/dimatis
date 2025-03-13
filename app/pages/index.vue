<script setup lang="ts">
definePageMeta({ layout: "home" });

useSeoMeta({
  title: SITE.name,
  description: SITE.meta_description,
  keywords: SITE.keywords,
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/`,
  ogType: "website",
  ogTitle: SITE.name,
  ogSiteName: SITE.name,
  ogDescription: SITE.meta_description,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: "300",
  ogImageHeight: "200",
  ogImageAlt: `${SITE.name} cover image`,
  // Protocolo Twitter
  twitterCard: "summary",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: SITE.name,
  twitterDescription: SITE.meta_description,
  twitterImage: `${SITE.url}/${SITE.logo}`
});

useHead({
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify(homeSchemaOrg) }
  ],
  link: [
    { rel: "canonical", href: `${SITE.url}` }
  ]
});

const latestTracks = tracks.reduce((acc, t) => {
  if (acc.length < 3) {
    acc.push(t);
  }
  return acc;
}, [] as DimatisTrack[]);
</script>

<template>
  <SectionAbout class="bg-body-secondary" />
  <SectionStats />
  <section id="music" class="bg-body-secondary py-lg-5 py-4">
    <div class="container text-center">
      <h3 class="text-uppercase">Latest Music</h3>
      <p class="mb-0">Listen to my latest music</p>
      <div class="row my-4">
        <template v-for="track of latestTracks" :key="track.id">
          <div class="col-12 col-lg-4">
            <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{ width: '300px', height: '385px' }" :track="track" :param="track.art || track.id" />
            <NuxtLink class="text-decoration-none" :to="`/tracks/${track.id}`">
              <p class="mb-0">{{ track.title }}</p>
              <p class="text-secondary"><small>{{ track.artists }}</small></p>
            </NuxtLink>
          </div>
        </template>
      </div>
      <div class="text-uppercase">
        <NuxtLink class="btn btn-outline-white rounded-pill text-decoration-none" role="button" to="/tracks">More music</NuxtLink>
      </div>
    </div>
  </section>
  <SectionInstagram />
</template>
