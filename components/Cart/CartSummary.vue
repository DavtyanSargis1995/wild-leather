<template>
  <table class="Summary-table pa-6">
    <tbody>
    <tr>
      <td class="py-4">Ընդհանուր</td>
      <td class="text-right py-4">980$</td>
    </tr>
    <tr>
      <td class="py-4">Առաքում</td>
      <td class="text-right py-4">Հաշվել առաքման արժեքը</td>
    </tr>
    </tbody>
    <tfoot>
      <tr  class="font-weight-bold">
        <td class="py-4">Վճարման ենթակա</td>
        <td class="text-right py-4">980$</td>
      </tr>
      <tr>
        <td colspan="2" class="text-center">
          <v-btn
            color="leather"
            class="text-center mt-2 add-to-cart px-5 py-7"
            dark
          >
            <!--Add to cart-->
            Անցնել վճարման
          </v-btn>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
  export default {
    name: 'cart-summary'
  }
</script>

<style lang="scss">
  .Summary-table {
    color: #666666;
    background-color: #F6F6F6;
    td {
      vertical-align: top;
    }
  }
</style>
