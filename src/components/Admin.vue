<template>
  <div class="admin">
    <NavBar id="top" :simple=true />
    <div class="container">
      <div class="row" :key="newBusiness">
        <EditorTemplate :business=newBusiness />
      </div>
      <div class="row" v-for="business in businesses" :key="business.name">
        <EditorTemplate :business="business" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './bars/NavBar.vue'
import EditorTemplate from './template/EditorTemplate.vue'
import data from '../assets/data.json'
export default {
  name: 'Admin',
  components: { NavBar, EditorTemplate },
  data () {
    return {
      newBusiness: {
        'name': '',
        'link': '',
        'logo': '',
        'gn': false,
        'nrf': false,
        'sl': false,
        'frs': false,
        'lu': 'Jun 27 2020',
        'cat': ''
      },
      businesses: data,
      view: 'editor'
    }
  }
}
</script>

<style scoped>
.row {
  padding-top: 1em;
}
.btn-group {
  padding-top: 1em;
}
</style>
