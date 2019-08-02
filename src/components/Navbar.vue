<template>
  <div>
    <Menu
      class="menu"
      mode="horizontal"
      :theme="theme"
      active-name="1"
      @on-select="selectItem"
    >
      <MenuItem name="1"> <Icon type="ios-home" />文章 </MenuItem>
      <MenuItem name="2"> <Icon type="ios-add-circle" />写作 </MenuItem>
      <MenuItem name="3"> <Icon type="ios-contact" />登录 </MenuItem>
    </Menu>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      theme: "light"
    };
  },
  methods: {
    selectItem(name) {
      console.log(name);
    }
  }
};
</script>
<style scoped></style>
