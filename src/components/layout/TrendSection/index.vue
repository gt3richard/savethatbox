<template>
  <div class="container">
    <div class="row">
      <div v-if="layout[layoutkey].header" class="col-12 section">
        <h3 class="header">{{ layout[layoutkey].header }}</h3>
        <span v-if="layout[layoutkey].subheader" class="subheader">{{
          layout[layoutkey].subheader
        }}</span>
      </div>
      <div
        class="col-xs-12 col-md-4 sectioncard"
        v-for="(trend, idx) in layout[layoutkey].content"
        :key="idx"
      >
        <TrendCard :cardkey="trend" staticBase="/" />
      </div>
    </div>
  </div>
</template>

<script>
import TrendCard from "./TrendCard";
import layout from "../../../assets/layout.json";
export default {
  name: "TrendSection",
  components: { TrendCard },
  props: ["layoutkey"],
  data() {
    return {
      layout: layout,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  text-align: left;
  padding-top: 3em;
  padding-bottom: 1em;
}
.header {
  font-size: 2em;
  font-weight: 600;
}
.sectioncard {
  padding: 5px;
}
.subheader {
  font-size: 1.2em;
  font-weight: 300;
}
</style>
