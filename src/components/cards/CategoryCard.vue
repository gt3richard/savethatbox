<template>
  <div class="categorycard">
    <div class="card">
    <a class="btn card-btn" :href="'#/category/' + category" @click="track(category)">
        <div class="container img-container" :style="{ 'background':'transparent url(\'../static/taxonomy/' + category + '.jpg\')'}">
          <div class="row align-items-end img-row" >
            <div class="container text-container">
                {{ taxonomy[category].header }}
            </div>
          </div>
        </div>
        </a>
    </div>
  </div>
</template>

<script>
import taxonomy from '../../assets/taxonomy.json'
export default {
  name: 'CategoryCard',
  components: { },
  props: [ 'category', 'staticBase' ],
  data () {
    return {
      taxonomy: taxonomy
    }
  },
  methods: {
    track: function (category) {
      // eslint-disable-next-line
      gtag('event', 'referral', {
        'event_category': 'engagement',
        'event_label': category,
        'value': 1
      })
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
}
.img-container {
  height: 240px;
  display: grid;
  border-radius: 10px;
}
.img-row {
  padding: auto;
}
.img-a {
  margin: auto;
}
.img {
  width: 200px;
  height: auto;
}
.text-container {
  padding: 1em;
  background-color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  opacity: 0.7;
}
.card-btn {
    color: white;
    font-weight: 600;
    font-size: 1.5em;
    padding: 0em;
    border: none;
}
.card-btn:hover {
    color: #FFEC53;
    opacity: 0.9;
}
</style>
