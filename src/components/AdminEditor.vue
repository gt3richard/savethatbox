<template>
  <div class="editor">
    <div class="row">
        <div class="col">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="name">Business Name</label>
                        <input class="form-control" id="name" v-model="business.name">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="url">Url</label>
                        <input class="form-control" id="url" v-model="business.link">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="g90" v-model="business.gn">
                        <label class="form-check-label" for="g90">90 Day Returns or more</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="nrf" v-model="business.nrf">
                        <label class="form-check-label" for="nrf">No Restocking Fee</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="frs" v-model="business.frs">
                        <label class="form-check-label" for="frs">Free Return Shipping</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="sl" v-model="business.sl">
                        <label class="form-check-label" for="sl">Included Shipping Label</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="logo">Logo</label>
                        <input class="form-control" id="logo" v-model="business.logo">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="lu">Last Update</label>
                        <input class="form-control" id="lu" v-model="business.lu">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="bg">Background Color HEX</label>
                        <input class="form-control" id="bg" v-model="business.bg">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="cat">Category</label>
                        <input class="form-control" id="cat" v-model="business.cat">
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="row">
                <BusinessCard :business="business" />
            </div>
            <div class="row pretty-print">
                <vue-json-pretty :data="business" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import BusinessCard from './BusinessCard.vue'
import VueJsonPretty from 'vue-json-pretty'
export default {
  name: 'AdminEditor',
  props: [ 'business' ],
  components: { BusinessCard, VueJsonPretty },
  data () {
    return {}
  }
}
</script>

<style scoped>
.editor {
    border-style: solid;
    border-width: 1px;
    padding: 1.2em;
    margin: auto;
}
.row {
    padding: 1.2em;
}
.pretty-print {
    text-align: left;
}
</style>
