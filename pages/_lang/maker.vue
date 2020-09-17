<template>
  <div>
    <v-parallax src="https://firebasestorage.googleapis.com/v0/b/my-project-1527060076661.appspot.com/o/rsz_116869181_3198915676852931_3054887168006095195_o.jpg?alt=media&token=248ff5da-9e1e-49bf-89ef-7dc3b7e43c13">
      <v-overlay value="true" absolute>
        overlay text over parallax
      </v-overlay>
    </v-parallax>
    <h1 class="Content__Title">
      {{ $t('about.title') }}
    </h1>
    <p>{{ $t('about.introduction') }}</p>
  </div>
</template>

<script>
  export default {
    head () {
      return { title: this.$t('about.title') }
    }
  }
</script>


