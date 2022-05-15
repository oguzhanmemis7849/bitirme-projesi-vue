<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="9">
          <carousel :src1="src1" :src2="src2" />
        </v-col>
        <v-col cols="3">
          <card :cardTitle="cardTitle" :cardText="cardText"/>
        </v-col>
        <v-col cols="12">
          <parallax/>
        </v-col>
        <v-col cols="12" class="discountProducts">
          <h1>İndirimli Ürünler</h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from '../components/Home/Card.vue';
import Carousel from "../components/Home/Carousel.vue";
import Parallax from '../components/Home/Parallax.vue';

export default {
  name: "Home",
  components: {
    Carousel,
    Card,
    Parallax,
  },
  data()
     {
    return {
      src1: require("@/assets/Home/slider-1.png"),
      src2: require("@/assets/Home/slider-2.png"),
      cardTitle: "Önemli",
      cardText:
        "Moogi, öğrencilerin bisikletli kurye olarak para kazandığı; kullanıcılarımızın da evlerine market alışverişlerini yaptığımız bir kuruluştur. Siparişleriniz seçtiğiniz en yakın marketlerden, bisikletli kuryelerimiz tarafından temin edilerek kapınıza temazsız bir şekilde bırakılır.",
    };
  },
  methods: {},
};
</script>

<style scoped>
.discountProducts{
  text-align: center;
  background-color: #ff0000;
  border-radius: 25px;
  color: white;
}
</style>
