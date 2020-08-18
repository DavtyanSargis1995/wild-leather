<template>
  <v-container>
    <product-item :show-info="true"/>
    <v-divider></v-divider>
    <h2>You may also like</h2>
    <products-list :products="products"></products-list>
  </v-container>
</template>
<script>
  import ProductItem from '../../../components/Products/ProductItem';
  import ProductsList from '../../../components/Products/ProductsList';
  export default {
    components: {
      ProductsList,
      ProductItem
    },
    data(){
      return {
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
          }
        ]
      }
    }
  }
</script>
