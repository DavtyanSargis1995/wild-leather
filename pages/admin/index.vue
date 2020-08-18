<template>
  <v-container>
    <v-row align="center">
      <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
      >
        <v-text-field
          v-model="nameAM"
          :counter="10"
          :rules="nameRules"
          label="Name AM"
          required
        ></v-text-field>
        <v-text-field
          v-model="nameEN"
          :counter="10"
          :rules="nameRules"
          label="Name EN"
          required
        ></v-text-field>
        <v-text-field
          v-model="nameRU"
          :counter="10"
          :rules="nameRules"
          label="Name RU"
          required
        ></v-text-field>


        <v-text-field
          v-model="descAM"
          :rules="nameRules"
          label="Description AM"
          required
        ></v-text-field>
        <v-text-field
          v-model="descRU"
          :rules="nameRules"
          label="Description RU"
          required
        ></v-text-field>
        <v-text-field
          v-model="descEN"
          :counter="10"
          :rules="nameRules"
          label="Description EN"
          required
        ></v-text-field>

        <v-text-field
          v-model="imageUrl"
          :counter="10"
          label="image URL"
          required
        ></v-text-field>


        <v-text-field
          v-model="priceAMD"
          :counter="10"
          label="Price AMD"
          required
        ></v-text-field>
        <v-text-field
          v-model="priceUSD"
          :counter="10"
          label="Price USD"
          required
        ></v-text-field>
        <v-text-field
          v-model="priceRUB"
          :counter="10"
          label="Price RUB"
          required
        ></v-text-field>
        <v-text-field
          v-model="priceEUR"
          :counter="10"
          label="Price EUR"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>
      </v-form>
    </v-row>
    <v-btn @click="saveData">Save Data</v-btn>

  </v-container>
</template>


<script>
  import {db} from '@/services/firebase';
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameAM: '',
      nameRU: '',
      nameEn: '',
      descAM: '',
      descRU: '',
      descEN: '',
      priceUSD: '',
      priceAMD: '',
      priceEUR: '',
      priceRUB: '',
      imageUrl: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      lazy: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      async saveData(){
        const response = await db.collection("products").add({
          imageUrl: 'https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown_Olive-1_600x.jpg?v=1539200316',
          name: {
            am: 'Կաշվյա քարտապանակ',
            ru: 'Для карт',
            en: 'Leather card case',
          },
          description: {
            am: 'Our Vintage kitchen utensils delight any chef.\n' +
              'Made of bamboo by hand',
            ru: 'Our Vintage kitchen utensils delight any chef.\n' +
              'Made of bamboo by hand',
            en: 'Our Vintage kitchen utensils delight any chef.\n' +
              'Made of bamboo by hand',
          },
          price: {
            usd: '14.99',
            amd: '8000',
            eur: '13',
            rub: '200',
          },
        });
        console.log(response);
      }
    },
  }
</script>
