<template>
  <div>
    <v-card class="text-center" color="grey lighten-2">
      <v-card-title
        style="display: flex; justify-content: center; align-items: center"
        >{{ cardTitle }}</v-card-title
      >
      <hr />
      <v-card-text>
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

<style></style>
