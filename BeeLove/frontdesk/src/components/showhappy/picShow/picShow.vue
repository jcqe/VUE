<template>
  <!-- 图片展示 -->
  <div class="picShow">
    <!-- <div> -->
    <div @mouseenter="stopTimer" @mouseleave="openTimer">
      <picshowitem
        style="display:inline-block"
        v-for="item in showArr"
        :show="noshow"
        :key="item.id"
        :mysrc="item.imgurl"
        :nickname="item.nickname"
        :time="item.time"
      ></picshowitem>
    </div>
  </div>
</template>

<script>
import picshowitem from "@/components/showhappy/picShow/picShoItem.vue";
import mysrc from "../../../assets/img/showhappy/tu.jpg";
import dissrc from "../../../assets/img/showhappy/tu2.jpg";
export default {
  data() {
    return {
      timer: "",
      y: 0,
      num: 0,
      noshow: false,
      showArr: [],
    };
  },
  created() {
    this.$http
      .get("/getHappy", {})
      .then((res) => {
        this.showArr = res.data.splice(0, 12);
        for (let i = 0; i < this.showArr.length; i++) {
          this.showArr[i].imgurl = this.showArr[i].imgurl.split(',')[0];
        }
      })
      .catch((err) => {});
  },
  components: {
    picshowitem,
  },
  mounted() {
    this.setTimer();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    stopTimer() {
      clearInterval(this.timer);
    },
    openTimer() {
      this.setTimer();
    },
    //滚动图定时器
    setTimer() {
      this.timer = setInterval(() => {
        let picitem = document.querySelectorAll(".picShowItem");
        this.y -= 2;
        this.num++;
        for (let i = 0; i < picitem.length; i++) {
          picitem[i].style.top = this.y + "px";
        }
        if (this.num % 121 === 0) {
          //一排显示4个,看不见时依次弹出
          for (let i = 0; i < 4; i++) {
            let tail = this.showArr[0];
            this.showArr.push(tail);
            this.showArr.shift();
          }
          //消失图片的位移,防止照片上顶一层
          this.y += 242;
          for (let i = 0; i < picitem.length; i++) {
            picitem[i].style.top = this.y + "px";
          }
        }
      }, 50);
    },
  },
};
</script>

<style scoped="scoped">
.picShow {
  width: 974px;
  margin: 0 auto;
  position: relative;
  height: 488px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>