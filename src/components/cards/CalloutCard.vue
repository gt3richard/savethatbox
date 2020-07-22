<template>
  <div class="calloutcard">
    <a
      class="cardlink"
      :href="callout[content].link.url"
      v-on:click="track(callout[content].brand)"
    >
      <div class="row align-items-center img-row">
        <div
          class="col-3 img-bg w-100 py-3"
          :style="{
            'background-color':
              data.find((b) => b.id === callout[content].brand).bg || 'white',
          }"
        >
          <a
            class="img-a w-100 py-3"
            :href="
              'https://' +
              data.find((b) => b.id === callout[content].brand).link
            "
          >
            <img
              class="img w-100 py-3"
              :src="
                '../static/business/' +
                data.find((b) => b.id === callout[content].brand).logo
              "
              loading="lazy"
              :alt="data.find((b) => b.id === callout[content].brand).name"
            />
          </a>
        </div>
        <div class="col">
          <h5 class="text">{{ callout[content].text }}</h5>
          <a
            class="link"
            :href="callout[content].link.url"
            v-on:click="track(callout[content].brand)"
            >{{ callout[content].link.text }}</a
          >
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import data from "../../assets/data.json";
import callout from "../../assets/callout.json";
export default {
  name: "CalloutCard",
  props: ["content"],
  data() {
    return {
      data: data,
      callout: callout,
    };
  },
  methods: {
    track: function (event) {
      // eslint-disable-next-line
      gtag("event", "callout", {
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
.calloutcard {
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
