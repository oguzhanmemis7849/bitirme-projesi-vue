<template>
  <div class="d-flex flex-column align-center" style="padding: 0 10% 0 10%">
    <div>
      <div class="d-flex flex-column align-center">
        <search class="search" v-if="$route.path == '/products'" />
        <category-bar></category-bar>
      </div>

      <product
        class="border col-12"
        :category="category"
        @cartList="transport($event)"
      ></product>
    </div>
  </div>
</template>

<script>
import Product from "../components/Products/Product.vue";
import CategoryBar from "../components/Products/categoryBar.vue";
import Search from "../components/Products/Search.vue";
export default {
  data() {
    return {};
  },
  components: {
    Product,
    CategoryBar,
    Search,
  },
  methods: {},
};
</script>

<style scoped>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
.search {
  max-width: 600px;
}

.border {
  margin-top: -5px;
  border: 5px solid #ff0000;
  border-radius: 20px;
}
</style>
