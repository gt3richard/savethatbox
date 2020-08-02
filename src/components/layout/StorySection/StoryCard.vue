<template>
  <div class="storycard">
    <div class="card">
      <img
        :src="stories[content].thumbnail"
        class="card-img-center"
        alt="..."
      />
      <div class="card-body">
        <a class="card-title-link" :href="'#/story/' + content">
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
  methods: {
    track: function (event) {
      // eslint-disable-next-line
      // gtag("event", "news", {
      //   event_category: "engagement",
      //   event_label: this.data.find((b) => b.id === event).name,
      //   category: this.data.find((b) => b.id === event).cat,
      //   value: 1,
      // });
    },
  },
};
</script>

<style scoped>
.card-text,
.card-title {
  text-align: left;
}
.card-img-center {
  max-height: 200px;
}
</style>
