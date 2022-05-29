<template>
  <div>
    <v-container>
      <div class="bg-header">
        {{ cardTitle }}
      </div>
      <br />
      <div class="bg-about">
        <p>{{ cardText }}</p>
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
                  <v-row>
                      <v-col cols="12">
                          Burak Bilikci
                          <v-spacer></v-spacer>
                          <a href="https://www.linkedin.com/in/burak-bilikci/"><v-icon>mdi-linkedin</v-icon></a>
                          <a href="https://github.com/burakbilikci"><v-icon>mdi-github</v-icon></a>
                          <a href="https://www.instagram.com/burakbilikci/"><v-icon>mdi-instagram</v-icon></a>
                      </v-col>
                  </v-row>
              </v-card-text>
          </v-col>
          <v-col cols="4">
              <v-card-text>
                  <v-row>
                      <v-col cols="12">
                          Burak Köroğlu
                          <v-spacer></v-spacer>
                          <a href="https://www.linkedin.com/in/burak-k%C3%B6ro%C4%9Flu-818984207/"><v-icon>mdi-linkedin</v-icon></a>
                          <a href="https://github.com/korooglu"><v-icon>mdi-github</v-icon></a>
                          <a href="https://www.instagram.com/kor.ooglu/"><v-icon>mdi-instagram</v-icon></a>
                      </v-col>
                  </v-row>
              </v-card-text>
          </v-col>
          <v-col cols="4">
              <v-card-text>
                  <v-row>
                      <v-col cols="12">
                          Oğuzhan Memiş
                          <v-spacer></v-spacer>
                          <a href="https://www.linkedin.com/in/o%C4%9Fuzhan-memi%C5%9F-3853b71b0/"><v-icon>mdi-linkedin</v-icon></a>
                          <a href="https://github.com/oguzhanmemis7849  "><v-icon>mdi-github</v-icon></a>
                          <a href="https://www.instagram.com/_oguzhanmemis/"><v-icon>mdi-instagram</v-icon></a>
                      </v-col>
                  </v-row>
              </v-card-text>
          </v-col>
          <v-col cols="6">
              <v-card-text>
                  <v-row>
                      <v-col cols="12">
                          Tolga Kuruçay
                          <v-spacer></v-spacer>
                          <a href="https://www.linkedin.com/in/tolga-kuru%C3%A7ay-803b22208/"><v-icon>mdi-linkedin</v-icon></a>
                          <a href="https://github.com/tolgakurucay"><v-icon>mdi-github</v-icon></a>
                          <a href="https://www.instagram.com/tolgakurucay/"><v-icon>mdi-instagram</v-icon></a>
                      </v-col>
                  </v-row>
              </v-card-text>
          </v-col>
          <v-col cols="6">
              <v-card-text>
                  <v-row>
                      <v-col cols="12">
                          Umut Teker
                          <v-spacer></v-spacer>
                          <a href="https://www.linkedin.com/in/umut-teker-104648216/"><v-icon>mdi-linkedin</v-icon></a>
                          <a href="https://github.com/UmutTeker59"><v-icon>mdi-github</v-icon></a>
                          <a href="https://www.instagram.com/umutteker1/"><v-icon>mdi-instagram</v-icon></a>
                      </v-col>
                  </v-row>
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
a{
    text-decoration: none;
}
</style>
