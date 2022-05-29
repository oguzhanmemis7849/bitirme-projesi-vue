<template>
  <div>
    <v-container>
      <div class="bg-header">
        {{ cardTitle }}
      </div>
      <br />
      <div class="bg-about">
        <h4>{{ cardText }}</h4>
      </div>
      <br />
      <v-card>
          <v-img
          height="472px"
          width="1920px"
          src="@/assets/About/şirket-yönetimi-isimler-background.png"
        >
        <v-container>
        <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6" >
          <v-card-title>Hazırlayanlar</v-card-title>
          </v-col>
          <v-col cols="3"></v-col>
          <v-col cols="4">
              <v-card-text>
                  Burak Bilikci
              </v-card-text>
          </v-col>
          <v-col cols="4">
              <v-card-text>
                  Burak Köroğlu
              </v-card-text>
          </v-col>
          <v-col cols="4">
              <v-card-text>
                  Oğuzhan Memiş
              </v-card-text>
          </v-col>
          <v-col cols="6">
              <v-card-text>
                  Tolga Kuruçay
              </v-card-text>
          </v-col>
          <v-col cols="6">
              <v-card-text>
                  Umut Teker
              </v-card-text>
          </v-col>
        </v-row>
        </v-container>
        </v-img>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardTitle: "Hakkımızda",
      cardText:
        "Projemiz bir sanal market olmanın ilerisinde...Özellikle öğrencilere bir gelir kapısı olmak üzere geliştirilmiş olan Moogi Projesi, bisikletli kuryelerin evlere siparişleri teslim etmesi ile müşterilerimizin hizmetine sunuluyor. Bisikletlerimizi sokaklarda konumlandırıyoruz ve kurye olmak isteyen herkes için kullanıma sunuyoruz. İlk olarak kurye adaylarımız web sitemiz üzerinden kendi profillerini oluşturmalı ve hizmet politakımızı onaylamalılar. Ardından gelen siparişlerin takibine başlayabilirler. Web sitemizden gelen siparişleri marketlerden tamamlayıp müşterilerimize teslim eden kuryeler belirlenen tarifemiz üzerinden ücretlerini alacaktır. Hem doğa dostu hem de herkesin kolaylıkla para kazanabileceği Moogi sizlerle...",
    };
  },
};
</script>

<style scoped>
.bg-header {
  width: 100%;
  background-color: #ff0000;
  border-radius: 20px;
  color: white;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  padding: 10px;
}
.bg-about {
  text-align: center;
  background-color: #ededed;
  color: black;
  border-radius: 20px;
  font-size: 20px;
  padding: 40px;
  box-shadow: 5px 5px #adadad;
}
.v-card__text {
    margin-top: 50px;
    background-color: #ededed ;
    box-shadow: 5px 5px #adadad;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
}
.v-card__title {
    margin-top: 75px;
    justify-content: center;
    font-size: 25px;
    font-weight: 700;
    background-color: #ededed;
    border-radius: 40px;
    background-size: 100%;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none !important;
}
</style>
