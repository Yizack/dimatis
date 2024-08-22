<script setup lang="ts">
const latestTracks = tracks.reduce((acc, t) => {
  if (acc.length < 3) {
    acc.push(t);
  }
  return acc;
}, [] as DimatisTrack[]);
</script>

<template>
  <section id="music" class="bg-light">
    <div class="container py-5 text-center text-dark">
      <h3 class="text-uppercase">Latest Music</h3>
      <p class="mb-0">Listen to my latest music</p>
      <div class="row my-4">
        <template v-for="track of latestTracks" :key="track.id">
          <div class="col-12 col-lg-4">
            <MusicPlayer class="rounded-3 mx-auto mb-2" :size="{ width: '300px', height: '385px' }" :track="track" :param="track.id" />
            <NuxtLink :to="`/music/${track.id}`">
              <p class="mb-0">{{ track.title }}</p>
              <p><small>{{ track.artists }}</small></p>
            </NuxtLink>
          </div>
        </template>
      </div>
      <div class="text-uppercase">
        <NuxtLink class="btn btn-outline-dark rounded-pill text-decoration-none" role="button" to="/music/">More music</NuxtLink>
      </div>
    </div>
  </section>
</template>
