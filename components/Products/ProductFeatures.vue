<template>
  <div>
    <v-tabs
      v-model="tab"
      background-color="white"
      color="dark"
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat tile>
          <v-card-text class="pa-0">
            <v-list>
            <v-list-item-group color="primary">
              <v-list-item
                class="pa-0"
                v-for="(item, key) in features"
                :key="key"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <b>{{$t('productFeatures.'+key)}}:</b> {{item}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat tile>
          <v-card-text class="pa-0">

          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>


<script>
  export default {
    name: 'ProductFeatures',
    props: {
      features: Object
    },
    data () {
      return {
        tab: null,
        items: [
          { tab: 'Նկարագիր' },
          { tab: 'Առաքում' }
        ],
      }
    },
  }
</script>
