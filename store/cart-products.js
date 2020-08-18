export const state = () => ({
  products: [
    {
      name: 'Leather Wallet',
      productImage: 'https://cdn.shopify.com/s/files/1/2786/9162/products/1_4b63c9fd-e828-4cc9-a07a-93a74941b9f0_100x.png?v=1541962385',
      quantity: 2,
      price: '60'
    },
    {
      name: 'Leather Wallet',
      productImage: 'https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown-1_100x.jpg?v=1539202111',
      quantity: 1,
      price: '90'
    },
    {
      name: 'Leather Wallet',
      productImage: 'https://cdn.shopify.com/s/files/1/2786/9162/products/2_e067f946-14a9-41ca-b693-cd5b5ad15f06_100x.png?v=1541962385',
      quantity: 3,
      price: '60'

    },{
      name: 'Leather Wallet',
      productImage: 'https://cdn.shopify.com/s/files/1/2786/9162/products/BuckBrown_Olive-1_100x.jpg?v=1539200316',
      quantity: 5,
      price: '160'
    }
  ],
  locale: 'en'
});

export const mutations = {
  ADD_TO_CART (state, product) {
    state.products.push(product);
    localStorage.setItem('cart', JSON.stringify(state.products));
  },
  GET_PRODUCTS (state) {
    if(window.localStorage) {
      if(localStorage.getItem('cart')){
        state.products = JSON.parse(localStorage.getItem('cart'))
      } else {
        state.products = [];
      }
    }
  }
};

export const getters = {
  products: state => state.products,
};
