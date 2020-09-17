<template>
    <v-hover v-slot:default="{ hover }">
      <div class="mb-6 card-holder mx-auto relative" style="position:relative;">
        <v-btn
          v-if="isLoggedIn"
          absolute
          color="leather-light"
          class="white--text"
          fab
          small
          right
          top
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-card
          class="mx-auto overflow-hidden card-container"
          color="grey lighten-4"
        >



          <div style="position:relative;overflow: hidden">
            <v-img
              :aspect-ratio="6/6"
              :src="product.imageUrl"
              class="product-image"
            >

            </v-img>


            <div
              class="holder d-flex flex-column transition-fast-in-fast-out white darken-2 v-card--reveal display-1 white--text overflow-hidden"
              style="height: 100%; position: absolute; top: 0"
              @click="quickView(product.id)"
            >
<!--              <v-tooltip top>-->
<!--                <template v-slot:activator="{ on, attrs }">-->
<!--                  <v-btn-->
<!--                    @click="quickView(123)"-->
<!--                    class="leather darken-2 white&#45;&#45;text quick-view"-->
<!--                    fab-->
<!--                    small-->
<!--                    center-->
<!--                    v-bind="attrs"-->
<!--                    v-on="on"-->
<!--                  >-->
<!--                    <v-icon>mdi-eye-plus-outline</v-icon>-->
<!--                  </v-btn>-->
<!--                </template>-->
<!--                <span>View More</span>-->
<!--              </v-tooltip>-->


            </div>
          </div>


          <v-card-text
            class="pt-6 text-center"
            style="position: relative;"
          >

            <h5 class="font-weight-bold leather--text mb-2 product-title">
              <nuxt-link class="black-dark--text" :to="$i18n.path('products/'+product.id)">{{productTypes[product.type][locale]}}</nuxt-link>
            </h5>
            <span class="price transition-fast-in-fast-out">{{price}}</span>

          </v-card-text>

        </v-card>
        <v-btn
          @click="addToCart(product)"
          width="100%"
          class="text-center mt-2 add-to-cart px-5 py-7"
          tile
          dark
        >
          <!--Add to cart-->
          Ավելացնել զամբյուղ
        </v-btn>
      </div>
    </v-hover>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ProductItem from './ProductItem';
  import {productTypes} from "../../helpers/constants";

  export default {
    computed: {
      ...mapGetters({
        isLoggedIn: 'isLoggedIn',
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
    methods: {
      addToCart(product){
        this.$store.commit('cartProducts/ADD_TO_CART', { product, count: 1});
      },
      quickView(id) {
        this.$store.dispatch('product/getProductInfo', id);
        this.$dialog.show(ProductItem)
      }
    },
    props: ['product'],
  }
</script>


<style>
  .v-dialog {
    max-width: unset!important;
    background: #fff;
  }
</style>

<style scoped lang="scss">
  .card-holder {
    width: 240px;
    .card-container {
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      border-radius: 0;
    }
    .price {
      color: #666;
      font-size: 18px;
      font-weight: 700;
    }
    .add-to-cart {
      opacity: 0;
      cursor: pointer;
    }
    .quick-view {
      transform: translateY(150px);
      transition-delay: .03s;
    }
    .holder {
      transform: translateY(-100%);
    }

    .product-image {
      background-color: #fff;
    }

    .product-title {
      letter-spacing: 1.5px;
      font-size: 16px;
      &:hover {
        color: #422417;
        text-decoration: underline;
      }
    }
    &:hover {
      .price {
        transform: translateY(5px);
      }
      .product-image {
        transform: scale(1.2);
        transition: .5s cubic-bezier(.17,.67,.35,.82);
      }
      .quick-view {
        transform: translateY(20px);
      }

      .add-to-cart {
        opacity: 1;
        transition: .5s cubic-bezier(.17,.67,.35,.82);
      }

      .holder {
        transform: translateY(0);
      }
    }
  }
</style>
