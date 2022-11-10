<script setup>
import { SITE } from "~/site-info.js";
import tracksJSON from "~/public/data/tracks.json";
import lyricsJSON from "~/public/data/lyrics.json";
definePageMeta({ layout: "site" });
</script>

<template>
  <main>
    <section id="music">
      <div class="container py-5">
        <div class="pb-3 text-center">
          <h1 class="mb-1">{{ track.title }}</h1>
          <h3 class="text-secondary mb-0">{{ track.artists }}</h3>
        </div>
        <MusicPlayer class="text-center rounded-3" :size="{height: '450px', width: '100%'}" :track="track" :param="param"/>
        <div class="row my-3">
          <div class="col-12 col-md-8 mb-3 mb-md-0 text-secondary">
            <h3 class="mb-1 text-white">Description</h3>
            <p>{{ track.description }}</p>
            <template v-if="lyric">
              <h3 class="mt-3 mb-1 text-white">Lyrics</h3>
              <pre class="m-0">{{ lyric }}</pre>
            </template>
            <template v-if="'credits' in track">
              <h3 class="mt-3 mb-1 text-white">Credits</h3>
              <template v-for="(credits, index) in track.credits" :key="index">
                <div :class="{ 'mb-3': track.credits.length - 1 !== index}">
                  <h5 class="mb-1">{{ credits.title }}</h5>
                  <template v-for="socials in credits.socials" :key="socials.name">
                    <p class="m-0">{{ socials.name }}: <a :href="socials.link" target="_blank">{{ socials.link }}</a></p>
                  </template>
                </div>
              </template>
            </template>
          </div>
          <div class="col-12 col-md-4">
            <div id="tags">
              <div class="mb-0">Genre</div>
              <div class="tag mb-2"><NuxtLink :to="`/tag/${genreURL}/`">{{ track.genre }}</NuxtLink></div>
              <template v-if="'album' in track">
                <div class="mb-0">Album</div>
                <div class="tag mb-2"><NuxtLink :to="`/album/${track.album.replace(/\s+/g, '-').toLowerCase()}/`">{{ track.album }}</NuxtLink></div>
              </template>
              <div class="mb-0">Release date</div>
              <div class="tag mb-2">{{ new Date(track.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) }}</div>
              <div class="mb-0">Duration</div>  
              <div class="tag mb-2">{{ track.duration }}</div>
              <div class="mb-0">Fanlink</div>
              <div class="tag"><a :href="`https://yizack.com/${param}`" target="_blank">yizack.com/{{ param }}</a></div>
            </div>
          </div>
        </div>
        <div id="more-tracks" class="pt-3">
          <h3 class="text-center">More <NuxtLink  class="tag" :href="`/tag/${genreURL}/`">{{ track.genre }}</NuxtLink> music</h3>
          <div class="row gallery text-center">
            <template v-for="(more, more_param) in moreTracks" :key="more_param">
              <div class="col-6 col-lg-3">
                <NuxtLink :to="`/music/${more_param}/`">
                 <img class="img-fluid scale-on-hover rounded-3" :src="`/images/${'cover' in more ? more.cover : more_param}.jpg`" :alt="`${more.artists} - ${more.title}`">
                  <p class="mt-2 mb-0">{{ more.title }}</p>
                  <p><small>{{ more.artists }}</small></p>
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: ["loading"],
  name: "TrackPage",
  data() {
    return {
      param: this.$route.params.track,
      tracks: tracksJSON,
      lyrics: lyricsJSON
    };
  },
  computed: {
    track() {
      return this.tracks[this.param] || {};
    },
    genreURL() {
      return this.track.genre.replace(/\s+/g, "-").toLowerCase();
    },
    lyric() {
      return this.lyrics[this.param]?.lyrics;
    },
    moreTracks() {
      return Object.entries(this.tracks).reduce((obj, [key, value]) => {
        if (value.genre === this.track.genre && Object.keys(obj).length < 8 && !key.includes(this.param)) {
          obj[key] = value;
        }
        return obj;
      }, {});
    },
    SEO() {
      const schemaOrg = {   
        "@context" : "http://schema.org",
        "@type" : "MusicRecording",
        "name" : this.track.title,
        "url" : `${SITE.url}/music/${this.param}`,
        "image" : `${SITE.url}/images/${this.track?.cover ? this.track.cover : this.param}.jpg`,
        "genre" : this.track.genre,
        "duration" : `PT${this.track?.hh ? this.track.hh : 0}H${this.track?.mm ? this.track.mm : 0}M${this.track?.ss ? this.track.ss : 0}S`,
        "datePublished": this.track.date.split("T")[0],
        "byArtist": []
      };

      this.track?.album ? schemaOrg.inAlbum = [{
        "@type": "MusicAlbum",
        "name": this.track.album,
        "url": `${SITE.url}/album/${this.track.album.replace(/\s+/g, "-").toLowerCase()}` 
      }] : null;

      this.track.person.forEach((person) => {
        schemaOrg.byArtist.push({
          "@type": "MusicGroup",
          "name": person
        });
      });

      return JSON.stringify(schemaOrg);
    }
  },
  created() {
    useHead({
      title: `${this.track.artists} - ${this.track.title}`,
      meta: [
        { name: "keywords", content: `release, ${this.track.title}, ${this.track.genre}, play, stream, download, fanlink` },
        { name: "description", content: this.track.description },
        // Protocolo Open Graph
        { property: "og:url", content: `${SITE.url}/music/${this.param}/` },
        { property: "og:type", content: "website" },
        { property: "og:title", content: `${this.track.artists} - ${this.track.title}` },
        { property: "og:site_name", content: SITE.name },
        { property: "og:image", content: `${SITE.url}/images/${this.track?.cover ? this.track.cover : this.param}.jpg` },
        { property: "og:image:width", content: "500" },
        { property: "og:image:height", content: "500" },
        { property: "og:image:alt", content: `${this.track.artists} - ${this.track.title}` },
        { property: "og:description", content: this.track.description },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:image", content: `${SITE.url}/images/${this.track?.cover ? this.track.cover : this.param}.jpg` },
        { name: "twitter:title", content: `${this.track.artists} - ${this.track.title}` },
        { name: "twitter:description", content: this.track.description },
        { name: "twitter:site", content: `@${SITE.twitter}` }
      ],
      script: [
        // Schema.org
        { type: "application/ld+json", children: this.SEO }
      ],
      link: [
        { rel: "canonical", href: `${SITE.url}/music/${this.param}/` }
      ]
    });
  }
};
</script>
