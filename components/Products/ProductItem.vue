<template>
  <v-row>
    <v-col xs="12" md="5">
      <product-zoomer />
    </v-col>
    <v-col xs="12" md="5">
      <h1 class="text-h4 mb-4">V1 - BUCK BROWN & OLIVE</h1>
      <v-divider></v-divider>
      <v-subheader class="text-h4 pa-0 mt-4">$88 CAD</v-subheader>
      <p class="my-3">
        The V1 is a minimalist wallet made with the finest of Wickett and Craig leathers. Handcrafted to fit your minimalist lifestyle and made to last.
      </p>
      <div class="my-4 d-flex align-center">
        <quantity-selector :vertical="true"/>
        <v-btn
          color="leather"
          class="text-center ml-10 add-to-cart px-5 py-7"
          dark
          small
        >
          <!--Add to cart-->
          Ավելացնել զամբյուղ
        </v-btn>
      </div>
      <v-tabs
        v-if="showInfo"
        v-model="tab"
        background-color="transparent"
        grow
        color="gray"
      >
        <v-tab
          v-for="item in items"
          :key="item.name"
        >
          <p class="d-block text-left ma-0" style="width: 100%;">{{ item.name }}</p>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item.name"
        >
          <v-card
            color="basil"
            flat
          >
            <v-card-text v-html="item.text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>


<script>
  import ProductZoomer from './ProductZoomer';
  import QuantitySelector from '../QuantitySelector';
  export default {
    components: {
      ProductZoomer,
      QuantitySelector
    },
    props: {
      showInfo: Boolean
    },
    data() {
      return {
        tab: null,
        items: [
          {
            name: 'Նկարագիր',
            text: `<ul class="list">
                    <li>flexible double ring lock system</li>
                    <li>free adjustable length for any wrist size</li>
                    <li>simple durable system (no holes that wear out)</li>
                    <li>comfortable wear with not buckle under wrist</li>
                    <li> optional cuff strap request via comment (last image)</li>
                    <li>logo can be engraved inside</li>
                  </ul>`
          },
          {
            name: 'Առաքում',
            text: `
            <div class="shipping">
              <div class="mb-8">
                <h3 class="mb-4 black-dark--text">Երևան, Հայաստան</h3>
                <ul class="list">
                  <li>Առաքում Երևանի տարածքում 1-3 աշխատանքային օրվա ընթացքում – գինը՝ 500-800 դրամ</li>
                  <li>Առաքում Հայաստանի տարածքում 3-7 աշխատանքային օրվա ընթացքում – գինը 1 200 դրամ</li>
                </ul>
              </div>
              <div class="mb-8">
                <h3 class="mb-4 black-dark--text">Հայաստանի տարածքից դուրս</h3>
                <ul class="list">
                  <li>Ռուսաստան 10-25 աշխատանքային օրվա ընթացքում – մինչև 1կգ՝ 5 000 դրամ, մինչև 2կգ՝ 8 000դրամ</li>
                  <li>ԱՄՆ 14-30 աշխատանքային օրվա ընթացքում – մինչև 1կգ՝ 6 000 դրամ, մինչև 2կգ՝ 10 000դրամ</li>
                  <li>Եվրոպա 14-30 աշխատանքային օրվա ընթացքում – մինչև 1կգ՝ 5 000 դրամ, մինչև 2կգ՝ 8 000 դրամ</li>
                </ul>
              </div>
            </div>`

          }
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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

<style lang="scss">
  .list {
    line-height: 34px;
  }
</style>
