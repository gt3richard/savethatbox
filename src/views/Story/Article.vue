<template>
  <div>
    <component :is="component" :title="title" v-if="component" />
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["title"],
  data() {
    return {
      component: null,
    };
  },
  computed: {
    loader() {
      if (!this.title) {
        return null;
      }
      return () => import(`./content/${this.title}`);
    },
  },
  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader();
      })
      .catch(() => {
        this.component = () => import("./content/default");
      });
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
