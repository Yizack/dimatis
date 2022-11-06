<script setup>
import { SITE } from "~/site-info.js";
import tracksJSON from "~/public/data/tracks.json";
definePageMeta({ layout: "site" });
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
  name: "TagPage",
  data() {
    return {
      genreURL: this.$route.params.genre,
      genres: {
        "bounce": "Bounce",
        "chill": "Chill",
        "chillstep": "Chillstep",
        "dance": "Dance",
        "dubstep": "Dubstep",
        "electronic": "Electronic",
        "electropop": "Electropop",
        "future-bass": "Future Bass",
        "future-garage": "Future Garage",
        "liquid-drum-&-bass": "Liquid Drum & Bass",
        "melodic-dubstep": "Melodic Dubstep",
        "piano": "Piano",
      },
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
    genre() {
      return this.genres[this.genreURL];
    },
    allTracksGenre() {
      return Object.entries(this.tracks).reduce((obj, [key, value]) => {
        if (value.genre === this.genre) {
          obj[key] = value;
        }
        return obj;
      }, {});
    },
    latestTracks() {
      return Object.entries(this.allTracksGenre).slice(0, 15).reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
    },
    moreTracks() {
      return Object.entries(this.allTracksGenre).slice(15).reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
    }
  },
  created() {
    useHead({
      title: `${this.genre} | ${SITE.name}`,
      meta: [
        { name: "keywords", content: `genre, ${this.genre}, tag, style, electronic` },
        { name: "description", content: `${this.genre} music by ${SITE.name}` },
        // Protocolo Open Graph
        { property: "og:url", content: `${SITE.url}/tag/${this.genreURL}` },
        { property: "og:type", content: "website" },
        { property: "og:title", content: `${this.genre} | ${SITE.name}` },
        { property: "og:site_name", content: SITE.name },
        { property: "og:description", content: `${this.genre} music by ${SITE.name}` },
        { property: "og:image", content: `${SITE.url}/${SITE.cover}` },
        { property: "og:image:width", content: "300" },
        { property: "og:image:height", content: "200" },
        { property: "og:image:alt", content: `${SITE.name} cover image` },
        // Protocolo Twitter
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: `@${SITE.twitter}` },
        { name: "twitter:title", content: `${this.genre} | ${SITE.name}` },
        { name: "twitter:description", content: `${this.genre} music by ${SITE.name}` },
        { name: "twitter:image", content: `${SITE.url}/${SITE.logo}` }
      ],
      link: [
        { rel: "canonical", href: `${SITE.url}/tag/${this.genreURL}` }
      ]
    });
  }
};
</script>
