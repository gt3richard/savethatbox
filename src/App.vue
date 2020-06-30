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
.header {
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
.footer {
  background-color: #FFEC53;
}
</style>
