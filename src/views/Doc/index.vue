<template>
  <div>
    <NavBar id="top" :simple="true" />
    <div class="container">
      <Privacy v-if="page === 'privacy'" />
      <Terms v-if="page === 'terms'" />
      <Sitemap v-if="page === 'sitemap'" />
    </div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "../../components/bars/NavBar";
import FooterBar from "../../components/bars/FooterBar";

import Privacy from "./content/Privacy";
import Terms from "./content/Terms";
import Sitemap from "./content/Sitemap";

export default {
  name: "Doc",
  components: { NavBar, Privacy, Terms, Sitemap, FooterBar },
  props: ["page"],
  data() {
    return {};
  },
  watch: {
    page: function (newval, oldval) {
      this.track();
    },
  },
  created() {
    this.track();
  },
  methods: {
    track() {
      // eslint-disable-next-line
      gtag("config", "UA-170201347-1", {
        page_title: "home:doc:" + this.page,
        page_location: window.location.host,
        page_path: "/doc/" + this.page,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
