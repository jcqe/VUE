<template>
  <div class="sayhellow">
    <div class="box">
      <div class="title">
        <span>和{{name}}打个招呼吧!</span>
        <span @click="disappear" style=" cursor: pointer">X</span>
      </div>
      <div class="tip">
        <img :src="safe_icon" />
        <span>安全提示：请不要轻易透露您的联系方式，不要借钱给陌生人。</span>
        <a href="#">交友安全提示</a>
      </div>
      <div class="content">
        <div class="personaldata">
          <img :src="avatar" />
          <p class="name">{{name}}</p>
          <div>
            <span>{{age}}岁</span>
            <span>{{education}}</span>
            <p>{{place}}</p>
          </div>
          <p class="follow" @click="handlfollow">{{followtip}}</p>
        </div>
        <div class="greetings">
          <div>
            <div class="Customgreeting">
              <div class="Customgreeting_title">
                <p>自定义问候语</p>
                <img :src="ico_new" />
              </div>
              <div class="Customgreeting_conntent" v-if="isshow == 1">
                <input type="radio" checked />
                <span>{{greeting}}</span>           
                    <button @click="modify">修改</button>
              </div>
              <div class="Customgreeting_conntents" v-if="isshow == 2">
               <textarea v-model="newgreeting" class="textarea"></textarea>
                <div class="greeting_button">
                    <span>（限100字）</span>
                    <button type="button" @click="preservation">存为模板</button>
                    <button type="button" @click="cancel">取消</button>
                </div>
              </div>
            </div>
            <div class="Selectedgreetings">
              <p class="Selectedgreetings_title">精选问候语</p>
              <div>
                  <div class="Selectedgreetings_nav" @mousemove="change">
                      <span>经典开场</span>
                      <span>外貌协会</span>
                      <span>专业卖萌</span>
                      <span>星座大咖</span>
                      <span>居家达人</span>
                  </div>
                  <div>
                      <div class="Classicopening" v-if="num ==1"> 
                          <li v-for="(item,index) in ClassicopeningList" :key="index">
                              <input type="radio" name="Classicopening" >
                              <span>{{item}}</span>
                          </li>
                      </div>
                      <div class="Classicopening" v-if="num ==2">
                          <li v-for="(item,index) in AppearanceAssociationList" :key="index">
                              <input type="radio" name="AppearanceAssociation" >
                              <span>{{item}}</span>
                          </li>
                      </div>
                      <div class="Classicopening" v-if="num ==3">
                          <li v-for="(item,index) in ClassicopeningList" :key="index">
                              <input type="radio" name="Professionalsales" >
                              <span>{{item}}</span>
                          </li>
                      </div>
                      <div class="Classicopening" v-if="num ==4">
                          <li v-for="(item,index) in ClassicopeningList" :key="index">
                              <input type="radio" name="Starconstellations" >
                              <span>{{item}}</span>
                          </li>
                      </div>
                      <div class="Classicopening" v-if="num ==5">
                          <li v-for="(item,index) in ClassicopeningList" :key="index">
                              <input type="radio" name="Homegrown" >
                              <span>{{item}}</span>
                          </li>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
          <div class="sendtip">
              <input type="checkbox" >
              <span>在她的信件列表置顶（开通<span class="member">钻石会员</span>免费使用）</span>
          </div>
          <div class="send">
              <span class="moble"></span>
              <span class="jiayuanbao "></span>
              <span class="free"></span>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import safe_icon from "../../assets/img/sayhellow/safe_icon.jpg";
import ico_new from "../../assets/img/sayhellow/ico_new.jpg";
import btn_v2 from "../../assets/img/sayhellow/btn_v2.jpg";
import { log } from "util";
export default {
  data: function () {
    return {
      name: "",
      age: "",
      place: "",
      safe_icon,
      ico_new,
      btn_v2,
      avatar: "",
      education: "",
      greeting:"问声好，希望我们可以认识一下，我是1998年生人，本科学历，我觉得我们挺合适的，希望你能给我回信。",
      userid: "",
      followtip: "",
      newgreeting:"",
      isshow:1,
      num:1,
      ClassicopeningList:["你也喜欢旅游么？要不约个时间一起去哪儿玩玩吧？",
                            "看来我们有很多共同爱好嘛，有空聊聊啊。",
                            "都说双鱼发现爱会迁就对方，这点我很欣赏，可以交个朋友吗？",
                            "敞开心扉、跟着感觉走的白羊座是恋爱的不错人选哦，认识一下吧。"],
    AppearanceAssociationList:[
        "看到你的照片，我有一种宝黛初逢般似曾相识的感觉……你呢？",
        "第一次看到如此好看的姑娘，你是传说中的仙女吗？",
         "看到你的照片，我有一种宝黛初逢般似曾相识的感觉……你呢？",
        "第一次看到如此好看的姑娘，你是传说中的仙女吗？",
    ],
    };
    
  },
  props: ["id"],
  created() {
    this.$http /* 根据点击的id查询该人信息 */
      .get("/sayhellow", {
        params: {
          id: this.id,
        },
      })
      .then((res) => {
        let list = res.data[0];
        this.name = list.nickname;
        this.age = list.age;
        this.place = list.place;
        this.avatar = list.avatar;
        this.education = list.education;
      });
    let username = sessionStorage.getItem("username");
    this.$http
      .get("/getuserid", {
        params: {
          username: username,
        },
      })
      .then((res) => {
        this.userid = res.data[0].id;
      });
  },
  watch:{ 
      userid(){/* 判断是否已经关注 */
          this.$http
          .post("/selfans", {
            user_id: this.userid,
            fans_id: this.id,
          })
          .then((res) => {
              console.log(res.data.length)
            if (res.data.length == 1) {
              this.followtip = "已关注";
            }else{
                this.followtip = "关注";
            }
          })
      }
      
  },
  methods: {
      disappear(){/* 传递值 */
          this.$emit("myevent",2)
      },
      change(e){/* 改变经典问候语 */
          switch(e.target.innerHTML){
              case "经典开场": 
              this.num = 1 
              break;
              case "外貌协会": 
              this.num = 2 
              break;
              case "专业卖萌": 
              this.num = 3 
              break;
              case "星座大咖": 
              this.num = 4 
              break;
              case "居家达人": 
              this.num = 5 
              break;
          }
      },
    handlfollow(e) { /* 点击是否关注 */
      if (e.target.innerHTML == "关注") {
        this.$http
          .post("/addfans", {
            user_id: this.userid,
            fans_id: this.id,
          })
          .then((res) => {
            if (res.data == 1) {
              this.followtip = "已关注";
            }
          });
      }else if(e.target.innerHTML == "已关注"){
          this.$http
          .post("/delfans", {
            user_id: this.userid,
            fans_id: this.id,
          })
          .then((res) => {
              console.log(res.data)
            if (res.data == 1) {
              this.followtip = "关注";
            }
          });
      }
    },
    modify(){/* 点击显示修改 */
        this.newgreeting = this.greeting
        this.isshow = 2;
    },
    preservation(){/* 保存修改 */
        if(this.newgreeting.length>=100){
            alert("字数过多")
        }else{
            this.greeting = this.newgreeting
        this.isshow = 1;
        }
    },
    cancel(){/* 取消修改 */
        this.isshow = 1;
    }

  },
};
</script>
<style scoped>
.member{
    color: red;
}
.sendtip{
    margin:10px 0 0px 20px;
    font-size: 12px;
    display: flex;
    align-items: center;
}
.sendtip input{
    margin-right: 10px;
}
.send{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.free{
    display: inline-block;
    width: 124px;
    height: 50px;
    background-image: url("../../assets/img/sayhellow/btn_v2.jpg");
    background-position: -346px -313px;

}
.jiayuanbao{
    display: inline-block;
    width: 167px;
    height: 50px;
    background-image: url("../../assets/img/sayhellow/btn_v2.jpg");
    background-position: 1px -372px;

}
.moble{
    display: inline-block;
    width: 158px;
    height: 50px;
    background-image: url("../../assets/img/sayhellow/btn_v2.jpg");
    background-position: 1px -315px;

}
.Classicopening{
    font-size: 14px;
    margin-top: 10px;
    
}
.Classicopening span{
    display: inline-block;
    height: 28px;
    line-height: 28px;
    margin-left: 5px;
}
li{
    list-style: none;
}
.Selectedgreetings_nav span{
    display: inline-block;
    width: 83px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    cursor: pointer;
}
.Selectedgreetings_nav{
    width: 410px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #E7E7E7;
    margin-top: 10px;
}
.Selectedgreetings_title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #E7E7E7;
}
.Selectedgreetings{
    margin-left:10px
}
.greetings{
    width: 78%;
}
.greeting_button span{
    margin: 0 200px 0 10px;
    font-size: 14px;
}
.greeting_button button{
    width: 69px;
    height: 23px;
    line-height: 23px;
    text-align: center;
    color: #6A6A6A;
    margin-left: 7px;
}
.textarea{
    width: 99%;
    height: 80px;
}
.follow {
  margin: 20px auto;
  border-radius: 15px;
  width: 80px;
  height: 30px;
  line-height: 30px;
  font-size: 22px;
  font-weight: 700;
  background-color: pink;
}
.Customgreeting_conntent {
  margin: 10px 10px 60px 10px;
}
.Customgreeting_title {
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.Customgreeting_title img {
  width: 28px;
  height: 12px;
  margin-left: 10px;
}
.name {
  font-size: 12px;
  color: #06c;
  line-height: 24px;
}
.personaldata {
  width: 120px;
  border-right: 1px solid #e7e7e7;
  text-align: center;
  font-size: 12px;
  box-sizing: border-box;
}
.personaldata img {
  width: 90px;
  height: 105px;
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin-top: 20px;
}
.content {
  display: flex;
  margin-left: 2%;
  width: 96%;
  height: 360px;
  border: 1px solid #e7e7e7;
}
.sayhellow {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
}
.box {
  width: 620px;
  height: 570px;
  background-color: #fff;
  box-sizing: border-box;
  margin: 10px auto;
}
.title {
  background-color: #fd8eb9;
  display: flex;
  justify-content: space-between;
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}
.tip {
  font-size: 14px;
  text-align: left;
  margin: 10px;
  display: flex;
  align-items: center;
  background-color: #ffffeb;
  height: 30px;
  line-height: 30px;
  border: 1px solid #e8e8c4;
  padding-left: 5px;
}
.tip img {
  width: 18px;
  height: 20px;
  margin-right: 4px;
}
</style>