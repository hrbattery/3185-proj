<template>
  <v-app id="inspire">
    <Header/>

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
      <!-- <div class="markdown-body">
        <markdown />
      </div> -->
      <div>
        <markdown-it-vue :content="markdown"/>
      </div>
      </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Header from '@/components/Header'
  import markdown from '@/assets/Assignment1.md'
  import MarkdownItVue from 'markdown-it-vue'
  import 'markdown-it-vue/dist/markdown-it-vue.css'


  export default {
    data() {
      return {
        headerTitles: [
          'Page1',
          'Page2',
          'Page3',
          'Page4'
        ],
        markdown,
      }
    },
    methods: {
      test() {
        // this.$refs.cards["1"].text = "Topic 1";
      }
    },
    components: {
      Header,
      MarkdownItVue
      // markdown
    },
    mounted () {
      // console.log(this.$refs.cards['1'])
      // this.$refs.cards["1"].text = "Topic 1";
    }
  }
</script>