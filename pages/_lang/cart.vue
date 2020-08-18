<template>
  <v-container>
    <v-row justify="space-between">
      <v-col md="8" class="mr-5">
        <cart-table/>
      </v-col>
      <v-col>
        <cart-summary/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import CartTable from '../../components/Cart/CartTable';
  import CartSummary from '../../components/Cart/CartSummary';
  export default {
    components: {CartSummary, CartTable}
  }
</script>
