<template>
  <div class="discovercard card w-100">
    <a
      class="btn card-btn"
      :href="'#/discover/' + content.name"
      @click="track(content.name)"
      :style="{
        'background-color': content.color,
        'background-image':
          'url(\'../static/textures/' + content.texture + '.png\')',
      }"
    >
      <div class="container img-container">
        <div class="row align-items-center">
          <div class="container text-container">
            {{ content.text }}
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "DiscoverCard",
  components: {},
  props: ["content"],
  data() {
    return {};
  },
  methods: {
    track: function (event) {
      // eslint-disable-next-line
      gtag("event", "discover", {
        event_category: "engagement",
        event_label: event,
        value: 1,
      });
    },
  },
};
</script>

<style scoped>
.discovercard {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
}
.img-container {
  height: 150px;
  display: grid;
  border-radius: 10px;
}
.card-btn {
  color: white;
  font-weight: 600;
  font-size: 1.5em;
  padding: 0em;
  border: none;
}
.card-btn:hover {
  color: #ffec53;
  opacity: 0.9;
}
</style>
