module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // keys: env.array('APP_KEYS'),
    keys: ["zCKfceBmEzK675ht7TJWag==", "umyLC9Nq7anGmpWCxTMahg==", "hsdj8ofUH/W+xOpjc8pYTg=="],
  },
  url: env('STRAPI_URL'),
});
