<template>
  <div class="quantity-toggle d-flex justify-space-between align-center" :class="{vertical}">
    <v-btn small icon @click="changeCount(-1)">
      <v-icon size="13">mdi-minus</v-icon>
    </v-btn>
    <span>{{value}}</span>
    <v-btn small icon @click="changeCount(1)">
      <v-icon size="13">mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      value: Number,
      product: Object,
      vertical: Boolean
    },
    data () {
      return {
        quantity: 1
      }
    },
    methods: {
      changeCount (count) {
        this.$store.commit('cartProducts/ADD_TO_CART', { product: this.product, count});
      },
    }
  }
</script>

<style lang="scss">
  .quantity-toggle {
    display: inline-flex;
    border-radius: 30px;
    background: rgb(247, 247, 247);
    color: #6a6a6a;
    width: 75px;
    font-size: 14px;
    &.vertical{
      width: auto;
      flex-direction: column;
      button:first-child{
        order: 3;
      }
      &>span{
        order: 2;
      }
      button:last-child{
        order: 1;
      }
    }
    span {
      cursor: pointer;
    }
    input {
      max-width: 40px;
      outline: none;
      color: #6a6a6a;
      text-align: center;
    }
  }
</style>
