<template>
  <div class="content" v-html="html"></div>
</template>

<script>
export default {
  name: "Sitemap",
  data() {
    return {
      html: `
      <h1 style="font-size: 26px;">Sitemap</h1>
      <h2>General</h2>
      <ul>
      <li><a href="/">Home</a></li>
      <li><a href="./doc/terms">Terms and Conditions</a></li>
      <li><a href="./doc/privacy">Privacy Policy</a></li>
      </ul>
      <h2>Categories</h2>
      <ul>
      <li><a href="./category/all">All</a></li>
      <li><a href="./category/apparel">Apparel</a></li>
      <li><a href="./category/shoes">Shoes</a></li>
      <li><a href="./category/accessories">Accessories</a></li>
      <li><a href="./category/home">Home & Furniture</a></li>
      <li><a href="./category/electronics">Electronics</a></li>
      <li><a href="./category/kids">Kids</a></li>
      <li><a href="./category/sportsandoutdoor">Sports & Outdoor</a></li>
      <li><a href="./category/beauty">Beauty</a></li>
      <li><a href="./category/other">Other</a></li>
      </ul>
      <h2>Stories</h2>
      <ul>
      <li><a href="./story">All Stories</a></li>
      </ul>
      <h2>Discover</h2>
      <ul>
      <li><a href="./discover/homeoffice">Build a Home Office</a></li>
      <li><a href="./discover/curbside">Try Curbside Pickup</a></li>
      </ul>
      `,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  text-align: left;
  padding: 2em;
  font-family: Arial;
}
.content >>> p {
  color: #595959;
  font-size: 14px;
}
.content >>> h1 {
  font-size: 19px;
  line-height: 22.5px;
  font-weight: 600;
  color: #000000;
}
.content >>> h2 {
  font-size: 16px;
  line-height: 22.5px;
  font-weight: 600;
  color: #000000;
}
</style>
