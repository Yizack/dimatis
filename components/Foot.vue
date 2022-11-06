<script setup>
import { SITE } from "~/site-info.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpotify, faSoundcloud, faYoutube, faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <footer class="bg-light text-dark text-start pt-5">
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
              <a :href="SITE.socials.spotify" target="_blank"><FontAwesomeIcon class="icon" :icon="faSpotify"/></a>
            </li>
            <li class="soundcloud pe-3">
              <a :href="SITE.socials.soundcloud" target="_blank"><FontAwesomeIcon class="icon" :icon="faSoundcloud"/></a>
            </li>
            <li class="youtube pe-3">
              <a :href="SITE.socials.youtube" target="_blank"><FontAwesomeIcon class="icon" :icon="faYoutube"/></a>
            </li>
            <li class="twitter pe-3">
              <a :href="SITE.socials.twitter" target="_blank"><FontAwesomeIcon class="icon" :icon="faTwitter"/></a>
            </li>
            <li class="facebook pe-3">
              <a :href="SITE.socials.facebook" target="_blank"><FontAwesomeIcon class="icon" :icon="faFacebook"/></a>
            </li>
            <li class="instagram">
              <a :href="SITE.socials.instagram" target="_blank"><FontAwesomeIcon class="icon" :icon="faInstagram"/></a>
            </li>
          </ul>
          <ul class="contact">
            <li>
              <span class="ml-2">Email: </span><a class="mx-0" :href="`mailto:${ SITE.email }`" target="_blank">{{ SITE.email }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-12 text-center py-2 text-small">
          <p class="mb-0">© {{ SITE.name }}. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>
