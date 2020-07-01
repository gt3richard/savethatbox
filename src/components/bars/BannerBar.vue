<template>
  <div v-if="search.length === 0 && !mobile" class="bannerbar">
    <div class="banner" :style="{ 'background':'transparent url(\'../static/banner/' + banner['1'].image + '.jpg\')'}">
      <div class="container w-100">
        <div class="row align-items-end">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '../../assets/banner.json'
export default {
  name: 'BannerBar',
  props: [ 'search', 'mobile' ],
  data () {
    return {
      banner: banner
    }
  }
}
</script>

<style scoped>
.bannerbar {
  max-height: 400px;
  height: 400px;
}
.banner {
  height: 400px;
}
.row {
  color: white;
  background-color: black;
  opacity: 0.7;
  margin: 0;
}
.col {
  padding: 0;
  margin: 0;
}
.banner-title {
  font-size: 2em;
}
.banner-description {
  font-size: 1.5em;
}
</style>
