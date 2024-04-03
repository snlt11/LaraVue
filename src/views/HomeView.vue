<template>
  <h1>test</h1>
</template>

<script>
import mixins from "@/mixins/mixins.js";
export default {
  mixins: [mixins],
  beforeMount() {
    this.loadData("products");
  },
};
</script>

<style></style>
