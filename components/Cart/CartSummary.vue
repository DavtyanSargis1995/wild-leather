<template>
  <div class="cart-summary">
    <v-alert color="grey lighten-2" tile>
      <table>
        <tbody>
          <tr>
            <td>Ընդհանուր</td>
            <td class="text-right">{{productsSummary}} ֏</td>
          </tr>
          <tr>
            <td>Առաքում</td>
            <td class="text-right">Հաշվել առաքման արժեքը</td>
          </tr>
          <tr>
            <td>Վճարման ենթակա</td>
            <td class="text-right">{{productsSummary}} ֏</td>
          </tr>
        </tbody>
      </table>
      <v-btn dark tile class="d-block mx-auto my-3">Checkout</v-btn>
    </v-alert>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'CartSummary',
    computed: {
      ...mapGetters({
        productsSummary: 'cartProducts/productsSummary'
      })
    }
  }
</script>

<style lang="scss">
  .cart-summary {
    table {
      width: 100%;
      td {
        padding: 5px;
      }
    }
  }
</style>
