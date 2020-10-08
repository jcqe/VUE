<template>
  <!-- 照片行 -->
  <div class="picShowItem" @mouseenter="show" @mouseleave="noshow">
    <div class="demo-image__lazy">
      <el-image class="pic" :src="mysrc" lazy></el-image>
    </div>
    <transition name="fade">
      <div v-show="display" class="pic-content">
        <p>{{nickname}}</p>
        <p>{{time}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["mysrc", "nickname", "time"],
  data() {
    return {
      display: false,
    };
  },
  methods: {
    show(event) {
      this.display = true;
    },
    noshow(event) {
      this.display = false;
    },
  },
};
</script>

<style scoped>
.picShowItem {
  position: relative;
}

.pic {
  width: 242px;
  height: 242px;
  position: relative;
}

.pic-content {
  visibility: visible;
  width: 100%;
  height: 93px;
  color: white;
  background: black;
  position: absolute;
  top: 150px;
  opacity: 0.58;
  /* transition: all 1s; */
}

.pic-content > p {
  margin: 10px 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* .pic-con-hid {
  visibility: hidden;
}*/
</style>
