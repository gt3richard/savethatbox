<template>
  <div class="footerbar">
    <div class="container">
      <div class="row">
        <div class="col">
          <span>Can't find what you're looking for?</span><br /><br />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <a
            class="link"
            href="mailto:415dockyard@gmail.com"
            v-on:click="track()"
            >415dockyard@gmail.com</a
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <span
            >Help us improve this list. Email us with your store's return
            experience.</span
          >
        </div>
      </div>

      <div class="row justify-content-center py-4">
        <div class="col-sm-3 col-md-2 fineprint">
          <a class="link" href="/doc/terms">Terms and Conditions</a>
        </div>
        <div class="col-sm-3 col-md-2 fineprint">
          <a class="link" href="/doc/privacy">Privacy Policy</a>
        </div>
        <div class="col-sm-3 col-md-2 fineprint">
          <a class="link" href="/doc/sitemap">Sitemap</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
  data() {
    return {};
  },
  methods: {
    track: function (event) {
      // eslint-disable-next-line
      gtag("event", "contact", {
        event_category: "engagement",
      });
    },
  },
};
</script>

<style scoped>
.footerbar {
  margin-top: 2em;
  padding: 3em;
  font-weight: 600;
}
.fineprint {
  font-size: 0.7em;
  white-space: nowrap;
  font-weight: 500;
}
</style>
