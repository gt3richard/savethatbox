<template>
  <div class="trendcard card w-100">
    <a
      class="btn card-btn"
      :href="trend[cardkey].link"
      @click="track(cardkey)"
      :style="{
        background:
          'transparent url(\'../static/trend/' + trend[cardkey].img + '\')',
      }"
    >
      <div class="container img-container">
        <div class="row align-items-end">
          <div class="container text-container">
            <div class="text">{{ trend[cardkey].text }}</div>
            <div class="brand">{{ trend[cardkey].brand }}</div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import trend from "./trend.json";
export default {
  name: "TrendCard",
  components: {},
  props: ["cardkey", "staticBase"],
  data() {
    return {
      trend: trend,
    };
  },
  methods: {
    track: function (cardkey) {
      // eslint-disable-next-line
      gtag("event", "trend", {
        event_category: "engagement",
        event_label: cardkey,
        value: 1,
      });
    },
  },
};
</script>

<style scoped>
.trendcard {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
}
.img-container {
  height: 240px;
  display: grid;
  border-radius: 10px;
}
.text-container {
  padding: 1em;
  background-color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  opacity: 0.7;
}
.card-btn {
  color: white;
  font-weight: 600;
  font-size: 1.5em;
  padding: 0;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
}
.card-btn:hover {
  color: #ffec53;
  opacity: 0.9;
}
.brand {
  font-size: 0.6em;
}
</style>
