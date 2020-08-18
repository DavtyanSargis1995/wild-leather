<template>
  <v-data-table
    hide-default-footer
    :headers="headers"
    :items="products"
    :items-per-page="5"
    class="CartProducts"
    :class="{'scrollable': small}"
  >

    <template v-slot:item.image="{item}">
      <img :src="item.productImage" alt="">
    </template>
    <template v-slot:item.name="{item}">
      <div class="d-flex align-center">
          <h3 class="subtitle-1">{{item.name}}</h3>
      </div>
    </template>
    <template v-slot:item.productShort="{item}">
      <div class="text-left">
        <h3 class="subtitle-1">{{item.name}}</h3>
        <p class="price">${{item.price}}</p>
        <p class="subtitle-2 text--secondary mb-0">2 հատ</p>
      </div>
    </template>
    <template v-slot:item.price="{item}">
      <p class="price mt-2">${{item.price}}</p>
    </template>
    <template v-slot:item.quantity="{item}">
      <quantity-selector :value="item.quantity" :vertical="small"/>
    </template>
    <template v-slot:item.total="{item}">
      <p class="price mt-2">{{item.price * item.quantity}}</p>
    </template>
    <template v-slot:item.remove="{item}">
      <v-btn icon small>
        <v-icon size="14">mdi-close</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
  import quantitySelector from '../QuantitySelector';
  export default {
    components: {
      quantitySelector
    },
    props: {
      small: Boolean
    },
    computed: {
      products(){
        console.log(this.$store.getters['cart-products/products']);
        return this.$store.getters['cart-products/products'];
      }
    },
    name: 'cart-table',
    created() {
      if(this.small) {
        this.headers.splice(2, 0, {
          text: 'Product',
          align: 'start',
          sortable: false,
          value: 'productShort',
        })
      } else {
        this.headers.splice(2, 0, {
            text: 'Product',
            align: 'start',
            sortable: false,
            value: 'name'
        }, {
            text: 'Price',
            value: 'price',
        })
      }

    },
    data () {
      return {
        headers: [
          {
            text: '',
            value: 'quantity',
            sortable: false,
          },
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'image',
          },

          {
            text: 'Total',
            value: 'total',
            sortable: false,
          },
          {
            text: '',
            align: 'start',
            value: 'remove',
          },
        ],
      }
    },
  }
</script>


<style scoped lang="scss">
  .CartProducts {
    &.scrollable {
      .v-data-table__wrapper {
        overflow-y: auto;
        overflow-x: auto;
        height: 100vh;
      }
    }
    img {
      width: 60px;
    }
    .price {
      font-weight: 700;
      color: #666;
      font-size: 18px;
    }
  }

</style>
