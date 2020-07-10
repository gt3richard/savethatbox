<template>
  <div class="container">
    <div class="col-12 section">
      <h3 v-if="layout[layoutkey].header" class="header" :id="layoutkey">
        {{ layout[layoutkey].header }}
      </h3>
      <span v-if="layout[layoutkey].subheader" class="subheader">{{
        layout[layoutkey].subheader
      }}</span>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-xs-12 col-md-4 sectioncard"
          v-for="(content, idx) in layout[layoutkey].content"
          :key="idx"
        >
          <CalloutCard :content="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalloutCard from "../cards/CalloutCard.vue";
import callout from "../../assets/callout.json";
import layout from "../../assets/layout.json";
export default {
  name: "CalloutSection",
  components: { CalloutCard },
  props: ["layoutkey"],
  data() {
    return {
      layout: layout,
      callout: callout,
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
