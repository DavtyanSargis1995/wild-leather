<template>
  <v-card class="py-3 px-5">
      <v-row>
        <v-col>
          <h2>Products</h2>
        </v-col>
        <v-col>
          <v-select
            color="dark"
            v-model="categoriesValues"
            :items="categories"
            label="Ընտրել կատեգորիան"
            solo
          ></v-select>
        </v-col>
        <v-col>
          <v-select
            color="dark"
            label="Դսաավորել ըստ գնի"
            solo
            :items="sortBy"
            v-model="sortByValues"
          >
          </v-select>
        </v-col>
        <v-col>
          <v-text-field
            color="dark"
            label="Փնտրել ըստ անվան"
          ></v-text-field>
        </v-col>
      </v-row>

      <products-list :products = 'products'/>

  </v-card>
</template>


<script>
  import {getData} from "../../helpers/firebaseCRUD";
  import ProductsList from "../../components/Admin/Products/List";
  export default {
    layout: 'admin',
    components: {
      ProductsList
    },
    async mounted(){
      const snapshot = await getData('products', {
        field: 'published',
        condition: '==',
        value: true
      });
      const products = [];
      snapshot.docs.map(item => {
        products.push(item.data())
      });
      this.products = [...products];
    },
    data: () => ({
      products: [],
      categories: ['Դրամապանակ', 'Դրամապանակ + կախազարդ', 'Քարտապանակ'],
      categoriesValues: ['wallet', 'walletPendant', 'cardFolder'],
      sortBy: ['Դասավորել ըստ գնի աճի', 'Դասավորել ըստ գնի նվազման'],
      sortByValues: ['priceEsc', 'priceDesc'],
    }),
  }
</script>
