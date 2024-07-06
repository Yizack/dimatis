<script setup lang="ts">
definePageMeta({ layout: "site" });

useSeoMeta({
  title: `Albums | ${SITE.name}`,
  description: `All ${SITE.name} albums`,
  keywords: "albums, playlist, discography, ep, duration, artists",
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/album`,
  ogType: "website",
  ogTitle: `Albums | ${SITE.name}`,
  ogSiteName: SITE.name,
  ogDescription: `All ${SITE.name} albums`,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: "300",
  ogImageHeight: "200",
  ogImageAlt: `${SITE.name} cover image`,
  // Protocolo Twitter
  twitterCard: "summary",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: `Albums | ${SITE.name}`,
  twitterDescription: `All ${SITE.name} albums`,
  twitterImage: `${SITE.url}/${SITE.logo}`
});

useHead({
  link: [
    { rel: "canonical", href: `${SITE.url}/album` }
  ]
});
</script>

<template>
  <main>
    <section>
      <div class="container py-5 text-center">
        <h3 class="text-uppercase">Albums</h3>
        <p class="mb-0">Check all my albums</p>
        <div class="row my-4">
          <template v-for="(album, param) in albums" :key="param">
            <div class="col-12 col-lg-4">
              <div class="item">
                <NuxtLink :to="`/album/${param}`">
                  <img class="img-fluid scale-on-hover rounded-3" :src="`/images/${album.cover}.jpg`" :alt="`${album.artists} - ${album.title} (${album.type})`" width="300">
                  <p class="mt-2 mb-0">{{ album.title }} ({{ album.type }})</p>
                  <p><small>{{ album.artists }}</small></p>
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>
