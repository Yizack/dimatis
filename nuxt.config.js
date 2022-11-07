export default {
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8"},
        { name: "viewport", content: "width=device-width, initial-scale=1"},
        { name: "robots", content: "index, follow"},
        { name: "theme-color", content: "#151515"}
      ],
      link: [
        { rel: "icon", href: "/images/dimatis-logo-1.png" },
        { rel: "shortcut icon", href: "/images/dimatis-logo-1.png" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:400,300" }
      ]
    }
  },
  css: [
    "mediaelement/build/mediaelementplayer.min.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/dimatis.css",
    "~/assets/css/dimatis-icon.css",
    "~/assets/css/audio-player.css",
  ],
  nitro: {
    crawlLinks: true,
    routes: ["/"]
  }
};
