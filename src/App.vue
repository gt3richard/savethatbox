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

/* vietnamese */
@font-face {
  font-family: "Exo";
  font-style: normal;
  font-weight: 800;
  font-display: fallback;
  src: url(/static/Exo.woff2) format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Exo";
  font-style: normal;
  font-weight: 800;
  font-display: fallback;
  src: url(/static/Exo.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Exo";
  font-style: normal;
  font-weight: 800;
  font-display: fallback;
  src: url(/static/Exo.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
</style>
