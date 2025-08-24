import { SITE } from "../shared/utils/site";

export default defineNuxtConfig({
  // future: { compatibilityVersion: 4 },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en"
      },
      bodyAttrs: {
        class: "bg-dark text-white"
      },
      meta: [
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#151515" },
        { name: "application-name", content: SITE.name },
        { name: "msapplication-TileColor", content: "#151515" },
        { name: "msapplication-TileImage", content: "/icons/mstile-144x144.png" },
        { name: "apple-mobile-web-app-title", content: SITE.name },
        { name: "apple-mobile-web-app-capable", content: SITE.name }
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#151515" },
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
      accessToken: ""
    },
    fourthwall: {
      user: "",
      password: ""
    }
  },

  hub: { database: true, cache: true, workers: true },

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
    defaults: { priority: 0.8 },
    urls: [
      { loc: "/", priority: 1 }
    ],
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" }
    ]
  },

  routeRules: {
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
          silenceDeprecations: ["mixed-decls", "color-functions", "import", "global-builtin"]
        }
      }
    }
  },

  compatibilityDate: "2025-07-16"
});
