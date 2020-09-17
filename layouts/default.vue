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
      v-if="showTopSection"
      color="leather"
      class="text-center mb-0"
      dark
      dissmisible
      style="z-index: 50; border-radius: 0"
    >
      <v-container>
        MADE TO ORDER - QUALITY LEATHER GOODS HANDCRAFTED IN ARMENIA
      </v-container>
    </v-alert>
    <div class="navbar-holder">
      <v-container>
        <v-app-bar
          shrink-on-scroll
          ref="header"
          :dark="dark"
          :style="{zIndex: 50, top: headerTop}"
          height="75"
          maxHeight="75"
        >
          <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" />
          <logo :path="$i18n.path('')"/>
          <v-spacer />
          <v-tabs :color="color" class="d-none d-md-block">
            <v-tab v-for="item in items" :to="$i18n.path(item.to)" :key="item.title">
              {{item.title}}
            </v-tab>
          </v-tabs>
          <v-spacer />
          <div class="right-side d-flex align-center">
            <div style="width: 80px;">
              <languages />
            </div>
            <div style="width: 150px;">
              <exchange-rates />
            </div>
          </div>
        </v-app-bar>
      </v-container>
    </div>

    <v-main style="padding: 0">
      <div @click.stop="rightDrawer = !rightDrawer" class="icon-holder">
        <CartIcon />
      </div>
      <nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
      width="500"
      style="z-index: 120"
    >
      <CartSidebar :close="() => { rightDrawer = false }"/>
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
import CartIcon from "../components/Cart/CartIcon";
import CartSidebar from "../components/Cart/CartSidebar";
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
    },
  },
  mounted() {
    this.showTopSection = this.$route.name==='home' || this.$route.name==='index' || this.$route.name==='lang'
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      dark: true,
      headerTop: 0,
      color: '',
      headerHeight: 110,
      fixed: false,
      showTopSection: false,
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
          to: 'products',
          name: 'products',
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
  created() {
    this.$store.dispatch('auth');
  },
  components: {
    CartSidebar,
    CartIcon,
    Logo,
    Languages,
    ExchangeRates,
  },
  watch: {
    $route (val) {
      console.log(val);
      this.showTopSection = val.name==='home' || val==='index'
    }
  },
}
</script>


<style scoped lang="scss">
  .icon-holder {
    position: fixed;
    right: 0;
    color: #fff;
    top: 50%;
    transform: translateY(-50%);
  }
  .navbar-holder {
    background-color: #272727;
    position: sticky;
    z-index: 50;
    top: 0px;
    header {
      box-shadow: none!important;
    }
  }
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

  .right-side {
    height: 100%;
  }
</style>

