<template>
  <div style="width: 80px;" class="select-holder">
    <v-select
      color="blue"
      v-model="language"
      :items="languages"
      menu-props="auto"
      hide-details
      label="Select"
      hide-selected
      single-line
    >
      <template slot="item" slot-scope="data">
        <NuxtLink :to="`${data.item==='us' ? '' : '/'+data.item}${$route.fullPath.replace(/^\/[^\/]+/, '')}`" class="Header__Link" active-class="none" exact>
          <country-flag :country='data.item' size='normal'/>
        </NuxtLink>
      </template>
      <template slot="selection" slot-scope="data">
        <NuxtLink :to="`${data.item==='us' ? '' : '/'+data.item}${$route.fullPath.replace(/^\/[^\/]+/, '')}`" class="Header__Link" active-class="none" exact>
          <country-flag :country='data.item' size='normal'/>
        </NuxtLink>
      </template>
    </v-select>
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
export default {
  data () {
    return {
      language: 'am',
      languages: ['am', 'ru', 'us'],
    }
  },
  components: {
    CountryFlag
  }
}
</script>


<style lang="scss">
  .select-holder {
    .v-text-field > .v-input__control > .v-input__slot:before {
      border: none;
    }

    .v-select__slot .v-icon {
      display: none;
    }
    .v-text-field.v-input--is-focused > .v-input__control > .v-input__slot:after{
      content: none;
    }
  }
</style>
