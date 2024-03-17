module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:1337",
        "http://localhost:3000",
        "https://vbtc-strapi.onrender.com",
        "https://content.vbtc.org.au",
        "https://vbtc.org.au",
        "https://vbtc-web.vercel.app",
        "https://vbtc-web-dragon-den.vercel.app",
        "https://analytics.strapi.io",
        "vbtc-web-git-dev-dragon-den.vercel.app",
        "dev.vbtc.org.au",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      keepHeaderOnError: true,
    },
  },
  {
    name: "strapi::poweredBy",
    config: {
      poweredBy: "Victorian Bitcoin Technology Club <https://vbtc.org.au>",
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
