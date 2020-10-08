<template>
  <ul class="layui-nav layui-layout-left" >
        <li class="layui-nav-item">
          <router-link to="/home" class="layui-icon layui-icon-shrink-right"><i class=""></i>控制台</router-link>
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