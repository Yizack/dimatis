<script setup lang="ts">
definePageMeta({ layout: "site" });

useSeoMeta({
  title: "Legado: A decade of Dimatis Sample Pack",
  description: "This sample pack contains a wide variety of sounds handpicked by me from the best sounds and presets of my 10 years of music career.",
  ogImage: `${SITE.url}/images/legado.jpg`,
  ogImageWidth: "500",
  ogImageHeight: "500",
  ogImageAlt: "Legado: A decade of Dimatis Sample Pack",
  ogUrl: `${SITE.url}/shop/legado`,
  ogType: "website",
  twitterCard: "summary",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: "Legado: A decade of Dimatis Sample Pack",
  twitterDescription: "This sample pack contains a wide variety of sounds handpicked by me from the best sounds and presets of my 10 years of music career.",
  twitterImage: `${SITE.url}/images/legado.jpg`
});
</script>

<template>
  <main>
    <section id="shop" class="py-lg-5 py-4 bg-body-secondary">
      <div class="container">
        <div class="d-flex gap-3 mb-4 flex-wrap">
          <div class="text-center position-relative">
            <img src="/images/legado.jpg" class="album-image rounded-3" itemprop="image" width="250" height="250">
            <span class="samplepack-blurry" style="background: url('/images/legado.jpg')" />
          </div>
          <div class="text-start d-flex flex-column">
            <p class="mb-0 h4">Dimatis</p>
            <h1 class="mb-0">Legado: A decade of Dimatis Sample Pack</h1>
            <p class="h4 text-secondary">$10</p>
            <div class="d-flex gap-2">
              <span>Melodic Dubstep</span>
              <span>•</span>
              <span>Chillstep</span>
              <span>•</span>
              <span>184 Samples, 64 Presets</span>
            </div>
            <div class="d-flex gap-2">
              <span>44.1khz - 24 bits WAV</span>
              <span>•</span>
              <span>100% Royalty Free</span>
            </div>
            <div class="flex-fill align-content-end mt-2 mt-lg-0">
              <div class="d-flex gap-2">
                <a class="btn btn-primary d-flex align-items-center gap-2 px-4 text-decoration-none" href="https://www.patreon.com/checkout/dimatis?pvid=309263" target="_blank">
                  <Icon name="tabler:shopping-bag-plus" size="1.3rem" />
                  <span>Buy</span>
                </a>
                <a class="btn btn-light d-flex align-items-center gap-2 px-4 text-dark text-decoration-none" href="/music/legado" target="_blank">
                  <Icon name="tabler:player-play-filled" size="1rem" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5>Story</h5>
          <p>I started learning to produce in 2013, a year later in 2014 I created the Dimatis' project, at the beginning I didn't set any goal, I just wanted to create music for myself as how I would like it to be, most of my tracks are inspired by my daily experiences, thoughts about the universe, existential thoughts, life mysteries. I try to express those emotions in my music. I will always recognize that I had luck in my musical journey, somehow I managed to carry my life with my music, I can't imagine what my life would be like if I hadn't started producing music. It has given me nearly everything I have today relationships, friendships, a supportive community, financial stability, and feeling proud of myself.</p>
          <p>Watch my <a class="text-primary-emphasis" href="https://youtu.be/AntejpPnW4s" target="_blank">Personal Q&A Session</a> video on my YouTube channel to know a little more about me.</p>
          <h5>Description</h5>
          <p>This sample pack contains a wide variety of sounds handpicked by me from the best sounds and presets of my 10 years of music career. Most of the sounds in this sample pack will include, as part of their names, the name of the song they came from. This is intended to give you the feeling of exploring a part of my discography as you use it.</p>
          <h5>Samples</h5>
          <ul>
            <li>10 Atmospheres</li>
            <li>30 Bass fills</li>
            <li>12 Drums: Hats</li>
            <li>12 Drums: Kicks</li>
            <li>37 Drums: Snares</li>
            <li>15 FX</li>
            <li>8 Grains</li>
            <li>19 Loops (Drums and Percussions)</li>
            <li>18 Sparkles</li>
            <li>22 Synths</li>
          </ul>
          <h5>Presets</h5>
          <ul>
            <li>31 Serum (4 Bass, 3 Keys, 4 Leads, 1 Pads, 14 Plucks, 3 Saws, 2 SerumFX) + 1 Noise (Sample) + 1 Instructions text</li>
            <li>16 Sylenth1 (1 Bass, 5 Leads, 6 Plucks, 2 Saws)</li>
            <li>4 Harmor (2 Bass, 1 Pluck, 1 Sub)</li>
            <li>7 Massive (1 Bass, 1 Grains, 1 Lead, 4 Plucks)</li>
            <li>6 Portal + 1 Pack image [PNG] + 1 Instructions text</li>
          </ul>
          <p>NOTE: All the samples and sounds in this Sample Pack are unique, created, and carefully crafted in detail, or heavily sampled/edited/processed from original sources by Dimatis for his music productions.</p>
          <p>Read the <span class="fw-bold">Certificate of Sound and Sample License</span> once purchased for more information.</p>
          <p><i>"By purchasing this Sample Pack, you are supporting and contributing to my music career, which allows me to continue pursuing my passion. I truly appreciate your support. I hope you find these samples inspiring and useful for your own projects."</i></p>
          <p>Thank you,<br>Yizack Rangel (Dimatis)</p>
        </div>
      </div>
    </section>
  </main>
</template>
