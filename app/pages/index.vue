<script setup lang="ts">
definePageMeta({ layout: "home" });

const schemaOrg = {
  "@context": "http://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": SITE.name,
      "url": SITE.url,
      "image": `${SITE.url}/${SITE.logo}`
    },
    {
      "@type": "Organization",
      "name": "Dimatis",
      "url": SITE.url,
      "logo": `${SITE.url}/${SITE.logo}`,
      "image": `${SITE.url}/${SITE.cover}`,
      "description": SITE.meta_description
    },
    {
      "@type": ["Person", "MusicGroup"],
      "@id": SITE.socials.musicbrainz,
      "name": SITE.name,
      "alternateName": SITE.person.fullname,
      "url": SITE.url,
      "image": `${SITE.url}/${SITE.logo}`,
      "description": SITE.meta_description,
      "birthDate": SITE.person.birthdate,
      "birthPlace":
          {
            "@type": "AdministrativeArea",
            "@id": SITE.person.province.id,
            "name": SITE.person.province.name,
            "containedIn":
              {
                "@type": "Country",
                "@id": SITE.person.country.id,
                "name": SITE.person.country.name
              }
          },
      "sameAs": [
        SITE.socials.youtube,
        SITE.socials.soundcloud,
        SITE.socials.facebook,
        SITE.socials.twitter,
        SITE.socials.instagram
      ]
    }
  ]
};

useSeoMeta({
  title: SITE.name,
  description: SITE.meta_description,
  keywords: SITE.keywords,
  // Protocolo Open Graph
  ogUrl: `${SITE.url}/`,
  ogType: "website",
  ogTitle: SITE.name,
  ogSiteName: SITE.name,
  ogDescription: SITE.meta_description,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: "300",
  ogImageHeight: "200",
  ogImageAlt: `${SITE.name} cover image`,
  // Protocolo Twitter
  twitterCard: "summary",
  twitterSite: `@${SITE.twitter}`,
  twitterTitle: SITE.name,
  twitterDescription: SITE.meta_description,
  twitterImage: `${SITE.url}/${SITE.logo}`
});

useHead({
  script: [
    { type: "application/ld+json", children: JSON.stringify(schemaOrg) }
  ],
  link: [
    { rel: "canonical", href: `${SITE.url}` }
  ]
});
</script>

<template>
  <LatestMusic />
  <InstagramFeed />
  <AboutSection />
</template>
