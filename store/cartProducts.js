import {getData} from "../helpers/firebaseCRUD";

const getProductsFromLocalStorage = () => {
  if(process.browser){
    return localStorage.getItem('products') ? JSON.parse(window.localStorage.getItem('products')) : [];
  }
  return []
}

const saveProductsToLocalStorage = (products) => {
  if(window.localStorage) {
    window.localStorage.setItem('products', JSON.stringify(products));
  }
}

const formProductsToSaveInStorage = products => {
  return products.map(item => ({
    id: item.id,
    count: item.count
  }))
}


export const state = () => ({
  products: getProductsFromLocalStorage(),
  locale: 'en'
});

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  REMOVE_PRODUCT(state, productId){
    state.products = [...state.products.filter(item => item.id !== productId)];
    let products = formProductsToSaveInStorage(state.products);
    saveProductsToLocalStorage(products);
  },
  ADD_TO_CART (state, {product, count}) {
    const existingProduct= state.products.find(item => item.id === product.id);
    if(!existingProduct){
      state.products.push({
        ...product,
        count
      })
    } else {
      state.products.map(item => {
        if(item.id === existingProduct.id){
          item.count+=count;
        }
        return item;
      })
    }

    let productsToSave = formProductsToSaveInStorage(state.products);
    saveProductsToLocalStorage(productsToSave);

  }
};

export const actions = {
  async getProductsForCart({commit}){
    const prods = getProductsFromLocalStorage();
    if(!prods.length) {
      return
    }
    const snapshot = await getData('products', {
      field: 'id',
      condition: 'in',
      value: prods.map(item => item.id)
    })
    const cartProducts = [];
    snapshot.docs.map(item => {
      const data = item.data();
      data.count = prods.find(item => item.id === data.id).count;
      cartProducts.push(data);
    });
    console.log(cartProducts);
    commit('SET_PRODUCTS',[...cartProducts]);
  }
}

export const getters = {
  products: state => state.products,
  productsCount: state => state.products.reduce((accumulator, item) => (accumulator + item.count), 0),
  productsSummary: state => state.products.reduce((acc, item) => (acc + Number(item.count * item.price.amd)), 0)
};
