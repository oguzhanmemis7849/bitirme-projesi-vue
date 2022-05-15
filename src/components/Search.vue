<template>
  <v-form
    style="margin-top:25px; display:flex; justify-content:center; align-items;center"
  >
    <v-text-field
      dense
      outlined
      style="margin-right:5px"
      v-model="searchProducts"
      label="Ürün Arayın"
    ></v-text-field>
    <v-btn color="error" @click="search"> Ara </v-btn>
  </v-form>
</template>

<script>
export default {
    data(){
        return{
            searchProducts: ""
        }
    },

    methods:{
        search(){
            console.log(this.searchProducts);
        }
    }
};
</script>

<style></style>
