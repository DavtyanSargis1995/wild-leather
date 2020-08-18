<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <!--<super-slider />-->
    <flux-slider :scroll-to="scrollTo"/>
    <v-container ref="products" class="pt-15">
      <v-flex>
        <div class="text-center mb-15">
          <h2>Featured Products</h2>
          <v-subheader class="justify-center">LEATHER WALLETS</v-subheader>
        </div>
        <products-list :products="products"/>
        <div class="text-center">
          <v-btn raised dark color="black" x-large class="mx-auto" to="/collections">View All</v-btn>
        </div>
      </v-flex>

    </v-container>

    <!--<h1 class="Content__Title">-->
      <!--{{ $t('home.title') }}-->
    <!--</h1>-->
    <!--<p>{{ $t('home.introduction') }}</p>-->
    <Video></Video>
  </v-layout>
</template>

<script>
  import Logo from '~/components/Logo.vue';
  import Video from '~/components/Video.vue';
  import FluxSlider from '../../components/fluxSlider';
  import ProductsList from '../../components/Products/ProductsList';
  import {db} from '@/services/firebase';

  export default {
    components: {
      ProductsList,
      FluxSlider,
      Logo,
      Video
    },
    head () {
      return { title: this.$t('home.title') }
    },
    async mounted() {
      const products = [];
      const querySnapshot = await db.collection("products").get();
      querySnapshot.forEach(function(doc) {
        products.push({
          id: doc.id,
          ...doc.data()
        });
      });
      this.products = [...products];
    },
    data() {
      return {
        products: [],
        // products: [
        //   {
        //     id: '1234',
        //     imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown_Olive-1_600x.jpg?v=1539200316',
        //     title: {
        //       am: 'Կաշվյա քարտապանակ',
        //       ru: 'Для карт',
        //       en: 'Leather card case',
        //     },
        //     shortDescription: {
        //       am: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       ru: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       en: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //     },
        //     price: {
        //       usd: '14.99',
        //       amd: '8000',
        //       eur: '13',
        //       rub: '200',
        //     },
        //     category: ''
        //   },
        //   {
        //     id: '1234',
        //     imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown-1_600x.jpg?v=1539202111',
        //     title: {
        //       am: 'Կաշվյա քարտապանակ',
        //       ru: 'Для карт',
        //       en: 'Leather card case',
        //     },
        //     shortDescription: {
        //       am: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       ru: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       en: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //     },
        //     price: {
        //       usd: '14.99',
        //       amd: '8000',
        //       eur: '13',
        //       rub: '200',
        //     },
        //     category: ''
        //   },
        //   {
        //     id: '1234',
        //     imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown-1_600x.jpg?v=1539202111',
        //     title: {
        //       am: 'Կաշվյա քարտապանակ',
        //       ru: 'Для карт',
        //       en: 'Leather card case',
        //     },
        //     shortDescription: {
        //       am: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       ru: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       en: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //     },
        //     price: {
        //       usd: '14.99',
        //       amd: '8000',
        //       eur: '13',
        //       rub: '200',
        //     },
        //     category: ''
        //   },
        //   {
        //     id: '1234',
        //     imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/Black-2_600x.jpg?v=1539201508',
        //     title: {
        //       am: 'Կաշվյա քարտապանակ',
        //       ru: 'Для карт',
        //       en: 'Leather card case',
        //     },
        //     shortDescription: {
        //       am: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       ru: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       en: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //     },
        //     price: {
        //       usd: '14.99',
        //       amd: '8000',
        //       eur: '13',
        //       rub: '200',
        //     },
        //     category: ''
        //   },
        //   {
        //     id: '1234',
        //     imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/2_600x.png?v=1541969000',
        //     title: {
        //       am: 'Կաշվյա քարտապանակ',
        //       ru: 'Для карт',
        //       en: 'Leather card case',
        //     },
        //     shortDescription: {
        //       am: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       ru: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       en: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //     },
        //     price: {
        //       usd: '14.99',
        //       amd: '8000',
        //       eur: '13',
        //       rub: '200',
        //     },
        //     category: ''
        //   },
        //   {
        //     id: '1234',
        //     imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/1_8d0da49f-87d1-4b87-98c4-c0a92bb1b027_600x.png?v=1542055628',
        //     title: {
        //       am: 'Կաշվյա քարտապանակ',
        //       ru: 'Для карт',
        //       en: 'Leather card case',
        //     },
        //     shortDescription: {
        //       am: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       ru: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       en: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //     },
        //     price: {
        //       usd: '14.99',
        //       amd: '8000',
        //       eur: '13',
        //       rub: '200',
        //     },
        //     category: ''
        //   },
        //   {
        //     id: '1234',
        //     imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/2_e067f946-14a9-41ca-b693-cd5b5ad15f06_600x.png?v=1541962385',
        //     title: {
        //       am: 'Կաշվյա քարտապանակ',
        //       ru: 'Для карт',
        //       en: 'Leather card case',
        //     },
        //     shortDescription: {
        //       am: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       ru: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       en: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //     },
        //     price: {
        //       usd: '14.99',
        //       amd: '8000',
        //       eur: '13',
        //       rub: '200',
        //     },
        //     category: ''
        //   },
        //   {
        //     id: '1234',
        //     imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/1_4b63c9fd-e828-4cc9-a07a-93a74941b9f0_600x.png?v=1541962385',
        //     title: {
        //       am: 'Կաշվյա քարտապանակ',
        //       ru: 'Для карт',
        //       en: 'Leather card case',
        //     },
        //     shortDescription: {
        //       am: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       ru: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //       en: 'Our Vintage kitchen utensils delight any chef.\n' +
        //         'Made of bamboo by hand',
        //     },
        //     price: {
        //       usd: '14.99',
        //       amd: '8000',
        //       eur: '13',
        //       rub: '200',
        //     },
        //     category: ''
        //   }
        // ]
      }
    },
    methods: {
      scrollTo() {
        var el = this.$refs.products;
        let rect = el.getBoundingClientRect()
        // Scroll to the element (using x and y axis)
        window.scrollTo({
          left: rect.left,
          top: rect.top - 150,
          behavior: 'smooth'
        })
      }
    }
  }
</script>
