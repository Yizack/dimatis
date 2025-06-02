<script setup lang="ts">
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
  ogImageWidth: 750,
  ogImageHeight: 375,
  ogImageAlt: `${SITE.name} cover image`,
  // Protocolo Twitter
  twitterCard: "summary_large_image",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: SITE.name,
  twitterDescription: SITE.meta_description,
  twitterImage: `${SITE.url}/${SITE.cover}`
});

useHead({
  script: homeSchemaOrg.map(schema => ({
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "http://schema.org",
      ...schema
    })
  })),
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
  <main>
    <SectionBanner />
    <SectionAbout />
    <SectionStats />
    <section id="music" class="bg-body-secondary py-lg-5 py-4">
      <div class="container text-center">
        <h2 class="text-uppercase">Latest Music</h2>
        <p class="mb-0">Listen to my latest music</p>
        <div class="row my-4 justify-content-center">
          <template v-for="track of latestTracks" :key="track.id">
            <article class="col-12 col-md-6 col-lg-4">
              <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{ width: '300px', height: '385px' }" :track="track" :param="track.art || track.id" />
              <NuxtLink class="text-decoration-none" :to="`/tracks/${track.id}`">
                <h3 class="mb-0 fs-5 fst-normal fw-normal">{{ track.title }}</h3>
                <p class="text-secondary"><small>{{ track.artists }}</small></p>
              </NuxtLink>
            </article>
          </template>
        </div>
        <div class="text-uppercase">
          <NuxtLink class="btn btn-outline-white rounded-pill text-decoration-none" role="button" to="/tracks">More music</NuxtLink>
        </div>
      </div>
    </section>
    <SectionInstagram />
    <SectionMerch />
  </main>
</template>
