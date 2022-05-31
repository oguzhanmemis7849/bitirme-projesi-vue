<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-card
          v-for="product in this.$store.state.cart.products"
          :key="product"
          class="ma-3 px-0 col-1 d-flex flex-column align-center"
          style="height: 300px"
          hover
        >
          <img
            height="190"
            :src="require('@/assets/Products/' + product.src)"
            :alt="product.name"
            class="ml-0"
          />
          <v-card-title>
            <div style="font-size: 19px">
              {{ product.name }}
            </div>
          </v-card-title>
          <v-card-text
            v-if="discountList.includes(product.name)"
            class="text-center text-decoration-line-through discountPrice"
            ><strong
              >{{ product.price + product.name.length }} TL</strong
            ></v-card-text
          >
          <v-card-text class="text-center pa-0"
            ><strong>{{ product.price }} TL</strong></v-card-text
          >
        </v-card>
      </v-row>
      <div class="d-flex justify-center mt-4">
        <v-btn color="#ff0000" @click="goToPayment" class="white--text"
          >Ödemeye Geç</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discountList: [],
    };
  },
  updated(){
    if(this.$store.state.cart.products.length == 0){
      this.$router.push("/products")
    }
  },
  mounted() {
    this.discountList = this.$store.state.discountProducts.map((item) => {
      return item.name;
    });
  },
  methods: {
    goToPayment() {
      this.$router.push("/payment");
    },
  },
};
</script>

<style scoped>
.discountPrice {
  position: absolute;
  top: 250px;
  color: red !important;
}
</style>
