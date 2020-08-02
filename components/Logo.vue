<template>
  <nuxt-link :to="path" tag="div" class="mr-16 d-flex align-items-center">
    <img src="~assets/logo.jpg" class="Logo">
  </nuxt-link>
</template>

<script>
export default {
  props: ['path'],
}
</script>

<style>
  .Logo {
    width: 80px;
    cursor: pointer;
  }
</style>
