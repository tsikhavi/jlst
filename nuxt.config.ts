export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false }, 
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/strapi',
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {
      path: '/',
      maxAge: 14 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === 'production',
      sameSite: true
    },
    cookieName: 'strapi_jwt',
    devtools: false,
  },
  runtimeConfig: {
    strapi: {
      url: process.env.STRAPI_URL || 'http://localhost:1337',
    },
    public: {
      strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
      },
    },
  },
  app: {
    head: {
      title: 'JLST',
      meta: [],
      link: [],
    },
  },
});