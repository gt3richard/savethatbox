<template>
  <div class="searchbar col-lg-6">
    <form class="form-inline">
      <div class="input-group w-100">
        <input
          v-model="search"
          @input="changeSearch"
          class="form-control"
          alt="search"
          placeholder="Search for a store..."
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    changeSearch: function (event) {
      if (this.search.length > 2) {
        // eslint-disable-next-line
        gtag("event", "search", {
          event_category: "engagement",
          event_label: this.search,
        });
      }
      this.$emit("changeSearch", this.search);
    },
  },
};
</script>

<style scoped>
.searchbar {
  padding: 1em;
}
.form-control {
  box-shadow: none !important;
  border: 0;
  background-color: #ffed21;
  border-bottom: 1px solid black;
}
@media (min-width: 992px) {
  .searchbar {
    min-width: 500px;
  }
}
</style>
