<template>
  <div class="login">
    <div class="main">
      <div class="container">
        <div class="w960">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginform from "@/components/login/loginform.vue";
export default {
  components: {
    loginform,
  },
};
</script>

<style scoped>
.w960 {
  width: 960px;
  height: 418px;
  margin: 0 auto;
  overflow: hidden;
}

.main {
  background-color: rgb(239, 239, 239);
  height: 530px;
  width: 100%;
  background-image: url("../../public/img/loginAregister/nv_1.jpg");
  background-position: center top;
}

.login {
  width: 100vm;
}
</style>
