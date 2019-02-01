const pkg = require('./package')
const extendConfig = require('./webpack.config.extend')

module.exports = {
  mode: 'spa',
  srcDir: 'src/',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify', '~/plugins/vuesax'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', '@nuxtjs/apollo'],

  styleResources: {
    stylus: '~/assets/style/resources/*.styl'
  },

  router: {},

  /*
   ** Build configuration
   */
  build: {
    extend(config) {
      extendConfig(config)
    }
  },

  /*
   ** Extensions
   */
  extensions: ['ts', 'js'],

  apollo: {
    tokenName: 'apollo-token',
    tokenExpires: 10,
    includeNodeModules: true,
    authenticationType: 'Bearer',
    errorHandler(error) {
      console.log(
        '%cError',
        'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        error.message
      )
    },
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:8000/graphql'
      }
    }
  }
}
