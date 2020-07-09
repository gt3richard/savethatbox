<template>
  <div class="discoversection w-100">
    <div class="col-12 section">
        <h3 class="header" :id="layoutkey">{{ layout[layoutkey].header }}</h3>
        <span v-if="layout[layoutkey].subheader" class="subheader">{{ layout[layoutkey].subheader }}</span>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-6 sectioncard" v-for="(content, idx) in layout[layoutkey].content" :key="idx">
                <DiscoverCard :content="content" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import DiscoverCard from '../cards/DiscoverCard.vue'
import layout from '../../assets/layout.json'
export default {
  name: 'DiscoverSection',
  components: { DiscoverCard },
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
.sectioncard {
  padding: 5px;
}
.section {
  text-align: left;
  padding: 3em;
  padding-bottom: 1em;
}
.header {
  font-size: 2em;
  font-weight: 600;
}
.subheader {
  font-size: 1.2em;
  font-weight: 300;
}
</style>
