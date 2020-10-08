<template>
  <div>
    <div class="total">全部会员 :有{{num}}人符合要求</div>
    <div class="tags">
      热门标签：
      <span class="hottag" v-for="(item,index) in hottags" :key="index">{{item}}</span>
    </div>
    <div class="selecttag">
      选择：
      年龄：
      <age @myage="getage"></age>婚姻状况：
      <maritalstatus @mymaritalstatus="getmaritalstatus"></maritalstatus>教育：
      <education @myeducation="geteducation"></education>身高：
      <height @myheight="getheight"></height>薪资：
      <salary @mysalary="getsalary"></salary>位置：
      <areac @myareac="getareac"></areac>
    </div>
    <div class="allshow">
      <div v-for="item in list" :key="item.id" class="person">
        <div>
          <img class="photo" :src="item.avatar" />
          <p class="nickname">{{item.nickname}}</p>
          <div class="ageheight">
            <span>{{item.age}}岁</span>
            <span>{{item.education}}</span>
          </div>
          <p class="place">{{item.place}}</p>
          <p class="hello" @click="tosayhoellow(item.id)">打招呼</p>
        </div>
      </div>
      <sayhellow v-if="show == 1" :id="id" @myevent="getshow"></sayhellow>
    </div>
  </div>
</template>
<script>
import { log } from "util";
import age from "./age.vue";
import maritalstatus from "./maritalstatus.vue";
import education from "./education.vue";
import height from "./height.vue";
import areac from "./area.vue";
import salary from "./salary.vue";
import sayhellow from "./sayhellow.vue";
import Bus from "../../bus.js";
export default {
  data: function () {
    return {
      num: "",
      hottags: [
        "高级白领",
        "教师",
        "医生",
        "银行职员",
        "空姐",
        "公务员",
        "会计",
        "学生",
      ],
      age: "",
      marriage: "",
      height: "",
      education: "",
      place: "",
      salary: "",
      result: "" /* 查询语句拼接的结果 */,
      list: [],
      show: 2,
      id: "",
      lable: "",
    };
  },
  components: {
    age,
    maritalstatus,
    education,
    height,
    areac,
    salary,
    sayhellow,
    
  },
  created() {
    /* 初始页面查询语句 */
    let username = sessionStorage.getItem("username");
    this.$http
      .get("/getuserid", {
        params: {
          username: username,
        },
      })
      .then((res) => {
        console, log(res.data);
        if (res.data[0].sex == "男") {
          this.result = `sex = '女' and id != ${res.data[0].id}`;
        } else {
          this.result = `sex = '男' and id != ${res.data[0].id}`;
        }
      });
  },
  watch: {
    /* 监听每个数据的改变，并改变查询语句 */
    result: function () {
      this.getsearch(this.result);
    },
    lable: function (now, old) {
      if (this.result.indexOf(old)) {
        this.result = this.result.replace(`${old}`, `${now}`);
      } else {
        this.result = this.result + " and " + this.lable;
      }
    },
    age: function (now, old) {
      if (this.age != null) {
        if (this.result == "") {
          this.result = this.age;
        } else {
          if (this.result.indexOf(old)) {
            this.result = this.result.replace(`${old}`, `${now}`);
          } else {
            this.result = this.result + " and " + this.age;
          }
        }
      } else {
        this.result = this.result;
      }
    },
    marriage: function (now, old) {
      if (this.marriage != "") {
        if (this.result == "") {
          this.result = this.marriage;
        } else {
          if (this.result == old) {
            this.result = this.marriage;
          } else {
            if (this.marriage == 'marriage="不限"') {
              this.result = this.result.replace(" and " + `${old}`, "");
            } else {
              if (this.result.indexOf(old)) {
                if (old == 'marriage="不限"') {
                  this.result = this.result + " and " + this.marriage;
                } else {
                  this.result = this.result.replace(`${old}`, `${now}`);
                }
              } else {
                this.result = this.result + " and " + this.marriage;
              }
            }
          }
        }
      } else {
        this.result = this.result;
      }
    },
    height: function (now, old) {
      if (this.height != "") {
        if (this.result == "") {
          this.result = this.height;
        } else {
          if (this.result == old) {
            this.result = this.height;
          } else {
            if (this.height == 'height="不限"') {
              this.result = this.result.replace(" and " + `${old}`, "");
            } else {
              if (this.result.indexOf(old)) {
                if (old == 'height="不限"') {
                  this.result = this.result + " and " + this.height;
                } else {
                  this.result = this.result.replace(`${old}`, `${now}`);
                }
              } else {
                this.result = this.result + " and " + this.height;
              }
            }
          }
        }
      } else {
        this.result = this.result;
      }
    },
    education: function (now, old) {
      if (this.education != "") {
        if (this.result == "") {
          this.result = this.education;
        } else {
          if (this.result == old) {
            this.result = this.education;
          } else {
            if (this.education == 'education="不限"') {
              this.result = this.result.replace(" and " + `${old}`, "");
            } else {
              if (this.result.indexOf(old)) {
                if (old == 'education="不限"') {
                  this.result = this.result + " and " + this.education;
                } else {
                  this.result = this.result.replace(`${old}`, `${now}`);
                }
              } else {
                this.result = this.result + " and " + this.education;
              }
            }
          }
        }
      } else {
        this.result = this.result;
      }
    },
    place: function (now, old) {
      if (this.place != null) {
        if (this.result == "") {
          this.result = this.place;
        } else {
          if (this.result == old) {
            this.result = this.place;
          } else {
            if (
              this.place == 'place="不限"' ||
              this.place == 'place="不限-不限"'
            ) {
              this.result = this.result.replace(" and " + `${old}`, "");
            } else {
              if (this.result.indexOf(old)) {
                if (old == 'place="不限"' || old == 'place="不限-不限"') {
                  this.result = this.result + " and " + this.place;
                } else {
                  this.result = this.result.replace(`${old}`, `${now}`);
                }
              } else {
                this.result = this.result + " and " + this.place;
              }
            }
          }
        }
      } else {
        this.result = this.result;
      }
    },
    salary: function (now, old) {
      if (this.salary != "") {
        if (this.result == "") {
          this.result = this.salary;
        } else {
          if (this.result == old) {
            this.result = this.salary;
          } else {
            if (this.salary == 'salary="不限"') {
              this.result = this.result.replace(" and " + `${old}`, "");
            } else {
              if (this.result.indexOf(old)) {
                if (old == 'salary="不限"') {
                  this.result = this.result + " and " + this.salary;
                } else {
                  this.result = this.result.replace(`${old}`, `${now}`);
                }
              } else {
                this.result = this.result + " and " + this.salary;
              }
            }
          }
        }
      } else {
        this.result = this.result;
      }
      console.log(this.result);
    },
  },
  mounted() {
    console.log(Bus);
    Bus.$on("getlable", (lable) => { /* 接收输入框的值并拼接查询语句 */
      this.lable = `label LIKE '%${lable}%'` 
    });
  },
  methods:{
    getshow(show) {
      /* 隐藏打招呼界面 */
      this.show = show;
    },
    tosayhoellow(id) {
      /* 显示打招呼界面 */
      this.show = 1;
      this.id = id;
    },
    getsearch(result) {
      /* 数据查询 */
      this.$http
        .get("/infsearch", {
          params: {
            result: result,
          },
        })
        .then((res) => {
          this.num = res.data.length;
          this.list = res.data;
          console.log("list:" + this.list);
        });
    },
    /* 得到选择的数据 */
    getage(age) {
      this.age = age;
    },
    getsex(sex) {
      this.sex = sex;
    },
    getmaritalstatus(marriage) {
      this.marriage = marriage;
    },
    geteducation(education) {
      this.education = education;
    },
    getheight(height) {
      console.log(height);
      this.height = height;
    },
    getareac(place) {
      console.log(place);
      this.place = place;
    },
    getsalary(salary) {
      this.salary = salary;
    },
  },
};
</script>
<style scoped="scoped">
* {
  padding: 0;
  margin: 0;
}

.photo {
  width: 150px;
  height: 170px;
}
.total {
  width: 100%;
  background-color: #e1e1e1;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
}
.hottag {
  display: inline-block;
  border: 1px solid palevioletred;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  background-color: #fff;
  color: #ea8989;
}
.hottag:hover {
  background-color: #ea8989;
  color: #fff;
}
.tags {
  margin: 10px 0;
}
.selecttag {
  display: flex;
  flex-wrap: wrap;
}
.allshow {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: #fff;
  padding: 20px 0;
}
.person {
  width: 180px;
  height: 296px;
  border: 1px solid;
  margin: 5px;
  text-align: center;
  background-color: #f7f7f7;
}
.allshow img {
  padding-top: 15px;
}
.nickname {
  color: #2c81d6;
  font-weight: 600;
  height: 22px;
  line-height: 22px;
}
.ageheight span {
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  border: 1px solid #f4d6b3;
  background-color: #fff8f0;
  color: #ad6623;
  font-family: 宋体;
  overflow: hidden;
  padding: 2px 3px;
  margin: 20px 2px;
}
.hello {
  font-size: 14px;
  border: 1px solid #ffb5bf;
  width: 50px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #ff7081;
  margin: 5px auto;
  font-family: "Microsoft Yahei", "宋体";
  cursor: pointer;
}
.place {
  margin-top: 8px;
}
</style>