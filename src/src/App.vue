<template>
  <div id="app">
    <!-- <Home msg="This is the title 4 our Project about CV"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home.vue'

export default {
  name: 'App',
  // components: {
  //   Home
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
</style>
