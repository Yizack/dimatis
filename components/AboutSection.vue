<script setup lang="ts">
const spotifyFollowers = ref<number | null>(null);

onMounted(async () => {
  const spotify = await $fetch<{ followers: number }>(`https://cf-spotify.yizack.com/followers?id=${SITE.spotify_id}`).catch(() => null);
  if (!spotify) return;
  spotifyFollowers.value = spotify.followers;
});
</script>

<template>
  <section id="about">
    <div class="container py-5 text-white">
      <div class="pb-3">
        <h3 class="text-center text-uppercase">About</h3>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="text-justify text-secondary">
            <p>
              Yizack Rangel, also known as <a href="https://open.spotify.com/artist/0RAT9Q5WZwzJRJgTI38zJR" target="_blank" title="Dimatis on Spotify">Dimatis</a>. He was born and raised in La Chorrera, Panama on June 15th, 1998. He started producing music at the age of 15 years old in 2013 as a hobby in his bedroom.<br><br>

              He loves the melodic electronic music scene, his main genre is <a href="https://open.spotify.com/playlist/6Qu7co7czjjXwSEuCyCOAD" target="_blank" title="Spotify Melodic Dubstep Playlist">Melodic Dubstep</a> and he has also adopted other genres like Chillstep, Future Garage, Chill, Liquid DnB, Future Bass.<br><br>

              Around 2018 he made a significant presence in the melodic dubstep and chillstep community by combining these two genres into a unique style that characterizes him from others. In 2019 he released his first EP <NuxtLink to="/album/floating" title="Dimatis - Floating EP">Floating</NuxtLink> to which two of his most played songs belong. In 2020 he released his first Album <NuxtLink to="/album/experiences" title="Dimatis - Experiences Album">Experiences</NuxtLink> in which his song <NuxtLink to="/music/overcoming" title="Dimatis - Overcoming">Overcoming</NuxtLink> went significantly viral in France and is used in so many vlogs. Between 2020 and 2021 he collaborated with talented singers like Elvya, Miss Lina, Salvo to create unique songs like <NuxtLink to="/music/out-there" title="Dimatis - Out There (feat. Elvya)">Out There</NuxtLink>, <NuxtLink to="/music/fly-again" title="Dimatis - Fly Again (feat. Miss Lina)">Fly Again</NuxtLink>, <NuxtLink to="/music/paying-for-it" title="Dimatis - Paying For It (feat. Salvo)">Paying For It</NuxtLink>.<br><br>

              Over the years, he has been improving the quality of his music and reaching millions of plays. He has been supported by important YouTube channels like <a href="https://youtube.com/AirwaveMusicTV" target="_blank" title="AirwaveMusicTV">AirwaveMusicTV</a>, <a href="https://youtube.com/OnlyChillstep" target="_blank" title="OnlyChillstep">OnlyChillstep</a>, <a href="https://youtube.com/LaMusiqueLibre" target="_blank" title="LaMusiqueLibre">La Musique Libre</a>, <a href="https://youtube.com/MixHound" target="_blank" title="MixHound">MixHound</a>, <a href="https://youtube.com/HearWeGoCopyrightFreeMusic" target="_blank" title="HearWeGo">HearWeGo</a>.<br><br>

              His mission is to share his music with the world by providing beautiful emotions through the melodies of his songs and one day be recognized for his music.<br><br>

              Artists who inspire him are: Au5, Blackmill, Chime, CMA, Collin McLoughlin, Crystal Skies, ILLENIUM, Said The Sky, Seven Lions, Skrux, Tim Schaufert, Xilent, among many others.
            </p>
            <hr>
            <p class="small"><small>Edited on 2 September 2022.</small></p>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <img class="img-fluid rounded-3" src="/images/dimatis-bio.jpg" :alt="`${SITE.name} photo`">
          <a id="follow-spotify" href="https://open.spotify.com/artist/0RAT9Q5WZwzJRJgTI38zJR" target="_blank" title="Follow on Spotify">
            <div class="d-flex justify-content-center mt-2">
              <span id="spotify-button" class="rounded-pill me-2 small px-2 py-1 text-white text-uppercase d-flex align-items-center gap-1">
                <Icon name="fa6-brands:spotify" size="1.1rem" />
                <span>Follow</span>
              </span>
              <div class="position-relative align-self-center">
                <span class="position-absolute" style="left: -9px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                  </svg>
                </span>
                <span id="spotify-followers" class="bg-white rounded text-dark small py-1 px-2">
                  <span v-if="!spotifyFollowers" class="spinner-box">
                    <span class="spinner-border text-dark" style="width:1rem; height:1rem; font-size: 0.5rem;">
                      <span class="visually-hidden">Loading...</span>
                    </span>
                  </span>
                  <span>{{ spotifyFollowers }} followers</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
