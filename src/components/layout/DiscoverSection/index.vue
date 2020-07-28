<template>
  <div class="discoversection w-100">
    <div v-if="layout.header" class="col-12 section">
      <h3 class="header">{{ layout.header }}</h3>
      <span v-if="layout.subheader" class="subheader">{{
        layout.subheader
      }}</span>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-xs-12 col-md-6 sectioncard"
          v-for="(content, idx) in layout.content"
          :key="idx"
        >
          <DiscoverCard :content="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DiscoverCard from "./DiscoverCard";
export default {
  name: "DiscoverSection",
  components: { DiscoverCard },
  props: ["layout"],
  data() {
    return {};
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
  padding: 3em;
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
