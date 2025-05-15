// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'CMS',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ],
    }
  },
  runtimeConfig: {
    apiToken:'',
    public: {
      baseUrl: '',
      webName: '',
    }
  }
})
