<template>
  <div class="card" @click="clickCard">
    <Card>
      <h2 slot="title">{{ title }}</h2>
      <p>{{ content }}</p>
      <p>{{ date }}</p>
    </Card>
  </div>
</template>

<script>
export default {
  name: "document",
  props: {
    title: {
      type: String,
      required: true,
      default: "this is title"
    },
    content: {
      type: String,
      required: true,
      default:
        "false是否为应用程序中的每个操作自动生成隐式蓝图（“阴影”）路由。例如，如果api/controllers/foo/bar.js文件或api/controllers/foocontroller.js中的bar函数不被自定义路由覆盖，则会自动将传入请求路由到/foo/bar以执行该操作。启用后，此设置还将附加的、特殊的隐式（“阴影”）路由绑定到任何名为index的操作，以及应用程序及其每个控制器的相对“根”URL。例如，api/controllers/foo/index.js的A/foo阴影路由，或api/controllers/index.js的A/shadow路由。"
    },
    date: {
      type: String,
      required: true,
      default: "2020-02-20"
    }
  },
  methods: {
    clickCard() {
      this.$emit("clickCard", this.title);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 80%;
  margin: auto;
  margin-bottom: 50px;
  text-align: left;
}
</style>
