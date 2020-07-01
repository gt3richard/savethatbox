<template>
  <div class="col container policytemplate" v-bind:class="valid ? 'yes' : 'no'" data-toggle="tooltip" data-placement="top" :title="data.tooltip">
    <div class="row policy-row">
        <div class="col mark">{{ valid ? '✅' : '❌' }}</div>
        <div class="col text">{{ data.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PolicyTemplate',
  props: [ 'data', 'valid' ],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.mark {
  padding-bottom: 1em;
  padding-right: 0;
  padding-left: 0;
  margin: auto;
  background-color: inherit;
  max-width: 16px;
}
.policy-row {
  margin: auto;
}
.text {
  font-weight: 600;
}
.yes {
  color: #288728;
}
.no {
  color: #C80000;
}
</style>
