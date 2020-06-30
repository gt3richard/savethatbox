<template>
  <div class="footer">
    <div class="container">
      <div class="row">
            <div class="col">
                <span>Can't find what you're looking for?</span><br/><br/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <a class="link" href="mailto:support@savethatbox.com" v-on:click="track()">support@savethatbox.com</a>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span>Help us improve this list. Email us with your store's return experience.</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  },
  methods: {
    track: function (event) {
      // eslint-disable-next-line
      gtag('event', 'contact', {
        'event_category': 'engagement'
      })
    }
  }
}
</script>

<style scoped>
.footer {
  margin-top: 2em;
  padding: 3em;
}
</style>
