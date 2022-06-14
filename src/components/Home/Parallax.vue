<template>
  <v-container>
    <v-row class="d-flex" align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="textBackground">
          Siparişlerinizi bu marketlerden verebilirsiniz...
        </h1>
      </v-col>
      <v-col md="3" sm="6" xsm="6">
        <a href="https://www.a101.com.tr/" target="_blank"
          ><v-img src="@/assets/Home/a101-image.png"></v-img
        ></a>
      </v-col>
      <v-col md="3" sm="6" xsm="6">
        <a href="https://www.bim.com.tr/" target="_blank"
          ><v-img src="@/assets/Home/bim-image.png"></v-img
        ></a>
      </v-col>
      <v-col md="3" sm="6" xsm="6">
        <a href="https://www.sokmarket.com.tr/" target="_blank"
          ><v-img src="@/assets/Home/sok-image.png"></v-img
        ></a>
      </v-col>
      <v-col md="3" sm="6" xsm="6">
        <a href="https://www.migros.com.tr/" target="_blank"
          ><v-img src="@/assets/Home/migros-image.png"></v-img
        ></a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
h1 {
  font-family: libel;
  font-size: 45px;
  font-weight: 500;
}
.textBackground {
  color: black;
  background-color: #ededed;
  border-radius: 20px;
}
</style>
