<template>
  <div>
    <NavBar v-on:changeSearch="search=$event" />
    <div class="container">
      <Header />
      <FilterBar v-on:changePolicyGN="gn=$event" v-on:changePolicyNRF="nrf=$event" v-on:changePolicyFRS="frs=$event" v-on:changePolicySL="sl=$event" />
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6 business" v-for="business in businesses
            .filter(p => (p.gn || !gn) && (p.nrf || !nrf) && (p.frs || !frs) && (p.sl || !sl))
            .filter(p => p.name.toLowerCase().indexOf(search.toLowerCase().trim()) > -1)
            " :key="business.name">
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
      sl: false
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
</style>
