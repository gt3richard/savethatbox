<template>
  <div class="topicsection">
    <div class="col-12 section">
      <h3 class="header">{{ layout.header }}</h3>
      <span v-if="layout.subheader" class="subheader">{{
        layout.subheader
      }}</span>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-xs-12 col-md-6 sectioncard"
          v-for="(id, idx) in layout.content"
          :key="idx"
        >
          <BusinessCard
            v-if="id > 500"
            :business="businesses.find((b) => b.id === id)"
            staticBase="/"
          />
          <SceneCard
            v-if="id >= 100 && id < 200"
            :name="scenes[id].name"
            staticBase="/"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BusinessCard from "../BusinessSection/BusinessCard";
import CategoryCard from "../CategorySection/CategoryCard";
import SceneCard from "./SceneCard";

import data from "../../../assets/data.json";
import scenes from "./scenes.json";
export default {
  name: "TopicSection",
  components: { BusinessCard, CategoryCard, SceneCard },
  props: ["layout"],
  data() {
    return {
      businesses: data,
      scenes: scenes,
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
  text-align: left;
  padding-top: 3em;
  padding-bottom: 1em;
}
.header {
  font-size: 2em;
  font-weight: 600;
}
.subheader {
  font-size: 1.2em;
  font-weight: 300;
}
</style>
