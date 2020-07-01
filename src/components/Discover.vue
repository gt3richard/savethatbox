<template>
  <div class="discover" v-if="Object.keys(discover).includes(title)">
    <NavBar id="top" :simple='true' />
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Build a Home Office</li>
      </ol>
    </nav>
    <BannerBar class="banner" :show="!isMobile" :image="discover[title].banner" />
    <div class="container" >
      <div class="row">
        <div class="col title">
        {{ discover[title].title }}
        <hr>
        </div>
      </div>
      <div class="container" v-for="(paragraph, idx) in discover[title].article" :key="idx">
        <div class="row justify-content-center">
          <div class="col-10 article">
          {{ paragraph.text }}
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-6 business" v-for="id in paragraph.content" :key="id">
            <BusinessCard v-if="id > 500" :business="businesses.find(b => b.id === id)" staticBase="/" />
          </div>
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from './bars/NavBar.vue'
import FooterBar from './bars/FooterBar.vue'
import BannerBar from './bars/BannerBar.vue'

import BusinessCard from './cards/BusinessCard.vue'

import data from '../assets/data.json'
import discover from '../assets/discover.json'
export default {
  name: 'Discover',
  components: { NavBar, FooterBar, BannerBar, BusinessCard },
  props: [ 'title' ],
  data () {
    return {
      businesses: data,
      discover: discover,
      isMobile: false
    }
  },
  created () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  destroyed () {
    window.removeEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 3em;
  padding: 1em;
  padding-bottom: .5em;
}
.article {
  font-size: 1em;
  padding: 1.5em;
  padding-top: 0;
  margin-bottom: 2em;
}
.breadcrumb {
  background-color: #F43F54;
  margin-bottom: 0;
  border-radius: 0;
}
.breadcrumb-item,.breadcrumb-item::before {
  color: white;
}
a {
  color: white;
}
</style>
