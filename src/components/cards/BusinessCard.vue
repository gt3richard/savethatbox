<template>
  <div class="businesscard" id="bc">
    <div class="card w-100">
      <div
        class="container img-container"
        :style="{ 'background-color': business.bg || 'white' }"
      >
        <div class="row align-items-center img-row">
          <a
            class="img-a"
            :href="'https://' + business.link"
            v-on:click="track()"
          >
            <img
              :src="staticBase + 'static/business/' + business.logo"
              class="img"
              loading="lazy"
              :alt="business.name"
            />
          </a>
        </div>
      </div>
      <div class="container policies-container">
        <div class="row align-items-center policies-row">
          <PolicyTemplate
            :data="policies['greater_than_90']"
            :valid="business.gn"
          />
          <PolicyTemplate
            :data="policies['free_return_shipping']"
            :valid="business.frs"
          />
        </div>
        <div class="row align-items-center policies-row">
          <PolicyTemplate
            :data="policies['no_restocking_fee']"
            :valid="business.nrf"
          />
          <PolicyTemplate
            :data="policies['shipping_label']"
            :valid="business.sl"
          />
        </div>
        <div class="action">
          <a
            class="link"
            :href="'https://' + business.link"
            v-on:click="track()"
          >
            <span
              >Shop Now
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-chevron-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </a>
        </div>
        <p class="card-text">
          <small class="text-muted">Last updated {{ business.lu }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PolicyTemplate from "../templates/PolicyTemplate.vue";
import policies from "../../assets/policy.json";
export default {
  name: "BusinessCard",
  components: { PolicyTemplate },
  props: ["business", "staticBase"],
  data() {
    return {
      policies: policies,
    };
  },
  methods: {
    track: function (event) {
      // eslint-disable-next-line
      gtag("event", "referral", {
        event_category: "engagement",
        event_label: this.business.name,
        category: this.business.cat,
        value: 1,
      });
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
}
.img-container {
  height: 120px;
  display: grid;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.img-row {
  padding: auto;
}
.img-a {
  margin: auto;
}
.img {
  max-width: 200px;
  max-height: 75px;
}
.policies-container {
  padding-top: 1em;
  border-top: 1px solid #dfdfdf;
}
.policies-row {
  margin: auto;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
.action {
  padding: 1em;
}
.card-text {
  padding-bottom: 1em;
}
</style>
