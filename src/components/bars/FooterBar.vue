<template>
  <div class="footerbar">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h1>📦 Save That Box</h1>
        </div>

        <div class="col-6 text-left">
          <div class="row">
            <div class="col header">
              Company
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="row">
                <div className="col">
                  <a class="link fineprint" href="/doc/terms"
                    >Terms and Conditions</a
                  >
                </div>
              </div>
              <div class="row">
                <div className="col">
                  <a class="link fineprint" href="/doc/privacy"
                    >Privacy Policy</a
                  >
                </div>
              </div>
              <div class="row">
                <div className="col">
                  <a class="link fineprint" href="/doc/sitemap">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
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
.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
h1 {
  font-family: "Exo", sans-serif;
}
</style>
