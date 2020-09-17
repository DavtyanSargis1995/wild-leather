<template>
  <v-lazy
    :options="{
          threshold: .5
        }"
    transition="fade-transition"
  >
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto mb-15 card-container"
      color="grey lighten-4"
      width="240"
    >
      <v-btn
        v-if="isLoggedIn"
        absolute
        color="leather-light"
        class="white--text"
        fab
        medium
        right
        top
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <div style="position:relative;" class="overflow-hidden">
        <v-img
          :aspect-ratio="6/6"
          :style="{filter: hover ? 'blur(2px)' : ''}"
          :src="product.imageUrl"
        >

        </v-img>


          <div
            class="holder d-flex flex-column transition-fast-in-fast-out white darken-2 v-card--reveal display-1 white--text overflow-hidden"
            style="height: 100%; position: absolute; top: 0"
          >
            <span class="black-dark--text price transition-fast-in-fast-out">${{product.price.usd}}</span>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  @click="quickView(123)"
                  class="leather darken-2 white--text quick-view"
                  fab
                  small
                  center
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-eye-plus-outline</v-icon>
                </v-btn>
              </template>
              <span>View More</span>
            </v-tooltip>


          </div>
      </div>



      <v-card-text
        class="pt-6"
        style="position: relative;"
      >

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">

            <v-btn
              absolute
              color="leather-light"
              class="white--text"
              fab
              medium
              right
              top
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-cart-plus</v-icon>
            </v-btn>

          </template>
          <span>Add to Cart</span>
        </v-tooltip>


        <div class="font-weight-light grey--text text-caption mb-2">For the perfect meal</div>
        <h5 class="text-h6 font-weight-light leather--text mb-2">
          <v-btn text  to="/collections/wallet/1234">{{productTypes[product.type].am}}</v-btn></h5>
        <!--<div class="text-subtitle-1 font-weight-light mb-2">-->
          <!--{{product.shortDescription.am}}-->
        <!--</div>-->
      </v-card-text>
    </v-card>
  </v-hover>
  </v-lazy>
</template>


<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .7;
    position: absolute;
    width: 100%;
  }
</style>

<style lang="scss" scoped>
  .card-container {
    .price {
      transform: translateY(-200px);
      transition-delay: .005s;
      &::after {
        content: '';
        width: 50px;
        border: 1px solid;
        display: block;
        margin: 7px auto;
      }
    }
    .quick-view {
      transform: translateY(150px);
      transition-delay: .03s;
    }
    .holder {
      transform: translateY(-100%);
    }
    &:hover {
      .price {
        transform: translateY(5px);
      }
      .quick-view {
        transform: translateY(20px);
      }
      .holder {
        transform: translateY(0);
      }
    }
  }

  .v-dialog {
    max-width: unset!important;
    background: #fff;
  }

</style>

<script>
  import { mapGetters } from 'vuex';
  import ProductItem from './ProductItem';
  import {productTypes} from "../../helpers/constants";
  export default {
    computed: {
      ...mapGetters({
        isLoggedIn: 'isLoggedIn'
      })
    },
    data(){
      return {
        productTypes
      }
    },
    methods: {
      quickView(id) {
         this.$dialog.show(ProductItem)
      }
    },
    props: ['product']
  }
</script>
