<script setup>
definePageMeta({ layout: "site" });
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
                <NuxtLink :to="`/album/${param}/`">
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

<script>
export default {
  name: "AlbumsPage",
  created () {
    useHead({
      title: `Albums | ${SITE.name}`,
      meta: [
        { name: "keywords", content: "albums, playlist, discography, ep, duration, artists" },
        { name: "description", content: `All ${SITE.name} albums` },
        // Protocolo Open Graph
        { property: "og:url", content: `${SITE.url}/album/` },
        { property: "og:type", content: "website" },
        { property: "og:title", content: `Albums | ${SITE.name}` },
        { property: "og:site_name", content: SITE.name },
        { property: "og:description", content: `All ${SITE.name} albums` },
        { property: "og:image", content: `${SITE.url}/${SITE.cover}` },
        { property: "og:image:width", content: "300" },
        { property: "og:image:height", content: "200" },
        { property: "og:image:alt", content: `${SITE.name} cover image` },
        // Protocolo Twitter
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: `@${SITE.twitter}` },
        { name: "twitter:title", content: `Albums | ${SITE.name}` },
        { name: "twitter:description", content: `All ${SITE.name} albums` },
        { name: "twitter:image", content: `${SITE.url}/${SITE.logo}` }
      ],
      link: [
        { rel: "canonical", href: `${SITE.url}/album/` }
      ]
    });
  }
};
</script>
