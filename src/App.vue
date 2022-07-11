<template>
  <div id="app">
    <!-- <my-index/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import MyIndex from './view/myIndex.vue'
export default {
  name: 'App',
  components: {
    // MyIndex
  }
}
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
