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
            
              <v-card :hover="true" @mouseover="mouseover(n)" @mouseleave="mouseleave()"> 
                <v-card-text>
                  {{headerTitles[n-1]}}
                </v-card-text>
                <v-img
                :src="require(`../assets/images/${headerTitles[n-1]}.jpg`)"
                :aspect-ratio="16/9"
                alt=""
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
          'Image Restoration',
          'Style Transfer',
          'Motion Detection'
        ],
        displayBackground: false,
        backgroundStyle: {
          backgroundImage:""
        },
      }
    }, 
    methods: {
      darkModeTrigger() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      },
      mouseover(n) {
        this.$data.backgroundStyle.backgroundImage = 'url('+encodeURI(require(`../assets/images/${this.$data.headerTitles[n-1]}.jpg`))+')'
        this.$data.displayBackground = true
      },
      mouseleave() {
        this.$data.displayBackground = false
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