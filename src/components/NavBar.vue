<template>
  <nav class="navbar navbar-dark" style="background-color: #9a573e;">
    <a class="navbar-brand" href="#">
      <h1>📦 Save That Box</h1>
    </a>
    <SearchBar v-on:changeSearch="changeSearch" />
  </nav>
</template>

<script>
import SearchBar from './SearchBar.vue'
export default {
  name: 'NavBar',
  components: { SearchBar },
  data () {
    return {}
  },
  methods: {
    changeSearch: function (event) {
      this.$emit('changeSearch', event)
    }
  }
}
</script>

<style scoped>
h1 {
font-family: 'Exo', sans-serif;
}
</style>
