<template>
  <div class="story body">
    <NavBar id="top" :simple="true" />
    <div class="container"><Article :title="title" /></div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "../../components/bars/NavBar";
import FooterBar from "../../components/bars/FooterBar";
import Article from "./Article";

import ScrollTopTool from "../../components/tools/ScrollTopTool";

export default {
  name: "Blog",
  components: {
    NavBar,
    FooterBar,
    Article,
    ScrollTopTool,
  },
  props: ["title"],
  data() {
    return {
      isMobile: false,
    };
  },
  created() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    this.track();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
    track() {
      // eslint-disable-next-line
      gtag("config", "UA-170201347-1", {
        page_title: "home:story:" + this.title,
        page_location: window.location.host,
        page_path: "/#/story/" + this.title,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
