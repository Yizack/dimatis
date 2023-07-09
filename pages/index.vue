<script setup>
definePageMeta({ layout: "site" });

const schemaOrg = {
  "@context": "http://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      image: `${SITE.url}/${SITE.logo}`
    },
    {
      "@type": "Organization",
      name: "Dimatis",
      url: SITE.url,
      logo: `${SITE.url}/${SITE.logo}`,
      image: `${SITE.url}/${SITE.cover}`,
      description: SITE.meta_description
    },
    {
      "@type": ["Person", "MusicGroup"],
      "@id": SITE.socials.musicbrainz,
      name: SITE.name,
      alternateName: SITE.person.fullname,
      url: SITE.url,
      image: `${SITE.url}/${SITE.logo}`,
      description: SITE.meta_description,
      birthDate: SITE.person.birthdate,
      birthPlace:
          {
            "@type": "AdministrativeArea",
            "@id": SITE.person.province.id,
            name: SITE.person.province.name,
            containedIn:
              {
                "@type": "Country",
                "@id": SITE.person.country.id,
                name: SITE.person.country.name
              }
          },
      sameAs: [
        SITE.socials.youtube,
        SITE.socials.soundcloud,
        SITE.socials.facebook,
        SITE.socials.twitter,
        SITE.socials.instagram
      ]
    }
  ]
};

useHead({
  title: SITE.name,
  meta: [
    { name: "keywords", content: SITE.keywords },
    { name: "description", content: SITE.meta_description },
    // Protocolo Open Graph
    { property: "og:url", content: `${SITE.url}/` },
    { property: "og:type", content: "website" },
    { property: "og:title", content: SITE.name },
    { property: "og:site_name", content: SITE.name },
    { property: "og:description", content: SITE.meta_description },
    { property: "og:image", content: `${SITE.url}/${SITE.cover}` },
    { property: "og:image:width", content: "300" },
    { property: "og:image:height", content: "200" },
    { property: "og:image:alt", content: `${SITE.name} cover image` },
    // Protocolo Twitter
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: `@${SITE.twitter}` },
    { name: "twitter:title", content: SITE.name },
    { name: "twitter:description", content: SITE.meta_description },
    { name: "twitter:image", content: `${SITE.url}/${SITE.logo}` }
  ],
  script: [
    { type: "application/ld+json", children: JSON.stringify(schemaOrg) },
    { src: "https://www.instagram.com/embed.js", async: true, body: true }
  ],
  link: [
    { rel: "canonical", href: `${SITE.url}/` }
  ]
});
</script>

<template>
  <Banner />
  <LatestMusic />
  <InstagramFeed />
  <About />
</template>
