<template>
  <div class="dealcard card w-100">
    <a
      class="btn card-btn"
      :href="deal[dealkey].link"
      @click="track(dealkey)"
      :style="{
        background:
          'transparent url(\'../static/deal/' + deal[dealkey].img + '\')',
      }"
    >
      <div class="container img-container">
        <div class="row align-items-end">
          <div class="container text-container">
            <div class="text">{{ deal[dealkey].text }}</div>
            <div class="brand">{{ deal[dealkey].brand }}</div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import deal from "../../assets/deal.json";
export default {
  name: "DealCard",
  components: {},
  props: ["dealkey", "staticBase"],
  data() {
    return {
      deal: deal,
    };
  },
  methods: {
    track: function (deal) {
      // eslint-disable-next-line
      gtag("event", "deal", {
        event_category: "engagement",
        event_label: deal,
        value: 1,
      });
    },
  },
};
</script>

<style scoped>
.dealcard {
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
