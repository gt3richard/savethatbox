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
  </div>
</template>

<script>
import BusinessCard from "../../components/layout/BusinessSection/BusinessCard";
import data from "../../assets/data.json";
export default {
  components: { BusinessCard },
  props: ["business", "html"],
  data() {
    return {
      businesses: data,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
