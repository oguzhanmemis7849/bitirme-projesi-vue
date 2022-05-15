<template>
  <v-app>
    <v-app-bar app color="grey lighten-2">
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/Header/moogi-header-logo.png"
          transition="scale-transition"
          width="40"
        /> -->

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="@/assets/Header/moogi-header-logo.png"
          width="175"
          @click="routeHome"
        />
      </div>
      <v-spacer></v-spacer>

      <v-btn text @click="routeHome">Ana Sayfa</v-btn>
      <v-btn text @click="routeProducts">Ürünler</v-btn>
      <v-btn text @click="routeAbout">Hakkımızda</v-btn>

      <v-spacer></v-spacer>

      <search />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Search from "./components/Search.vue";
export default {
  name: "App",
  components: {
    Search,
  },
  data: () => ({
    items: [
      ["mdi-email", "Inbox"],
      ["mdi-account-supervisor-circle", "Supervisors"],
      ["mdi-clock-start", "Clock-in"],
    ],
  }),
  methods: {
    routeHome() {
      this.$router.push("/");
    },
    routeProducts() {
      this.$router.push("/products");
    },
    routeAbout() {
      this.$router.push("/about");
    },
  },
};
</script>
