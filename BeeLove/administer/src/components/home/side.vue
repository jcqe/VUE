<template>
  <ul class="layui-nav layui-nav-tree" lay-filter="test">
    <li class="layui-nav-item layui-nav-itemed layui-bg-black">
      <router-link to="/home/homepage">主页</router-link>
      <dl class="layui-nav-child">
        <dd>
          <router-link to="/home/homepage">控制台</router-link>
        </dd>
      </dl>
    </li>
    <li class="layui-nav-item layui-bg-black">
      <router-link to="/home/usermanage">用户管理</router-link>
      <dl class="layui-nav-child">
        <dd>
          <router-link to="/home/usermanage">账号状态管理</router-link>
        </dd>
        <dd>
          <router-link to="/home/feedback">用户反馈</router-link>
        </dd>
      </dl>
    </li>
    <li class="layui-nav-item layui-bg-black">
      <router-link to="/home/aboutus">关于我们</router-link>
    </li>
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
};
</script>

<style>
</style>