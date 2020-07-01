<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
  width: 100%
}
.navbar {
  background-color: #FFEC53;
}
.navbar-expand {
  background-color: #FFEC53;
}
.navbar-brand,.navbar-brand:hover {
  color: #2C3E50;
}
.navbar-btn {
  color: #2C3E50;
}
.navbar-btn:hover {
  color: black;
}
.headerbar {
  background-color: #FFEC53;
  color: #2C3E50;
}
.category {
  background-color: white;
  color: #2C3E50;
}
.link,.link:hover {
  color: grey;
}
.footerbar {
  background-color: #FFEC53;
}
</style>
