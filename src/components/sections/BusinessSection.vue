<template>
  <div class="container">
    <div class="col-12 section">
      <h3 class="header" :id="category">{{ taxonomy[category].header }}</h3>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-xs-12 col-md-6 sectioncard"
          v-for="business in businesses"
          :key="business.name"
        >
          <BusinessCard :business="business" :staticBase="staticBase" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BusinessCard from "../cards/BusinessCard.vue";
import taxonomy from "../../assets/taxonomy.json";
export default {
  name: "BusinessSection",
  components: { BusinessCard },
  props: ["category", "businesses", "staticBase"],
  data() {
    return {
      taxonomy: taxonomy,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sectioncard {
  padding: 5px;
}
.section {
  padding: 0.5em;
}
.header {
  text-align: left;
  font-size: 2em;
  padding: 0.5em;
}
</style>
