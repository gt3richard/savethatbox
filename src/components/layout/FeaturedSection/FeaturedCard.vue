<template>
  <div class="featuredcard">
    <div class="card">
      <img
        :src="stories[content].thumbnail"
        class="card-img-center"
        alt="..."
      />
      <div class="card-body">
        <a class="card-title-link" :href="'/story/' + content">
          <h5 class="card-title">{{ stories[content].title }}</h5>
        </a>
        <p class="card-text">
          <small class="text-muted">{{ stories[content].category }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import stories from "../../../assets/stories.json";
export default {
  name: "FeaturedCard",
  props: ["content"],
  data() {
    return {
      stories: stories,
    };
  },
};
</script>

<style scoped>
.card-text,
.card-title {
  text-align: left;
}

.card-img-center {
  max-height: 250px;
}
@media (min-width: 576px) {
  .card-img-center {
    max-height: 250px;
  }
}
@media (min-width: 768px) {
  .card-img-center {
    max-height: 350px;
  }
}
@media (min-width: 992px) {
  .card-img-center {
    max-height: 350px;
  }
}
</style>
