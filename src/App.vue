<template>
  <div id="app">
    <HomeDefault />
  </div>
</template>

<script>
import HomeDefault from './components/pages/HomeDefault.vue';
// import LoaderBlock from './components/blocks/LoaderBlock.vue';


export default {
  name: 'App',
  components: {
    HomeDefault,
    // LoaderBlock
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
  margin-top: 60px;
}
</style>
