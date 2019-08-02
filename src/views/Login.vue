<template>
  <div class="login-box">
    <Card>
      <p slot="title">登录</p>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <br />
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <br />
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请填写用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请填写密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码至少6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {},
  methods: {
    handleSubmit() {
      
      
      axios
        .get("/index")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      // this.$router.replace("home");

      //   this.$refs[name].validate(valid => {
      //     if (valid) {
      //       this.$Message.success("Success!");
      //     } else {
      //       this.$Message.error("Fail!");
      //     }
      //   });
    }
  }
};
</script>

<style scoped>
.login-box {
  width: 400px;
  margin: auto;
  margin-top: 250px;
}

@media screen and (max-width: 414px) {
  .login-box {
    width: 80%;
  }
}
</style>
