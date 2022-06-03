<template>
  <div class="pa-16">
    <div class="d-flex justify-center pb-8">
      <h1 style="color: #ff0000">Kayıtlı Kartlarınız</h1>
    </div>
    <v-row>
      <v-col lg="4" md="6" sm="12" v-for="i in 3" :key="i">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="@/assets/card.jpg"
          >
            <div class="d-flex justify-center">
              <v-card-title>1435 2356 4567 8546</v-card-title>
            </div>

            <div class="d-flex justify-space-between pr-4 pl-4">
              <p>Oguzhan Memis</p>
              <v-spacer></v-spacer>
              <p>12/</p>
              <p>25</p>
            </div>
          </v-img>

          <v-card-actions class="card-actions">
            <v-card-title class="pa-0"> Ziraat Kartım </v-card-title>
            <v-btn color="#ff0000" text @click="deleteCard"> Kartı Sil </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MyCards",
  methods: {
    deleteCard() {
      console.log("kart silindi");
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
