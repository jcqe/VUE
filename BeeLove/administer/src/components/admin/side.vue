<template>
<ul class="layui-nav layui-nav-tree " lay-filter="test">
<!-- 侧边导航: <ul class="layui-nav layui-nav-tree layui-nav-side"> -->
  <li class="layui-nav-item layui-nav-itemed layui-bg-black">
    <a href="javascript:;">主页</a>
    <dl class="layui-nav-child">
      <dd><a href="javascript:;">控制台</a></dd>
    </dl>
  </li>
  <li class="layui-nav-item layui-bg-black">
    <a href="javascript:;">用户管理</a>
    <dl class="layui-nav-child">
      <dd><a href="">用户列表</a></dd>
      <dd><a href="">用户解封</a></dd>
      <dd><a href="">用户反馈</a></dd>
    </dl>
  </li>
  <li class="layui-nav-item layui-bg-black">
    <a href="javascript:;">管理员管理</a>
    <dl class="layui-nav-child">
      <dd><a href="">管理员列表</a></dd>
      <dd><a href="">管理员权限</a></dd>
    </dl>
  </li>
  <li class="layui-nav-item layui-bg-black"><a href="">个人中心</a></li>
</ul> 
</template>

<script>
export default {
    mounted() {
    layui.use("element", function () {
      var element = layui.element;
    });
  },
  methods: {},
}
</script>

<style>

</style>