<script setup lang="ts">
definePageMeta({ layout: "site" });

useSeoMeta({
  title: `Branding | ${SITE.name}`,
  description: `${SITE.name} music branding`,
  keywords: "branding, logo, youtube, monetization, streaming, videos",
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/branding`,
  ogType: "website",
  ogTitle: `Branding | ${SITE.name}`,
  ogSiteName: SITE.name,
  ogDescription: `${SITE.name} music branding`,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: "300",
  ogImageHeight: "200",
  ogImageAlt: `${SITE.name} cover image`,
  // Protocolo Twitter
  twitterCard: "summary",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: `Branding | ${SITE.name}`,
  twitterDescription: `${SITE.name} music branding`,
  twitterImage: `${SITE.url}/${SITE.logo}`
});

useHead({
  link: [
    { rel: "canonical", href: `${SITE.url}/branding` }
  ]
});
</script>

<template>
  <main>
    <section id="branding" class="py-lg-5 py-4 bg-body-secondary">
      <div class="container text-center">
        <h3 class="text-uppercase">Branding</h3>
        <div class="row my-4">
          <div class="col-12 col-lg-6 mx-auto">
            <div class="mb-5">
              <p>The Dimatis' logo was made following the golden ratio proportions.</p>
              <img src="/images/logos/golden-ratio.jpg" class="img-fluid rounded-3 text-center" width="400" height="400">
            </div>
            <div>
              <h4 class="text-uppercase">Logo assets</h4>
              <p class="text-start">Assets of my logo available for download, use these in collaborations with me, blogs, videos, and anything related to my music.</p>
            </div>
          </div>
        </div>
        <div v-for="(brands, i) of BRANDING" :key="i" class="row col-12 col-lg-6 m-auto py-4">
          <h5 class="text-uppercase">{{ brands.title }}</h5>
          <p>{{ brands.description }}</p>
          <div v-for="(file, j) of brands.files" :key="j" class="col-6 g-2">
            <div class="card rounded-3 overflow-hidden">
              <div class="card-body" :class="file.white ? 'bg-dark' : 'bg-white'">
                <NuxtLink :to="`/images/logos/${file.filename}`" target="_blank" :download="file.download">
                  <div class="position-absolute top-0 end-0 m-1 px-1 rounded small" :class="file.white ? 'bg-white text-dark' : 'bg-body-tertiary text-white'">
                    <small v-if="file.size">{{ file.size?.width }}x{{ file.size?.height }}</small>
                  </div>
                  <img :src="`/images/logos/${file.filename}`" alt="Dimatis logo" class="img-fluid" :width="file.size?.width" :height="file.size?.height">
                </NuxtLink>
              </div>
              <div class="card-footer">{{ file.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
