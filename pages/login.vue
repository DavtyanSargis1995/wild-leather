<template>
  <v-row align="center" justify="center" class="my-15">
    <v-form
      v-if="!isLoggedIn"
      @submit.prevent="signInUser"
      ref="form"
      v-model="valid"
      class="login-form"
      :lazy-validation="lazy"
    >
      <h1>Login</h1>


      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>


      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        type="submit"
      >
        Login
      </v-btn>
    </v-form>
  </v-row>
</template>

<script>
  import { mapGetters } from 'vuex';
  import {auth} from "@/helpers/firebase";

  export default {
    computed: {
      ...mapGetters({
        isLoggedIn: 'isLoggedIn',
        authUser: 'user'
      })
    },
    data: () => ({
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      lazy: false,
    }),

    methods: {
      signInUser() {
        try {
          auth.signInWithEmailAndPassword(
            this.email,
            this.password
          ).then(() => {
            this.$store.dispatch('auth')
          })
        } catch (e) {
          alert(e)
        }
      },
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
