<template>
  <button
    @click="goToTop"
    v-bind:class="showTop ? 'topBtn visible' : 'topBtn hidden'"
    title="Go to top"
  >
    Top
  </button>
</template>

<script>
export default {
  name: "ScrollTopTool",
  data() {
    return {
      showTop: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    goToTop: function () {
      // eslint-disable-next-line
      gtag("event", "nav", {
        event_category: "engagement",
        event_label: "scroll_top",
      });
      document.getElementById("top").scrollIntoView({ behavior: "smooth" });
    },
    handleScroll: function (event) {
      if (
        document.body.scrollTop > 180 ||
        document.documentElement.scrollTop > 180
      ) {
        this.showTop = true;
      } else {
        this.showTop = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: grey;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
}
.topBtn:hover {
  background-color: #555;
}
.visible {
  display: block;
}
.hidden {
  display: none;
}
</style>
