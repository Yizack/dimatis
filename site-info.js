const SITE = {
  name: "Dimatis",
  domain: "dimatis.yizack.com",
  person: {
    fullname: "Yizack Rangel",
    birthdate: "1998-06-15",
    country: {
      id: "https://musicbrainz.org/area/6f85633b-dff4-3fb4-babd-fb89b3628041",
      name: "Panama"
    },
    province: {
      id: "https://musicbrainz.org/area/e4038ab2-0e15-4987-855a-adf4f0878645",
      name: "Panamá"
    }
  },
  protocol: "https",
  meta_description: "Dimatis is a Panamanian musician and producer.",
  description: "Panamanian musician and producer",
  keywords: "dimatis, website, producer, dj, artist, panama, yizack, musician",
  email: "dimatismusic@gmail.com",
  logo: "images/dimatis-logo-2.png",
  image: "images/dimatis-bio.jpg",
  cover: "images/cover.jpg",
  spotify_id: "0RAT9Q5WZwzJRJgTI38zJR",
  twitter: "dimatismusic",
  instagram: "dimatismusic",
  instagram_feed: "https://dev.yizack.com/instagram/feeds/dimatis/feed",
  socials: {
    spotify: "https://open.spotify.com/artist/0RAT9Q5WZwzJRJgTI38zJR",
    soundcloud: "https://soundcloud.com/dimatis",
    youtube: "https://youtube.com/dimatis",
    twitter: "https://twitter.com/dimatismusic",
    facebook: "https://facebook.com/dimatismusic",
    instagram: "https://instagram.com/dimatismusic",
    musicbrainz: "https://musicbrainz.org/artist/507c89e0-5a06-4466-bef0-0ae22dd90945"
  },
  stream: {
    spotify: "https://open.spotify.com/artist/0RAT9Q5WZwzJRJgTI38zJR",
    soundcloud: "https://soundcloud.com/dimatis",
    youtube: "https://youtube.com/dimatis",
    apple: "https://geo.itunes.apple.com/us/artist/dimatis/id1139797073?mt=1&app=music"
  },
  buy: {
    itunes: "https://geo.itunes.apple.com/us/artist/dimatis/id1139797073?app=itunes",
    bandcamp: "https://dimatis.bandcamp.com/",
    amazon: "https://www.amazon.com/s?k=Dimatis&i=digital-music"
  },
  merch: "https://merch.streamelements.com/dimatis",
  fanlinks: "https://yizack.com/fanlinks"
};

SITE.url = `${SITE.protocol}://${SITE.domain}`;

export { SITE };
