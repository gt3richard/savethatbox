<template>
  <div>
    <NavBar id="top" :simple=true />
    <div class="container">
      <Privacy v-if="page === 'privacy'" />
      <Terms v-if="page === 'terms'"/>
    </div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from './bars/NavBar.vue'
import FooterBar from './bars/FooterBar.vue'

import Privacy from './content/Privacy.vue'
import Terms from './content/Terms.vue'

export default {
  name: 'Static',
  components: { NavBar, Privacy, Terms, FooterBar },
  props: [ 'page' ],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
