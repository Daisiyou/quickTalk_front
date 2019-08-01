<template>
  <div class="content-main">
    <div class="left"></div>
    <div class="right">
      <Row>
        <Col span="6" class="content-list">111111</Col>
        <Col span="18" class="content-detail">111111</Col>
      </Row>
      
    </div>
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
  .content-main{
    display: flex;
  }
  .left{
    width: 50px;
    height: 100px;
    background: red;
  }
  .right{
    width: 100%;
    height: 100px;
    background: blue;
  }
  .content-list{
    height: 100%;
    background:yellow;
    }
    .content-detail{
      height: 100%;
      background: green;
    }
</style>

