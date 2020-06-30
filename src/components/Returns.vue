<template>
  <div class="returns">
    <NavBar id="top" v-on:changeSearch="changeSearch" :categories="categories" />
    <Header :search="search" />
    <div class="container">
      <div v-if="search.length === 0" class="row" v-for="topic in Object.keys(layout)" :key="topic">
        <div class="col-12 category">
          <h3 class="category" :id="topic">
            {{ topic }}
          </h3>
        </div>
        <div class="container">
          <div class="row">
          <div class="col-xs-12 col-md-6 business" v-for="id in layout[topic].content" :key="id">
            <BusinessCard :business="businesses.find(b => b.id === id)" staticBase="/" />
          </div>
          </div>
        </div>
      </div>

      <div v-if="search.length > 0" class="row" v-for="category in categories.filter(c => c !== 'all' && Object.keys(grouping).includes(c))" :key="category">
        <div class="col-12 category">
          <h3 class="category" :id="category">
            {{ taxonomy[category].display }}
          </h3>
        </div>
        <div class="container">
          <div class="row">
          <div class="col-xs-12 col-md-6 business" v-for="business in grouping[category]" :key="business.name">
            <BusinessCard :business="business" staticBase="/" />
          </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 category">
          <h3 class="category">
            Categories
          </h3>
        </div>
        <div class="col-xs-12 col-md-6 business">
          <CategoryCard category="apparel" staticBase="/" />
        </div>
        <div class="col-xs-12 col-md-6 business">
          <CategoryCard category="home" staticBase="/" />
        </div>
        <div class="col-xs-12 col-md-6 business">
          <CategoryCard category="electronics" staticBase="/" />
        </div>
        <div class="col-xs-12 col-md-6 business">
          <CategoryCard category="kids" staticBase="/" />
        </div>
      </div>
    </div>
    <button @click="goToTop" v-bind:class="showTop ? 'topBtn visible' : 'topBtn hidden'" title="Go to top">Top</button>
    <Footer />
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import Header from './Header.vue'
import FilterBar from './FilterBar.vue'
import BusinessCard from './BusinessCard.vue'
import CategoryCard from './CategoryCard.vue'
import Footer from './Footer.vue'
import data from '../assets/data.json'
import taxonomy from '../assets/taxonomy.json'
import layout from '../assets/layout.json'
export default {
  name: 'Returns',
  components: { NavBar, Header, FilterBar, BusinessCard, CategoryCard, Footer },
  data () {
    return {
      search: '',
      businesses: data,
      grouping: {},
      layout: layout,
      taxonomy: taxonomy,
      categories: Object.keys(taxonomy),
      showTop: false
    }
  },
  created () {
    this.grouping = this.group()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    changeSearch: function (event) {
      this.search = event
      this.grouping = this.group()
    },
    filter: function () {
      return this.businesses
        .map(p => {
          // Add default category
          if ('cat' in p === false) {
            p['cat'] = 'Other'
          }
          return p
        })
        .filter(p => p.name.toLowerCase().indexOf(this.search.toLowerCase().trim()) > -1)
        .sort(function (a, b) {
          var nameA = a.name.toUpperCase()
          var nameB = b.name.toUpperCase()
          if (nameA < nameB) {
            return -1
          } else if (nameA > nameB) {
            return 1
          } else {
            return 0
          }
        })
        .sort(function (a, b) {
          var scoreA = (a.nrf ? 1000 : 0) + (a.frs ? 100 : 0) + (a.sl ? 10 : 0) + (a.gn ? 1 : 0)
          var scoreB = (b.nrf ? 1000 : 0) + (b.frs ? 100 : 0) + (b.sl ? 10 : 0) + (b.gn ? 1 : 0)
          if (scoreA > scoreB) {
            return -1
          } else if (scoreA < scoreB) {
            return 1
          } else {
            return 0
          }
        })
    },
    group: function () {
      var grouping = { }
      this.filter()
        .forEach(p => {
          // Group data by category
          p.cat in grouping ? grouping[p.cat].push(p) : grouping[p.cat] = [ p ]
        })
      return grouping
    },
    goToTop: function () {
      // eslint-disable-next-line
      gtag('event', 'nav', {
        'event_category': 'engagement',
        'event_label': 'scroll_top'
      })
      document.getElementById('top').scrollIntoView({behavior: 'smooth'})
    },
    handleScroll: function (event) {
      if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        this.showTop = true
      } else {
        this.showTop = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.business {
  padding: 5px;
}
.category {
  text-align: left;
  font-weight: 600;
  font-size: 1.5em;
  padding: .5em;
}
.topBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: grey;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
}
.topBtn:hover {
  background-color: #555;
}
.visible {
  display: block;
}
.hidden {
  display: none;
}
</style>
