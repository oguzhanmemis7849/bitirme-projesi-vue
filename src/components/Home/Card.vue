<template>
  <div>
    <v-card class="text-center" color="grey lighten-2">
      <v-card-title
      class="cardTitle"
       
        >{{ cardTitle }}</v-card-title
      >
      <v-container>
        <hr />
      </v-container>
      <v-card-text class="cardText">
        {{ cardText }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
    // cardTitle ve cardText'i kullanmak istediğiniz yerde props geçerek bu componenti kullanabilirsiniz.
    props:["cardTitle", "cardText"]
};
</script>

<style>
.cardTitle{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: libel;
  font-size: 30px !important;
}
.cardText{
  font-family: lato;
  font-size: 20px !important;
}
</style>
