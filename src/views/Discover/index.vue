<template>
  <div class="discover body" v-if="Object.keys(discover).includes(title)">
    <NavBar id="top" :simple="true" />
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a class="breadcrumb-item" href="/">Home</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ discover[title].breadcrumb }}
        </li>
      </ol>
    </nav>
    <BannerBar
      class="banner"
      :show="!isMobile"
      :image="discover[title].banner"
    />
    <div class="container">
      <div class="row">
        <div class="col title">
          {{ discover[title].title }}
          <hr />
        </div>
      </div>
      <div
        class="container"
        v-for="(paragraph, idx) in discover[title].article"
        :key="idx"
      >
        <div
          class="row justify-content-center"
          v-if="!paragraph.content || paragraph.content.length > 1"
        >
          <div class="col-10 article">
            <div v-html="paragraph.text"></div>
          </div>
        </div>
        <div
          class="row"
          v-if="paragraph.content && paragraph.content.length > 1"
        >
          <div
            class="col-xs-12 col-md-6 business"
            v-for="id in paragraph.content"
            :key="id"
          >
            <BusinessCard
              v-if="id > 500"
              :business="businesses.find((b) => b.id === id)"
              staticBase="/"
            />
          </div>
        </div>
        <div
          class="row"
          v-if="paragraph.content && paragraph.content.length === 1"
        >
          <div
            class="col-xs-12 col-md-6 business"
            v-for="id in paragraph.content"
            :key="id"
          >
            <BusinessCard
              v-if="id > 500"
              :business="businesses.find((b) => b.id === id)"
              staticBase="/"
            />
          </div>
          <div class="col-xs-12 col-md-6 business detail">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="text">{{ paragraph.text }}</div>
                </div>
              </div>
              <div class="row" v-if="paragraph.link">
                <div class="col">
                  <a class="url" :href="paragraph.link.url">{{
                    paragraph.link.text
                  }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "../../components/bars/NavBar";
import FooterBar from "../../components/bars/FooterBar";
import BannerBar from "../../components/bars/BannerBar";

import BusinessCard from "../../components/layout/BusinessSection/BusinessCard";

import data from "../../assets/data.json";
import discover from "./discover.json";
export default {
  name: "Discover",
  components: { NavBar, FooterBar, BannerBar, BusinessCard },
  props: ["title", "override"],
  data() {
    return {
      businesses: data,
      discover: this.override ? this.override : discover,
      isMobile: false,
    };
  },
  watch: {
    title: function (newval, oldval) {
      this.track();
    },
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
        page_title: "home:discover:" + this.title,
        page_location: window.location.host,
        page_path: "/#/discover/" + this.title,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 3em;
  padding: 1em;
  padding-bottom: 0.5em;
}
.article {
  font-size: 1em;
  padding: 1.5em;
  padding-top: 0;
  margin-bottom: 2em;
}
.breadcrumb {
  background-color: #f43f54;
  margin-bottom: 0;
  border-radius: 0;
}
.breadcrumb-item,
.breadcrumb-item::before {
  color: white;
}
.url {
  color: #2c3e50;
}
.business {
  padding: 5px;
}
.detail {
  display: flex;
  align-items: center;
  padding: 1.7em;
}
.text {
  font-size: 1.5em;
}
</style>
