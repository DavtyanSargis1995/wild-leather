<template>
  <v-row align="center" justify="center" class="my-15">
      <p>You are logged in with {{ authUser }}.</p>
      <v-btn color="primary" outlined @click="logout">Logout</v-btn>
  </v-row>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        isLoggedIn: 'isLoggedIn',
        authUser: 'user'
      })
    },

    layout: 'admin',

    methods: {
      async logout() {
        try {
          this.$store.dispatch('logout')
        } catch (e) {
          alert(e)
        }
      }
    },
  }
</script>

<style>
  .login-form {
    width: 50%;
    min-width: 300px;
  }
</style>
