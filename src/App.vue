<template>
  <v-app>
    <v-app-bar
      style="padding: 0 10% 0 10%"
      v-if="this.$store.state.isAuthenticated"
      app
      color="grey lighten-2"
      height="100px"
    >
      <div class="d-flex align-center">
        <v-img
          style="cursor: pointer"
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="@/assets/Header/moogi-header-logo.png"
          width="250"
          @click="routeHome"
        />
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex justify-center align-center">
        <v-btn x-large text @click="routeHome" class="navbarBtn"
          >Ana Sayfa</v-btn
        >
        <v-btn x-large text @click="routeProducts" class="navbarBtn"
          >Ürünler</v-btn
        >
        <v-btn x-large text @click="routeAbout" class="navbarBtn"
          >Hakkımızda</v-btn
        >
        <user-info class="ml-2 mr-2"></user-info>
        <cart></cart>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="grey lighten-2" padless>
      <v-row justify="center" no-gutters>
        <div
          class="d-flex justify-center align-center"
          style="padding-top: 10px"
        >
          <a
            class="footerIcon"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <v-icon large color="black"> mdi-linkedin</v-icon></a
          >

          <a
            class="footerIcon"
            href="https://www.instagram.com/moogiapp/"
            target="_blank"
          >
            <v-icon large color="black"> mdi-instagram</v-icon></a
          >

          <a class="footerIcon" href="https://www.github.com" target="_blank">
            <v-icon large color="black"> mdi-github</v-icon></a
          >
        </div>
        <v-col class="py-4 text-center" cols="12">
          <!-- <p class="moogi">Moogi</p> -->
          <div>
            <v-img
              class="moogi"
              src="@/assets/Header/moogi-header-logo.png"
              alt="moogi"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Cart from "./components/Products/Cart.vue";
import UserInfo from "./components/userInfo.vue";

export default {
  name: "App",
  components: {
    UserInfo,
    Cart,
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
<style>
@font-face {
  font-family: "libel";
  src: url("./assets/Fonts/libel-suit-rg.otf");
}

footer {
  margin-top: 50px;
}

.moogi {
  width: 150px;
  margin: auto;
}

.footerIcon {
  padding: 10px;
  text-decoration: none;
}


.navbarBtn {
  font-family: libel;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  font-size: 27.5px !important;
}
</style>
