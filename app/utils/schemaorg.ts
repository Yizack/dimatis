export const homeSchemaOrg = {
  "@context": "http://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": SITE.name,
      "url": SITE.url,
      "image": {
        "@type": "ImageObject",
        "url": `${SITE.url}/${SITE.image}`
      }
    },
    {
      "@type": "Organization",
      "name": "Dimatis",
      "url": SITE.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE.url}/${SITE.logo}`
      },
      "image": {
        "@type": "ImageObject",
        "url": `${SITE.url}/${SITE.image}`
      },
      "description": SITE.meta_description,
      "email": SITE.workEmail,
      "sameAs": [
        SITE.socials.youtube,
        SITE.socials.soundcloud,
        SITE.socials.facebook,
        SITE.socials.twitter,
        SITE.socials.instagram
      ]
    },
    {
      "@type": ["Person", "MusicGroup"],
      "@id": SITE.socials.musicbrainz,
      "name": SITE.name,
      "alternateName": SITE.person.fullname,
      "url": SITE.url,
      "genre": [
        "Melodic Dubstep",
        "Chillstep"
      ],
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE.url}/${SITE.logo}`
      },
      "image": {
        "@type": "ImageObject",
        "url": `${SITE.url}/${SITE.image}`
      },
      "description": SITE.meta_description,
      "birthDate": SITE.person.birthdate,
      "birthPlace": {
        "@type": "AdministrativeArea",
        "@id": SITE.person.province.id,
        "name": SITE.person.province.name,
        "containedIn": {
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
