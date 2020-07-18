<template>
  <div class="editor">
    <NavBar id="top" :simple="true" />
    <DiscoverEditor v-if="type === 'discover'" />
    <div class="container" v-if="type === 'business'">
      <div class="row" :key="newBusiness">
        <BusinessEditor :business="newBusiness" />
      </div>
      <div
        v-if="full"
        class="row"
        v-for="business in businesses"
        :key="business.name"
      >
        <BusinessEditor :business="business" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./bars/NavBar.vue";
import BusinessEditor from "./templates/BusinessEditor.vue";
import DiscoverEditor from "./templates/DiscoverEditor.vue";
import data from "../assets/data.json";
export default {
  name: "Editor",
  components: { NavBar, BusinessEditor, DiscoverEditor },
  props: ["type"],
  data() {
    return {
      full: this.$route.query.full,
      newBusiness: {
        name: "",
        link: "",
        logo: "",
        gn: false,
        nrf: false,
        sl: false,
        frs: false,
        lu: "Jun 27 2020",
        cat: "",
      },
      businesses: data,
      view: "editor",
    };
  },
};
</script>

<style scoped>
.row {
  padding-top: 1em;
}
.btn-group {
  padding-top: 1em;
}
</style>
