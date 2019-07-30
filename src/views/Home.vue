<template>
  <div class="document-container">
    <document v-for="index in 10"></document>
  </div>
</template>

<script>
// @ is an alias to /src
import document from "@/components/document.vue";

export default {
  name: "home",
  components: {
    document,
  }
};
</script>

<style scoped>
  .document-container{
    margin-top: 20px;
  }
</style>

