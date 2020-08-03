<template>
  <div class="featuredfeed">
    <div class="row align-items-center img-row">
      <div
        class="col-3 img-bg w-100 py-3"
        :style="{
          'background-color':
            data.find((b) => b.id === feed[content].brand).bg || 'white',
        }"
      >
        <a
          class="img-a w-100 py-3"
          :href="
            'https://' + data.find((b) => b.id === feed[content].brand).link
          "
        >
          <img
            class="img w-100 py-3"
            :src="
              '../static/business/' +
              data.find((b) => b.id === feed[content].brand).logo
            "
            loading="lazy"
            :alt="data.find((b) => b.id === feed[content].brand).name"
          />
        </a>
      </div>
      <div class="col">
        <a
          class="card-title-link"
          :href="feed[content].link.url"
          v-on:click="track(feed[content].brand)"
        >
          <h5 class="text">{{ feed[content].text }}</h5>
        </a>
        <p class="card-text">
          <small class="text-muted">{{ feed[content].link.text }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../../assets/data.json";
import feed from "./feed.json";
export default {
  name: "FeaturedFeed",
  props: ["content"],
  data() {
    return {
      data: data,
      feed: feed,
    };
  },
  methods: {
    track: function (event) {
      // eslint-disable-next-line
      gtag("event", "featured", {
        event_category: "engagement",
        event_label: this.data.find((b) => b.id === event).name,
        category: this.data.find((b) => b.id === event).cat,
        value: 1,
      });
    },
  },
};
</script>

<style scoped>
.featuredfeed {
  //border-radius: 10px;
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  background-color: white;
}
.img-row {
  margin: 0;
}
.img {
  width: 100%;
}
.img-a {
  display: grid;
}
.img-bg {
  //border-top-left-radius: 10px;
  //border-bottom-left-radius: 10px;
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin: -1px;
}
.link {
  font-weight: 600;
  font-size: 0.8em;
}
</style>
