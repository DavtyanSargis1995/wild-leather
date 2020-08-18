<template>
  <div class="CartSidebar">
    <v-container>
      <v-row justify="space-between">
        <v-col>
          <v-icon class="icon">mdi-cart-outline</v-icon> 5 items
        </v-col>
        <v-col class="text-right">
          <v-icon>mdi-close</v-icon>
        </v-col>
      </v-row>
    </v-container>
    <cart-table :small="true"/>
    <cart-summary class="mx-auto mt-10"/>
  </div>
</template>



<style scoped lang="scss">
  .CartSidebar {

  }
</style>

<script>
  import CartTable from './CartTable';
  import CartSummary from './CartSummary';
  export default {
    components: {CartSummary, CartTable}
  }
</script>
