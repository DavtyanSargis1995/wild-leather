<template>
  <v-select
    border="none"
    color="blue"
    v-model="exchangeRate"
    :items="exchangeRates"
    menu-props="auto"
    hide-details
    label="Select"
    single-line
    hide-selected
  ></v-select>
</template>

<script>
export default {
  data () {
    return {
      exchangeRate: 'AMD, ֏',
      exchangeRates: ['AMD, ֏', 'USD, $', 'RUB, ₽', 'EUR, €'],
    }
  }
}
</script>
