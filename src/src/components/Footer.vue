<template>
  <v-footer padless>
    <v-card 
      flat
      tile
      dark
      class="cyan darken-2 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <p>Powered by</p>
        <v-btn 
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          :href="iconLink[icon]"
        >
          <v-icon size="24px" >{{icon}}</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        'mdi-vuetify',
        'mdi-material-design',
        'mdi-book-multiple',
        'mdi-github',
      ],
      iconLink: {
        'mdi-vuetify': "https://vuetifyjs.com/",
        'mdi-github': "https://github.com/hrbattery/3185-proj",
        'mdi-material-design': "https://material.io/",
        'mdi-book-multiple': "http://www4.comp.polyu.edu.hk/~csdzhang/CSC3185/index.html"
      }
    }
  },
}
</script>

<style>

</style>