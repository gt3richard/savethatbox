<template>
  <div v-if="search.length === 0" class="headerbar">
    <h2>Shop <b>confidently</b> knowing you can return your purchase <b>easily</b></h2>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: [ 'search' ],
  data () {
    return {}
  }
}
</script>

<style scoped>
.headerbar {
  padding: 3em;
}
h2 {
  font-size: 2rem;
  line-height: 1.5;
}
</style>
