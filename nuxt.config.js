import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'cyan' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/common.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js',
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-magnifier', ssr: false },
    { src: '~/plugins/vue-wow', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Optionally passing options in module configuration
    ['vuetify-dialog/nuxt', { property: '$dialog' }],
  ],

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          // https://leather-toolkits.com/leather-color-palette/
          leather: '#432417',
          'leather-light': '#e1833e',
          'black-dark': '#272727',
          error: colors.deepOrange.accent4,
          primary: colors.blue.darken2,
          info: colors.teal.lighten1,
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    splitChunks: {
      layouts: true
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    middleware: ['i18n', 'auth']
  },
  generate: {
    routes: [
      {
        name: 'home',
        path: '/',
      },
      {
        name: 'home',
        path: '/ru/',
      },
      {
        name: 'home',
        path: '/am/',
      },
      '/about',
      '/am/about',
      '/ru/about',
      '/products/:id',
      '/am/products/:id',
      '/ru/products/:id',
      '/products',
      '/am/products',
      '/ru/products',
      '/maker',
      '/am/maker',
      '/ru/maker',
      '/contact',
      '/am/contact',
      '/ru/contact',
    ]
  }
}
