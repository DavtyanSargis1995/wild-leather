<template>
  <div class="container">
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.remove="{item}">
        <v-icon>mdi-close</v-icon>
      </template>
      <template v-slot:item.image="{item}">
        <img :src="item.productImage" alt="">
      </template>
      <template v-slot:item.product="{item}">
        <div class="d-flex align-center">
          <div class="heading">
            <h3 class="title">{{item.tile}}</h3>
          </div>
        </div>
      </template>
      <template v-slot:item.price="{item}">
        <p class="price mt-2">{{item.price}}</p>
      </template>
      <template v-slot:item.quantity="{item}">
        <quantity-selector :value="item.quantity" />
      </template>
      <template v-slot:item.total="{item}">
        <p class="price mt-2">{{item.price * item.quantity}}</p>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import quantitySelector from '../../components/quantitySelector';
  export default {
    components: {
      quantitySelector
    },
    data () {
      return {
        headers: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'remove',
          },
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'image',
          },
          {
            text: 'Product',
            align: 'start',
            sortable: false,
            value: 'product',
          },
          {
            text: 'Price',
            value: 'price',
          },
          { text: 'Quantity', value: 'quantity' },
          { text: 'Total', value: 'total' },
        ],
        products: [
          {
            product: 'Frozen Yogurt',
            productImage: 'https://cdn.shopify.com/s/files/1/2786/9162/products/1_4b63c9fd-e828-4cc9-a07a-93a74941b9f0_100x.png?v=1541962385',
            quantity: 2,
            price: '60'
          },
          {
            product: 'Frozen Yogurt',
            productImage: 'https://cdn.shopify.com/s/files/1/2786/9162/products/1_4b63c9fd-e828-4cc9-a07a-93a74941b9f0_100x.png?v=1541962385',
            quantity: 1,
            price: '90'
          },
          {
            product: 'Frozen Yogurt',
            productImage: 'https://cdn.shopify.com/s/files/1/2786/9162/products/1_4b63c9fd-e828-4cc9-a07a-93a74941b9f0_100x.png?v=1541962385',
            quantity: 3,
            price: '60'

          },{
            product: 'Frozen Yogurt',
            productImage: 'https://cdn.shopify.com/s/files/1/2786/9162/products/1_4b63c9fd-e828-4cc9-a07a-93a74941b9f0_100x.png?v=1541962385',
            quantity: 5,
            price: '160'
          }
        ],
      }
    },
  }
</script>


<style scoped lang="scss">
  .price {
    font-weight: 700;
    color: #666;
    font-size: 18px;
  }
</style>
