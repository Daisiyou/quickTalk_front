<template>
  <div class="document-container">
    <document v-for="(doc, index) in documents" :key="index" v-on:clickCard="clickDocument" :title="doc.title" :content="doc.content" :date="doc.date"></document>
  </div>
</template>

<script>
// @ is an alias to /src
import document from "@/components/document.vue";

export default {
  name: "home",
  data(){
    return {
      documents:[
      {
        title:"title 1",
        content:"content 1",
        date:"1990-01-01",
      },
      {
        title:"title 2",
        content:"content 2",
        date:"1990-01-02",
      },
      {
        title:"title 3",
        content:"content 3",
        date:"1990-01-03",
      },
      {
        title:"title 4",
        content:"content 4",
        date:"1990-01-04",
      },
      {
        title:"title 5",
        content:"content 5",
        date:"1990-01-05",
      },
      ],
    }
  },
  components: {
    document,
  },
  methods :{
    clickDocument(msg){
      console.log("click document title:" + msg);
    }
  }
};
</script>

<style scoped>
  .document-container{
    margin-top: 20px;
  }
</style>

