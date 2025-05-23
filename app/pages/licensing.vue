<script setup lang="ts">
useSeoMeta({
  title: `Licensing | ${SITE.name}`,
  description: `${SITE.name} music licensing`,
  keywords: "licensing, youtube, monetization, streaming, videos",
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/licensing`,
  ogType: "website",
  ogTitle: `Licensing | ${SITE.name}`,
  ogSiteName: SITE.name,
  ogDescription: `${SITE.name} music licensing`,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: 750,
  ogImageHeight: 375,
  ogImageAlt: `${SITE.name} cover image`,
  // Protocolo Twitter
  twitterCard: "summary_large_image",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: `Licensing | ${SITE.name}`,
  twitterDescription: `${SITE.name} music licensing`,
  twitterImage: `${SITE.url}/${SITE.cover}`
});

useHead({
  link: [
    { rel: "canonical", href: `${SITE.url}/licensing` }
  ]
});
</script>

<template>
  <main>
    <section id="licensing" class="py-lg-5 py-4 bg-body-secondary">
      <div class="container text-center">
        <div class="pb-2">
          <h1 class="text-uppercase">Licensing & Usage</h1>
        </div>
        <div class="row my-4">
          <div class="col-12 col-lg-6 text-start mx-auto">
            <p>Feel free to use my tracks in your monetized YouTube videos. The only condition is that please give me credits in the description of your video by adding at least one of my social links or you can copy and paste the following.</p>
            <div class="card bg-light my-3">
              <div class="card-body text-start text-dark">
                <p class="card-text">
                  ----------<br>
                  Music by Dimatis<br>
                  Spotify: <NuxtLink :to="SITE.socials.spotify" target="_blank">{{ SITE.socials.spotify }}</NuxtLink><br>
                  SoundCloud: <NuxtLink :to="SITE.socials.soundcloud" target="_blank">{{ SITE.socials.soundcloud }}</NuxtLink><br>
                  YouTube: <NuxtLink :to="SITE.socials.youtube" target="_blank">{{ SITE.socials.youtube }}</NuxtLink><br>
                  Instagram: <NuxtLink :to="SITE.socials.instagram" target="_blank">{{ SITE.socials.instagram }}</NuxtLink><br>
                  Facebook: <NuxtLink :to="SITE.socials.facebook" target="_blank">{{ SITE.socials.facebook }}</NuxtLink><br>
                  Twitter: <NuxtLink :to="SITE.socials.twitter" target="_blank">{{ SITE.socials.twitter }}</NuxtLink><br>
                  ----------
                </p>
              </div>
            </div>
            <p>If your video got copyright claimed by RouteNote, just dispute the claim and let them know that you have my permission, in case you need any help, please contact me via instagram: <NuxtLink target="_blank" :to="SITE.socials.instagram">@{{ SITE.instagram }}</NuxtLink>. Please don't content ID any content which includes my music.</p>
            <NuxtLink rel="license" to="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"></NuxtLink>
            <p>License: <NuxtLink rel="license" to="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</NuxtLink>.</p>
            <div id="accordion" data-bs-theme="light">
              <div class="card">
                <div class="card-header">
                  <a class="btn text-dark text-start w-100 collapsed" data-bs-toggle="collapse" href="#collapseOne">Click to open a guide to dispute RouteNote's Claim</a>
                </div>
                <div id="collapseOne" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body bg-light text-dark">
                    <ol>
                      <li class="mb-2">Make sure you have credited me in your video description. </li>
                      <li class="mb-2">Click details of the copyright claim.<div><img src="/images/routenote_dispute/r1.png" class="img-fluid"></div></li>
                      <li class="mb-2">Select action.<div><img src="/images/routenote_dispute/r2.png" class="img-fluid"></div></li>
                      <li class="mb-2">Click dispute.<div><img src="/images/routenote_dispute/r3.png" class="img-fluid"></div></li>
                      <li class="mb-2">Mark the "My dispute isn't based on any of the reasons above." checkbox and click Continue.<div><img src="/images/routenote_dispute/r4.png" class="img-fluid"></div></li>
                      <li class="mb-2">Select the option "License" and click Continue.<div><img src="/images/routenote_dispute/r5.png" class="img-fluid"></div></li>
                      <li class="mb-2">Mark the "I have permission to use the content from the copyright owner" checkbox.<div><img src="/images/routenote_dispute/r6.png" class="img-fluid"></div></li>
                      <li class="mb-2">I believe you can write anything that lets them know you have my permission to use my music but if you want, you can write the following in the form "I have permission to use this song as stated on the artist's website <NuxtLink :to="`/licensing`">{{ SITE.url }}/licensing</NuxtLink>", check the 3 checkboxes below the form and write your full name in the signature field.<div><img src="/images/routenote_dispute/r7.png" class="img-fluid"></div></li>
                      <li>The claim will be released by RouteNote within 3 days or maximum in a week.</li>
                    </ol>
                    <p class="m-0"><small>Note: Music copyright claims are not the same as "strikes". A claim is often an automated process by music distribuitors to prevent a material from being used without proper credits. Having a video with copyright claim won't risk your channel.</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
