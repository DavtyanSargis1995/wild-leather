<template>
  <v-layout>
    <v-flex class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <h1 class="Content__Title">
        {{ $t('about.title') }}
      </h1>
      <p>{{ $t('about.introduction') }}</p>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    head () {
      return { title: this.$t('about.title') }
    }
  }
</script>


