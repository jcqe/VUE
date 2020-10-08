<template>
  <div class="layui-layout layui-layout-admin">
      <!-- 头部区域（可配合layui已有的水平导航） -->
    <div class="layui-header layui-bg-green" >
      <div class="layui-logo layui-bg-cyan" style="padding-right:66px">比翼-BeeLove</div>
      <!-- 头部左侧 -->
      <navleft ></navleft>
      <!-- 头部右侧 -->
      <navright></navright>
    </div>
    <!-- 左侧菜单 -->
    <side></side>
    <!-- 中间内容 -->
    <centerbody></centerbody>
    <!-- 底部版权 -->
    <bottomfooter></bottomfooter>
    
  </div>
</template>

<script>
import navleft from "@/components/admin/navleft.vue";
import navright from "@/components/admin/navright.vue";
import side from "@/components/admin/side.vue";
import centerbody from "@/components/admin/centerbody.vue";
import bottomfooter from "@/components/admin/bottomfooter.vue";

export default {
  components: {
    navleft,
    navright,
    side,
    centerbody,
    bottomfooter
  },
  mounted() {
    layui.use("element", function () {
      var element = layui.element;
    });
  },
  methods: {},
};
</script>
<style scoped>
</style>