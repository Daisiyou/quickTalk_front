<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <navbar></navbar> -->
    <!-- </div> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
