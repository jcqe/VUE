<template>
  <!-- 主组件 -->
  <div id="app" v-cloak>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import login from "./views/login.vue";
export default {
  components: {
	login,
  },
  methods: {},
};
</script>

<style scoped="scoped">
</style>
