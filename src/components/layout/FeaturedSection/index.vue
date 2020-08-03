<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col-xs-12 col-lg-8 section panel">
        <FeaturedCard :content="layout.content" />
      </div>
      <div class="col-xs-12 col-lg-4 panel">
        <div class="row align-items-center">
          <div
            class="sectioncard w-100 feed"
            v-for="(content, idx) in layout.feed"
            :key="idx"
          >
            <FeaturedFeed :content="content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedCard from "./FeaturedCard";
import FeaturedFeed from "./FeaturedFeed";
export default {
  name: "FeaturedSection",
  components: { FeaturedCard, FeaturedFeed },
  props: ["layout"],
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-size: 2em;
  font-weight: 600;
}
.sectioncard,
.section {
  padding: 5px;
  margin-top: 0em;
}
.container {
  margin-top: 0.5em;
}
.panel {
  padding: 20px;
}
.feed {
  padding-bottom: 0.2em;
}
@media (min-width: 992px) {
  .feed {
    padding-bottom: 1.5em;
  }
}
</style>
