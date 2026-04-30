module.exports = [
  "strapi::logger",
  {
    name: "global::request-domain-logger",
    config: {
      onlyOnError: false,
      logLevel: "http",
    },
  },
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      headers: "*",
      keepHeaderOnError: true,
      origin: (ctx) => {
        const allowedOrigins = [
          "https://orderly.network",
          "https://www.orderly.network",
          "https://dev-v2.orderly.network",
          "https://dev.orderly-i.network",
          "https://www.dev.orderly-i.network",
          "https://exuberant-sparkle-dc686d5c20.strapiapp.com",
        ];

        const requestOrigin = ctx.request.header.origin;

        // 非浏览器/服务端请求通常不会带 Origin；这种情况下不需要做 CORS 拦截
        if (!requestOrigin) return "*";

        return allowedOrigins.includes(requestOrigin) ? requestOrigin : false;
      },
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
