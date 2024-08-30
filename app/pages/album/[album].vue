<script setup lang="ts">
definePageMeta({ layout: "site" });

const param = ref(useRoute("album-album").params.album);
const album = computed(() => albums.find(a => a.id === param.value)!);

if (!album.value) {
  throw createError({
    statusCode: 404,
    message: `Album not found: '${param.value}'`,
    fatal: true
  });
}

const moreAlbums = computed(() => {
  return albums.reduce((acc, a) => {
    if (a.id !== album.value.id && acc.length < 8) {
      acc.push(a);
    }
    return acc;
  }, [] as DimatisAlbum[]);
});

const getAlbumTracks = (album: DimatisAlbum) => {
  return album.tracks.reduce((acc, track) => {
    const albumTrack = tracks.find(t => t.id === track);
    if (albumTrack) acc.push(albumTrack);
    return acc;
  }, [] as DimatisTrack[]);
};

const goTrack = (track: string) => {
  useRouter().push(`/music/${track}`);
};

useSeoMeta({
  title: `${album.value.artists} - ${album.value.title} (${album.value.type})`,
  description: album.value.description,
  keywords: `album, ${album.value.title}, fanlink, download`,
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/album/${param.value}`,
  ogType: "website",
  ogTitle: `${album.value.artists} - ${album.value.title} (${album.value.type})`,
  ogSiteName: SITE.name,
  ogImage: `${SITE.url}/images/${album.value.cover}.jpg`,
  ogImageWidth: "500",
  ogImageHeight: "500",
  ogImageAlt: `${album.value.artists} - ${album.value.title} (${album.value.type})`,
  ogDescription: album.value.description,
  // Twitter Card
  twitterCard: "summary",
  twitterImage: `${SITE.url}/images/${album.value.cover}.jpg`,
  twitterTitle: `${album.value.artists} - ${album.value.title} (${album.value.type})`,
  twitterDescription: album.value.description,
  twitterSite: `@${SITE.twitter}`
});

useHead({
  link: [
    { rel: "canonical", href: `${SITE.url}/album/${param.value}` }
  ]
});
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
                  <th><Icon name="fa6-regular:clock" /></th>
                </tr>
              </thead>
              <tbody class="text-secondary">
                <template v-for="(track, index) of getAlbumTracks(album)" :key="track">
                  <tr role="button" :itemprop="track.id" itemscope itemtype="http://www.schema.org/MusicRecording" @click="goTrack(track.id)">
                    <td itemprop="position">{{ index + 1 }}</td>
                    <td itemprop="url" :content="`${SITE.url}/music/${track}`">{{ track.artists }}</td>
                    <td itemprop="name">{{ track.title }}</td>
                    <td itemprop="duration" :content="`PT${'hh' in track ? track.hh : 0}H${'mm' in track ? track.mm : 0}M${'ss' in track ? track.ss : 0}S`">{{ track.mm }}:{{ String(track.ss).padStart(2, "0") }}</td>
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
                <div class="tag">
                  <a class="d-flex align-items-center gap-2" :href="`${SITE.fanlinkUrl}/${album.cover}`" target="_blank">
                    <span>{{ SITE.fanlinkDomain }}/{{ album.cover }}</span>
                    <Icon name="fa6-solid:arrow-up-right-from-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="more-albums" class="pt-3">
          <h3 class="text-center">More <NuxtLink class="tag" href="/album">Albums</NuxtLink></h3>
          <div class="row gallery text-center">
            <template v-for="more in moreAlbums" :key="more.id">
              <div class="col-6 col-lg-3">
                <div class="item">
                  <NuxtLink :to="`/album/${more.id}`">
                    <img class="img-fluid scale-on-hover rounded-3" :src="`/images/${more.cover}.jpg`" :alt="`${more.artists} - ${more.title} (${more.type})`">
                    <p class="mt-2 mb-0">{{ more.title }} ({{ more.type }})</p>
                    <p><small>{{ more.artists }}</small></p>
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
