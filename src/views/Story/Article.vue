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
  font-family: Helvetica Neue;
  color: black;
}
.content >>> p {
  font-size: 1.2rem;
  font-weight: 400;
  color: black;
}
.content >>> h1 {
  font-size: 2em;
  font-weight: 600;
  padding-top: 2em;
}
.content >>> h2 {
  font-size: 1em;
  font-weight: 600;
  color: grey;
}
.content >>> .subheader {
  padding: 5px;
  margin-bottom: 20px;
}
.content >>> img {
  width: auto;
  max-width: 100%;
  align-content: middle;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.content >>> .figure {
  padding-top: 1.2em;
  padding-bottom: 1.2em;
}
.content >>> .stores {
  padding: 1em;
}
.content >>> .storecard {
  padding: 1em;
}
</style>
