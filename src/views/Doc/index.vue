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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
