import tracks from "./public/data/tracks.json";
import albums from "./public/data/albums.json";

const routes = [
  ...Object.keys(tracks).map((track) => `/music/${track}/`),
  ...Object.keys(albums).map((album) => `/album/${album}/`)
];

export default defineNuxtConfig({
  app: {
    rootId: "app",
    buildAssetsDir: "/_app/",
    head: {
      htmlAttrs: {
        lang: "en"
      },
      bodyAttrs: {
        class: "bg-dark text-white"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#151515" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "msapplication-TileImage", content: "/icons/mstile-144x144.png" }
      ],
      link: [
        { rel: "preload", as: "style", crossorigin: "anonymous", href: "https://fonts.googleapis.com/css?family=Roboto:400,300" },
        { rel: "stylesheet", crossorigin: "anonymous", href: "https://fonts.googleapis.com/css?family=Roboto:400,300" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
        { rel: "shortcut icon", href: "/images/dimatis-logo-1.png" },
        { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-touch-icon-57x57.png" },
        { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-touch-icon-60x60.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-touch-icon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-touch-icon-76x76.png" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-touch-icon-114x114.png" },
        { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-touch-icon-120x120.png" },
        { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-touch-icon-144x144.png" },
        { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-touch-icon-152x152.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon-180x180.png" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
        { rel: "manifest", href: "/site.webmanifest" }
      ]
    }
  },
  css: [
    "mediaelement/build/mediaelementplayer.min.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "@glidejs/glide/dist/css/glide.core.min.css",
    "~/assets/css/dimatis.css",
    "~/assets/css/dimatis-icon.css",
    "~/assets/css/audio-player.css",
    "~/assets/css/player-styles.css",
    "~/assets/css/transitions.css"
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes
    }
  },
  experimental: {
    inlineSSRStyles: false,
    appManifest: false
  }
});
