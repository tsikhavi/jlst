// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  app: {
    head: {
      title: 'JLST',
      meta: [],
      link: [],
      
    }
  }
}
