export const state = () => ({
  products: [],
  locale: 'en'
});

export const mutations = {
  ADD_TO_CART (state, product) {
    state.products.push(product);
  }
};

export const getters = {
  products: state => state.products,
};
