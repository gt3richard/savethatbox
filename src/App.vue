<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
  width: 100%;
}
.navbar {
  background-color: #ffed21;
}
.navbar-expand {
  background-color: #ffed21;
}
.navbar-brand,
.navbar-brand:hover,
.navbar-btn {
  color: #2c3e50;
}
.navbar-btn:hover {
  color: black;
}
.headerbar {
  background-color: #ffed21;
  color: #2c3e50;
}
.body {
  background-color: #f1f0f2;
}
.category {
  color: #2c3e50;
}
.link,
.link:hover {
  color: grey;
}
.card-title-link {
  color: black;
}
.card-title-link:hover {
  color: orange;
  text-decoration: none;
}
.footerbar {
  background-color: #ffed21;
}
</style>
