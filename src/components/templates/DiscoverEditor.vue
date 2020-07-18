<template>
  <div class="discovereditor w-100">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="title">Article Title</label>
              <input
                class="form-control"
                id="title"
                v-model="discover[name].title"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="breadcrumb">Breadcrumb Title</label>
              <input
                class="form-control"
                id="breadcrumb"
                v-model="discover[name].breadcrumb"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="banner">Banner</label>
              <input
                class="form-control"
                id="banner"
                v-model="discover[name].banner"
              />
            </div>
          </div>
        </div>

        <div
          class="row"
          v-for="(article, idx) in discover[name].article"
          :key="idx"
        >
          <div class="col">
            <div class="form-group">
              {{ article }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <Discover :title="'newdiscover'" :override="discover" />
      </div>
    </div>

    <div class="row pretty-print">
      <vue-json-pretty :data="discover" />
    </div>
  </div>
</template>

<script>
import Discover from "../Discover.vue";
import VueJsonPretty from "vue-json-pretty";
export default {
  name: "DiscoverEditor",
  props: ["business"],
  components: { VueJsonPretty, Discover },
  data() {
    return {
      discover: {
        newdiscover: {
          title: "Test",
          breadcrumb: "Test",
          banner: "curbside",
          article: [
            {
              text: "Test",
              content: [881],
              link: {
                text: "Link Text",
                url: "https://www.google.com",
              },
            },
          ],
        },
      },
      name: "newdiscover",
    };
  },
};
</script>

<style scoped>
.discovereditor {
}
.row {
  padding: 1.2em;
}
.pretty-print {
  text-align: left;
}
</style>
