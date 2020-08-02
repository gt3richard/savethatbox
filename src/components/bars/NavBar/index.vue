<template>
  <div>
    <nav class="navbar">
      <a class="navbar-brand" href="/">
        <h1>📦 Save That Box</h1>
      </a>
      <button
        v-if="!simple"
        class="btn navbar-btn"
        type="button"
        @click="clickStories"
      >
        Stories
      </button>
      <button
        v-if="!simple"
        class="btn navbar-btn navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
      >
        Categories
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-caret-down-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
          />
        </svg>
      </button>
      <SearchBar v-if="!simple" v-on:changeSearch="changeSearch" />
    </nav>
    <div class="collapse collapse-categories" id="navbarToggleExternalContent">
      <div class="p-3 navbar-expand">
        <ul class="list-group list-group-horizontal-md">
          <li
            class="list-group-item flex-fill"
            v-for="category in categories"
            :key="category"
          >
            <button class="btn navbar-btn" @click="clickCategory(category)">
              {{ taxonomy[category].header }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import taxonomy from "../../../assets/taxonomy.json";
export default {
  name: "NavBar",
  components: { SearchBar },
  props: ["categories", "simple", "mobile"],
  data() {
    return {
      taxonomy: taxonomy,
    };
  },
  methods: {
    changeSearch: function (event) {
      if (this.mobile) {
        window.document
          .getElementById("navbarToggleExternalContent")
          .classList.remove("show");
      }

      this.$emit("changeSearch", event);
    },
    clickCategory: function (event) {
      // eslint-disable-next-line
      gtag("event", "nav", {
        event_category: "engagement",
        event_label: event,
      });

      if (this.mobile) {
        window.document
          .getElementById("navbarToggleExternalContent")
          .classList.remove("show");
      }

      window.location.href = "#/category/" + event;
    },
    clickStories: function (event) {
      window.location.href = "#/story/";
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Exo", sans-serif;
}
.list-group-item,
.navbar-toggler {
  background-color: inherit;
  border: 0;
  padding: 0.5em;
}
.btn {
  font-size: 1em;
  font-weight: 600;
}
.btn:active,
.btn:focus {
  outline: none !important;
  box-shadow: none;
}
</style>
