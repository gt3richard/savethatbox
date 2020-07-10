<template>
  <div class="scenecard">
    <div class="card w-100">
      <div
        class="container img-container"
        :style="{
          height: cardHeight,
          background: 'transparent url(\'../static/scene/' + name + '.jpg\')',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SceneCard",
  components: {},
  props: ["staticBase", "name"],
  data() {
    return {
      cardHeight: "0px",
    };
  },
  methods: {
    track: function (name) {
      // eslint-disable-next-line
      gtag("event", "referral", {
        event_category: "engagement",
        event_label: name,
        value: 1,
      });
    },
    onResize() {
      this.cardHeight =
        window.document.getElementById("bc").offsetHeight + "px";
    },
  },
  created() {
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  mounted() {
    this.cardHeight = window.document.getElementById("bc").offsetHeight + "px";
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
}
.img-container {
  display: grid;
  border-radius: 10px;
}
.img-row {
  padding: auto;
}
.img-a {
  margin: auto;
}
.img {
  width: 200px;
  height: auto;
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
}
.card-btn:hover {
  color: grey;
}
</style>
