<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="9">
          <carousel :src1="src1" :src2="src2" />
        </v-col>
        <v-col cols="3">
          <card :cardTitle="cardTitle" :cardText="cardText" />
        </v-col>
        <v-col cols="12">
          <parallax />
        </v-col>
        <v-col cols="12" class="discountProducts">
          <h1>İndirimli Ürünler</h1>
        </v-col>
        <v-col cols="12" class="d-flex justify-space-around">
           <v-card
            v-for="product in discountProducts"
            :key="product"
            class="ma-3 px-0 col-1 d-flex flex-column align-center"
            style="height: 330px"
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

            <v-card-text class="text-center text-decoration-line-through pa-0" style="color:red"
              ><strong>{{ product.price + product.name.length }} TL</strong></v-card-text
            >
            <v-card-text class="text-center pa-0"><strong>{{ product.price }} TL</strong></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from "../components/Home/Card.vue";
import Carousel from "../components/Home/Carousel.vue";
import Parallax from "../components/Home/Parallax.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Card,
    Parallax,
  },
  data() {
    return {
      mapProducts: [],
      discountProducts: [],
      src1: require("@/assets/Home/slider-1.png"),
      src2: require("@/assets/Home/slider-2.png"),
      cardTitle: "Önemli",
      cardText:
        "Moogi, öğrencilerin bisikletli kurye olarak para kazandığı; kullanıcılarımızın da evlerine market alışverişlerini yaptığımız bir kuruluştur. Siparişleriniz seçtiğiniz en yakın marketlerden, bisikletli kuryelerimiz tarafından temin edilerek kapınıza temazsız bir şekilde bırakılır.",
    };
  },
  mounted(){
    this.mapProducts = this.$store.state.Products.map(item => {
      return{
        name: item.name,
        price: item.price,
        src: item.src,
      }
    })
    this.discountProducts = [this.mapProducts[12], this.mapProducts[20], this.mapProducts[2], this.mapProducts[4], this.mapProducts[14]]
    this.$store.commit("setDiscountProducts",this.discountProducts)

  },
};
</script>

<style scoped>
h1{
  font-family: libel;
  font-weight: 500;
  font-size: 45px;
}
.discountProducts {
  text-align: center;
  background-color: #ff0000;
  border-radius: 25px;
  color: white;
}
</style>
