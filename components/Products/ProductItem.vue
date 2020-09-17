<template>
  <v-container>
    <v-row v-if="product">
      <v-col xs="12" md="5">
        <product-zoomer />
      </v-col>
      <v-col xs="12" md="5">
        <h1>{{productTypes[product.type][locale]}}</h1>
        <h2 class="text-h4">{{price}}</h2>
        <p>{{product.description.am}}</p>

       <ProductFeatures :features="product.features"/>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  import ProductZoomer from './ProductZoomer';
  import {productTypes} from "../../helpers/constants";
  import {mapGetters} from 'vuex';
  import ProductFeatures from "./ProductFeatures";
  export default {
    components: {ProductFeatures, ProductZoomer},
    computed: {
      ...mapGetters({
        product: 'product/productInfo',
        rateSymbol: 'rate/rateSymbol',
        rate: 'rate/rate',
        locale: 'locale'
      }),
      price(){
        if(this.rate === 'usd' || this.rate === 'eur'){
          return `${this.rateSymbol} ${this.product.price[this.rate]}`
        }
        return `${this.product.price[this.rate]} ${this.rateSymbol}`
      }
    },
    data(){
      return {
        productTypes
      }
    },
    mounted(){
      if(this.$route.params.product){
        this.$store.dispatch('product/getProductInfo', this.$route.params.product);
      }
    },
  }
</script>
