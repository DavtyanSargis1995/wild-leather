<template>
  <v-select
    style="font-size: 14px"
    color="dark"
    v-model="exchangeRate"
    :items="exchangeRates"
    menu-props="auto"
    outlined
    hide-details
    dense
    single-line
    hide-selected
    @change="changeRate"
  >
  </v-select>
</template>

<script>
export default {
  data () {
    const exchangeRates = [
      {value: 'amd', text: 'AMD, ֏'},
      {value: 'usd', text: 'USD, $'},
      {value: 'rub', text: 'RUB, ₽'},
      {value: 'eur', text: 'EUR, €'}
    ];
    const exchangeRate = exchangeRates[0];
    return {
      exchangeRate,
      exchangeRates
    }
  },
  methods: {
    changeRate(){
      this.$store.commit('rate/SET_RATE', this.exchangeRate);
    }
  }
}
</script>
