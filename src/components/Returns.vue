<template>
  <div class="returns body">
    <NavBar id="top" v-on:changeSearch="changeSearch" :categories="categories" :mobile="isMobile" />
    <div class="container">
      <div v-if="search.length === 0" :class="'row ' + layout[layoutkey].type" v-for="(layoutkey, idx) in Object.keys(layout)" :key="idx">
        <TopicSection v-if="layout[layoutkey].type === 'topic'"  :layoutkey="layoutkey" />
        <CategorySection v-if="layout[layoutkey].type === 'category'" :layoutkey="layoutkey" />
        <DiscoverSection v-if="layout[layoutkey].type === 'discover'" :layoutkey="layoutkey" />
        <CalloutSection v-if="layout[layoutkey].type === 'callout'" :layoutkey="layoutkey" />
        <DealSection v-if="layout[layoutkey].type === 'deals'" :layoutkey="layoutkey" />
        <HeaderBar v-if="idx === 2" :search="search" />
      </div>
      <div v-if="search.length > 0" class="row" v-for="category in categories.filter(c => c !== 'all' && Object.keys(grouping).includes(c))" :key="category">
        <BusinessSection :businesses="grouping[category]" :category="category" staticBase="/" />
      </div>
    </div>
    <ScrollTopTool />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from './bars/NavBar.vue'
import HeaderBar from './bars/HeaderBar.vue'
import BannerBar from './bars/BannerBar.vue'
import FooterBar from './bars/FooterBar.vue'

import CategorySection from './sections/CategorySection.vue'
import TopicSection from './sections/TopicSection.vue'
import BusinessSection from './sections/BusinessSection.vue'
import DiscoverSection from './sections/DiscoverSection.vue'
import CalloutSection from './sections/CalloutSection.vue'
import DealSection from './sections/DealSection.vue'

import ScrollTopTool from './tools/ScrollTopTool.vue'

import data from '../assets/data.json'
import taxonomy from '../assets/taxonomy.json'
import layout from '../assets/layout.json'
import { addDefaultCategory, filterBusinessBySearch, sortBusinessName, sortBusinessPolicy } from '../scripts/business.js'
export default {
  name: 'Returns',
  components: { NavBar, HeaderBar, BannerBar, FooterBar, CategorySection, TopicSection, BusinessSection, DiscoverSection, CalloutSection, DealSection, ScrollTopTool },
  data () {
    return {
      search: '',
      businesses: data,
      grouping: {},
      layout: layout,
      taxonomy: taxonomy,
      categories: Object.keys(taxonomy),
      isMobile: false
    }
  },
  created () {
    this.grouping = this.group()
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  destroyed () {
    window.removeEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    changeSearch: function (event) {
      this.search = event
      this.grouping = this.group()
    },
    filter: function () {
      return this.businesses
        .map(addDefaultCategory)
        .filter(p => filterBusinessBySearch(p, this.search))
        .sort(sortBusinessName)
        .sort(sortBusinessPolicy)
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
    onResize () {
      this.isMobile = window.innerWidth < 600
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
