<template>
  <div class="row">
    <div class="col-12 category">
        <h3 class="topic">Popular Categories</h3>
    </div>
    <div class="col-xs-12 col-md-6 categorycard">
        <CategoryCard category="apparel" staticBase="/" />
    </div>
    <div class="col-xs-12 col-md-6 categorycard">
        <CategoryCard category="home" staticBase="/" />
    </div>
    <div class="col-xs-12 col-md-6 categorycard">
        <CategoryCard category="electronics" staticBase="/" />
    </div>
    <div class="col-xs-12 col-md-6 categorycard">
        <CategoryCard category="kids" staticBase="/" />
    </div>
  </div>
</template>

<script>
import CategoryCard from '../cards/CategoryCard.vue'
export default {
  name: 'CategorySection',
  components: { CategoryCard },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category {
  text-align: left;
  padding: 3em;
  padding-bottom: 1em;
}
.topic {
  font-size: 2.5em;
}
.categorycard {
  padding: 5px;
}
</style>
