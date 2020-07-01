<template>
  <div class="topicsection">
    <div class="col-12 category">
        <h3 class="category" :id="topic">{{ topic }}</h3>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-6 business" v-for="id in layout[topic].content" :key="id">
                <BusinessCard v-if="id > 500" :business="businesses.find(b => b.id === id)" staticBase="/" />
                <SceneCard v-if="id >= 100 && id < 200" :name="scenes[id].name" staticBase="/" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import BusinessCard from '../cards/BusinessCard.vue'
import CategoryCard from '../cards/CategoryCard.vue'
import SceneCard from '../cards/SceneCard.vue'

import data from '../../assets/data.json'
import layout from '../../assets/layout.json'
import scenes from '../../assets/scenes.json'
export default {
  name: 'TopicSection',
  components: { BusinessCard, CategoryCard, SceneCard },
  props: [ 'topic' ],
  data () {
    return {
      businesses: data,
      layout: layout,
      scenes: scenes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.business {
  padding: 5px;
}
.category {
  text-align: left;
  font-weight: 600;
  font-size: 1.5em;
  padding: .5em;
}
</style>
