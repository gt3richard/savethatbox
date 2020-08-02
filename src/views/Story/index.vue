<template>
  <div class="story body">
    <NavBar
      id="top"
      v-on:changeSearch="changeSearch"
      :categories="categories"
      :mobile="isMobile"
    />
    <div class="container">
      <div v-if="search.length === 0">
        <Article v-if="title" :title="title" />
        <div class="all" v-if="!title">
          <h3 class="header">All Stories</h3>
          <div class="row">
            <div
              class="col-6 mb-3"
              v-for="(story, idx) in Object.keys(stories)"
              :key="idx"
            >
              <StoryCard :content="story" />
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="search.length > 0"
        class="row"
        v-for="category in categories.filter(
          (c) => c !== 'all' && Object.keys(grouping).includes(c)
        )"
        :key="category"
      >
        <BusinessSection
          :businesses="grouping[category]"
          :category="category"
          staticBase="/"
        />
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "../../components/bars/NavBar";
import FooterBar from "../../components/bars/FooterBar";

import Article from "./Article";
import StoryCard from "../../components/layout/StorySection/StoryCard";
import BusinessSection from "../../components/layout/BusinessSection";

import ScrollTopTool from "../../components/tools/ScrollTopTool";

import data from "../../assets/data.json";
import taxonomy from "../../assets/taxonomy.json";
import stories from "../../assets/stories.json";
import {
  addDefaultCategory,
  filterBusinessBySearch,
  sortBusinessName,
  sortBusinessPolicy,
} from "../../scripts/business.js";
export default {
  name: "Blog",
  components: {
    NavBar,
    FooterBar,
    Article,
    BusinessSection,
    StoryCard,
    ScrollTopTool,
  },
  props: ["title"],
  data() {
    return {
      search: "",
      businesses: data,
      grouping: {},
      taxonomy: taxonomy,
      categories: Object.keys(taxonomy),
      isMobile: false,
      stories: stories,
    };
  },
  created() {
    this.grouping = this.group();
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    this.track();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    changeSearch: function (event) {
      this.search = event;
      this.grouping = this.group();
    },
    filter: function () {
      return this.businesses
        .map(addDefaultCategory)
        .filter((p) => filterBusinessBySearch(p, this.search))
        .sort(sortBusinessName)
        .sort(sortBusinessPolicy);
    },
    group: function () {
      var grouping = {};
      this.filter().forEach((p) => {
        // Group data by category
        p.cat in grouping ? grouping[p.cat].push(p) : (grouping[p.cat] = [p]);
      });
      return grouping;
    },
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
<style scoped>
.row {
  padding: 1em;
}
.header {
  text-align: left;
  font-size: 2em;
  font-weight: 600;
  padding-top: 2em;
  padding-bottom: 1em;
}
</style>
