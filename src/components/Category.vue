<template>
  <div class="body">
    <NavBar
      id="top"
      v-on:changeSearch="changeSearch"
      :categories="categories"
      :mobile="isMobile"
    />
    <div class="container">
      <div v-if="categories.includes(category)" class="row">
        <BusinessSection
          :businesses="filter(category)"
          :category="category"
          staticBase="../"
        />
      </div>
    </div>
    <ScrollTopTool />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "./bars/NavBar.vue";
import FooterBar from "./bars/FooterBar.vue";

import BusinessSection from "./sections/BusinessSection.vue";

import ScrollTopTool from "./tools/ScrollTopTool.vue";

import data from "../assets/data.json";
import taxonomy from "../assets/taxonomy.json";
import {
  addDefaultCategory,
  filterBusinessBySearch,
  sortBusinessName,
  sortBusinessPolicy,
} from "../scripts/business.js";
export default {
  name: "Category",
  components: { NavBar, BusinessSection, ScrollTopTool, FooterBar },
  props: ["category"],
  data() {
    return {
      search: "",
      businesses: data,
      categories: Object.keys(taxonomy),
      isMobile: false,
    };
  },
  created() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    // eslint-disable-next-line
    gtag("event", "page_view", {
      page_title: "home:category:" + this.category,
      page_location: window.location.host,
      page_path: "/#/category/" + this.category,
    });
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    changeSearch: function (event) {
      this.search = event;
    },
    filter: function (category) {
      return this.businesses
        .map(addDefaultCategory)
        .filter((p) => (p.cat && p.cat === category) || category === "all")
        .filter((p) => filterBusinessBySearch(p, this.search))
        .sort(sortBusinessName)
        .sort(sortBusinessPolicy);
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
