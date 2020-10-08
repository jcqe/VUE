<template>
  <ul class="layui-nav layui-layout-right">
    <li class="layui-nav-item">
      <a href="javascript:;">
        <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
        admin
      </a>
      <dl class="layui-nav-child">
        <dd>
          <a href="#admin">个人中心</a>
        </dd>
        <dd>
          <a href="#admin">退出登录</a>
        </dd>
      </dl>
    </li>
    <li class="layui-nav-item">
      <a href="#admin" class="layui-icon layui-icon-set">系统设置</a>
      <dl class="layui-nav-child">
        <dd>
          <a class="layui-icon layui-icon-theme">主题颜色</a>
        </dd>
        <dd>
          <a class="layui-icon layui-icon-about">系统版本</a>
        </dd>
        <dd>
          <a class="layui-icon layui-icon-group">开发团队</a>
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