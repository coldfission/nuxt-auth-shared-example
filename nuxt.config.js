import bodyParser from "body-parser";

export default {
  head: {
    title: "Auth Shared Example",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", content: "Auth Shared Example" }
    ]
  },
  /*
   ** Add server middleware
   ** Nuxt.js uses `connect` module as server
   ** So most of express middleware works with nuxt.js server middleware
   */
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // Api middleware
    // We add /api/login & /api/logout routes
    "~/api"
  ],

  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],

  axios: {
    proxy: true
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/api/login", method: "post", propertyName: "token" },
          logout: false,
          user: false
        }
      }
    }
  }
};
