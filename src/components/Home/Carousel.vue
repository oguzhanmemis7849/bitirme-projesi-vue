<template>
  <v-carousel hide-delimiters cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  // views/home içindeki src1 ve src2'ler buraya props olarak aktarılıyor. Bu component başka bir sayfada 
  // daha kullanılmak istenirse aynı şekilde o sayfada da src1 ve src2 olarak kullanabiliriz.
  props:["src1","src2"], 
  data() {
    return {
      items: [
          {
            src: this.src1,
          },
          {
            src: this.src2,
          },
        ],
    };
  },
  created(){
    console.log(this.src1)
  }
};
</script>

<style></style>
