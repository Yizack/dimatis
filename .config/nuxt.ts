import { SITE } from "../app/utils/site";

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
        { rel: "preload", href: "/fonts/Ebrima.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
        { rel: "preload", href: "/fonts/EbrimaBd.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
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
    "~/assets/scss/app.scss"
  ],

  modules: [
    "@nuxthub/core",
    "@nuxtjs/color-mode",
    "@nuxt/eslint",
    "nuxt-musicfyplayer",
    "@nuxtjs/sitemap",
    "@nuxt/icon"
  ],

  runtimeConfig: {
    spotify: {
      clientId: "",
      clientSecret: ""
    },
    instagram: {
      accessToken: "",
      userId: ""
    }
  },

  hub: { database: true, cache: true },

  icon: {
    mode: "svg",
    clientBundle: {
      scan: true,
      sizeLimitKb: 2048
    }
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
    dataValue: "bs-theme",
    storageKey: "nuxt-color-mode"
  },

  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: false,
      routes: ["/sitemap.xml"]
    },
    cloudflare: {
      pages: {
        routes: {
          exclude: ["/images/*", "/data/*", "/fonts/*", "/licenses/*"]
        }
      }
    }
  },

  site: {
    url: SITE.url
  },

  sitemap: {
    discoverImages: false,
    sources: ["/api/__sitemap__/urls"],
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" }
    ]
  },

  routeRules: {
    "/": { sitemap: { priority: 1 } },
    "/*/**": { sitemap: { priority: 0.8 } },
    "/api/_nuxt_icon/**": { cache: { maxAge: 1.577e+7 } }
  },

  features: {
    inlineStyles: false
  },

  experimental: {
    viewTransition: true,
    payloadExtraction: false,
    typedPages: true
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          silenceDeprecations: ["mixed-decls", "color-functions", "import", "global-builtin"]
        }
      }
    }
  },

  compatibilityDate: "2024-09-04"
});
