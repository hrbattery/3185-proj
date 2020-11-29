<template>
  <v-app id="inspire">
    <Header/>
    
    <v-main>
      <v-container>
      <div class="text-start">
      <h1>Titile for our Page 1</h1>
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
      <iframe src="https://www.baidu.com/s?ie=UTF-8&wd=iframe%20%E5%85%B6%E5%AE%83%E7%BD%91%E7%AB%99" frameBorder=0 marginwidth=0 marginheight=0 height=1000 width=1000 ALLOWTRANSPARENCY="true"/>
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