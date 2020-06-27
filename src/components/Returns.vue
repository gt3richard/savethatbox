<template>
  <div>
    <NavBar v-on:changeSearch="changeSearch" />
    <div class="container">
      <Header />
      <FilterBar v-on:changePolicyGN="changePolicyGN" v-on:changePolicyNRF="changePolicyNRF" v-on:changePolicyFRS="changePolicyFRS" v-on:changePolicySL="changePolicySL" />
      <div class="container">
        <div class="row" v-for="category in Object.keys(grouping)" :key="category">
          <div class="col-12 category">
            <h3 class="category">{{ category }}</h3>
          </div>
          <div class="col-xs-12 col-md-6 business" v-for="business in grouping[category]" :key="business.name">
            <Business :business="business" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import Header from './Header.vue'
import FilterBar from './FilterBar.vue'
import Business from './Business.vue'
import Footer from './Footer.vue'
import data from '../assets/data.json'
export default {
  name: 'Returns',
  components: { NavBar, Header, FilterBar, Business, Footer },
  data () {
    return {
      search: '',
      businesses: data,
      gn: false,
      nrf: false,
      frs: false,
      sl: false,
      grouping: {}
    }
  },
  created () {
    this.grouping = this.group()
  },
  methods: {
    changeSearch: function (event) {
      this.search = event
      this.grouping = this.group()
    },
    changePolicyGN: function (event) {
      this.gn = event
      this.grouping = this.group()
    },
    changePolicyNRF: function (event) {
      this.nrf = event
      this.grouping = this.group()
    },
    changePolicyFRS: function (event) {
      this.frs = event
      this.grouping = this.group()
    },
    changePolicySL: function (event) {
      this.sl = event
      this.grouping = this.group()
    },
    filter: function () {
      return this.businesses
        .filter(p => (p.gn || !this.gn) && (p.nrf || !this.nrf) && (p.frs || !this.frs) && (p.sl || !this.sl))
        .filter(p => p.name.toLowerCase().indexOf(this.search.toLowerCase().trim()) > -1)
    },
    group: function () {
      var grouping = { }
      this.filter()
        .map(p => {
          if ('cat' in p === false) {
            p['cat'] = ['Other']
          }
          return p
        })
        .forEach(p => {
          p.cat[0] in grouping ? grouping[p.cat[0]].push(p) : grouping[p.cat[0]] = [ p ]
        })
      return grouping
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
  padding-left: 0;
  padding-top: 1em;
}
</style>
