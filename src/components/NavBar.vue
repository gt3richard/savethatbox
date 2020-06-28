<template>
  <div>
  <nav class="navbar navbar-dark" style="background-color: #9a573e;">
    <a class="navbar-brand" href="#">
      <h1>📦 Save That Box</h1>
    </a>
    <button class="btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent">
      Categories
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
    </button>
    <SearchBar v-on:changeSearch="changeSearch" />
  </nav>
  <div class="collapse collapse-categories" id="navbarToggleExternalContent">
    <div class="p-3" style="background-color: #754330;">
      <ul class="list-group list-group-horizontal-md">
        <li class="list-group-item flex-fill" v-for="category in categories" :key="category">
          <button class="btn" @click="clickCategory(category.replace(/\s/g, '').toLowerCase())">{{ category }}</button>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
export default {
  name: 'NavBar',
  components: { SearchBar },
  props: [ 'categories' ],
  data () {
    return {}
  },
  methods: {
    changeSearch: function (event) {
      this.$emit('changeSearch', event)
    },
    clickCategory: function (event) {
      // eslint-disable-next-line
      gtag('event', 'nav', {
        'event_category': 'engagement',
        'event_label': event
      })
      document.getElementById(event).scrollIntoView({behavior: 'smooth'})
    }
  }
}
</script>

<style scoped>
h1 {
font-family: 'Exo', sans-serif;
}
.collapse-categories {
  color: white;
}
.list-group-item,.navbar-toggler {
  background-color: inherit;
  border: 0;
  padding: .5em;
}
.btn {
  color: white;
  font-size: 1.2em;
  font-weight: 600;
}
.btn:hover {
  color: tan;
}
.btn:active,.btn:focus {
  outline: none !important;
  box-shadow: none;
}
</style>
