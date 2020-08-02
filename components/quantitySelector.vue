<template>
  <div class="quantity-toggle py-1 px-2">
    <span @click="decrement()">&mdash;</span>
    <input type="text" :value="quantity">
    <span @click="increment()">&#xff0b;</span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        quantity: 1
      }
    },
    methods: {
      increment () {
        this.quantity++
      },
      decrement () {
        if(this.quantity === 1) {
          alert('Negative quantity not allowed')
        } else {
          this.quantity--
        }
      }
    }
  }
</script>

<style lang="scss">
  .quantity-toggle {
    display: inline-flex;
    border: 1px solid #6a6a6a;
    color: #6a6a6a;
    font-size: 15px;
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
