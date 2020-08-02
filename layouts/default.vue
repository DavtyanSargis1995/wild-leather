<template>
  <v-app>
    <v-navigation-drawer
      class="d-md-none"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="false"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="item.title"
          :to="$i18n.path(item.to)"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-alert
      color="leather"
      class="text-center mb-0"
      dark
      dissmisible
      v-if="showTopSection"
      style="z-index: 50; border-radius: 0"
    >
      <v-container>
        MADE TO ORDER - QUALITY LEATHER GOODS HANDCRAFTED IN ARMENIA
      </v-container>
    </v-alert>
    <v-app-bar
      ref="header"
      :fixed="fixed"
      :dark="dark"
      :style="{zIndex: 50, top: headerTop}"
      height="90"
      maxHeight="90"
    >
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" />
      <logo :path="$i18n.path('')"/>
      <v-spacer />
      <v-tabs :color="color" class="d-none d-md-block">
        <v-tab v-for="item in items" :to="$i18n.path(item.to)" :key="item.title" exact>
          {{item.title}}
        </v-tab>
      </v-tabs>
      <v-spacer />
      <nav class="Header__Menu">
        <div style="width: 80px;">
          <languages />
        </div>
      </nav>
      <div style="width: 140px;">
        <exchange-rates />
      </div>

      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main style="padding: 0">
      <nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer dark class="page-footer">
      <v-container>
        <v-row>
          <v-col>
            <nav>
              <ul>
                <li v-for="item in items" :to="$i18n.path(item.to)" :key="item.title">
                  <a class="d-inline-block white--text text-decoration-none mb-3" href="">
                    {{item.title}}
                  </a>
                </li>
              </ul>
            </nav>
          </v-col>
          <v-col>
            <nav>
              <nav>
                <ul>
                  <li>
                    <a class="d-inline-block white--text text-decoration-none mb-3" href="">Terms and Conditions</a>
                  </li>
                  <li>
                    <a class="d-inline-block white--text text-decoration-none mb-3" href="">Shipping & Returns</a>
                  </li>
                </ul>
              </nav>
            </nav>
          </v-col>
          <v-col>
            <span>&copy; Wild {{ new Date().getFullYear() }}</span>
          </v-col>
          <v-col>
            <span>Designed by Sargis Davtyan</span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Languages from '~/components/Languages.vue';
import ExchangeRates from '~/components/ExchangeRates.vue';
export default {
  computed: {
    menuItems () {
      return this.items.map(item=> {
        let text = 'links.' + item.name;
        item.title = this.$t(text);
        return item;
      })
    },
    lang() {
      return this.$store.state.locale;
    }
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      dark: true,
      headerTop: 0,
      showTopSection: true,
      color: '',
      headerHeight: 110,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Գլխավոր',
          to: '',
          name: 'home',
        },
        {
          icon: 'mdi-apps',
          title: 'Խանութ',
          to: 'shop',
          name: 'shop',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Մեր մասին',
          to: 'about',
          name: 'about'
        },
        {
          icon: 'mdi-apps',
          title: 'Կապ',
          to: 'contact',
          name: 'contact'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Maker',
          to: 'maker',
          name: 'maker'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {
    handleScroll () {
      // Your scroll handling here
      console.log(window.scrollY);
      if(window.scrollY >= 56) {
        this.fixed = true;
        this.dark = false;
        this.color = 'black';
      } else {
        this.fixed = false;
        this.dark = true
        this.color = '';
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  components: {
    Logo,
    Languages,
    ExchangeRates,
  },
  watch: {
    $route () {
      this.showTopSection = this.$route.name==='index' || this.$route.name==='lang'
    }
  },
}
</script>


<style scoped lang="scss">
  .page-footer {
    a {
      &:hover::after {
        transform: scaleX(1);
      }
      &::after {
        content: '';
        display: block;
        transition: 0.4s ease-in-out;
        width: 100%;
        height: 1px;
        background: #fff;
        transform: scaleX(0);
        transform-origin: left;
      }
    }
    ul {
      list-style: none
    }
  }
</style>

