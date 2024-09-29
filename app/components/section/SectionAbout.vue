<script setup lang="ts">
const showFullAbout = ref(false);
</script>

<template>
  <section id="about" class="about position-relative py-lg-5 py-4">
    <div class="container position-relative z-1">
      <div class="pb-3">
        <h3 class="text-center text-uppercase">About</h3>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="text-justify text-secondary">
            <div class="position-relative overflow-hidden" :class="{ 'about-fade': !showFullAbout }" :style="showFullAbout ? 'height:auto' : 'height: 380px;'">
              <p>
                Yizack Rangel, also known as <a href="https://open.spotify.com/artist/0RAT9Q5WZwzJRJgTI38zJR" target="_blank" title="Dimatis on Spotify">Dimatis</a>. He was born and raised in La Chorrera, Panama on June 15th, 1998. He started producing music at the age of 15 years old in 2013 as a hobby in his bedroom. In 2014, he officially started the Dimatis project.<br><br>

                Dimatis is deeply immersed in the melodic electronic music scene, with <a href="https://open.spotify.com/playlist/6Qu7co7czjjXwSEuCyCOAD" target="_blank" title="Spotify Melodic Dubstep Playlist">Melodic Dubstep</a> as his primary genre. Over time, he has also embraced other styles, such as Chillstep, Future Garage, Chill, Liquid DnB, Future Bass, blending them to create his signature sound.<br><br>

                In 2018, Dimatis significantly impacted the Melodic Dubstep and Chillstep communities by combining these two genres into a unique style that characterizes him from others. In 2019 he released his first EP <NuxtLink to="/album/floating" title="Dimatis - Floating EP">Floating</NuxtLink>, which features two of his most popular tracks <NuxtLink to="/music/mists" title="Dimatis - Mists">Mists</NuxtLink> and <NuxtLink to="/music/what-awaits-us" title="Dimatis - What Awaits Us">What Awaits Us</NuxtLink>. In 2020, he followed up with his first full-length album, <NuxtLink to="/album/experiences" title="Dimatis - Experiences Album">Experiences</NuxtLink> in which his song <NuxtLink to="/music/overcoming" title="Dimatis - Overcoming">Overcoming</NuxtLink> gained viral attention in France and became widely used in vlogs and social media content.<br><br>

                Between 2020 and 2021, Dimatis collaborated with several talented vocalists, including Elvya, Miss Lina, Salvo producing standout songs like <NuxtLink to="/music/out-there" title="Dimatis - Out There (feat. Elvya)">Out There</NuxtLink>, <NuxtLink to="/music/fly-again" title="Dimatis - Fly Again (feat. Miss Lina)">Fly Again</NuxtLink>, <NuxtLink to="/music/paying-for-it" title="Dimatis - Paying For It (feat. Salvo)">Paying For It</NuxtLink>.<br><br>

                In 2024, he consistently released music throughout the year. One of his standout releases was a collaboration with Mox Jade and Sydney Grimm, titled <NuxtLink to="/music/the-songs-of-yesterday" title="Dimatis, Mox Jade, and Sydney Grimm - The Songs of Yesterday">The Songs of Yesterday</NuxtLink>, released on Jade City Records. In March, he also performed at the Magefest 2024 Online Festival hosted by Mox Jade. Later in October, his collaboration with Calmseer, <NuxtLink to="/music/to-stand-again" title="Dimatis & Calmseer - To Stand Again">To Stand Again</NuxtLink>, released on the same label, deeply resonated with the listeners.<br><br>

                Throughout the years, Dimatis has steadily improved his production quality and achieved millions of streams. His music has been featured on major YouTube channels like <a href="https://youtube.com/AirwaveMusicTV" target="_blank" title="AirwaveMusicTV">AirwaveMusicTV</a>, <a href="https://youtube.com/OnlyChillstep" target="_blank" title="OnlyChillstep">OnlyChillstep</a>, <a href="https://youtube.com/LaMusiqueLibre" target="_blank" title="LaMusiqueLibre">La Musique Libre</a>, <a href="https://youtube.com/MixHound" target="_blank" title="MixHound">MixHound</a>, <a href="https://youtube.com/HearWeGoCopyrightFreeMusic" target="_blank" title="HearWeGo">HearWeGo</a>.<br><br>

                His mission is to share his music with the world by providing beautiful emotions through the melodies of his songs and one day be recognized for his music.<br><br>

                Artists who inspire him are: Au5, Blackmill, Chime, CMA, Collin McLoughlin, Crystal Skies, ILLENIUM, Said The Sky, Seven Lions, Skrux, Tim Schaufert, Xilent, among many others.
              </p>
            </div>
            <a v-if="!showFullAbout" class="small" role="button" @click="showFullAbout = true">
              <span class="text-decoration-underline">Read more</span>
              <Icon name="tabler:caret-down-filled" />
            </a>
            <a v-else class="small" role="button" @click="showFullAbout = false">
              <span class="text-decoration-underline">Show less</span>
              <Icon name="tabler:caret-up-filled" />
            </a>
            <hr role="none">
            <p class="small"><small>Edited on 29 September 2024.</small></p>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <img class="img-fluid rounded-3 shadow" src="/images/sq-logo-dimatis.jpg" :alt="`${SITE.name} photo`">
        </div>
      </div>
    </div>
  </section>
</template>
