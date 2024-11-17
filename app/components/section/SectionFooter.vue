<template>
  <footer class="text-start pt-lg-5 pt-4 border-top">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-lg-4">
          <h4>Stream Music</h4>
          <ul class="alt">
            <li><NuxtLink target="_blank" :to="SITE.stream.spotify">Spotify</NuxtLink></li>
            <li><NuxtLink target="_blank" :to="SITE.stream.soundcloud">SoundCloud</NuxtLink></li>
            <li><NuxtLink target="_blank" :to="SITE.stream.youtube">YouTube</NuxtLink></li>
            <li><NuxtLink target="_blank" :to="SITE.stream.apple">Apple Music</NuxtLink></li>
          </ul>
        </div>
        <div class="col-md-3 col-lg-4">
          <h4>Buy Music</h4>
          <ul class="alt">
            <li><NuxtLink target="_blank" :to="SITE.buy.itunes">iTunes</NuxtLink></li>
            <li><NuxtLink target="_blank" :to="SITE.buy.bandcamp">Bandcamp</NuxtLink></li>
            <li><NuxtLink target="_blank" :to="SITE.buy.amazon">Amazon</NuxtLink></li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-4">
          <h4>Contact</h4>
          <ul class="icons mb-0">
            <li class="spotify pe-3">
              <NuxtLink :to="SITE.socials.spotify" target="_blank" :aria-label="`Check out ${SITE.name} on Spotify`">
                <Icon name="fa6-brands:spotify" />
              </NuxtLink>
            </li>
            <li class="soundcloud pe-3">
              <NuxtLink :to="SITE.socials.soundcloud" target="_blank" :aria-label="`Check out ${SITE.name} on Soundcloud`">
                <Icon name="fa6-brands:soundcloud" />
              </NuxtLink>
            </li>
            <li class="youtube pe-3">
              <NuxtLink :to="SITE.socials.youtube" target="_blank" :aria-label="`Check out ${SITE.name} on YouTube`">
                <Icon name="fa6-brands:youtube" />
              </NuxtLink>
            </li>
            <li class="twitter pe-3">
              <NuxtLink :to="SITE.socials.twitter" target="_blank" :aria-label="`Contact ${SITE.name} on Twitter`">
                <Icon name="fa6-brands:x-twitter" />
              </NuxtLink>
            </li>
            <li class="facebook pe-3">
              <NuxtLink :to="SITE.socials.facebook" target="_blank" :aria-label="`Contact ${SITE.name} on Facebook`">
                <Icon name="fa6-brands:facebook" />
              </NuxtLink>
            </li>
            <li class="instagram">
              <NuxtLink :to="SITE.socials.instagram" target="_blank" :aria-label="`Contact ${SITE.name} on Instagram`">
                <Icon name="fa6-brands:instagram" />
              </NuxtLink>
            </li>
          </ul>
          <div class="py-2">
            <span>Email: </span>
            <NuxtLink class="mx-0" :to="`mailto:${SITE.email}`" target="_blank">{{ SITE.email }}</NuxtLink>
          </div>
        </div>
        <div class="col-md-12 text-center py-2 text-small">
          <p class="mb-0">© {{ SITE.name }}. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
