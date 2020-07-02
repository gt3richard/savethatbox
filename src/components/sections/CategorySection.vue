<template>
  <div class="row">
    <div class="col-12 section">
        <h3 class="header">{{ layout[layoutkey].header }}</h3>
        <span v-if="layout[layoutkey].subheader" class="subheader">{{ layout[layoutkey].subheader }}</span>
    </div>
    <div class="col-xs-12 col-md-6 sectioncard" v-for="(category, idx) in layout[layoutkey].content" :key="idx">
        <CategoryCard :category="category" staticBase="/" />
    </div>
  </div>
</template>

<script>
import CategoryCard from '../cards/CategoryCard.vue'
import layout from '../../assets/layout.json'
export default {
  name: 'CategorySection',
  components: { CategoryCard },
  props: [ 'layoutkey' ],
  data () {
    return {
      layout: layout
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  text-align: left;
  padding: 3em;
  padding-bottom: 1em;
}
.header {
  font-size: 2.5em;
}
.sectioncard {
  padding: 5px;
}
.subheader {
  font-size: 1.2em;
  font-weight: 300;
}
</style>
