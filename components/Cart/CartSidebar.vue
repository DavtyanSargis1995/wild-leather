<template>
  <div class="sidebar-holder">
    <div class="d-flex justify-space-between align-center pa-5">
      <span class="leather-light--text">
        <v-icon color="leather-light">mdi-cart</v-icon>
        {{productsCount}} items
      </span>
      <v-btn icon @click.stop="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <div class="cart-table-holder mb-3">
      <CartTable small/>
    </div>
    <CartSummary/>
  </div>
</template>

<script>
  import CartTable from "./CartTable";
  import {mapGetters} from 'vuex';
  import CartSummary from "./CartSummary";
  export default {
    components: {CartSummary, CartTable},
    props: {
      close: Function
    },
    mounted(){
      console.log(this.close);
    },
    computed: {
      ...mapGetters({
        productsCount: 'cartProducts/productsCount'
      })
    }
  }
</script>

<style lang="scss">
  .sidebar-holder {
    min-width: 300px;
    .cart-table-holder {
      height: max-content;
      max-height: 80vh;
      overflow-y: auto;
    }
  }

</style>
