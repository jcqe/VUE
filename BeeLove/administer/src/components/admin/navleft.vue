<template>
  <ul class="layui-nav layui-layout-left" style="margin-left:64.5px" >
        <li class="layui-nav-item">
          <a href="#admin" class="layui-icon layui-icon-shrink-right"><i class=""></i>控制台</a>
        </li>
        <li class="layui-nav-item">
          <a href="javascript:;" class="layui-icon layui-icon-notice">消息中心</a>
          <dl class="layui-nav-child">
            <dd>
              <a class="layui-icon layui-icon-email">收件箱</a>
            </dd>
            <dd>
                <hr>
            </dd>
            <dd>
              <a class="layui-icon layui-icon-release">发邮件</a>
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
}
</script>

<style>

</style>