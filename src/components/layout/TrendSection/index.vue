<template>
  <div class="container">
    <div class="row">
      <div v-if="layout.header" class="col-12 section">
        <h3 class="header">{{ layout.header }}</h3>
        <span v-if="layout.subheader" class="subheader">{{
          layout.subheader
        }}</span>
      </div>
      <div
        class="col-xs-12 col-md-4 sectioncard"
        v-for="(trend, idx) in layout.content"
        :key="idx"
      >
        <TrendCard :cardkey="trend" staticBase="/" />
      </div>
    </div>
  </div>
</template>

<script>
import TrendCard from "./TrendCard";
export default {
  name: "TrendSection",
  components: { TrendCard },
  props: ["layout"],
  data() {
    return {};
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
