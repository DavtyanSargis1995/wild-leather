<template>
  <v-row align="center" justify="center" class="my-15">
    {{authUser}}
    <v-form
      @submit.prevent="login"
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

      <div v-if="isError" class="alert alert-danger">
        <p>{{errMsg}}</p>
      </div>
    </v-form>
  </v-row>
</template>

<script>
  import {auth} from '@/services/firebase';

  import { mapState, mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapState({
        authUser: state => state.users.user
      }),
      ...mapGetters({
        // IS_AUTHENTICATED: 'IS_AUTHENTICATED'
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
      isError: false,
      errMsg: ''
    }),

    methods: {
      // async signInUser() {
      //   try {
      //     await this.$fireAuth.signInWithEmailAndPassword(
      //       this.email,
      //       this.password
      //     )
      //   } catch (e) {
      //     alert(e)
      //   }
      //
      //   try {
      //     this.$fireAuth.currentUser.getIdToken(true).then(function (token) {
      //       // set the __session cookie
      //       document.cookie = '__session=' + token + ';max-age=3600';
      //     })
      //   } catch {
      //
      //   }
      // },

      login() {
        debugger;
        this.$store.dispatch('users/signUserIn', {
          email: this.email,
          password: this.password
        })
      },

    },
    // created() {
    //   auth.onAuthStateChanged((user) => {
    //     if (user) {
    //       this.$store.dispatch('users/autoSignIn', user);
    //     }
    //     // this.$store.commit('setLoading', false);
    //   });
    // }
  }
</script>

<style>
  .login-form {
    width: 50%;
    min-width: 300px;
  }
</style>
