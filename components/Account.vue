<template>
  <div>
    <v-menu offset-y v-if="isLoggedIn">
      <template v-slot:activator="{ attrs, on }">
        <v-btn icon>
          <v-icon  class="white--text ma-8"
                   v-bind="attrs"
                   v-on="on">mdi-account-circle-outline</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item to="/admin" link>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn link to="/login" v-else>Login</v-btn>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'account',
    computed: {
      ...mapGetters({
        'isLoggedIn': 'users/isLoggedIn'
      })
    },
    methods: {
      async logout() {
        try {
          await this.$store.dispatch('users/logout')
        } catch (e) {
          alert(e)
        }
      }
    }
  }
</script>
