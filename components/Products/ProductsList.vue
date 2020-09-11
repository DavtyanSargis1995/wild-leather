<template>
  <UAnimateContainer>
    <v-row>
      <v-col v-for="(prod, index) in products" :key="index">
        <UAnimate
          name="animate__fadeInUp"
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
      UAnimateContainer,
      UAnimate,
      ProductCardTypeTwo
    },
    props: {
      products: {
        type: Array,
      }
    },
  }
</script>
