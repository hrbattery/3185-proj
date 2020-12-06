<template>
  <v-toolbar max-height="64px">
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <!--v-toolbar-title><router-link to="/">Home Page</router-link></v-toolbar-title-->
    <v-toolbar-title>
      <v-btn icon>
        <router-link to="/">
          <v-icon>mdi-home</v-icon>
        </router-link>
      </v-btn>
    </v-toolbar-title>
    <!-- <v-toolbar-items v-for="name in headerTitles" :key="name">{{name}}</v-toolbar-items> -->
    <v-toolbar-items>
      <v-btn text v-for="name in headerTitles" :key="name"><router-link :to="`p${headerTitles.indexOf(name)+1}`">{{name}}</router-link></v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn icon>
      <router-link to="about">
        <v-icon>mdi-information</v-icon>
      </router-link>
    </v-btn>
    <v-btn icon>
        <v-icon @click="darkModeTrigger">mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      headerTitles: [
        'Introduction',
        'Image Inpainting',
        'Style Transfer',
        'Motion detection'
      ]
    }
  }, 
  methods: {
    darkModeTrigger() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style>

</style>