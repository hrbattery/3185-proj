<template>
  <v-app id="inspire">
    <v-app-bar
      app
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>
        <v-btn icon>
          <router-link to="/">
            <v-icon>mdi-home</v-icon>
          </router-link>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <router-link to="about">
          <v-icon>mdi-information</v-icon>
        </router-link>
      </v-btn>
      <v-btn icon>
        <v-icon @click="darkModeTrigger">mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <transition name="fade">
      <div v-if="displayBackground" :style="backgroundStyle" id="background"></div>
    </transition>
    <v-main id='main'>
      <h1>Introduction to Computer Vision</h1>
      <v-container align-center style="width:40%;">
        <v-row>
          <v-col
            v-for="n in 4"
            :key="n"
            cols="6"
            ref="cards"
          >
            <router-link :to="`p${n}`">
            
              <v-card :hover="true" @mouseover="mouseover(n)" @mouseleave="mouseleave(n)"> 
                <v-card-text>
                  {{headerTitles[n-1]}}
                </v-card-text>
                <v-img
                :src="imageURL[n-1]"
                :aspect-ratio="16/9"
                alt=""
                ref="img"
                ></v-img>
              </v-card>
            
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
  import Footer from '@/components/Footer'
  export default {
    data() {
      return {
        headerTitles: [
          'Introduction',
          'Image Inpainting',
          'Style Transfer',
          'Motion Detection'
        ],
        imageURL: [
          require("../assets/images/Introduction.jpg"),
          require("../assets/images/Image Inpainting.jpg"),
          require("../assets/images/Style Transfer.jpg"),
          require("../assets/images/Motion Detection.jpg")
        ],
        displayBackground: false,
        backgroundStyle: {
          backgroundImage:""
        },
        test:{},
      }
    }, 
    methods: {
      darkModeTrigger() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      },
      mouseover(n) {
        this.$data.backgroundStyle.backgroundImage = 'url('+encodeURI(require(`../assets/images/${this.$data.headerTitles[n-1]}.jpg`))+')'
        this.$data.displayBackground = true
        if (n != 1) {
          this.$data.imageURL[n-1] = require("../assets/images/"+this.$data.headerTitles[n-1]+".gif");
        }
      },
      mouseleave(n) {
        this.$data.displayBackground = false
        if (n != 1) {
          this.$data.imageURL[n-1] = require("../assets/images/"+this.$data.headerTitles[n-1]+".jpg");
        }
      }
    },
    components: {
      Footer,
    },
    mounted () {
      // console.log(this.$refs.cards['1'])
      // this.$refs.cards["1"].text = "Topic 1";
    }
  }
</script>

<style>
#main {
  margin-top: 2%;
  margin-bottom: 5%
}
#background {
  position: absolute;
  height: 100%;
  width: 100%;
  filter: blur(4px) brightness(50%);
  z-index:0;
  background-repeat: no-repeat;
  background-size: cover;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>