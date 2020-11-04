<template>
  <v-app id="inspire">
    <v-toolbar max-height="64px">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title><router-link to="/">Home Page</router-link></v-toolbar-title>
      <!-- <v-toolbar-items v-for="name in headerTitles" :key="name">{{name}}</v-toolbar-items> -->
      <v-toolbar-items>
        <v-btn text v-for="name in headerTitles" :key="name"><router-link :to="`p${headerTitles.indexOf(name)+1}`">{{name}}</router-link></v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn icon>
        <router-link to="home">
          <v-icon>mdi-information</v-icon>
        </router-link>
      </v-btn>
    </v-toolbar>

    <v-main>
      <v-container>
      <div class="text-start">
      <h1>Titile for our Page 4</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
      </p>
      </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
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
    mounted () {
      // console.log(this.$refs.cards['1'])
      // this.$refs.cards["1"].text = "Topic 1";
    }
  }
</script>