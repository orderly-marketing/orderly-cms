module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://orderly.network",
        "https://www.orderly.network",
        "https://dev-v2.orderly.network",
        "https://www.dev.orderly-i.network",
        "https://exuberant-sparkle-dc686d5c20.strapiapp.com",
      ],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
