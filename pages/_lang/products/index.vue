<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card-text>
          <v-row>
            <v-col class="px-4">
              <v-alert color="blue-grey" text dark>Price</v-alert>
              <v-alert dense color="grey lighten-2" class="d-inline-block black--text">
                {{range[0]}}
              </v-alert>
              -
              <v-alert dense color="grey lighten-2" class="d-inline-block black--text">
                {{range[1]}}
              </v-alert>
              <v-range-slider
                v-model="range"
                :max="max"
                :min="min"
                hide-details
                class="align-center"
              >
              </v-range-slider>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-col class="px-4">
              <v-select
                :items="items"
                filled
                label="Choose Collection"
              ></v-select>
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
      <v-col cols="9">
        <products-list/>
      </v-col>
    </v-row>
  </v-container>

</template>


<script>
  import ProductsList from '@/components/Products/ProductsList';
  export default {
    components: {ProductsList},
    data () {
      return {
        items: ['Wallets', 'Accessories'],
        min: 5000,
        max: 30000,
        slider: 40,
        range: [8000, 20000],
      }
    },
  }
</script>

