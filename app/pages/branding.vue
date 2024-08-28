<script setup lang="ts">
definePageMeta({ layout: "site" });

useSeoMeta({
  title: `Branding | ${SITE.name}`,
  description: `${SITE.name} music branding`,
  keywords: "branding, logo, youtube, monetization, streaming, videos",
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/branding`,
  ogType: "website",
  ogTitle: `Branding | ${SITE.name}`,
  ogSiteName: SITE.name,
  ogDescription: `${SITE.name} music branding`,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: "300",
  ogImageHeight: "200",
  ogImageAlt: `${SITE.name} cover image`,
  // Protocolo Twitter
  twitterCard: "summary",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: `Branding | ${SITE.name}`,
  twitterDescription: `${SITE.name} music branding`,
  twitterImage: `${SITE.url}/${SITE.logo}`
});

useHead({
  link: [
    { rel: "canonical", href: `${SITE.url}/branding` }
  ]
});
</script>

<template>
  <main>
    <section>
      <div class="container py-5 text-center">
        <div class="pb-2">
          <h3 class="text-uppercase">Branding</h3>
        </div>
        <div class="row my-4">
          <div class="col-12 col-lg-6 text-start mx-auto">
            <p>Assets of my logo available for download, use these in collaborations with me, blogs, videos, and anything related to my music.</p>
          </div>
          <div class="col-12 text-start mx-auto mb-4">
            <div class="d-flex justify-content-center gap-4">
              <div class="card rounded-3 overflow-hidden">
                <div class="card-body bg-dark">
                  <a href="/images/logos/logo_dimatis_3000_white.png" download="dimatis-logo-white.png">
                    <div class="position-absolute top-0 end-0 m-1 px-1 bg-white rounded small text-dark"><small>3000x3000px</small></div>
                    <img src="/images/logos/logo_dimatis_3000_white.png" alt="Dimatis logo" class="img-fluid" width="300" height="300">
                  </a>
                </div>
                <div class="card-footer">Dimatis | White logo</div>
              </div>
              <div class="card rounded-3 overflow-hidden">
                <div class="card-body bg-white">
                  <a href="/images/logos/logo_dimatis_3000.png" download="dimatis-logo-black.png">
                    <div class="position-absolute top-0 end-0 m-1 px-1 bg-dark rounded small"><small>3000x3000px</small></div>
                    <img src="/images/logos/logo_dimatis_3000.png" alt="Dimatis logo" class="img-fluid" width="300" height="300">
                  </a>
                </div>
                <div class="card-footer">Dimatis | Black logo</div>
              </div>
            </div>
          </div>
          <div class="col-12 text-start mx-auto">
            <div class="d-flex justify-content-center gap-4">
              <div class="card rounded-3 overflow-hidden">
                <div class="card-body bg-dark">
                  <a href="/images/logos/text_logo_dimatis_white.png" download="dimatis-text-logo-white.png">
                    <div class="position-absolute top-0 end-0 m-1 px-1 bg-white rounded small text-dark"><small>5000x987px</small></div>
                    <img src="/images/logos/text_logo_dimatis_white.png" alt="Dimatis logo" class="img-fluid" width="300" height="59">
                  </a>
                </div>
                <div class="card-footer">Dimatis | White text logo</div>
              </div>
              <div class="card rounded-3 overflow-hidden">
                <div class="card-body bg-white">
                  <a href="/images/logos/text_logo_dimatis.png" download="dimatis-text-logo-black.png">
                    <div class="position-absolute top-0 end-0 m-1 px-1 bg-dark rounded small"><small>5000x987px</small></div>
                    <img src="/images/logos/text_logo_dimatis.png" alt="Dimatis logo" class="img-fluid" width="300" height="59">
                  </a>
                </div>
                <div class="card-footer">Dimatis | Black text logo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
