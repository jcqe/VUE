<template>
  <div class="layui-layout layui-layout-admin">
      <!-- 头部区域（可配合layui已有的水平导航） -->
    <div class="layui-header layui-bg-green" >
      <div class="layui-logo layui-bg-cyan">比翼-BeeLove</div>
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
import navleft from "@/components/home/navleft.vue";
import navright from "@/components/home/navright.vue";
import side from "@/components/home/side.vue";
import centerbody from "@/components/home/centerbody.vue";
import bottomfooter from "@/components/home/bottomfooter.vue";

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