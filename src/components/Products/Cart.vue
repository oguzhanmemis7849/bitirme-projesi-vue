<template>
  <div class="text-center" >
    <v-menu offset-y :close-on-content-click="closeOnContentClick">
      <template #activator="{ on: onMenu }">
        <v-tooltip bottom color="#ff0000">
          <template #activator="{ on: onTooltip }">
            <v-btn v-on="{ ...onMenu, ...onTooltip }" text large>
              <v-icon color="red" large>mdi-cart-variant </v-icon>
              <div class="cartLength" v-if="cart.products.length != 0">
                {{ cart.products.length }}
              </div>
            </v-btn>
          </template>
          <span>Sepetiniz</span>
        </v-tooltip>
      </template>
      <v-list class="list">
        <v-list-item
          v-for="product in getCart"
          :key="product"
          class="d-flex products mb-2 justify-space-between"
        >
          <img
            height="50"
            :src="require('@/assets/Products/' + product.src)"
            :alt="product.name"
          />
          <v-spacer></v-spacer>
          <div>
            <div class="text-center">
              <strong>{{ product.name }}</strong>
            </div>

            <div class="text-center">
              <strong>{{ product.price * product.amount }} TL</strong>
            </div>
          </div>
          <v-spacer></v-spacer>
          <div class="d-flex">
            <v-btn x-small @click="increaseProduct(product)"><v-icon small>mdi-plus-thick</v-icon></v-btn>
            <div class="mx-1"><strong>{{ product.amount }}</strong></div>
            <v-btn x-small @click="decreaseProduct(product)"><v-icon v-if="product.amount != 1" small>mdi-minus-thick</v-icon> <v-icon v-else small>mdi-delete</v-icon></v-btn>
          </div>
        </v-list-item>
		<v-list-item class="totalPrice" v-if="cart.products.length != 0"
          ><strong>Toplam : {{ cart.sum }} TL</strong></v-list-item
        >
		<v-list-item v-if="cart.products.length != 0" @click="goToPayment" class="d-flex justify-center"><v-btn @click="goToPayment" color="#ff0000" class="white--text">Hemen Öde</v-btn></v-list-item>
		<v-list-item v-if="cart.products.length != 0" @click="goToShoppingCart" class="d-flex justify-center"><v-btn @click="goToShoppingCart" color="#ff0000" class="white--text">Sepete Git</v-btn></v-list-item>
        
        <v-list-item class="d-flex justify-center" v-if="cart.products.length != 0" @click="resetCart">
			<v-tooltip bottom color="#ff0000" >
				<template v-slot:activator="{ on, attrs }">
					<v-icon v-bind="attrs" v-on="on" color="#ff0000">mdi-delete</v-icon>
				</template>
				<span>Sepeti Boşalt</span>
			</v-tooltip>
          </v-list-item
        >
        <v-list-item v-else><strong>Sepetiniz boş</strong></v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      closeOnContentClick: true,
    };
  },
  methods: {
    resetCart() {
      this.$store.commit("resetCart");
      this.closeOnContentClick = true;
    },
    increaseProduct(product) {
      this.closeOnContentClick = false;
      this.cart.sum += product.price;
      this.$store.commit("increaseProduct", product);
    },
    decreaseProduct(product) {
      this.closeOnContentClick = false;
      this.cart.sum -= product.price;
      this.$store.commit("decreaseProduct", product);
    },
	goToPayment(){
		this.$router.push("/payment")
	},
	goToShoppingCart(){
		this.$router.push("/shoppingCart")
	}
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters({ getCart: "getCart" }),
  },
};
</script>

<style>
.cartLength {
  font-size: 19px;
  position: absolute;
  top: 0;
  right: 0;
}
.totalPrice{
	display: flex;
	justify-content: center;
	align-items: center;
	border: 3px solid red;
	border-radius: 10px;
	margin-right: 25px;
	margin-left: 25px;
}
.products{
	border-bottom: 3px solid red;
}
.list{
  max-height: 500px;
  overflow: auto;
}
</style>
