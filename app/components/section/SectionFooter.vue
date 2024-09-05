<template>
  <footer class="text-start pt-lg-5 pt-4 border-top">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-lg-4">
          <h4>Stream Music</h4>
          <ul class="alt">
            <li><a target="_blank" :href="SITE.stream.spotify">Spotify</a></li>
            <li><a target="_blank" :href="SITE.stream.soundcloud">SoundCloud</a></li>
            <li><a target="_blank" :href="SITE.stream.youtube">Youtube</a></li>
            <li><a target="_blank" :href="SITE.stream.apple">Apple Music</a></li>
          </ul>
        </div>
        <div class="col-md-3 col-lg-4">
          <h4>Buy Music</h4>
          <ul class="alt">
            <li>
              <a target="_blank" href="https://geo.itunes.apple.com/us/artist/dimatis/id1139797073?app=itunes">iTunes</a>
            </li>
            <li>
              <a target="_blank" href="https://dimatis.bandcamp.com/">Bandcamp</a>
            </li>
            <li>
              <a target="_blank" href="https://www.amazon.com/s?k=Dimatis&i=digital-music">Amazon</a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-4">
          <h4>Contact</h4>
          <ul class="icons mb-0">
            <li class="spotify pe-3">
              <a :href="SITE.socials.spotify" target="_blank" :aria-label="`Check out ${SITE.name} on Spotify`">
                <Icon name="fa6-brands:spotify" />
              </a>
            </li>
            <li class="soundcloud pe-3">
              <a :href="SITE.socials.soundcloud" target="_blank" :aria-label="`Check out ${SITE.name} on Soundcloud`">
                <Icon name="fa6-brands:soundcloud" />
              </a>
            </li>
            <li class="youtube pe-3">
              <a :href="SITE.socials.youtube" target="_blank" :aria-label="`Check out ${SITE.name} on Youtube`">
                <Icon name="fa6-brands:youtube" />
              </a>
            </li>
            <li class="twitter pe-3">
              <a :href="SITE.socials.twitter" target="_blank" :aria-label="`Contact ${SITE.name} on Twitter`">
                <Icon name="fa6-brands:x-twitter" />
              </a>
            </li>
            <li class="facebook pe-3">
              <a :href="SITE.socials.facebook" target="_blank" :aria-label="`Contact ${SITE.name} on Facebook`">
                <Icon name="fa6-brands:facebook" />
              </a>
            </li>
            <li class="instagram">
              <a :href="SITE.socials.instagram" target="_blank" :aria-label="`Contact ${SITE.name} on Instagram`">
                <Icon name="fa6-brands:instagram" />
              </a>
            </li>
          </ul>
          <div class="py-2">
            <span>Email: </span>
            <a class="mx-0" :href="`mailto:${SITE.email}`" target="_blank">{{ SITE.email }}</a>
          </div>
        </div>
        <div class="col-md-12 text-center py-2 text-small">
          <p class="mb-0">© {{ SITE.name }}. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
