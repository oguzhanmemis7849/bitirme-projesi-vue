<template>
  <v-container>
    <v-row class="pl-4 pt-4" justify="center">
      <div v-if="this.$store.state.filteredProducts.length == 0">
        Aradığınız ürün bulunmamaktadır. Lütfen ürünün adını düzgün yazdığınıza
        emin olunuz!
      </div>
      <v-card
        v-for="product in products"
        :key="product.id"
        class="ma-3 px-0 col-1 d-flex flex-column align-center"
        style="height: 360px; min-width: 190px"
        hover
      >
        <!-- <img
          v-if="discountList.includes(product.name)"
          src="@/assets/Products/indirim.png"
          alt=""
          class="discountIcon"
        /> -->
        <div id="products">
          <img height="190" :src="product.src" class="ml-0" />
        </div>
        <v-card-title>
          <div class="productTitle">
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
        <v-card-actions>
          <v-btn color="error" @click="addCart(product)"> Sepete Ekle!</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-snackbar :timeout="timeout" color="#ff0000" v-model="snackbar"
      ><strong
        >Bu ürünü sepetinize daha önce eklediniz. "Sepetiniz"e giderek ürün
        miktarını değiştirebilirsiniz.</strong
      ></v-snackbar
    >
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
export default {
  props: ["category"],
  data() {
    return {
      products: [],
      discountList: [],
      snackbar: false,
      timeout: 4000,
    };
  },
  computed: {
    ...mapState(["cart", "discountProducts"]),
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      // console.log(doc.data());
      this.products.push(doc.data());
      this.$store.commit("setProducts", doc.data());
      // this.products = doc.data();
      // this.base64ToImage(this.products.src, function (img) {
      //   document.getElementById("products").appendChild(img);
      // });
    });

    //   this.$store.commit("resetProducts", result.data);
    // });
    // this.discountList = this.discountProducts.map((item) => {
    //   return item.name;
    // });
  },
  methods: {
    base64ToImage(base64img, callback) {
      var img = new Image();
      img.onload = function () {
        callback(img);
      };
      img.src = base64img;
    },

    addCart(product, sum) {
      if (
        !this.cart.products
          .map((element) => element.name)
          .includes(product.name)
      ) {
        product.amount = 1;
        sum = product.price * product.amount;
        this.$store.commit("addToCart", product);
        this.$store.commit("addSum", sum);
      } else {
        this.snackbar = true;
      }
    },
  },
};
</script>

<style scoped>
.discountIcon {
  position: absolute;
  top: 0;
  right: 0;
}
.discountPrice {
  position: absolute;
  top: 250px;
  color: red !important;
}
.productTitle {
  font-family: libel;
  font-size: 25px;
}
</style>
