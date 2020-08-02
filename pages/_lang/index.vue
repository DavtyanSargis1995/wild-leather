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
        <products-list/>
        <div class="text-center">
          <v-btn raised dark color="black" x-large class="mx-auto" to="/collections">View All</v-btn>
        </div>
      </v-flex>

    </v-container>

    <h1 class="Content__Title">
      {{ $t('home.title') }}
    </h1>
    <p>{{ $t('home.introduction') }}</p>
    <Video></Video>
  </v-layout>
</template>

<script>
  import Logo from '~/components/Logo.vue';
  import Video from '~/components/Video.vue';
  import FluxSlider from '../../components/fluxSlider';
  import ProductsList from '../../components/Products/ProductsList';

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
