<template>
  <section class="hero is-fullheight" id="scroll-left">
    <div class="hero-body is-fullheight">
      <div class="container">
        <client-only>
          <div class="d-flex columns is-centered is-vcentered">
            <div class="images">
                <img
                  :src="img.url"
                  alt=""
                  v-for="img in images"
                  :key="img.id"
                  @click="setCurrent(img)"
                  :class="{selected: img.id === currentImage.id}"
                />
            </div>
            <magnifier
              :src="currentImage.url"
              :glass-width="120"
              :glass-height="120"
              :zoom-level="2"
              :width="300"
              :height="400"
            />
          </div>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
  beforeMount() {
    window.addEventListener('resize', () => {
      this.resizeWindow();
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', () => {
      this.resizeWindow();
    });
  },
  methods: {
    resizeWindow() {
      if(window.innerWidth < 786) {
        this.zoomerOptions = {...this.zoomerOptions, scroller_position: 'bottom' };
      } else {
        this.zoomerOptions = {...this.zoomerOptions, scroller_position: 'left' };
      }
    },
    setCurrent(image) {
      this.currentImage = image;
    }
  },
  mounted() {
    this.resizeWindow();
  },
  data () {
    return {
      currentImage: {
        id: 1,
        url:
          "https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown_Olive-1_300x.jpg?v=1539200316"
      },
      images: [
        {
          id: 1,
          url:
            "https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown_Olive-1_300x.jpg?v=1539200316"
        },
        {
          id: 2,
          url:
            "https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown-1_300x.jpg?v=1539202111"
        },
        {
          id: 3,
          url:
            "https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown_Olive-1_300x.jpg?v=1539200316"
        },
      ],
    };
  }
}


</script>


<style lang="scss">
  .hero.is-fullheight {
    .title {
      display: none;
    }
  }

  .img-magnifier-container img{
    max-width: 300px;
    height: auto;
  }

  .images img {
    cursor: pointer;
    width: 100px;
    filter: grayscale(60%);
    &:hover {
      filter: grayscale(0%);
    }
    &.selected {
      border: 2px solid #333;
      filter: grayscale(0%);
    }
  }
</style>
