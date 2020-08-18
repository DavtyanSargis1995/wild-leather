<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card-text>
          <v-row>
            <v-col class="px-4">
              <v-alert color="blue-grey" text dark>Price</v-alert>
              <v-alert dense color="grey lighten-2" class="d-inline-block black--text">
                {{range[0]}}
              </v-alert>
              -
              <v-alert dense color="grey lighten-2" class="d-inline-block black--text">
                {{range[1]}}
              </v-alert>
              <v-range-slider
                v-model="range"
                :max="max"
                :min="min"
                hide-details
                class="align-center"
              >
              </v-range-slider>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-col class="px-4">
              <v-select
                :items="items"
                filled
                label="Choose Collection"
              ></v-select>
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
      <v-col cols="9">
        <products-list :products="products"/>
      </v-col>
    </v-row>
  </v-container>

</template>


<script>
  import ProductsList from '../../components/Products/ProductsList';
  export default {
    components: {ProductsList},
    data () {
      return {
        items: ['Wallets', 'Accessories'],
        min: 5000,
        max: 30000,
        slider: 40,
        range: [8000, 20000],
        products: [
          {
            id: '1234',
            imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown_Olive-1_600x.jpg?v=1539200316',
            title: {
              am: 'Կաշվյա քարտապանակ',
              ru: 'Для карт',
              en: 'Leather card case',
            },
            shortDescription: {
              am: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              ru: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              en: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
            },
            price: {
              usd: '14.99',
              amd: '8000',
              eur: '13',
              rub: '200',
            },
            category: ''
          },
          {
            id: '1234',
            imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown-1_600x.jpg?v=1539202111',
            title: {
              am: 'Կաշվյա քարտապանակ',
              ru: 'Для карт',
              en: 'Leather card case',
            },
            shortDescription: {
              am: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              ru: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              en: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
            },
            price: {
              usd: '14.99',
              amd: '8000',
              eur: '13',
              rub: '200',
            },
            category: ''
          },
          {
            id: '1234',
            imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown-1_600x.jpg?v=1539202111',
            title: {
              am: 'Կաշվյա քարտապանակ',
              ru: 'Для карт',
              en: 'Leather card case',
            },
            shortDescription: {
              am: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              ru: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              en: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
            },
            price: {
              usd: '14.99',
              amd: '8000',
              eur: '13',
              rub: '200',
            },
            category: ''
          },
          {
            id: '1234',
            imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/Black-2_600x.jpg?v=1539201508',
            title: {
              am: 'Կաշվյա քարտապանակ',
              ru: 'Для карт',
              en: 'Leather card case',
            },
            shortDescription: {
              am: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              ru: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              en: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
            },
            price: {
              usd: '14.99',
              amd: '8000',
              eur: '13',
              rub: '200',
            },
            category: ''
          },
          {
            id: '1234',
            imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/2_600x.png?v=1541969000',
            title: {
              am: 'Կաշվյա քարտապանակ',
              ru: 'Для карт',
              en: 'Leather card case',
            },
            shortDescription: {
              am: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              ru: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              en: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
            },
            price: {
              usd: '14.99',
              amd: '8000',
              eur: '13',
              rub: '200',
            },
            category: ''
          },
          {
            id: '1234',
            imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/1_8d0da49f-87d1-4b87-98c4-c0a92bb1b027_600x.png?v=1542055628',
            title: {
              am: 'Կաշվյա քարտապանակ',
              ru: 'Для карт',
              en: 'Leather card case',
            },
            shortDescription: {
              am: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              ru: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              en: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
            },
            price: {
              usd: '14.99',
              amd: '8000',
              eur: '13',
              rub: '200',
            },
            category: ''
          },
          {
            id: '1234',
            imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/2_e067f946-14a9-41ca-b693-cd5b5ad15f06_600x.png?v=1541962385',
            title: {
              am: 'Կաշվյա քարտապանակ',
              ru: 'Для карт',
              en: 'Leather card case',
            },
            shortDescription: {
              am: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              ru: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              en: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
            },
            price: {
              usd: '14.99',
              amd: '8000',
              eur: '13',
              rub: '200',
            },
            category: ''
          },
          {
            id: '1234',
            imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/1_4b63c9fd-e828-4cc9-a07a-93a74941b9f0_600x.png?v=1541962385',
            title: {
              am: 'Կաշվյա քարտապանակ',
              ru: 'Для карт',
              en: 'Leather card case',
            },
            shortDescription: {
              am: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              ru: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
              en: 'Our Vintage kitchen utensils delight any chef.\n' +
                'Made of bamboo by hand',
            },
            price: {
              usd: '14.99',
              amd: '8000',
              eur: '13',
              rub: '200',
            },
            category: ''
          }
        ]
      }
    },
  }
</script>

