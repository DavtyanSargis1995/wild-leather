<template>
  <v-app>
    <v-card tile class="px-2 py-3 position-fixed admin-header">
      <header class="d-flex justify-space-between align-center">
        <logo path="/" />
        <nav>
          <v-btn dark @click="addProduct">Add product</v-btn>
        </nav>
      </header>
    </v-card>
    <v-navigation-drawer
      v-model="drawer"
      style="top: 60px"
      fixed
      :mini-variant.sync="mini"
      permanent
      class="aside"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <nuxt-link :to="item.link">
                {{ item.title }}
              </nuxt-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="position-relative main-section" :class="{large: mini}">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
  import Logo from "../components/Logo";
  import EditProduct from "../components/Admin/Products/EditProduct";
  export default {
    components: {Logo},
    methods: {
      addProduct(){
          this.$dialog.show(EditProduct)
      }
    },
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Dashboard', link: '/', icon: 'mdi-view-dashboard' },
          { title: 'Account', link: '/admin/account', icon: 'mdi-account' },
          { title: 'Products', link: '/admin/products', icon: 'mdi-cart' },
          { title: 'Category', link: '/admin/category', icon: 'mdi-view-grid' },
          { title: 'Orders', link: '/admin/orders', icon: 'mdi-briefcase-check' },
          { title: 'Customers', link: '/admin/customers', icon: 'mdi-account-group-outline' },
          { title: 'Coupons', link: '/admin/coupons', icon: 'mdi-sale' },
          { title: 'Settings', link: '/admin/settings', icon: 'mdi-cog' },
        ],
        mini: true,
      }
    },
  }
</script>


<style lang="scss">
  .admin-header {
    height: 60px;
    width: 100%;
    top: 0;
    z-index: 3;
    header {
      height: 100%;
    }
  }

  .aside {
    top: 90px;
  }

  .main-section {
    top: 70px;
    left: 270px;
    width: calc(100% - 280px);
    &.large {
      left: 70px;
      width: calc(100% - 90px);
    }
  }
  /*.aside {*/
  /*  left: 0;*/
  /*  width: 200px;*/
  /*  height: calc(100vh - 85px);*/
  /*  top: 0;*/
  /*  padding-top: 85px;*/
  /*}*/
</style>
