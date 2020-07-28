<template>
  <div class="newscard">
    <a
      class="cardlink"
      :href="news[content].link.url"
      v-on:click="track(news[content].brand)"
    >
      <div class="row align-items-center img-row">
        <div
          class="col-3 img-bg w-100 py-3"
          :style="{
            'background-color':
              data.find((b) => b.id === news[content].brand).bg || 'white',
          }"
        >
          <a
            class="img-a w-100 py-3"
            :href="
              'https://' + data.find((b) => b.id === news[content].brand).link
            "
          >
            <img
              class="img w-100 py-3"
              :src="
                '../static/business/' +
                data.find((b) => b.id === news[content].brand).logo
              "
              loading="lazy"
              :alt="data.find((b) => b.id === news[content].brand).name"
            />
          </a>
        </div>
        <div class="col">
          <h5 class="text">{{ news[content].text }}</h5>
          <a
            class="link"
            :href="news[content].link.url"
            v-on:click="track(news[content].brand)"
            >{{ news[content].link.text }}</a
          >
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import data from "../../../assets/data.json";
import news from "./news.json";
export default {
  name: "NewsCard",
  props: ["content"],
  data() {
    return {
      data: data,
      news: news,
    };
  },
  methods: {
    track: function (event) {
      // eslint-disable-next-line
      gtag("event", "news", {
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
.newscard {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
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
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin: -1px;
}
.text {
  font-size: 1.2em;
  color: black;
}
.link {
  font-weight: 600;
  font-size: 0.8em;
}
.cardlink {
  text-decoration: none !important;
}
</style>
