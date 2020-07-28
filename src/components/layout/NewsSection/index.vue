<template>
  <div class="container">
    <div class="col-12 section">
      <h3 v-if="layout.header" class="header">
        {{ layout.header }}
      </h3>
      <span v-if="layout.subheader" class="subheader">{{
        layout.subheader
      }}</span>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-xs-12 col-md-4 sectioncard"
          v-for="(content, idx) in layout.content"
          :key="idx"
        >
          <NewsCard :content="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "./NewsCard";
import news from "./news.json";
export default {
  name: "NewsSection",
  components: { NewsCard },
  props: ["layout"],
  data() {
    return {
      news: news,
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
  padding-top: 3em;
  padding-bottom: 1em;
  text-align: left;
}
.header {
  font-size: 2em;
  font-weight: 600;
}
</style>
