<script setup>
import { SITE } from "~/site-info.js";
import tracksJSON from "~/public/data/tracks.json";
definePageMeta({ layout: "site" });
</script>

<template>
  <main class="page">
    <section>
      <div class="container py-5 text-center">
        <h3 class="text-uppercase">Music</h3>
        <p class="mb-0">Listen to all my music</p>
        <div class="row my-4">
          <template v-for="(track, param) in latestTracks" :key="param">
            <div class="col-12 col-lg-4">
              <div class="item">
                <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{width: '300px', height: '385px'}" :track="track" :param="param"/>
                <NuxtLink :to="`/music/${param}`">
                  <p class="mb-0">{{ track.title }}</p>
                  <p><small>{{ track.artists }}</small></p>
                </NuxtLink>
              </div>
            </div>
          </template>
          <template v-for="(track, param) in moreTracks" :key="param">
            <div class="col-12 col-lg-4" v-if="showMore">
              <div class="item">
                <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{width: '300px', height: '385px'}" :track="track" :param="param"/>
                <NuxtLink :to="`/music/${param}`">
                  <p class="mb-0">{{ track.title }}</p>
                  <p><small>{{ track.artists }}</small></p>
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>
        <div class="text-uppercase" v-if="!showMore && Object.keys(moreTracks).length">
          <a class="btn btn-outline-white rounded-pill text-decoration-none" role="button" @click="more()">Load more</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "MusicPage",
  data() {
    return {
      param: this.$route.params.track,
      tracks: tracksJSON,
      showMore: false
    };
  },
  methods: {
    more() {
      this.showMore = true;
    }
  },
  computed: {
    latestTracks() {
      return Object.entries(this.tracks).slice(0, 15).reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
    },
    moreTracks() {
      return Object.entries(this.tracks).slice(15).reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
    }
  },
  created() {
    useHead({
      title: `Music | ${SITE.name}`,
      meta: [
        { name: "keywords", content: "discography, releases, singles, remixes, songs, listen" },
        { name: "description", content: `All ${SITE.name} releases` },
        // Protocolo Open Graph
        { property: "og:url", content: `${SITE.url}/music` },
        { property: "og:type", content: "website" },
        { property: "og:title", content: `Music | ${SITE.name}` },
        { property: "og:site_name", content: SITE.name },
        { property: "og:description", content: `All ${SITE.name} releases` },
        { property: "og:image", content: `${SITE.url}/${SITE.cover}` },
        { property: "og:image:width", content: "300" },
        { property: "og:image:height", content: "200" },
        { property: "og:image:alt", content: `${SITE.name} cover image` },
        // Protocolo Twitter
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: `@${SITE.twitter}` },
        { name: "twitter:title", content: `Music | ${SITE.name}` },
        { name: "twitter:description", content: `All ${SITE.name} releases` },
        { name: "twitter:image", content: `${SITE.url}/${SITE.logo}` }
      ],
      link: [
        { rel: "canonical", href: `${SITE.url}/music/` }
      ]
    });
  }
};
</script>
