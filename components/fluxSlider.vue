<template>
  <div class="slider-holder">
    <client-only>
      <vue-flux
        :options="vfOptions"
        delay="1000"
        :images="vfImages"
        :transitions="vfTransitions"
        ref="slider">

        <template v-slot:preloader>
          <flux-preloader />
        </template>

        <template v-slot:controls>
          <div style="background-color: rgba(0, 0, 0, 0.4); width: 100%; height: calc(100vh - 146px); position:absolute;">
            <div style="color: white; position:absolute; top: 40%; left: 40%; max-width: 300px; z-index: 100; text-align: center;">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, architecto beatae debitis ducimus eveniet ex laborum nemo sunt temporibus velit.
              </p>
              <v-btn color="white">Open</v-btn>
            </div>
            <flux-controls />
          </div>
        </template>

        <template v-slot:pagination>
          <flux-pagination />
        </template>

        <template v-slot:index>
          <flux-index />
        </template>
      </vue-flux>

      {{$refs.slider}}
      <!--<flux-caption v-if="mounted" :slider="$refs.slider"></flux-caption>-->
    </client-only>
    <div class="chevron-down">
      <v-btn fab color="white" medium @click="scrollTo">
        <v-icon color="black" large>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
  </div>
</template>


<script>
  import {
    VueFlux,
    FluxControls,
    FluxCaption,
    FluxIndex,
    FluxPagination,
    FluxPreloader
  } from 'vue-flux/dist-ssr/vue-flux.umd.min.js';

  import 'vue-flux/dist-ssr/vue-flux.css';

  export default {
    components: {
      VueFlux,
      FluxCaption,
      FluxControls,
      FluxIndex,
      FluxPagination,
      FluxPreloader,
    },

    mounted() {
      this.mounted = true;
      console.log(this.scrollTo);
    },

    props: ['scrollTo'],

    data: () => ({
      vfOptions: {
        autoplay: true,
      },
      mounted: false,
      vfImages: [
        'https://cdn.shopify.com/s/files/1/2786/9162/files/Uncharted_Satchel-10_1800x.jpg?v=1522901431',
        'https://cdn.shopify.com/s/files/1/2786/9162/files/SHANESATCHEL-web-2_1800x.jpg?v=1542846250',
        'https://cdn.shopify.com/s/files/1/2786/9162/files/RoyalV2-1_1800x.jpg?v=1539384607'
      ],
      vfTransitions: [ 'fade', 'fade', 'fade'],
    }),
  }
</script>


<style lang="scss">



  @-webkit-keyframes pulse {to {box-shadow: 0 0 0 15px rgba(255,255,255,0.4)}}
  @-moz-keyframes pulse {to {box-shadow: 0 0 0 15px rgba(255,255,255,0.4)}}
  @-ms-keyframes pulse {to {box-shadow: 0 0 0 15px rgba(255,255,255,0.4)}}
  @keyframes pulse {to {box-shadow: 0 0 0 15px rgba(255,255,255,0.4)}}

  .slider-holder {
    width: 100%;
    height: calc(100vh - 146px);
    position: relative;
  }
  .slider-holder .chevron-down {
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 20px;
    z-index: 45;
    button {
      -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1) alternate;
      -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1) alternate;
    }
  }
  .vue-flux .flux-pagination li {
    width: 13px;
    height: 13px;
    padding: 0;
  }

  .vue-flux .flux-pagination ul{
    justify-content: flex-end;
    margin-right: 30px;
  }

  .vue-flux .flux-index nav, .vue-flux .flux-index button {
    display: none;
  }

  .vue-flux {
    height: 100%;
  }

  .flux-controls {
    position: absolute;
    top: calc(50% - 100px);
    width: 100%;
    button:nth-child(2){
      display: none;
    }
  }

</style>
