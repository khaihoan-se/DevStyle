//  next.config.js
const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: [
      "instagram.fsgn2-6.fna.fbcdn.net",
    ],
  },
  pwa: {
    dest: "public",
    buildExcludes: [/middleware-manifest\.json$/, /_middleware\.js$/],
    disable: process.env.NODE_ENV === "development",
  },
});