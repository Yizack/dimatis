<script setup lang="ts">
useSeoMeta({
  title: `Albums | ${SITE.name}`,
  description: `All ${SITE.name} albums`,
  keywords: "albums, playlist, discography, ep, duration, artists",
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/albums`,
  ogType: "website",
  ogTitle: `Albums | ${SITE.name}`,
  ogSiteName: SITE.name,
  ogDescription: `All ${SITE.name} albums`,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: 750,
  ogImageHeight: 375,
  ogImageAlt: `${SITE.name} cover image`,
  // Protocolo Twitter
  twitterCard: "summary_large_image",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: `Albums | ${SITE.name}`,
  twitterDescription: `All ${SITE.name} albums`,
  twitterImage: `${SITE.url}/${SITE.cover}`
});

useHead({
  link: [
    { rel: "canonical", href: `${SITE.url}/albums` }
  ]
});
</script>

<template>
  <main>
    <section id="album" class="py-lg-5 py-4 bg-body-secondary">
      <div class="container text-center">
        <h1 class="text-uppercase">Albums</h1>
        <p class="mb-0">Check all my albums</p>
        <div class="row my-4">
          <template v-for="album of albums" :key="album.id">
            <article class="col-12 col-md-6 col-lg-4 mb-3">
              <NuxtLink class="text-decoration-none" :to="`/albums/${album.id}`">
                <img class="img-fluid scale-on-hover rounded-3" :src="`/images/${album.art}.jpg`" :alt="`${album.artists} - ${album.title} (${album.type})`" width="300">
                <h3 class="mt-2 mb-0 fs-5 fst-normal fw-normal">{{ album.title }} ({{ album.type }})</h3>
                <p class="text-secondary"><small>{{ album.artists }}</small></p>
              </NuxtLink>
            </article>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>
