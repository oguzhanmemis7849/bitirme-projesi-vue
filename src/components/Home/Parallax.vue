<template>
  <!-- <v-parallax
    dark
    src="@/assets/Home/parallax-background.png"
    height="1250"
  > -->
    <v-container>
      <v-row class="d-flex" align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="textBackground">Siparişlerinizi bu marketlerden verebilirsiniz...</h1>
        </v-col> 
        <v-col md="3" sm="6" xsm="6">
            <v-img src="@/assets/Home/a101-image.png"  ></v-img>
        </v-col>
        <v-col md="3" sm="6" xsm="6">
            <v-img src="@/assets/Home/bim-image.png"  ></v-img>
        </v-col>
        <v-col md="3" sm="6" xsm="6"> 
            <v-img src="@/assets/Home/sok-image.png"  ></v-img>
        </v-col>
        <v-col md="3" sm="6" xsm="6">
            <v-img src="@/assets/Home/migros-image.png"  ></v-img>
        </v-col>
      </v-row>
    </v-container>
  <!-- </v-parallax> -->
</template>

<script>
export default {
  methods:{
  }
};
</script>

<style scoped>
.textBackground{
    color: black;
    background-color: #ededed;
    border-radius: 20px;
}
</style>


