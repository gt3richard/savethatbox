<template>
  <div class="container">
    <div class="row">
      <div v-if="layout[layoutkey].header" class="col-12 section">
          <h3 class="header">{{ layout[layoutkey].header }}</h3>
          <span v-if="layout[layoutkey].subheader" class="subheader">{{ layout[layoutkey].subheader }}</span>
      </div>
      <div class="col-xs-12 col-md-4 sectioncard" v-for="(deal, idx) in layout[layoutkey].content" :key="idx">
          <DealCard :dealkey="deal" staticBase="/" />
      </div>
    </div>
  </div>
</template>

<script>
import DealCard from '../cards/DealCard.vue'
import layout from '../../assets/layout.json'
export default {
  name: 'DealSection',
  components: { DealCard },
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
