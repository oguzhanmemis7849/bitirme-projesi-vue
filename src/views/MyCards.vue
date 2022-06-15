<template>
  <div class="pa-16">
    <div class="d-flex justify-center pb-8">
      <h1 style="color: #ff0000">Kayıtlı Kartlarınız</h1>
    </div>
    <v-row>
      <!-- kaç tane kart varsa döndüreceğiz -->
      <v-col lg="4" md="6" sm="12" v-for="(item, index) in getCardInfo.length" :key="index"> 
        <!-- <v-col lg="4" md="6" sm="12"> -->
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="@/assets/card.jpg"
          >
            <div class="d-flex justify-center">
              <v-card-title>{{ getCardInfo[index].cardNumber }}</v-card-title>
            </div>

            <div class="d-flex justify-space-between pr-4 pl-4">
              <p>{{ getCardInfo[index].cardName }}</p>
              <v-spacer></v-spacer>
              <p>{{ getCardInfo[index].cardMonth }}/</p>
              <p>{{ getCardInfo[index].cardYear }}</p>
            </div>
          </v-img>

          <v-card-actions class="card-actions">
            <v-card-title class="pa-0">{{ getCardInfo[index].nameOfTheCard }}</v-card-title>
            <v-btn color="#ff0000" text @click="deleteCard(index)"> Kartı Sil </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MyCards",
  computed: {
    ...mapGetters(["getCardInfo"]),
  },
  methods: {
    deleteCard(index) {
      this.$store.commit("deleteCard", index)
    },
  },
};
</script>

<style scoped>
.card-actions {
  background-color: rgb(204, 204, 204);
  display: flex;
  justify-content: space-between;
}
</style>
