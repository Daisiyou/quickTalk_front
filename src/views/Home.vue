<template>
  <div class="content-main">
    <div v-show="showLeft" class="left"></div>
    <div class="right">
      <Row>
        <Col v-show="showList" :span="listW" class="content-list">111111</Col>
        <Col v-show="showDetail" :span="detailW" class="content-detail">111111</Col>
      </Row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import document from "@/components/document.vue";

export default {
  name: "home",
  components: {
    document
  },

  data() {
    return {
      showLeft: true,
      listW:6,
      showList:true,
      detailW:18,
      showDetail:true,
    };
  },

  created() {
    this.notificationWidth()
  },

  computed: {
    bodyW: function() {
      console.log(1234);
      return document.body.offsetWidth;
    }
  },
  methods: {
    clickDocument(msg) {
      console.log("click document title:" + msg);
    },

    notificationWidth() {
      var t = this
      window.onresize = function() {
        var width = window.document.getElementsByClassName("content-main")[0].offsetWidth
        if (width < 500){
          t.showLeft = false
          t.listW = 0
          t.showList = false
          t.detailW = 24
        }else {
          t.showLeft = true
          t.listW = 6
          t.showList = true
          t.detailW = 18
        }
      };
    }
  }
};
</script>

<style scoped>
.content-main {
  display: flex;
  height: 100%;
}
.left {
  width: 50px;
  height: 100%;
  background: red;
}
.right {
  width: 100%;
  height: 100%;
  background: blue;
}
.content-list {
  height: 100%;
  background: yellow;
}
.content-detail {
  height: 100%;
  background: green;
}
</style>

