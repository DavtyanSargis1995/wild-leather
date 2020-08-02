<template>
  <UAnimateContainer>
    <v-row>
      <v-col v-for="(prod, index) in products" :key="index">
        <UAnimate
          name="animate__flipInX"
          delay="0s"
          duration="1s"
          :iteration="1"
          :offset="0"
          animateClass="wow"
        >
          <product-card :product="prod"/>
        </UAnimate>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(prod, index) in products" :key="index">
        <UAnimate
          name="animate__flipInX"
          delay="0s"
          duration="1s"
          :iteration="1"
          :offset="0"
          animateClass="wow"
        >
          <product-card-type-two :product="prod"/>
        </UAnimate>
      </v-col>
    </v-row>
  </UAnimateContainer>
</template>
<script>
  import {UAnimateContainer, UAnimate} from 'vue-wow';
  import ProductCard from './ProductCard';
  import ProductCardTypeTwo from './ProductCardTypeTwo';
  export default {
    components: {
      ProductCard,
      UAnimateContainer,
      UAnimate,
      ProductCardTypeTwo
    },
    data () {
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
    }
  }
</script>
