import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    saltKey: "tuzseverim1907",
    user: null,
    isAuthenticated: false,
    discountProducts: [],
    cart: {
      sum: 0,
      products: [],
    },
    Products: [],
  },
  mutations: {
    resetProducts(state, products) {
      state.Products.push(products);
    },
    addProducts(state, val) {
      state.Products = val;
    },
    setProducts(state, products) {
      state.filteredProducts = products;
    },
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    logOutUser(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.cart.products = [];
      state.cart.sum = 0;
    },
    setDiscountProducts(state, val) {
      state.discountProducts = val;
    },
    addToCart(state, val) {
      state.cart.products.push(val);
    },
    addSum(state, val) {
      state.cart.sum += val;
    },
    increaseProduct(state, val) {
      state.cart.products.forEach((element) => {
        if (element.id == val.id) {
          element.amount++;
        }
      });
    },
    decreaseProduct(state, val) {
      state.cart.products.forEach((element, index) => {
        if (element.id == val.id) {
          element.amount--;
          if (element.amount == 0) {
            //- ile 0'lanan ürünü sepetten siliyor ki 0 olarak sepette kalmasın
            state.cart.products.splice(index, 1);
          }
        }
      });
    },
    resetCart(state) {
      state.cart.products = [];
      state.cart.sum = 0;
    },
    setPic(state, val) {
      state.user.profilePicture = val;
    },
    addCard(state, val) {
      state.user.creditCard.push(val);
    },
    deleteCard(state, index) {
      state.user.creditCard.splice(index, 1);
    },
  },
  getters: {
    getCart(state) {
      return state.cart.products;
    },
    _saltKey: (state) => state.saltKey,
    getCardInfo(state) {
      return state.user.creditCard;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});

export default store;
