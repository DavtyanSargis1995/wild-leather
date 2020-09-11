<template>
  <nuxt-link :to="path" tag="div" class="mr-16 d-flex align-items-center Logo-holder">
    <img src="~assets/logo.jpg">
  </nuxt-link>
</template>

<script>
export default {
  props: ['path'],
}
</script>

<style lang="scss">
  .Logo-holder {
    height: 100%;
    img {
      height: 100%;
      cursor: pointer;
    }
  }
</style>
