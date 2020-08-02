<template>
  <div class="content" v-html="html"></div>
</template>

<script>
export default {
  name: "FaceMasks",
  data() {
    return {
      html: `
      <h1 style="font-size: 26px;">Face Masks</h1>
      <h2>Richard</h2><h2>July 31, 2020</h2>
      <p> So many people are now buying masks.
      </p>
      `,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  text-align: left;
  padding: 2em;
  font-family: Arial;
}
.content >>> p {
  color: #595959;
  font-size: 14px;
}
.content >>> h1 {
  font-size: 19px;
  line-height: 22.5px;
  font-weight: 600;
  color: #000000;
}
.content >>> h2 {
  font-size: 16px;
  line-height: 22.5px;
  font-weight: 600;
  color: #000000;
}
</style>
