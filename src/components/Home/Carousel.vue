<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
          {
            src: require('@/assets/Home/slider-1.png'),
          },
          {
            src: require('@/assets/Home/slider-2.png'),
          },
        ],
    };
  },
};
</script>

<style></style>
