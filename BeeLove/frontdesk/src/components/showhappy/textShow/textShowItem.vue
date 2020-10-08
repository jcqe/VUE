<template>
  <div class="textShowItem" :happyid="item.id">
    <div class="demo-image__preview">
      <el-image class="text-pic" :src="item.imgurl[0]" :preview-src-list="item.imgurl"></el-image>
    </div>
    <div class="text" :happyid="item.id" @click="showContent">{{item.content}}</div>
    <div class="userinfo" :happyid="item.id">
      <p class="user" :happyid="item.id">{{item.nickname}}</p>
      <p class="time" :happyid="item.id">{{item.time}}</p>
      <div class="like" :happyid="item.id">
        <span class="likeico el-icon-star-on" :happyid="item.id" :style="{color:mycolor}" @click="like"></span>
        <span class="likenum" :happyid="item.id">{{item.likenum}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      mycolor: "#8c8c8c",
    };
  },
  props: ["item"],
  methods: {
    //查看文章
    showContent(event) {
      this.$alert(event.target.innerHTML, "查看", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },

    //喜欢
    like(event) {
      let flag,id;
      let likenum = event.target.nextElementSibling;
      id=event.target.getAttribute("happyid");
      if (this.mycolor === "#8c8c8c") {
        this.mycolor = "#FDD155";
        likenum.innerHTML++;
        flag = true;
      } else {
        this.mycolor = "#8c8c8c";
        likenum.innerHTML--;
        flag = false;
      }
      this.likeStory(flag,id);
    },

    //数据库点赞数改变
    likeStory(flag,id) {
      this.$http
        .get("/likeStory", {
          params: {
            id:id,
            flag: flag,
          },
        })
        .then((res) => {
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped="scoped">
.textShowItem {
  width: 220px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 0 9px 9px;
}
.text {
  line-height: 1.8em;
  height: 80px;
  overflow: hidden;
}
.text-pic {
  width: 201px;
  margin: 0 auto;
}
.time {
  color: #8c8c8c;
  margin-top: 3px;
  font-size: 12px;
}
.user {
  margin-top: 4px;
  font-size: 12px;
  color: #313131;
}
.userinfo {
  position: relative;
  margin-top: 10px;
  padding-top: 5px;
  border-top: 1px dashed #dcdcdc;
}

.likeico,
.likenum {
  color: #8c8c8c;
  position: absolute;
  top: 5px;
  right: 30px;
}

.likeico {
  font-size: 30px;
  cursor: pointer;
}

.likenum {
  top: 26px;
  right: 41px;
  font-size: 12px;
}
</style>
