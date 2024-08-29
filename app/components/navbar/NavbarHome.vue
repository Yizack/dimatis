<script setup lang="ts">
const spotifyFollowers = ref<number | null>(null);

onMounted(async () => {
  const spotify = await $fetch<{ followers: number }>(`https://cf-spotify.yizack.com/followers?id=${SITE.spotify_id}`).catch(() => null);
  if (!spotify) return;
  spotifyFollowers.value = spotify.followers;
});
</script>

<template>
  <NavbarComponent fixed />
  <section style="background-image: url('/images/banner_page.jpg');" class="banner bg-dark position-relative overflow-hidden">
    <div class="position-absolute bottom-0 start-0 w-100 z-1 py-4">
      <div class="container">
        <h1 class="display-5 fw-bold">Dimatis</h1>
        <p class="mb-0">{{ SITE.description }}</p>
        <a href="https://open.spotify.com/artist/0RAT9Q5WZwzJRJgTI38zJR" target="_blank" class="text-decoration-none text-white" title="Follow on Spotify">
          <div class="d-flex mt-2">
            <span class="bg-spotify rounded-pill me-2 small px-2 py-1 d-flex align-items-center gap-1">
              <Icon name="fa6-brands:spotify" size="1.1rem" />
              <span>Spotify</span>
            </span>
            <div class="position-relative align-self-center">
              <span class="position-absolute" style="left: -9px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </span>
              <span class="bg-white rounded text-dark small py-1 px-2">
                <span v-if="spotifyFollowers">{{ spotifyFollowers }} followers</span>
                <span v-else class="spinner-box">
                  <span class="spinner-border text-dark" style="width:1rem; height:1rem; font-size: 0.5rem;">
                    <span class="visually-hidden">Loading...</span>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
