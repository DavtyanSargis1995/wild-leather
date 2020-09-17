import {getData} from "../helpers/firebaseCRUD";

export const  state = () => ({
  product: null
})

export const mutations = {
  SET_PRODUCT(state, product){
    state.product = product
  }
}

export const actions = {
  async getProductInfo({commit}, productId){
    const response = await getData('products', {
      field: 'id',
      condition: '==',
      value: productId
    })
    if(response.docs[0] && response.docs[0].data()) {
      commit('SET_PRODUCT', response.docs[0].data())
    }
  }
}

export const getters = {
  productInfo: state => state.product
}
