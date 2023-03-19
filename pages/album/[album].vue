<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
definePageMeta({ layout: "site" });
</script>

<template>
  <main>
    <section id="album">
      <div class="container py-5" itemscope itemtype="http://schema.org/MusicAlbum">
        <div class="pb-3 text-center">
          <h1 class="mb-1"><span itemprop="name">{{ album.title }}</span> ({{ album.type }})</h1>
          <h3 class="text-secondary mb-0" itemprop="byArtist" itemscope itemtype="http://schema.org/MusicGroup"><span itemprop="name">{{ album.artists }}</span></h3>
        </div>
        <div class="text-center my-3">
          <img :src="`/images/${album.cover}.jpg`" class="album-image rounded-3" itemprop="image" width="300" height="300">
          <span class="album-image-blurry" :style="`background: url('/images/${album.cover}.jpg')`" />
        </div>
        <div class="row mx-0 my-3">
          <div class="col-12 info mx-0 p-0">
            <h3 class="mb-1">Tracks</h3>
            <table class="table">
              <thead class="text-white">
                <tr class="small text-uppercase">
                  <th>#</th>
                  <th>Artists</th>
                  <th>Title</th>
                  <th><FontAwesomeIcon :icon="faClock" /></th>
                </tr>
              </thead>
              <tbody class="text-secondary">
                <template v-for="(track, index) in album.tracks" :key="track">
                  <tr role="button" :itemprop="track" itemscope itemtype="http://www.schema.org/MusicRecording" @click="goTrack(track)">
                    <td itemprop="position">{{ index + 1 }}</td>
                    <td itemprop="url" :content="`${SITE.url}/music/${track}`">{{ tracks[track].artists }}</td>
                    <td itemprop="name">{{ tracks[track].title }}</td>
                    <td itemprop="duration" :content="`PT${'hh' in tracks[track] ? tracks[track].hh : 0}H${'mm' in tracks[track] ? tracks[track].mm : 0}M${'ss' in tracks[track] ? tracks[track].ss : 0}S`">{{ tracks[track].mm }}:{{ String(tracks[track].ss).padStart(2, "0") }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <div class="col-12 row mt-3 mb-3 mb-md-0 mx-0 bg-secondary rounded p-3">
            <div class="col-12 col-md-8 text-secondary p-0">
              <h3 class="mb-0 text-white">Description</h3>
              <p class="mb-md-0">{{ album.description }}</p>
            </div>
            <div class="col-12 col-md-4 ps-md-3 p-0">
              <div class="tags">
                <div class="mb-0">Type</div>
                <div class="tag mb-1">{{ album.type }}</div>
                <div class="mb-0">Release date</div>
                <div class="tag mb-1" itemprop="datePublished" :content="album.date.split('T')[0]">{{ new Date(album.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) }}</div>
                <div class="mb-0">Fanlink</div>
                <div class="tag"><a :href="`https://yizack.com/${album.cover}/`" target="_blank">yizack.com/{{ album.cover }}<FontAwesomeIcon class="ms-2" :icon="faArrowUpRightFromSquare" /></a></div>
              </div>
            </div>
          </div>
        </div>
        <div id="more-albums" class="pt-3">
          <h3 class="text-center">More <NuxtLink class="tag" href="/album/">Albums</NuxtLink></h3>
          <div class="row gallery text-center">
            <template v-for="(moreAlbum, key) in moreAlbums" :key="key">
              <div class="col-6 col-lg-3">
                <div class="item">
                  <NuxtLink :to="`/album/${key}/`">
                    <img class="img-fluid scale-on-hover" :src="`/images/${moreAlbum.cover}.jpg`" :alt="`${moreAlbum.artists} - ${moreAlbum.title} (${moreAlbum.type})`">
                    <p class="mt-2 mb-0">{{ moreAlbum.title }} ({{ moreAlbum.type }})</p>
                    <p><small>{{ moreAlbum.artists }}</small></p>
                  </NuxtLink>
                </div>
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
  name: "AlbumPage",
  data () {
    return {
      param: this.$route.params.album
    };
  },
  computed: {
    album () {
      return albums[this.param] || {};
    },
    moreAlbums () {
      return Object.entries(albums).slice(0, 8).reduce((obj, [key, value]) => {
        if (!key.includes(this.param)) {
          obj[key] = value;
        }
        return obj;
      }, {});
    }
  },
  created () {
    useHead({
      title: `${this.album.artists} - ${this.album.title} (${this.album.type})`,
      meta: [
        { name: "keywords", content: `album, ${this.album.title}, fanlink, download` },
        { name: "description", content: this.album.description },
        // Protocolo Open Graph
        { property: "og:url", content: `${SITE.url}/album/${this.param}/` },
        { property: "og:type", content: "website" },
        { property: "og:title", content: `${this.album.artists} - ${this.album.title} (${this.album.type})` },
        { property: "og:site_name", content: SITE.name },
        { property: "og:image", content: `${SITE.url}/images/${this.album.cover}.jpg` },
        { property: "og:image:width", content: "500" },
        { property: "og:image:height", content: "500" },
        { property: "og:image:alt", content: `${this.album.artists} - ${this.album.title} (${this.album.type})` },
        { property: "og:description", content: this.album.description },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:image", content: `${SITE.url}/images/${this.album.cover}.jpg` },
        { name: "twitter:title", content: `${this.album.artists} - ${this.album.title} (${this.album.type})` },
        { name: "twitter:description", content: this.album.description },
        { name: "twitter:site", content: `@${SITE.twitter}` }
      ],
      link: [
        { rel: "canonical", href: `${SITE.url}/album/${this.param}/` }
      ]
    });
  },
  methods: {
    goTrack (track) {
      this.$nuxt.$router.push(`/music/${track}`);
    }
  }
};
</script>
