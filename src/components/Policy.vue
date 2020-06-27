<template>
  <div class="col container policy" v-bind:class="valid ? 'yes' : 'no'" data-toggle="tooltip" data-placement="top" :title="data.tooltip">
    <div class="row policy-row">
        <div class="col mark" v-bind:class="valid ? 'yes' : 'no'"></div>
        <div class="col text">{{ data.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Policy',
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
}
.yes {
  color: #27641F;
}
.yes.mark {
  display: inline-block;
  content: "";
  background-image: url("data:image/svg+xml,<svg class='bi bi-check-circle-fill' width='1em' height='1em' viewBox='0 0 16 16' fill='%2327641F' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'/></svg>");
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
  max-width: 16px;
}
.no {
  color: #B60000;
}
.no.mark {
  display: inline-block;
  content: "";
  background-image: url("data:image/svg+xml,<svg class='bi bi-x-circle-fill' width='1em' height='1em' viewBox='0 0 16 16' fill='%23B60000' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z'/></svg>");
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
  max-width: 16px;
}
</style>
