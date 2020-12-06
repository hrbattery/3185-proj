<template>
  <v-app id="inspire">
    <Header/>

    <v-main>
      <v-container>
      <div class="text-start">
      <h1>Titile for our About</h1>
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