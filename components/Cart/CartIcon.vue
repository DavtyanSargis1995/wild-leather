<template>
  <button class="icon-button py-3 px-2 leather-light">
    <span class="d-block mb-3">

      <v-badge
        color="deep-orange darken-2"
        :content="productsCount"
        overlap
      >
        <v-icon dark>mdi-cart</v-icon>
        </v-badge>
    </span>
    <span class="price py-1 px-2 d-block leather-light--text">
      ${{productsSummary}}
    </span>
  </button>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'CartIcon',
    computed: {
      ...mapGetters({
        productsCount: 'cartProducts/productsCount',
        productsSummary: 'cartProducts/productsSummary'
      })
    }
  }
</script>


<style lang="scss">
  .icon-button {
    border-radius: 10px 0 0 10px;
    background-color: orangered;
    outline: none;
    font-size: 12px;
    font-weight: bold;
    .price {
      background-color: #ffffff;
      border-radius: 20px;
    }
  }
</style>
