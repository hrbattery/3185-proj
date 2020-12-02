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
      <!--iframe src="https://xbeibeix.com/api/bilibili/biliplayer/?url=BV174411Q7ct" frameBorder=0 marginwidth=0 marginheight=0 height=100% width=100% ALLOWTRANSPARENCY="true"/-->
      <div style="position: relative; padding: 30% 45%;">
        <iframe src="//player.bilibili.com/player.html?aid=63317234&bvid=BV174411Q7ct&cid=109958403&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"> </iframe>
      </div>
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