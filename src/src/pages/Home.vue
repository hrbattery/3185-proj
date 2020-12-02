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

    <v-main id='main'>
      <h1>Title for our Project</h1>
      <v-container align-center style="width:40%;">
        <v-row>
          <v-col
            v-for="n in 4"
            :key="n"
            cols="6"
            ref="cards"
          >
            <router-link :to="`p${n}`">
            
              <v-card :hover="true">
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
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        headerTitles: [
          'Introduction',
          'Image Restoration',
          'Style Transfer',
          'Motion Detection'
        ]
      }
    }, 
    methods: {
      darkModeTrigger() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      },
      getImage(n) {
        return '../assets/images/'+n+'.jpg'
      }
    },
    mounted () {
      console.log(this.$refs.cards['1'])
      this.$refs.cards["1"].text = "Topic 1";
    }
  }
</script>

<style>
#main {
  margin-top:2%
}
</style>