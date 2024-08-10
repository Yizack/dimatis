import tracks from "./public/data/tracks.json";
import albums from "./public/data/albums.json";
import { SITE } from "./app/utils/site-info";

const routes = [
  ...Object.keys(tracks).map(track => `/music/${track}`),
  ...Object.keys(albums).map(album => `/album/${album}`)
];

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  app: {
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
        { rel: "shortcut icon", href: "/images/dimatis-logo.png" },
        { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-touch-icon.png" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "preconnect", href: "https://www.dropbox.com" }
      ]
    }
  },

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@glidejs/glide/dist/css/glide.core.min.css",
    "~/assets/css/dimatis.css",
    "~/assets/css/dimatis-icon.css",
    "~/assets/css/audio-player.css",
    "~/assets/css/player-styles.css",
    "~/assets/css/transitions.css"
  ],

  modules: [
    "@nuxt/eslint",
    "nuxt-musicfyplayer",
    "@nuxtjs/sitemap",
    "nuxt-icon"
  ],

  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: [...routes, "/sitemap.xml"]
    }
  },

  site: {
    url: SITE.url
  },

  sitemap: {
    discoverImages: false,
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "35%" }
    ]
  },

  routeRules: {
    "/": { sitemap: { priority: 1 } },
    "/*/**": { sitemap: { priority: 0.8, lastmod: new Date().toISOString() } }
  },

  features: {
    inlineStyles: false
  },

  experimental: {
    viewTransition: true,
    payloadExtraction: false
  },

  compatibilityDate: "2024-07-06"
});
