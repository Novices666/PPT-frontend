<template>
  <div class="header">
    <el-menu

        default-active="1"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
        class="menu"
    >
      <img
          style="height: 100%;margin-left: 150px"
          src="/src/assets/images/logo.png"
          alt="logo"
      />

      <div class="flex-grow"/>
      <el-menu-item index="1" style="margin-left: 300px">首页</el-menu-item>
      <el-menu-item index="2">模板中心</el-menu-item>
      <el-menu-item index="3">AI 创作</el-menu-item>
      <el-menu-item index="4">我的订单</el-menu-item>
      <el-button type="primary" style="margin-top: 13px;margin-left: 350px">登录 / 注册</el-button>
    </el-menu>

  </div>
</template>

<script setup>
const handleSelect = () => {

}
</script>

<style scoped>


.el-menu-item {
  background-color: #ffffff;
  font-size: 18px;
}
.el-menu-item.is-active{
  background-color: transparent !important;
}
.el-menu-item:not(.is-disabled):hover {
  background-color: transparent;
}
</style>