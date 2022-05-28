<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text x-large>
          <v-icon>mdi-account</v-icon> Hesabım
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <strong>{{ this.userName }}</strong>
        </v-list-item>
        <v-list-item @click="myProfile">Profilim</v-list-item>
        <v-list-item @click="logOut">
          <v-icon>mdi-logout</v-icon> Çıkış Yap
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  data() {
    return {
      userName:
        this.$store.state.user.firstName.charAt(0).toUpperCase() +
        this.$store.state.user.firstName.slice(1) +
        " " +
        this.$store.state.user.lastName.charAt(0).toUpperCase() +
        this.$store.state.user.lastName.slice(1),
    };
  },
  methods: {
    logOut() {
      this.$store.commit("logOutUser");
      this.$router.push("/login");
    },
    myProfile() {
        this.$router.push("/myProfile")
    }
  },
};
</script>

<style></style>
