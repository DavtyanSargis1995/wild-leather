<template>
  <UAnimateContainer>
    <v-row>
      <v-col v-for="(prod, index) in products" :key="index">
          <product-card :product="prod"/>
      </v-col>
    </v-row>
  </UAnimateContainer>
</template>
<script>
  import ProductCard from './Card';
  export default {
    name: 'ProductsList',
    components: {
      ProductCard
    },
    props: {
      products: {
        type: Array,
      }
    },
  }
</script>
