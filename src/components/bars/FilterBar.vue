<template>
  <div class="filterbar">
    <div class="filterPolicy">
      <div class="btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-outline-secondary" @click="changePolicyGN">
          <input id="g90cb" type="checkbox" autocomplete="off" /> 90 Day Returns
          or More
        </label>
        <label class="btn btn-outline-secondary" @click="changePolicyNRF">
          <input type="checkbox" autocomplete="off" /> No Restocking Fee
        </label>
        <label class="btn btn-outline-secondary" @click="changePolicyFRS">
          <input type="checkbox" autocomplete="off" /> Free Return Shipping
        </label>
        <label class="btn btn-outline-secondary" @click="changePolicySL">
          <input type="checkbox" autocomplete="off" /> Included Shipping Label
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBar",
  data() {
    return {
      gn: false,
      nrf: false,
      frs: false,
      sl: false,
    };
  },
  methods: {
    changePolicyGN: function (event) {
      this.gn = !this.gn;
      // eslint-disable-next-line
      gtag("event", "filter", {
        event_category: "engagement",
        event_label: "90_day_returns_or_more:" + this.gn,
      });
      this.$emit("changePolicyGN", this.gn);
    },
    changePolicyNRF: function (event) {
      this.nrf = !this.nrf;
      // eslint-disable-next-line
      gtag("event", "filter", {
        event_category: "engagement",
        event_label: "not_restocking_fee:" + this.nrf,
      });
      this.$emit("changePolicyNRF", this.nrf);
    },
    changePolicyFRS: function (event) {
      this.frs = !this.frs;
      // eslint-disable-next-line
      gtag("event", "filter", {
        event_category: "engagement",
        event_label: "free_return_shipping:" + this.frs,
      });
      this.$emit("changePolicyFRS", this.frs);
    },
    changePolicySL: function (event) {
      this.sl = !this.sl;
      // eslint-disable-next-line
      gtag("event", "filter", {
        event_category: "engagement",
        event_label: "included_shipping_label:" + this.sl,
      });
      this.$emit("changePolicySL", this.sl);
    },
  },
};
</script>

<style scoped>
.filterPolicy {
  padding: 1em;
}
.btn {
  margin: 0.4em;
}
</style>
