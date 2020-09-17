<template>
  <div>
    <v-parallax src="https://firebasestorage.googleapis.com/v0/b/my-project-1527060076661.appspot.com/o/rsz_116869181_3198915676852931_3054887168006095195_o.jpg?alt=media&token=248ff5da-9e1e-49bf-89ef-7dc3b7e43c13">
      <v-overlay value="true" absolute>
        <h1 class="Content__Title">
          {{ $t('contact.title') }}
        </h1>
        <p>{{ $t('contact.introduction') }}</p>
      </v-overlay>
    </v-parallax>
    <v-container>
      <v-row>
        <v-col class="text-center mt-5" cols="6">
            <v-icon color="black" size="50">mdi-handshake</v-icon>
            <h4 class="mt-7 mb-3">Համագործակցություն</h4>
          <a href="emailto:marketing@matian.co">marketing@matian.co</a>
        </v-col>
        <v-col class="text-center mt-5" cols="6">
            <v-icon color="black" size="50">mdi-map-marker</v-icon>
            <h4 class="mt-7 mb-3">Հասցե</h4>
          <span>Հայաստան, Երևան, Պարոնյան 20</span>
        </v-col>
        <v-col class="text-center mt-5" cols="6">
          <v-icon color="black" size="50">mdi-phone</v-icon>
          <h4 class="mt-7 mb-3">Հեռախոս</h4>
          <a href="tel:+374 (93) 500 703">+374 (93) 500 703</a>
        </v-col>
        <v-col class="text-center mt-5" cols="6">
          <v-icon color="black" size="50">mdi-whatsapp</v-icon>
          <h4 class="mt-7 mb-3">Whatsapp</h4>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=37493500703">Գրել</a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    head () {
      return { title: this.$t('contact.title') }
    }
  }
</script>


