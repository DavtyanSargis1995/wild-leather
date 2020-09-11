<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="cartProducts"
      :items-per-page="10"
      class="elevation-1"
      :hide-default-header="small"
      hide-default-footer
    >
      <template v-slot:item.image="{item}">
        <img :src="item.imageUrl" alt="" class="image">
      </template>
      <template v-slot:item.product="{item}">
        <div class="d-flex align-center">
          <div class="heading">
            <h3 class="title">{{item.name.am}}</h3>
          </div>
        </div>
      </template>
      <template v-slot:item.price="{item}">
        <h3 class="body-2 pt-3" v-if="small">{{item.name.am}}</h3>
        <p class="price mt-2" :class="{'subtitle-1': small}">{{item.price.amd}}</p>
      </template>
      <template v-slot:item.quantity="{item}">
        <quantity-selector :value="item.count" :product="item" :vertical="small" :class="{first: small}"/>
      </template>
      <template v-slot:item.total="{item}">
        <p class="price mt-2">{{item.price.amd * item.count}}</p>
      </template>
      <template v-slot:item.remove="{item}">
        <v-btn icon @click="removeProduct(item.id)">
          <v-icon size="15">mdi-close</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>


<script>
  import quantitySelector from '../../components/quantitySelector';
  import {mapGetters} from 'vuex';
  export default {
    name: 'CartTable',
    components: {
      quantitySelector
    },
    props: {
      small: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      removeProduct(productId){
        this.$store.commit('cartProducts/REMOVE_PRODUCT', productId);
      }
    },
    mounted() {
      this.$store.dispatch('cartProducts/getProductsForCart');
    },
    computed: {
      ...mapGetters({
        cartProducts: 'cartProducts/products'
      })
    },
    data () {
      let headers = [

        { text: 'Total', value: 'total' },
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'remove',
        },
      ];
      if(this.small){
        headers = [
          {
          text: 'Quantity', value: 'quantity'
          },
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'image',
          },
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'price',
          },
          ...headers,
        ]
      } else {
        headers = [
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
          {
            text: 'Quantity', value: 'quantity'
          },
          ...headers
        ]
      }
      return {
        headers
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
  .image {
    width: 50px;
  }
  .first {
    order: 1;
  }
</style>
