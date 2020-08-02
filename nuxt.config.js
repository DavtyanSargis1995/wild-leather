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
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      production: {
        apiKey: "AIzaSyDR021s6EtXJT5kJorB3aAnOtJbepjTh5k",
        authDomain: "ertert-1527060416924.firebaseapp.com",
        databaseURL: "https://ertert-1527060416924.firebaseio.com",
        projectId: "ertert-1527060416924",
        storageBucket: "ertert-1527060416924.appspot.com",
        messagingSenderId: "1010749182769",
        appId: "1:1010749182769:web:3ff7b22f1ccd7ef7"
      },
      development: {
        apiKey: "AIzaSyD6WEsUXyWL4b-pkg6Qt-YE6K153GAjzCQ",
        authDomain: "my-project-1527060076661.firebaseapp.com",
        databaseURL: "https://my-project-1527060076661.firebaseio.com",
        projectId: "my-project-1527060076661",
        storageBucket: "my-project-1527060076661.appspot.com",
        messagingSenderId: "183852513522",
        appId: "1:183852513522:web:0f8ead00ee8a4b8fc6b86b"
      }
    },
    customEnv: false,
    onFirebaseHosting: false,
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedMutation: "SET_AUTH_USER",
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
        ssr: {
          // !! NEVER deploy a service account file to github or to a publicly accessible folder on your server !!
          credential: '~/assets/firebase/serviceAccount.json',



          // Experimental Feature, use with caution.
          serverLogin: {
            sessionLifetime: 60 * 60 * 1000, // one hour
            loginDelay: 50 // minimal recommended delay
          }
        }
      },
      firestore: {
        memoryOnly: false // default
      },
      functions: {
        location: 'us-central1', // Default
        emulatorPort: 12345
      },
      storage: true,
      realtimeDb: true,
      performance: true,
      analytics: false,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000, // Default
          minimumFetchIntervalMillis: 43200000 // Default
        },
        defaultConfig: {
          welcome_message: "Welcome"
        }
      },
      messaging: {
        createServiceWorker: true,
        actions: [
          {
            action: '<randomName>',
            url: '<randomUrl>'
          }
        ],
        fcmPublicVapidKey: '<publicVapidKey>' // OPTIONAL : Sets vapid key for FCM after initialization
      }
    }
  },

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
          'black-dark': '#222831'
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
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
        path: '/ru',
      },
      {
        name: 'home',
        path: '/am',
      },
      '/about',
      '/am/about',
      '/ru/about',
      '/shop',
      '/am/shop',
      '/ru/shop',
      '/maker',
      '/am/maker',
      '/ru/maker',
      '/contact',
      '/am/contact',
      '/ru/contact',
    ]
  }
}
