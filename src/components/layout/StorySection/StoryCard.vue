<template>
  <div class="storycard">
    <div class="card">
      <img
        :src="stories[content].thumbnail"
        class="card-img-center"
        alt="..."
      />
      <div class="card-body">
        <a
          class="card-title-link"
          :href="
            stories[content].override
              ? stories[content].override
              : '/story/' + content
          "
        >
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
  name: "StoryCard",
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
  font-size: 1em;
}
.card-img-center {
  max-height: auto;
  width: 100%;
}
@media (min-width: 576px) {
  .story .card-text,
  .story .card-title {
    font-size: 1.2em;
  }
}
</style>
