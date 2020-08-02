<template>
  <v-container>
    <v-row>
      <v-col xs="12" md="5">
        <product-zoomer />
      </v-col>
      <v-col xs="12" md="5">
        <h1>V1 - BUCK BROWN & OLIVE</h1>
        <v-subheader>$88 CAD</v-subheader>
        <p>
          The V1 is a minimalist wallet made with the finest of Wickett and Craig leathers. Handcrafted to fit your minimalist lifestyle and made to last.
        </p>

        <v-list
          :shaped=true
          disabled
        >
          <v-subheader>Features</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in features"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title v-html="item"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  import ProductZoomer from './ProductZoomer';
  export default {
    components: {ProductZoomer},
    data() {
      return {
        features: [
          'Option of Machine Stitched or Hand Stitched with Japanese thread.',
          'Hand finished dyed edges',
          'Fair trade made',
          '3 card slots which fits up to 2 cards each plus some bills'
        ]
      }
    }
  }
</script>
