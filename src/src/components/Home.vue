<template>
  <v-app id="inspire">
    <v-app-bar
      app
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Home Page</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <router-link to="home">
          <v-icon>mdi-information</v-icon>
        </router-link>
      </v-btn>
    </v-app-bar>

    <v-main>
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
              <v-card height="200" hover=True>
                <v-card-text>
                  Topic{{n}}
                </v-card-text>
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
    methods: {
      test() {
        this.$refs.cards["1"].text = "Topic 1";
      }
    },
    mounted () {
      console.log(this.$refs.cards['1'])
      this.$refs.cards["1"].text = "Topic 1";
    }
  }
</script>