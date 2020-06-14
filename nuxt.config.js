export default {
  head: {
    title: "Auth Shared",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", content: "Auth Shared example" }
    ]
  },
  /*
   ** Add server middleware
   ** Nuxt.js uses `connect` module as server
   ** So most of express middleware works with nuxt.js server middleware
   */
  serverMiddleware: [
    // Api middleware
    // We add /api/login & /api/logout routes
    "~/api"
  ],

  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],

  auth: {
    // Options
  }
};
