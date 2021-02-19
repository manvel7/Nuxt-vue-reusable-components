export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "%s - Stagiro",
    title: "Stagiro",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  loading: { color: "#C7417B" },

  axios: {
    baseURL: process.env.API_URL,
  },
  // serverMiddleware: [{ path: "/api", handler: "~/api/index.js" }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/ui-kit.js" },
    { src: "~/plugins/chat.js", mode: "client" },
    { src: "~/plugins/vuelidate.js" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxtjs/style-resources",
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
  ],

  auth: {
    strategies: {
      local: {
        token: {
          required: false,
        },
        endpoints: {
          login: {
            url: "/user/login",
            method: "POST",
            propertyName: "token",
          },
          logout: { url: "/logout", method: "POST" },
          user: {
            url: "/users",
            method: "get",
            propertyName: "user",
          },
        },
      },
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/axios",
    "@nuxtjs/svg",
    "@nuxtjs/auth",
    "@nuxtjs/dotenv",
    "@nuxtjs/toast",
    "nuxt-i18n",
  ],

  storybook: {
    stories: ["~/stories/**/*.stories.js"],
  },

  toast: {
    position: "top-right",
    duration: 3000,
    fullWidth: false,
    containerClass: "custom-style-toast",
  },

  i18n: {
    locales: [
      {
        code: "en",
        file: "en.js",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
    strategy: "no_prefix",
    noPrefixDefaultLocale: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      onlyOnRoot: true, // recommended
    },
  },

  styleResources: {
    scss: ["@/assets/scss/definitions.scss"],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
