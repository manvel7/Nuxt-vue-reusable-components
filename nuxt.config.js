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
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap",
      },
    ],
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
    { src: "~/plugins/vClickOutside", ssr: false },
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
