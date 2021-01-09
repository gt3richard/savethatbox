<template>
  <div class="home body">
    <NavBar
      id="top"
      v-on:changeSearch="changeSearch"
      :categories="categories"
      :mobile="isMobile"
    />
    <div class="container">
      <div
        v-if="search.length === 0"
        :class="'row ' + layout[layoutkey].type"
        v-for="(layoutkey, idx) in Object.keys(layout)"
        :key="idx"
      >
        <FeaturedSection
          v-if="layout[layoutkey].type === 'featured'"
          :layout="layout[layoutkey]"
        />
        <TopicSection
          v-if="layout[layoutkey].type === 'topic'"
          :layout="layout[layoutkey]"
        />
        <CategorySection
          v-if="layout[layoutkey].type === 'category'"
          :layout="layout[layoutkey]"
        />
        <DiscoverSection
          v-if="layout[layoutkey].type === 'discover'"
          :layout="layout[layoutkey]"
        />
        <StorySection
          v-if="layout[layoutkey].type === 'story'"
          :layout="layout[layoutkey]"
        />
        <TrendSection
          v-if="layout[layoutkey].type === 'trend'"
          :layout="layout[layoutkey]"
        />
        <HeaderBar v-if="idx === 1" :search="search" />
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
    <ScrollTopTool />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "../../components/bars/NavBar";
import HeaderBar from "../../components/bars/HeaderBar";
import BannerBar from "../../components/bars/BannerBar";
import FooterBar from "../../components/bars/FooterBar";

import CategorySection from "../../components/layout/CategorySection";
import TopicSection from "../../components/layout/TopicSection";
import BusinessSection from "../../components/layout/BusinessSection";
import DiscoverSection from "../../components/layout/DiscoverSection";
import StorySection from "../../components/layout/StorySection";
import TrendSection from "../../components/layout/TrendSection";
import FeaturedSection from "../../components/layout/FeaturedSection";

import ScrollTopTool from "../../components/tools/ScrollTopTool";

import data from "../../assets/data.json";
import taxonomy from "../../assets/taxonomy.json";
import layout from "./layout.json";
import {
  addDefaultCategory,
  filterBusinessBySearch,
  sortBusinessName,
  sortBusinessPolicy,
} from "../../scripts/business.js";
export default {
  name: "Home",
  components: {
    NavBar,
    HeaderBar,
    BannerBar,
    FooterBar,
    CategorySection,
    TopicSection,
    BusinessSection,
    DiscoverSection,
    StorySection,
    TrendSection,
    FeaturedSection,
    ScrollTopTool,
  },
  data() {
    return {
      search: "",
      businesses: data,
      grouping: {},
      layout: layout,
      taxonomy: taxonomy,
      categories: Object.keys(taxonomy),
      isMobile: false,
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
        page_title: "home",
        page_location: window.location.host,
        page_path: "/",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
