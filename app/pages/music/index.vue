<script setup lang="ts">
definePageMeta({ layout: "site" });

const filters = ref({
  year: 0,
  type: "all",
  search: ""
});

const tracksFiltered = computed(() => {
  let tracksAcc: DimatisTrack[];

  if (filters.value.year === 0 && filters.value.type === "all" && filters.value.search === "") {
    return tracks;
  }

  switch (filters.value.type) {
    case "solo":
      tracksAcc = tracksSolo.value;
      break;
    case "remixes":
      tracksAcc = tracksRemixes.value;
      break;
    case "collabs":
      tracksAcc = tracksCollabs.value;
      break;
    default:
      tracksAcc = tracks;
  }

  tracksAcc = tracksAcc.filter((track) => {
    const matchesSearch = isTrackSearchMatch(track, filters.value.search);
    const matchesYear = isTrackYearMatch(track, filters.value.year);
    return matchesSearch && matchesYear;
  });

  return tracksAcc;
});

const tracksCount = 15;
const scrollCount = ref(0);

const tracksArray = computed(() => {
  return tracksFiltered.value.slice(0, tracksCount + (scrollCount.value * tracksCount)).reduce((acc, t) => {
    acc.push(t);
    return acc;
  }, [] as DimatisTrack[]);
});

useInfiniteScroll(document, () => {
  scrollCount.value++;
}, { distance: 300 });

useSeoMeta({
  title: `Music | ${SITE.name}`,
  description: `All ${SITE.name} releases`,
  keywords: "discography, releases, singles, remixes, songs, listen",
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/music`,
  ogType: "website",
  ogTitle: `Music | ${SITE.name}`,
  ogSiteName: SITE.name,
  ogDescription: `All ${SITE.name} releases`,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: "300",
  ogImageHeight: "200",
  ogImageAlt: `${SITE.name} cover image`,
  // Protocolo Twitter
  twitterCard: "summary",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: `Music | ${SITE.name}`,
  twitterDescription: `All ${SITE.name} releases`,
  twitterImage: `${SITE.url}/${SITE.logo}`
});

useHead({
  link: [
    { rel: "canonical", href: `${SITE.url}/music` }
  ]
});

const currentYear = new Date().getFullYear();
</script>

<template>
  <main class="page">
    <section>
      <div class="container py-5 text-center">
        <h3 class="text-uppercase">Music</h3>
        <p class="mb-4">Listen to all my music</p>
        <div class="col-12 col-lg-11 mx-auto">
          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filters</button>
            <div class="dropdown-menu p-2">
              <div class="form-floating mb-2">
                <select id="filter-year" v-model.number="filters.year" class="form-select">
                  <option :value="0">All</option>
                  <option v-for="n of (currentYear - 2014) + 1" :key="n" :value="currentYear - n + 1">{{ currentYear - n + 1 }}</option>
                </select>
                <label for="filter-year" class="form-label">Year</label>
              </div>
              <div class="form-floating mb-2">
                <select id="filter-year" v-model="filters.type" class="form-select">
                  <option value="all">All</option>
                  <option value="solo">Solo</option>
                  <option value="remixes">Remixes</option>
                  <option value="collabs">Collaborations</option>
                </select>
                <label for="filter-year" class="form-label">Type</label>
              </div>
            </div>
            <input v-model.trim="filters.search" type="text" class="form-control form-control-lg" placeholder="Search...">
          </div>
        </div>
        <div class="row my-4">
          <TransitionGroup name="list">
            <div v-for="track of tracksArray" :key="track.id" class="col-12 col-lg-4 mb-3">
              <div class="item">
                <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{ width: '300px', height: '385px' }" :track="track" :param="track.cover ? track.cover : track.id" />
                <NuxtLink class="text-decoration-none" :to="`/music/${track.id}`">
                  <p class="mb-0">{{ track.title }}</p>
                  <p class="text-secondary"><small>{{ track.artists }}</small></p>
                </NuxtLink>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </section>
  </main>
</template>
