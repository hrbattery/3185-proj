<template>
  <v-app id="inspire">
    <Header/>

    <v-main>
      <v-container>
      <div class="text-start">
      <h1>About</h1>
        <p></p>
        <p>This is a web page for the project of CSC3185, in order to introduce computer vision.</p>
        <p>The web page is built with Vuetify and Nginx. All the designs of pages are supported by Vuetify, and the application is deployed on the server by Webpack and Nginx.</p>
        <p>The repository of the project is private. <a href="https://github.com/hrbattery/3185-proj"></a></p>
        <p>Thanks for reading.</p>
      </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    data() {
      return {
        headerTitles: [
          'Page1',
          'Page2',
          'Page3',
          'Page4'
        ]
      }
    },
    methods: {
      test() {
        // this.$refs.cards["1"].text = "Topic 1";
      }
    },
    components: {
      Header,
    },
    mounted () {
      // console.log(this.$refs.cards['1'])
      // this.$refs.cards["1"].text = "Topic 1";
    }
  }
</script>