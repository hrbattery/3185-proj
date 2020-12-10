<template>
  <div id="app">
    <!-- <Home msg="This is the title 4 our Project about CV"/> -->
    <transition :name="transitionName">
      <keep-alive><router-view></router-view></keep-alive>
    </transition>
  </div>
</template>

<script>
// import Home from './components/Home.vue'

export default {
  name: 'App',
  data() {
    return {
      transitionName:''
    }
  },
  // components: {
  //   Home
  // }
  watch: {
    $route(to, from) {
      if( to.meta.index < from.meta.index){
        this.transitionName = 'slide-right';
      }else{
        this.transitionName = 'slide-left';
      }
    }
  }
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

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    will-change: transform;
    transition: all 1s;
    position: absolute;
    width:100%;
    left:0;
}
.slide-right-enter,
.slide-left-leave-active {
  transform:translateX(-100%);
}
.slide-right-leave-active,
.slide-left-enter {
  transform:translateX(100%)
}

</style>
