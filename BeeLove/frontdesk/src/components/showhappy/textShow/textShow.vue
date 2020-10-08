<template>
  <!-- 文字展示 -->
  <div class="textWidth">
    <div class="textShow">
      <textshowitem v-for="item in textShowArr" :key="item.id" :item="item"></textshowitem>
    </div>
    <el-pagination
      class="fenye"
      background
      layout="prev, pager, next"
      size-change="change"
      :total="length"
      :page-size="12"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import textshowitem from "@/components/showhappy/textShow/textShowItem.vue";
import mysrc from "../../../assets/img/showhappy/tu.jpg";
import Bus from "../../../Bus/index.js";
export default {
  data() {
    return {
      textShowArr: [],
      length: 12,
      currentPage: 1,
      happyid: "",
    };
  },
  updated(){
    //刷新分页的数据
      this.getHappyStory();
	},
  created() {
    this.$http
      .get("/getHappy", {})
      .then((res) => {
        this.length = res.data.length;
      })
      .catch((err) => {});
    this.getHappyStory();
  },
  mounted() {
    Bus.$on("addLength", (val) => {
      this.getHappyStory();
      this.length += val;
    });
  },
  components: {
    textshowitem,
  },
  methods: {
    //切换页面
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getHappyStory();
    },
    //分页发起请求
    getHappyStory() {
      this.$http
        .get("/getHappy", {
          params: {
            page: this.currentPage,
          },
        })
        .then((res) => {
          this.textShowArr = res.data;
          //转换成照片数组
          for (let i = 0; i < this.textShowArr.length; i++) {
            let arr = this.textShowArr[i].imgurl.split(",");
            this.textShowArr[i].imgurl = arr.slice(0, arr.length - 1);
          }
        })
        .catch((err) => {});
    },
  },
};
</script>

<style scoped="scoped">
.textWidth {
  width: 974px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.textShow {
  width: 974px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.fenye {
  margin: 10px 0;
}
</style>
// {
//           id: 1,
//           content: "嘻嘻嘻房间卡昂解放啦大部分刚好是打发",
//           imgurl: null,
//           time: "2020-09-01",
//           userid: 1,
//         },
//         {
//           id: 2,
//           content: "哈哈哈哈",
//           imgurl: mysrc,
//           time: "2020-09-01",
//           userid: 2,
//         },
//         {
//           id: 3,
//           content: "哈哈哈哈",
//           imgurl: null,
//           time: "2020-09-01",
//           userid: 5,
//         },
//         {
//           id: 4,
//           content:
//             "打发第三方何老师打比方说垃圾啊的爆发式来得及发货的健身房很骄傲",
//           imgurl: mysrc,
//           time: "2020-09-01",
//           userid: 4,
//         },
//         {
//           id: 5,
//           content: "哈哈哈哈",
//           imgurl: null,
//           time: "2020-09-01",
//           userid: 7,
//         },
//         {
//           id: 6,
//           content: "哈哈哈哈",
//           imgurl: mysrc,
//           time: "2020-09-01",
//           userid: 8,
//         },
//         {
//           id: 7,
//           content: "哈哈哈哈",
//           imgurl: null,
//           time: "2020-09-01",
//           userid: 1,
//         },
//         {
//           id: 8,
//           content:
//             "发的说法萨迪克减肥呢黑龙江阿克苏你回复就爱上的那部分了架空地板",
//           imgurl: mysrc,
//           time: "2020-09-01",
//           userid: 2,
//         },
//         {
//           id: 9,
//           content: "哈哈哈哈",
//           imgurl: null,
//           time: "2020-09-01",
//           userid: 5,
//         },
//         {
//           id: 10,
//           content: "哈哈哈哈",
//           imgurl: mysrc,
//           time: "2020-09-01",
//           userid: 4,
//         },
//         {
//           id: 11,
//           content: "哈哈哈哈",
//           imgurl: null,
//           time: "2020-09-01",
//           userid: 7,
//         },
//         {
//           id: 12,
//           content: "哈哈哈哈",
//           imgurl: mysrc,
//           time: "2020-09-01",
//           userid: 8,
//         },