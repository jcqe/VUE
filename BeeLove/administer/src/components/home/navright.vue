<template>
  <ul class="layui-nav layui-layout-right">
    <li class="layui-nav-item">
      <a href="javascript:;">
        <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
        admin
      </a>
      <dl class="layui-nav-child">
        <dd>
          <router-link to="/login">退出登录</router-link>
        </dd>
      </dl>
    </li>
    <li class="layui-nav-item">
      <router-link to="/home/aboutus" class="layui-icon layui-icon-set">系统设置</router-link>
      <dl class="layui-nav-child">
        <dd>
          <router-link to="/home/aboutus" class="layui-icon layui-icon-about">系统版本</router-link>
        </dd>
        <dd>
          <router-link to="/home/aboutus" class="layui-icon layui-icon-group">开发团队</router-link>
        </dd>
      </dl>
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