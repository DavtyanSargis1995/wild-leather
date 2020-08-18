<template>
  <div class="CartIcon">
    <v-btn
      color="leather-light"
      width="100"
      height="100"
      class="text-left"
      @click.stop="clickHandler"
    >
      <v-icon class="icon">mdi-cart-outline</v-icon>
      <span class="items-count">5 items</span>
      <div class="text-center">
        <span class="price d-inline-block pa-2 mt-3 leather--text">$500</span>
      </div>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'cart-icon',
    props: {
      clickHandler: Function
    }
  }
</script>

<style lang="scss">
  .CartIcon {
    position: fixed;
    top: calc(50vh - 30px);
    right: 0;
    color: white;
    z-index: 20;
    button{
      border-radius: 10px 0 0 10px;
    }
    .v-btn__content {
      display: block;
      color: #fff;
      .icon {
        color: inherit;
      }
      .price{
        background-color: white;
        width: 80%;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
      }
      .items-count {
        font-size: 12px;
        color: inherit;
      }
    }

  }
</style>
