<template>
  <div class="container">
    <v-row>
      <v-col xs="12" lg="8">
        <CartTable/>
      </v-col>
      <v-col xs="12" lg="4">
        <CartSummary/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import CartTable from "../../components/Cart/CartTable";
  import CartSummary from "../../components/Cart/CartSummary";
  export default {
    components: {
      CartSummary,
      CartTable
    },
  }
</script>

