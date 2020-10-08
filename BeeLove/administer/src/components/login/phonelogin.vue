<template>
  <div class="loginform">
    <!-- 头部标题 -->
    <ul class="loginTit">
      <li>快速登录</li>
    </ul>
    <!-- 底部输入 -->
    <div class="loginInner">
      <!-- 提示信息 -->
      <p style="color:red" class="login_info el-icon-error"></p>
      <ul>
        <!-- 手机号 -->
        <li id="username">
          <span>手机号</span>
          <div>
            <el-tooltip
              slot="append"
              class="item"
              effect="dark"
              content="请输入国内有效的手机号"
              placement="top"
            >
              <el-input placeholder="请输入手机号" v-model="obj.userphone" class="input-with-select">
                <template slot="prepend">+86</template>
              </el-input>
            </el-tooltip>
          </div>
        </li>
        <!-- 验证码 -->
        <li id="verifycode">
          <span>验证码</span>
          <div>
            <el-input v-model="obj.sms">
              <el-tooltip
                slot="append"
                class="item"
                effect="dark"
                content="点击免费获取短信验证码"
                placement="top"
              >
                <el-button @click="getsms" :disabled="isdisabled">{{ btntitle }}</el-button>
              </el-tooltip>
            </el-input>
          </div>
        </li>
        <li>
          <span></span>
          <div class="login_inBox">
            <el-button type="danger" @click="userLogin">登录</el-button>
          </div>
        </li>
      </ul>
      <hr />
      <!-- 没有账号，转到注册 -->
      <p class="goReg">
        <a href="http://localhost:8080/#/register">还不是会员？立即注册</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
    watch:{
        "obj.sms":function(){
            console.log(this.obj.verifCode);
        }
    },
  data() {
    return {
      isdisabled: false, //是否可以点击发送验证码
      btntitle: "获取验证码",
      obj: {
        userphone: "", //用户输入的电话
        sms: "", //用户输入的验证码
        canuse: 1, //账号状态 1：可以使用，0：被封号
        verifCode: "", //验证码
      },
    };
  },
  methods: {
    // 登录判断
    userLogin() {
      if (this.obj.userphone == "") {
        document.querySelector(".login_info").style.display = "block";
        document.querySelector(".login_info").innerHTML = "请填写您的登录账号";
      } else if (this.obj.sms != this.obj.verifCode) {
        document.querySelector(".login_info").style.display = "block";
        document.querySelector(".login_info").innerHTML = "请填写正确的验证码";
      } else if (
        this.obj.userphone &&
        this.obj.sms == this.obj.verifCode
      ) {
        document.querySelector(".login_info").style.display = "none";
        this.$http
          .post("/phonelogin", {
            username: this.obj.userphone,
          })
          .then((r) => {
            if (r.data.status == 0) {
              sessionStorage.setItem("username", this.obj.userphone);
              this.$router.push("/home"); //转到首页
            }
            alert(r.data.msg);
          });
      }
    },
    //   获取验证码
    getsms() {
      let phone1 = this.obj.userphone;
      if (!/^1[3456789]\d{9}$/.test(phone1)) {
        alert("请输入正确的手机号码");
      } else {
        this.btntitle = "请等候";
        this.isdisabled = true;
        setTimeout(() => {
          this.btntitle = "获取验证码";
          this.isdisabled = false;
        }, 10000);
        this.$http
          .post("/smsverif", {
            phone: this.obj.userphone,
          })
          .then((res) => {
            let r = res.data;
            this.obj.verifCode = r.verifCode;
            console.log(this.obj.verifCode);
          });
      }
    },
  },
};
</script>

<style scoped>
.login_info {
  display: none;
  background-color: rgb(254, 250, 203);
  border: 1px solid rgb(254, 226, 203);
  text-indent: 1em;
  line-height: 30px;
  font-size: 14px;
  color: #666;
  width: 100%;
}

hr {
  color: #999;
}

a:hover {
  color: steelblue;
}

a {
  color: #666;
}

.goReg {
  text-align: center;
}
.loginInner > ul > li > div {
  width: 220px;
  height: 32px;
  padding-left: 13px;
}
.loginInner > ul > li > span {
  width: 80px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #666;
  text-align: right;
  display: inline-block;
}

.loginInner > ul > li {
  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
}

.loginInner > ul {
  width: 100%;
  height: 230px;
}

.loginInner {
  width: 367px;
  height: 321px;
  padding: 15px 20px 20px 19px;
  border: 1px solid #d3d3d3;
  border-top: none;
  box-sizing: border-box;
}

.loginTit li {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  color: #000;
  text-align: left;
  text-indent: 30px;
  cursor: default;
  font-size: 18px;
  line-height: 52px;
}

.loginTit {
  width: 365px;
  height: 52px;
  background: #fafafa;
  border: 1px solid #d3d3d3;
}

.loginform {
  margin-left: 64px;
  margin-top: 45px;
  background-color: #fff;
  width: 367px;
  height: 373px;
}
</style>
