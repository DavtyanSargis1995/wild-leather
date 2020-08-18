<template>
  <div class="quantity-toggle pa-0 d-inline-flex text-center" :class="{'vertical': vertical, 'flex-column': vertical}">
    <v-btn icon @click="decrement()" small>
      <v-icon size="14">mdi-minus</v-icon>
    </v-btn>
    <input type="text" :value="quantity">
    <v-btn icon @click="increment()" small>
      <v-icon size="14">mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        quantity: 1
      }
    },
    name: 'quantity-selector',
    props: {
      vertical: Boolean
    },
    methods: {
      increment () {
        if(this.quantity === 10) {
          return;
        } else {
          this.quantity++
        }
      },
      decrement () {
        if(this.quantity === 1) {
          return;
        } else {
          this.quantity--
        }
      }
    }
  }
</script>

<style lang="scss">
  .quantity-toggle {
    border: 1px solid rgba(144, 140, 140, 0.35);
    /*color: #6a6a6a;*/
    font-size: 15px;
    border-radius: 28px;
    background-color: rgb(247, 247, 247);
    color: rgb(13, 17, 54);
    &.vertical {
      margin: 10px 0;
      width: 30px;
      .v-btn:first-child{
        order: 3
      }
      .v-btn:last-child{
        order: 1
      }
      input {
        order: 2;
      }
    }
    .v-btn {
      cursor: pointer;
    }
    input {
      max-width: 30px;
      outline: none;
      color: rgb(13, 17, 54);
      text-align: center;
    }
  }
</style>
