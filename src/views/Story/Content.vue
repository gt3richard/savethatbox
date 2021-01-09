<template>
  <div class="content">
    <div class="row">
      <div class="col-12 col-lg-7">
        <div class="content" v-html="html"></div>
      </div>
      <div class="col-12 col-lg-5 stores">
        <h4>Visit these stores</h4>
        <div
          class="row justify-content-center"
          v-for="(id, idx) in business"
          :key="idx"
        >
          <div class="col-12 col-md-8 col-lg-12 storecard">
            <BusinessCard
              :business="businesses.find((b) => b.id === id)"
              staticBase="/"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-7">
        <hr class="solid" />
      </div>
    </div>
    <div class="row other">
      <h4>Other Stories</h4>
    </div>
    <div class="row">
      <ul>
        <li v-for="(id, idx) in other" :key="idx">
          <a
            :href="stories[id].override ? stories[id].override : '/story/' + id"
            ><span>{{ stories[id].title }}</span></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BusinessCard from "../../components/layout/BusinessSection/BusinessCard";
import data from "../../assets/data.json";
import stories from "../../assets/stories.json";
export default {
  components: { BusinessCard },
  props: ["business", "html", "other"],
  data() {
    return {
      businesses: data,
      stories: stories,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.other {
  padding-top: 1em;
}
span {
  font-size: 1.5em;
  font-weight: 600;
}
hr.solid {
  border-top: 1px solid #999;
  width: 100%;
}
a {
  color: darkorange;
}
a:hover {
  color: orange;
  text-decoration: none;
}
.content >>> strong {
  color: darkorange;
}
.content >>> a:hover {
  color: orange;
  text-decoration: none;
}
</style>
