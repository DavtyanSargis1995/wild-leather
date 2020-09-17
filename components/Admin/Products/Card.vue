<template>
    <div class="mb-6 card-holder mx-auto relative" style="position:relative;">
      <v-btn
        absolute
        color="info"
        class="view-icon white--text"
        :to="$i18n.path('products/'+product.id)"
        fab
        x-small
        right
        top
      >
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      <v-btn
        absolute
        color="primary"
        class="white--text"
        fab
        x-small
        right
        top
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        absolute
        color="error"
        class="remove-icon white--text"
        fab
        top
        x-small
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>


      <v-card
        tile
        class="mx-auto overflow-hidden d-flex pa-3"
      >
          <v-img
            :aspect-ratio="6/6"
            :src="product.imageUrl"
            class="product-image"
          >
          </v-img>
          <ul>
            <v-subheader>Հատկանիշներ</v-subheader>
            <li>Արժեքը՝ {{price}}</li>
            <li>Տեսակը՝ {{productTypes[product.type].am}}</li>
            <li>Կաշին՝ {{product.leatherType}}</li>
            <li>Կարերի գույնը՝ {{product.seamsColor}}</li>
            <li>Չափսը փակված դիրքով՝ {{product.size[0]}} - {{product.size[1]}} սմ</li>
            <li>Գրպանների քանակը՝ {{product.pocketsCount}}</li>
          </ul>
      </v-card>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import {productTypes} from "../../../helpers/constants";

  export default {
    name: 'ProductCard',
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
    props: ['product'],
  }
</script>


<style>
  .v-dialog {
    max-width: unset!important;
    background: #fff;
    width: auto;
  }
</style>

<style scoped lang="scss">
  .card-holder {
    min-width: 450px;

    .remove-icon {
      right: 60px;
    }

    .view-icon {
      right: 100px;
    }

    .product-image {
      background-color: #fff;
      max-width: 200px;
    }

    .product-title {
      letter-spacing: 1.5px;
      font-size: 16px;
      &:hover {
        color: #422417;
        text-decoration: underline;
      }
    }
  }
</style>
