<template>
  <div class="container">
    <div class="col-12 category">
        <h3 class="category" :id="category">{{ taxonomy[category].display }}</h3>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-6 business" v-for="business in businesses" :key="business.name">
                <BusinessCard :business="business" :staticBase="staticBase" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import BusinessCard from '../cards/BusinessCard.vue'
import taxonomy from '../../assets/taxonomy.json'
export default {
  name: 'BusinessSection',
  components: { BusinessCard },
  props: [ 'category', 'businesses', 'staticBase' ],
  data () {
    return {
      taxonomy: taxonomy
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
