<template>
<div>
  <v-container>
    <v-row>
      <v-col cols="9">
        <carousel />
      </v-col>
      <v-col cols="3">
        <v-card class="text-center" color="grey lighten-2">
          <v-card-title style="display:flex; justify-content:center; align-items:center">Önemli</v-card-title>
          <hr>
          <v-card-text>
            Moogi, öğrencilerin bisikletli kurye olarak para kazandığı; kullanıcılarımızın da evlerine market alışverişlerini yaptığımız bir kuruluştur. Siparişleriniz seçtiğiniz en yakın marketlerden, bisikletli kuryelerimiz tarafından temin edilerek kapınıza temazsız bir şekilde bırakılır.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import Carousel from "../components/Home/Carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel,
  },
  data(){
    return{
    }
  },
  methods:{

  }
};
</script>
