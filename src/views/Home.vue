<template>
  <div>
    <pulse-loader
      class=""
      v-bind:loading="isLoading"
      v-bind:color="'#111827'"
    />
    <px-assets-table v-if="!isLoading" v-bind:assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "CryptoHome",

  components: { PulseLoader, PxAssetsTable },
  data() {
    return {
      isLoading: false,
      assets: [],
      elementsPages: 10,
      pagedData: [],
    };
  },

  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
