<template>
  <div class="register">
    <div class="main">
      <div class="container">
        <div class="w960">
          <div class="left">
            <div class="logo"></div>
            <div class="bg"></div>
            <div class="ad"></div>
          </div>
          <div class="right">
            <h1>青春不常在，抓紧时间谈恋爱</h1>
            <p>花点时间填写真实信息，我们会让结果更合您的心意。</p>
            <span></span>
            <span></span>
            <ul class="reg_form">
              <!-- 性别 -->
              <li id="sex">
                <span>我是</span>
                <div>
                  <el-radio v-model="sex" label="男" value="男">
                    <img src="../../public/img/loginAregister/man.png" alt />
                    男
                  </el-radio>
                  <el-radio v-model="sex" label="女" value="女">
                    <img src="../../public/img/loginAregister/female.png" alt />
                    女
                  </el-radio>
                </div>
                <span>* 注册后修改需联系客服</span>
              </li>
              <!-- 生日 -->
              <li id="birth">
                <span>生日</span>
                <div class="block">
                  <el-date-picker
                    v-model="birth"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                </div>
                <span>* 注册后修改需联系客服</span>
              </li>
              <!-- 常住地 -->
              <li id="place">
                <span>常住地</span>
                <div class="block">
                  <el-cascader
                    expand-trigger="hover"
                    :options="placeoptions"
                    v-model="selectplace"
                    @change="placeChange"
                  ></el-cascader>
                </div>
                <span>
                  <!-- <el-input placeholder="找不到?手动输入：省-市-区" v-model="inputplace" clearable></el-input> -->
                </span>
              </li>
              <!-- 婚姻状况 -->
              <li id="marriage">
                <span>婚姻状况</span>
                <div class="block">
                  <el-radio-group v-model="marriage">
                    <el-radio label="未婚">未婚</el-radio>
                    <el-radio label="离异">离异</el-radio>
                    <el-radio label="丧偶">丧偶</el-radio>
                  </el-radio-group>
                </div>
                <span>*注册后修改需联系客服</span>
              </li>
              <!-- 身高 -->
              <li id="height">
                <span>身高</span>
                <div class="block">
                  <el-select v-model="height" placeholder="请选择">
                    <el-option v-for="item in heightoptions" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                </div>
                <span></span>
              </li>
              <!-- 学历 -->
              <li id="education">
                <span>学历</span>
                <div class="block">
                  <el-select v-model="education" placeholder="请选择">
                    <el-option
                      v-for="item in educationoptions"
                      :key="item.value"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
                <span></span>
              </li>
              <!-- 月薪 -->
              <li id="salary">
                <span>月薪</span>
                <div class="block">
                  <el-select v-model="salary" placeholder="请选择">
                    <el-option v-for="item in salaryoptions" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                </div>
                <span></span>
              </li>
              <!-- 分隔线 -->
              <li class="form_line"></li>
              <!-- 全国人大常委会关于加强网络信息保护的决定 -->
              <li style="margin: 0 auto;display: inline-block;">
                <el-button
                  type="text"
                  @click="open"
                  target="_blank"
                  style="color:#939393;text-decoration:underline;font-size: 12px;"
                >全国人大常委会关于加强网络信息保护的决定</el-button>
              </li>
              <!-- 手机号 -->
              <li id="username">
                <span>手机号</span>
                <div style="padding-left:54px">
                  <el-input placeholder="请输入手机号" v-model="obj.userphone" class="input-with-select">
                    <template slot="prepend">中国+86</template>
                    <el-tooltip
                      slot="append"
                      class="item"
                      effect="dark"
                      content="点击获取验证码"
                      placement="top"
                    >
                      <el-button @click="getsms" :disabled="isdisabled">{{ btntitle }}</el-button>
                    </el-tooltip>
                  </el-input>
                </div>
                <span></span>
              </li>
              <!-- 验证码 -->
              <li id="verifycode">
                <span>验证码</span>
                <div style="padding-left:54px">
                  <el-tooltip
                    slot="append"
                    class="item"
                    effect="dark"
                    content="请输入四位数字验证码"
                    placement="top"
                  >
                    <el-input v-model="obj.sms" placeholder="请输入验证码"></el-input>
                  </el-tooltip>
                </div>
                <span></span>
              </li>
              <!-- 密码 -->
              <li id="pwd">
                <span>创建密码</span>
                <div style="padding-left:54px">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="至少8-16个字符，至少1个大写字母，1个小写字母和1个数字"
                    placement="top"
                  >
                    <el-input v-model="pwd" placeholder="请输入密码" clearable show-password></el-input>
                  </el-tooltip>
                </div>
                <span></span>
              </li>
              <!-- 确认密码 -->
              <li id="pwdAgin">
                <span>确认密码</span>
                <div style="padding-left:54px">
                  <el-tooltip
                    slot="append"
                    class="item"
                    effect="dark"
                    content="确认密码和创建密码必须一致"
                    placement="top"
                  >
                    <el-input v-model="pwdAgin" placeholder="请再次输入密码" clearable></el-input>
                  </el-tooltip>
                </div>
                <span></span>
              </li>
              <!-- 密保问题 -->
              <li id="qst">
                <span>密保</span>
                <div style="width:217px;margin-left:54px">
                  <el-tooltip placement="top">
                    <div slot="content">
                      设置一个密保问题，用于找回密码,10个字以内
                      <br />如:"我的名字是"
                    </div>
                    <el-input placeholder="请输入密保问题" v-model="qst" clearable></el-input>
                  </el-tooltip>
                </div>
                <span style="width:220px">
                  <el-tooltip placement="top">
                    <div slot="content">
                      密保问题的答案，10个字以内
                      <br />如:"张三"
                    </div>
                    <el-input placeholder="请输入密保答案" v-model="asw" clearable></el-input>
                  </el-tooltip>
                </span>
              </li>
              <!-- 昵称 -->
              <li id="nickname">
                <span>昵称</span>
                <div style="padding-left:54px">
                  <el-input v-model="nickname" placeholder="请输入昵称" clearable></el-input>
                </div>
                <span></span>
              </li>
              <!-- 自我介绍 -->
              <li id="introduction" style="height:200px">
                <span>自我介绍</span>
                <div style="margin-left:54px;width:400px">
                  <el-tabs type="border-card">
                    <el-tab-pane>
                      <span slot="label">
                        <i class="el-icon-edit-outline"></i> 贴标签
                      </span>
                      <p>请至少选择3个标签，别担心，你可以稍后进行修改</p>
                      <div class="tagSelect intro1">
                        <el-tag
                          v-for="tag in tagSelect"
                          :key="tag.name"
                          :type="tag.type"
                          closable
                          :disable-transitions="false"
                          @close="handleClose(tag)"
                        >{{tag.name}}</el-tag>
                      </div>
                      <el-tag
                        v-for="tag in tags"
                        :key="tag.name"
                        :type="tag.type"
                        @click="handleAdd(tag)"
                      >{{tag.name}}</el-tag>
                    </el-tab-pane>
                    <el-tab-pane>
                      <span slot="label">
                        <i class="el-icon-edit"></i> 自己写
                      </span>
                      <textarea
                        class="intro2"
                        placeholder="听说你上得了厅堂，下得了厨房，杀得了木马，翻得了围墙，但是为什么没有人知道呢？快写下你的优秀，让TA看到吧!..."
                      ></textarea>
                    </el-tab-pane>
                  </el-tabs>
                </div>
                <span style="width:0px"></span>
              </li>
              <!-- 注册 -->
              <li style="margin-top:40px">
                <span></span>
                <div>
                  <el-button type="primary" class="reg_btn" @click="register">免费注册</el-button>
                </div>
                <span></span>
              </li>
              <!-- 同意条款 -->
              <li style="margin-top:30px">
                <span></span>
                <div class="policy">
                  <el-checkbox v-model="agree">
                    我同意
                    <a href="#">注册条款</a>和
                    <a href>会员加入标准</a>
                  </el-checkbox>
                  <p style="margin-left:54px;margin-top:20px; width:300px">我承诺年满18岁、单身、抱着积极的态度，真诚交友</p>
                </div>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    sex() {
      document.querySelector("#sex").classList.remove("red");
    },
    birth() {
      document.querySelector("#birth").classList.remove("red");
    },
    marriage() {
      document.querySelector("#marriage").classList.remove("red");
    },
    "obj.userphone": function () {
      if (/^1[3456789]\d{9}$/.test(this.obj.userphone)) {
        document.querySelector("#username").classList.remove("red");
      } else {
        document.querySelector("#username").classList.add("red");
      }
    },
    "obj.sms": function () {
      console.log(this.obj["verifcode"]);
      if (this.obj.sms == this.obj.verifcode) {
        document.querySelector("#verifycode").classList.remove("red");
      } else {
        document.querySelector("#verifycode").classList.add("red");
      }
    },
    pwd() {
      // 至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(this.pwd)) {
        document.querySelector("#pwd").classList.remove("red");
      } else {
        document.querySelector("#pwd").classList.add("red");
      }
    },
    pwdAgin() {
      if (this.pwdAgin === this.pwd) {
        document.querySelector("#pwdAgin").classList.remove("red");
      } else {
        document.querySelector("#pwdAgin").classList.add("red");
      }
    },
    nickname() {
      if (this.nickname.length <= 10 && this.nickname.length > 0) {
        document.querySelector("#nickname").classList.remove("red");
      }
    },
    qst() {
      if (this.qst.length <= 10) {
        document.querySelector("#qst").classList.remove("red");
      } else {
        document.querySelector("#qst").classList.add("red");
      }
    },
    asw() {
      if (this.asw.length <= 10) {
        document.querySelector("#qst").classList.remove("red");
      } else {
        document.querySelector("#qst").classList.add("red");
      }
    },
  },
  props: ["disabled"],
  data: function () {
    return {
      asw: "", //密保答案
      qst: "", //密保问题
      agree: "", //同意条款
      tagSelect: [], //选择的标签
      tags: [
        { name: "内敛", type: "danger" },
        { name: "开朗", type: "success" },
        { name: "简单", type: "" },
        { name: "独立", type: "warning" },
        { name: "NBA", type: "success" },
        { name: "旅行", type: "danger" },
        { name: "美食", type: "info" },
        { name: "看书", type: "warning" },
        { name: "跳舞", type: "success" },
        { name: "企业高管", type: "success" },
        { name: "建筑行业", type: "info" },
        { name: "单亲家庭", type: "" },
        { name: "四世同堂", type: "warning" },
        { name: "房奴", type: "info" },
        { name: "攒钱ing", type: "success" },
      ], //标签
      nickname: "", //昵称
      pwdAgin: "", //确认密码
      pwd: "", //密码
      isdisabled: false, //是否可以点击发送验证码
      btntitle: "验证",
      obj: {
        userphone: "", //用户输入的电话
        sms: "", //用户输入的验证码
        canuse: 1, //账号状态 1：可以使用，0：被封号
        verifcode: "", //验证码
      },
      sex: "", //性别
      birth: "", //出生日期
      placeoptions: [
        {
          label: "北京市",
          value: "北京市",
          children: [
            { label: "东城区",value: "东城区" },
            { label: "西城区",value: "西城区" },
            { label: "崇文区",value: "崇文区" },
            { label: "宣武区",value: "宣武区" },
            { label: "朝阳区",value: "朝阳区" },
            { label: "海淀区",value: "海淀区" },
            { label: "丰台区",value: "丰台区" },
            { label: "石景山区",value: "石景山区" },
            { label: "房山区",value: "房山区" },
            { label: "通州区",value: "通州区" },
            { label: "顺义区",value: "顺义区" },
            { label: "昌平区",value: "昌平区" },
            { label: "大兴区",value: "大兴区" },
            { label: "怀柔区",value: "怀柔区" },
            { label: "平谷区",value: "平谷区" },
            { label: "门头沟区",value: "门头沟区" },
            { label: "密云县",value: "密云县" },
            { label: "延庆县",value: "延庆县" },
            { label: "其他",value: "其他" },
          ],
        },
        {
          label: "天津市",
          value: "天津市",
          children: [
            { label: "和平区",value: "和平区" },
            { label: "河东区",value: "西城区" },
            { label: "河西区",value: "河西区" },
            { label: "南开区",value: "南开区" },
            { label: "河北区",value: "河北区" },
            { label: "红桥区",value: "红桥区" },
            { label: "塘沽区",value: "塘沽区" },
            { label: "汉沽区",value: "汉沽区" },
            { label: "大港区",value: "大港区" },
            { label: "东丽区",value: "东丽区" },
            { label: "西青区",value: "西青区" },
            { label: "北辰区",value: "北辰区" },
            { label: "津南区",value: "津南区" },
            { label: "武清区",value: "武清区" },
            { label: "宝坻区",value: "宝坻区" },
            { label: "静海县",value: "静海县" },
            { label: "宁河县",value: "宁河县" },
            { label: "延庆县",value: "延庆县" },
            { label: "其他",value: "其他" },
          ],
        },
        {
          label: "河北省",
          value: "河北省",
          children: [
            {
              prov: "河北省",
              value: "石家庄市",
              label: "石家庄市",
            },
            {
              prov: "河北省",
              value: "唐山市",
              label: "唐山市",
            },
            {
              prov: "河北省",
              value: "秦皇岛市",
              label: "秦皇岛市",
            },
            {
              prov: "河北省",
              value: "邯郸市",
              label: "邯郸市",
            },
            {
              prov: "河北省",
              value: "邢台市",
              label: "邢台市",
            },
            {
              prov: "河北省",
              value: "保定市",
              label: "保定市",
            },
            {
              prov: "河北省",
              value: "张家口市",
              label: "张家口市",
            },
            {
              prov: "河北省",
              value: "承德市",
              label: "承德市",
            },
            {
              prov: "河北省",
              value: "沧州市",
              label: "沧州市",
            },
            {
              prov: "河北省",
              value: "廊坊市",
              label: "廊坊市",
            },
            {
              prov: "河北省",
              value: "衡水市",
              label: "衡水市",
            },
          ],
        },
        {
          label: "山西省",
          value: "山西省",
          children: [
            {
              prov: "山西省",
              value: "太原市",
              label: "太原市",
            },
            {
              prov: "山西省",
              value: "大同市",
              label: "大同市",
            },
            {
              prov: "山西省",
              value: "阳泉市",
              label: "阳泉市",
            },
            {
              prov: "山西省",
              value: "长治市",
              label: "长治市",
            },
            {
              prov: "山西省",
              value: "晋城市",
              label: "晋城市",
            },
            {
              prov: "山西省",
              value: "朔州市",
              label: "朔州市",
            },
            {
              prov: "山西省",
              value: "晋中市",
              label: "晋中市",
            },
            {
              prov: "山西省",
              value: "运城市",
              label: "运城市",
            },
            {
              prov: "山西省",
              value: "忻州市",
              label: "忻州市",
            },
            {
              prov: "山西省",
              value: "临汾市",
              label: "临汾市",
            },
            {
              prov: "山西省",
              value: "吕梁市",
              label: "吕梁市",
            },
          ],
        },
        {
          label: "内蒙古自治区",
          value: "内蒙古自治区",
          children: [
            {
              prov: "内蒙古自治区",
              value: "呼和浩特市",
              label: "呼和浩特市",
            },
            {
              prov: "内蒙古自治区",
              value: "包头市",
              label: "包头市",
            },
            {
              prov: "内蒙古自治区",
              value: "乌海市",
              label: "乌海市",
            },
            {
              prov: "内蒙古自治区",
              value: "赤峰市",
              label: "赤峰市",
            },
            {
              prov: "内蒙古自治区",
              value: "通辽市",
              label: "通辽市",
            },
            {
              prov: "内蒙古自治区",
              value: "鄂尔多斯市",
              label: "鄂尔多斯市",
            },
            {
              prov: "内蒙古自治区",
              value: "呼伦贝尔市",
              label: "呼伦贝尔市",
            },
            {
              prov: "内蒙古自治区",
              value: "巴彦淖尔市",
              label: "巴彦淖尔市",
            },
            {
              prov: "内蒙古自治区",
              value: "乌兰察布市",
              label: "乌兰察布市",
            },
            {
              prov: "内蒙古自治区",
              value: "兴安盟",
              label: "兴安盟",
            },
            {
              prov: "内蒙古自治区",
              value: "锡林郭勒盟",
              label: "锡林郭勒盟",
            },
            {
              prov: "内蒙古自治区",
              value: "阿拉善盟",
              label: "阿拉善盟",
            },
          ],
        },
        {
          label: "辽宁省",
          value: "辽宁省",
          children: [
            {
              prov: "辽宁省",
              value: "沈阳市",
              label: "沈阳市",
            },
            {
              prov: "辽宁省",
              value: "大连市",
              label: "大连市",
            },
            {
              prov: "辽宁省",
              value: "鞍山市",
              label: "鞍山市",
            },
            {
              prov: "辽宁省",
              value: "抚顺市",
              label: "抚顺市",
            },
            {
              prov: "辽宁省",
              value: "本溪市",
              label: "本溪市",
            },
            {
              prov: "辽宁省",
              value: "丹东市",
              label: "丹东市",
            },
            {
              prov: "辽宁省",
              value: "锦州市",
              label: "锦州市",
            },
            {
              prov: "辽宁省",
              value: "营口市",
              label: "营口市",
            },
            {
              prov: "辽宁省",
              value: "阜新市",
              label: "阜新市",
            },
            {
              prov: "辽宁省",
              value: "辽阳市",
              label: "辽阳市",
            },
            {
              prov: "辽宁省",
              value: "盘锦市",
              label: "盘锦市",
            },
            {
              prov: "辽宁省",
              value: "铁岭市",
              label: "铁岭市",
            },
            {
              prov: "辽宁省",
              value: "朝阳市",
              label: "朝阳市",
            },
            {
              prov: "辽宁省",
              value: "葫芦岛市",
              label: "葫芦岛市",
            },
          ],
        },
        {
          label: "吉林省",
          value: "吉林省",
          children: [
            {
              prov: "吉林省",
              value: "长春市",
              label: "长春市",
            },
            {
              prov: "吉林省",
              value: "吉林市",
              label: "吉林市",
            },
            {
              prov: "吉林省",
              value: "四平市",
              label: "四平市",
            },
            {
              prov: "吉林省",
              value: "辽源市",
              label: "辽源市",
            },
            {
              prov: "吉林省",
              value: "通化市",
              label: "通化市",
            },
            {
              prov: "吉林省",
              value: "白山市",
              label: "白山市",
            },
            {
              prov: "吉林省",
              value: "松原市",
              label: "松原市",
            },
            {
              prov: "吉林省",
              value: "白城市",
              label: "白城市",
            },
            {
              prov: "吉林省",
              value: "延边朝鲜族自治州",
              label: "延边朝鲜族自治州",
            },
          ],
        },
        {
          label: "黑龙江省",
          value: "黑龙江省",
          children: [
            {
              prov: "黑龙江省",
              value: "哈尔滨市",
              label: "哈尔滨市",
            },
            {
              prov: "黑龙江省",
              value: "齐齐哈尔市",
              label: "齐齐哈尔市",
            },
            {
              prov: "黑龙江省",
              value: "鸡西市",
              label: "鸡西市",
            },
            {
              prov: "黑龙江省",
              value: "鹤岗市",
              label: "鹤岗市",
            },
            {
              prov: "黑龙江省",
              value: "双鸭山市",
              label: "双鸭山市",
            },
            {
              prov: "黑龙江省",
              value: "大庆市",
              label: "大庆市",
            },
            {
              prov: "黑龙江省",
              value: "伊春市",
              label: "伊春市",
            },
            {
              prov: "黑龙江省",
              value: "佳木斯市",
              label: "佳木斯市",
            },
            {
              prov: "黑龙江省",
              value: "七台河市",
              label: "七台河市",
            },
            {
              prov: "黑龙江省",
              value: "牡丹江市",
              label: "牡丹江市",
            },
            {
              prov: "黑龙江省",
              value: "黑河市",
              label: "黑河市",
            },
            {
              prov: "黑龙江省",
              value: "绥化市",
              label: "绥化市",
            },
            {
              prov: "黑龙江省",
              value: "大兴安岭地区",
              label: "大兴安岭地区",
            },
          ],
        },
        {
          label: "上海市",
          value: "上海市",
          children: [
            { label: "黄浦区",value: "黄浦区" },
            { label: "卢湾区",value: "卢湾区" },
            { label: "徐汇区",value: "徐汇区" },
            { label: "长宁区",value: "长宁区" },
            { label: "静安区",value: "静安区" },
            { label: "普陀区",value: "普陀区" },
            { label: "闸北区",value: "闸北区" },
            { label: "虹口区",value: "虹口区" },
            { label: "杨浦区",value: "杨浦区" },
            { label: "宝山区",value: "宝山区" },
            { label: "闵行区",value: "闵行区" },
            { label: "嘉定区",value: "嘉定区" },
            { label: "松江区",value: "松江区" },
            { label: "金山区",value: "金山区" },
            { label: "青浦区",value: "青浦区" },
            { label: "南汇区",value: "南汇区" },
            { label: "奉贤区",value: "奉贤区" },
            { label: "浦东新区",value: "浦东新区" },
            { label: "其他",value: "其他" },
          ],
        },
        {
          label: "江苏省",
          value: "江苏省",
          children: [
            {
              prov: "江苏省",
              value: "南京市",
              label: "南京市",
            },
            {
              prov: "江苏省",
              value: "无锡市",
              label: "无锡市",
            },
            {
              prov: "江苏省",
              value: "徐州市",
              label: "徐州市",
            },
            {
              prov: "江苏省",
              value: "常州市",
              label: "常州市",
            },
            {
              prov: "江苏省",
              value: "苏州市",
              label: "苏州市",
            },
            {
              prov: "江苏省",
              value: "南通市",
              label: "南通市",
            },
            {
              prov: "江苏省",
              value: "连云港市",
              label: "连云港市",
            },
            {
              prov: "江苏省",
              value: "淮安市",
              label: "淮安市",
            },
            {
              prov: "江苏省",
              value: "盐城市",
              label: "盐城市",
            },
            {
              prov: "江苏省",
              value: "扬州市",
              label: "扬州市",
            },
            {
              prov: "江苏省",
              value: "镇江市",
              label: "镇江市",
            },
            {
              prov: "江苏省",
              value: "泰州市",
              label: "泰州市",
            },
            {
              prov: "江苏省",
              value: "宿迁市",
              label: "宿迁市",
            },
          ],
        },
        {
          label: "浙江省",
          value: "浙江省",
          children: [
            {
              prov: "浙江省",
              value: "杭州市",
              label: "杭州市",
            },
            {
              prov: "浙江省",
              value: "宁波市",
              label: "宁波市",
            },
            {
              prov: "浙江省",
              value: "温州市",
              label: "温州市",
            },
            {
              prov: "浙江省",
              value: "嘉兴市",
              label: "嘉兴市",
            },
            {
              prov: "浙江省",
              value: "湖州市",
              label: "湖州市",
            },
            {
              prov: "浙江省",
              value: "绍兴市",
              label: "绍兴市",
            },
            {
              prov: "浙江省",
              value: "金华市",
              label: "金华市",
            },
            {
              prov: "浙江省",
              value: "衢州市",
              label: "衢州市",
            },
            {
              prov: "浙江省",
              value: "舟山市",
              label: "舟山市",
            },
            {
              prov: "浙江省",
              value: "台州市",
              label: "台州市",
            },
            {
              prov: "浙江省",
              value: "丽水市",
              label: "丽水市",
            },
          ],
        },
        {
          label: "安徽省",
          value: "安徽省",
          children: [
            {
              prov: "安徽省",
              value: "合肥市",
              label: "合肥市",
            },
            {
              prov: "安徽省",
              value: "芜湖市",
              label: "芜湖市",
            },
            {
              prov: "安徽省",
              value: "蚌埠市",
              label: "蚌埠市",
            },
            {
              prov: "安徽省",
              value: "淮南市",
              label: "淮南市",
            },
            {
              prov: "安徽省",
              value: "马鞍山市",
              label: "马鞍山市",
            },
            {
              prov: "安徽省",
              value: "淮北市",
              label: "淮北市",
            },
            {
              prov: "安徽省",
              value: "铜陵市",
              label: "铜陵市",
            },
            {
              prov: "安徽省",
              value: "安庆市",
              label: "安庆市",
            },
            {
              prov: "安徽省",
              value: "黄山市",
              label: "黄山市",
            },
            {
              prov: "安徽省",
              value: "滁州市",
              label: "滁州市",
            },
            {
              prov: "安徽省",
              value: "阜阳市",
              label: "阜阳市",
            },
            {
              prov: "安徽省",
              value: "宿州市",
              label: "宿州市",
            },
            {
              prov: "安徽省",
              value: "六安市",
              label: "六安市",
            },
            {
              prov: "安徽省",
              value: "亳州市",
              label: "亳州市",
            },
            {
              prov: "安徽省",
              value: "池州市",
              label: "池州市",
            },
            {
              prov: "安徽省",
              value: "宣城市",
              label: "宣城市",
            },
          ],
        },
        {
          label: "福建省",
          value: "福建省",
          children: [
            {
              prov: "福建省",
              value: "福州市",
              label: "福州市",
            },
            {
              prov: "福建省",
              value: "厦门市",
              label: "厦门市",
            },
            {
              prov: "福建省",
              value: "衡水市",
              label: "莆田市",
            },
            {
              prov: "福建省",
              value: "三明市",
              label: "三明市",
            },
            {
              prov: "福建省",
              value: "泉州市",
              label: "泉州市",
            },
            {
              prov: "福建省",
              value: "漳州市",
              label: "漳州市",
            },
            {
              prov: "福建省",
              value: "南平市",
              label: "南平市",
            },
            {
              prov: "福建省",
              value: "龙岩市",
              label: "龙岩市",
            },
            {
              prov: "福建省",
              value: "宁德市",
              label: "宁德市",
            },
          ],
        },
        {
          label: "江西省",
          value: "江西省",
          children: [
            {
              prov: "江西省",
              value: "南昌市",
              label: "南昌市",
            },
            {
              prov: "江西省",
              value: "景德镇市",
              label: "景德镇市",
            },
            {
              prov: "江西省",
              value: "萍乡市",
              label: "萍乡市",
            },
            {
              prov: "江西省",
              value: "九江市",
              label: "九江市",
            },
            {
              prov: "江西省",
              value: "新余市",
              label: "新余市",
            },
            {
              prov: "江西省",
              value: "鹰潭市",
              label: "鹰潭市",
            },
            {
              prov: "江西省",
              value: "赣州市",
              label: "赣州市",
            },
            {
              prov: "江西省",
              value: "吉安市",
              label: "吉安市",
            },
            {
              prov: "江西省",
              value: "宜春市",
              label: "宜春市",
            },
            {
              prov: "江西省",
              value: "抚州市",
              label: "抚州市",
            },
            {
              prov: "江西省",
              value: "上饶市",
              label: "上饶市",
            },
          ],
        },
        {
          label: "山东省",
          value: "山东省",
          children: [
            {
              prov: "山东省",
              value: "济南市",
              label: "济南市",
            },
            {
              prov: "山东省",
              value: "青岛市",
              label: "青岛市",
            },
            {
              prov: "山东省",
              value: "淄博市",
              label: "淄博市",
            },
            {
              prov: "山东省",
              value: "枣庄市",
              label: "枣庄市",
            },
            {
              prov: "山东省",
              value: "东营市",
              label: "东营市",
            },
            {
              prov: "山东省",
              value: "烟台市",
              label: "烟台市",
            },
            {
              prov: "山东省",
              value: "潍坊市",
              label: "潍坊市",
            },
            {
              prov: "山东省",
              value: "济宁市",
              label: "济宁市",
            },
            {
              prov: "山东省",
              value: "泰安市",
              label: "泰安市",
            },
            {
              prov: "山东省",
              value: "威海市",
              label: "威海市",
            },
            {
              prov: "山东省",
              value: "日照市",
              label: "日照市",
            },
            {
              prov: "山东省",
              value: "莱芜市",
              label: "莱芜市",
            },
            {
              prov: "山东省",
              value: "临沂市",
              label: "临沂市",
            },
            {
              prov: "山东省",
              value: "德州市",
              label: "德州市",
            },
            {
              prov: "山东省",
              value: "聊城市",
              label: "聊城市",
            },
            {
              prov: "山东省",
              value: "滨州市",
              label: "滨州市",
            },
            {
              prov: "山东省",
              value: "菏泽市",
              label: "菏泽市",
            },
          ],
        },
        {
          label: "河南省",
          value: "河南省",
          children: [
            {
              prov: "河南省",
              value: "郑州市",
              label: "郑州市",
            },
            {
              prov: "河南省",
              value: "开封市",
              label: "开封市",
            },
            {
              prov: "河南省",
              value: "洛阳市",
              label: "洛阳市",
            },
            {
              prov: "河南省",
              value: "平顶山市",
              label: "平顶山市",
            },
            {
              prov: "河南省",
              value: "安阳市",
              label: "安阳市",
            },
            {
              prov: "河南省",
              value: "鹤壁市",
              label: "鹤壁市",
            },
            {
              prov: "河南省",
              value: "新乡市",
              label: "新乡市",
            },
            {
              prov: "河南省",
              value: "焦作市",
              label: "焦作市",
            },
            {
              prov: "河南省",
              value: "濮阳市",
              label: "濮阳市",
            },
            {
              prov: "河南省",
              value: "许昌市",
              label: "许昌市",
            },
            {
              prov: "河南省",
              value: "漯河市",
              label: "漯河市",
            },
            {
              prov: "河南省",
              value: "三门峡市",
              label: "三门峡市",
            },
            {
              prov: "河南省",
              value: "南阳市",
              label: "南阳市",
            },
            {
              prov: "河南省",
              value: "商丘市",
              label: "商丘市",
            },
            {
              prov: "河南省",
              value: "信阳市",
              label: "信阳市",
            },
            {
              prov: "河南省",
              value: "周口市",
              label: "周口市",
            },
            {
              prov: "河南省",
              value: "驻马店市",
              label: "驻马店市",
            },
            {
              prov: "河南省",
              value: "省直辖县级行政区划",
              label: "省直辖县级行政区划",
            },
          ],
        },
        {
          label: "湖北省",
          value: "湖北省",
          children: [
            {
              prov: "湖北省",
              value: "武汉市",
              label: "武汉市",
            },
            {
              prov: "湖北省",
              value: "黄石市",
              label: "黄石市",
            },
            {
              prov: "湖北省",
              value: "十堰市",
              label: "十堰市",
            },
            {
              prov: "湖北省",
              value: "宜昌市",
              label: "宜昌市",
            },
            {
              prov: "湖北省",
              value: "襄阳市",
              label: "襄阳市",
            },
            {
              prov: "湖北省",
              value: "鄂州市",
              label: "鄂州市",
            },
            {
              prov: "湖北省",
              value: "荆门市",
              label: "荆门市",
            },
            {
              prov: "湖北省",
              value: "孝感市",
              label: "孝感市",
            },
            {
              prov: "湖北省",
              value: "荆州市",
              label: "荆州市",
            },
            {
              prov: "湖北省",
              value: "黄冈市",
              label: "黄冈市",
            },
            {
              prov: "湖北省",
              value: "咸宁市",
              label: "咸宁市",
            },
            {
              prov: "湖北省",
              value: "随州市",
              label: "随州市",
            },
            {
              prov: "湖北省",
              value: "恩施土家族苗族自治州",
              label: "恩施土家族苗族自治州",
            },
            {
              prov: "湖北省",
              value: "省直辖县级行政区划",
              label: "省直辖县级行政区划",
            },
            {
              prov: "湖北省",
              value: "仙桃市",
              label: "仙桃市",
            },
            {
              prov: "湖北省",
              value: "潜江市",
              label: "潜江市",
            },
            {
              prov: "湖北省",
              value: "天门市",
              label: "天门市",
            },
            {
              prov: "湖北省",
              value: "神农架林区",
              label: "神农架林区",
            },
          ],
        },
        {
          label: "湖南省",
          value: "湖南省",
          children: [
            {
              prov: "湖南省",
              value: "长沙市",
              label: "长沙市",
            },
            {
              prov: "湖南省",
              value: "株洲市",
              label: "株洲市",
            },
            {
              prov: "湖南省",
              value: "湘潭市",
              label: "湘潭市",
            },
            {
              prov: "湖南省",
              value: "衡阳市",
              label: "衡阳市",
            },
            {
              prov: "湖南省",
              value: "邵阳市",
              label: "邵阳市",
            },
            {
              prov: "湖南省",
              value: "岳阳市",
              label: "岳阳市",
            },
            {
              prov: "湖南省",
              value: "常德市",
              label: "常德市",
            },
            {
              prov: "湖南省",
              value: "张家界市",
              label: "张家界市",
            },
            {
              prov: "湖南省",
              value: "益阳市",
              label: "益阳市",
            },
            {
              prov: "湖南省",
              value: "郴州市",
              label: "郴州市",
            },
            {
              prov: "湖南省",
              value: "永州市",
              label: "永州市",
            },
            {
              prov: "湖南省",
              value: "怀化市",
              label: "怀化市",
            },
            {
              prov: "湖南省",
              value: "娄底市",
              label: "娄底市",
            },
            {
              prov: "湖南省",
              value: "湘西土家族苗族自治州",
              label: "湘西土家族苗族自治州",
            },
          ],
        },
        {
          label: "广东省",
          value: "广东省",
          children: [
            {
              prov: "广东省",
              value: "广州市",
              label: "广州市",
            },
            {
              prov: "广东省",
              value: "韶关市",
              label: "韶关市",
            },
            {
              prov: "广东省",
              value: "深圳市",
              label: "深圳市",
            },
            {
              prov: "广东省",
              value: "珠海市",
              label: "珠海市",
            },
            {
              prov: "广东省",
              value: "汕头市",
              label: "汕头市",
            },
            {
              prov: "广东省",
              value: "佛山市",
              label: "佛山市",
            },
            {
              prov: "广东省",
              value: "江门市",
              label: "江门市",
            },
            {
              prov: "广东省",
              value: "湛江市",
              label: "湛江市",
            },
            {
              prov: "广东省",
              value: "茂名市",
              label: "茂名市",
            },
            {
              prov: "广东省",
              value: "肇庆市",
              label: "肇庆市",
            },
            {
              prov: "广东省",
              value: "惠州市",
              label: "惠州市",
            },
            {
              prov: "广东省",
              value: "梅州市",
              label: "梅州市",
            },
            {
              prov: "广东省",
              value: "汕尾市",
              label: "汕尾市",
            },
            {
              prov: "广东省",
              value: "河源市",
              label: "河源市",
            },
            {
              prov: "广东省",
              value: "阳江市",
              label: "阳江市",
            },
            {
              prov: "广东省",
              value: "清远市",
              label: "清远市",
            },
            {
              prov: "广东省",
              value: "东莞市",
              label: "东莞市",
            },
            {
              prov: "广东省",
              value: "中山市",
              label: "中山市",
            },
            {
              prov: "广东省",
              value: "潮州市",
              label: "潮州市",
            },
            {
              prov: "广东省",
              value: "揭阳市",
              label: "揭阳市",
            },
            {
              prov: "广东省",
              value: "云浮市",
              label: "云浮市",
            },
          ],
        },
        {
          label: "广西壮族自治区",
          value: "广西壮族自治区",
          children: [
            {
              prov: "广西壮族自治区",
              value: "南宁市",
              label: "南宁市",
            },
            {
              prov: "广西壮族自治区",
              value: "柳州市",
              label: "柳州市",
            },
            {
              prov: "广西壮族自治区",
              value: "桂林市",
              label: "桂林市",
            },
            {
              prov: "广西壮族自治区",
              value: "梧州市",
              label: "梧州市",
            },
            {
              prov: "广西壮族自治区",
              value: "北海市",
              label: "北海市",
            },
            {
              prov: "广西壮族自治区",
              value: "防城港市",
              label: "防城港市",
            },
            {
              prov: "广西壮族自治区",
              value: "钦州市",
              label: "钦州市",
            },
            {
              prov: "广西壮族自治区",
              value: "贵港市",
              label: "贵港市",
            },
            {
              prov: "广西壮族自治区",
              value: "玉林市",
              label: "玉林市",
            },
            {
              prov: "广西壮族自治区",
              value: "百色市",
              label: "百色市",
            },
            {
              prov: "广西壮族自治区",
              value: "贺州市",
              label: "贺州市",
            },
            {
              prov: "广西壮族自治区",
              value: "河池市",
              label: "河池市",
            },
            {
              prov: "广西壮族自治区",
              value: "来宾市",
              label: "来宾市",
            },
            {
              prov: "广西壮族自治区",
              value: "崇左市",
              label: "崇左市",
            },
          ],
        },
        {
          label: "海南省",
          value: "海南省",
          children: [
            {
              prov: "海南省",
              value: "海口市",
              label: "海口市",
            },
            {
              prov: "海南省",
              value: "三亚市",
              label: "三亚市",
            },
            {
              prov: "海南省",
              value: "三沙市",
              label: "三沙市",
            },
            {
              prov: "海南省",
              value: "省直辖县级行政区划",
              label: "省直辖县级行政区划",
            },
            {
              prov: "海南省",
              value: "五指山市",
              label: "五指山市",
            },
            {
              prov: "海南省",
              value: "琼海市",
              label: "琼海市",
            },
            {
              prov: "海南省",
              value: "儋州市",
              label: "儋州市",
            },
            {
              prov: "海南省",
              value: "文昌市",
              label: "文昌市",
            },
            {
              prov: "海南省",
              value: "万宁市",
              label: "万宁市",
            },
            {
              prov: "海南省",
              value: "东方市",
              label: "东方市",
            },
            {
              prov: "海南省",
              value: "定安县",
              label: "定安县",
            },
            {
              prov: "海南省",
              value: "屯昌县",
              label: "屯昌县",
            },
            {
              prov: "海南省",
              value: "澄迈县",
              label: "澄迈县",
            },
            {
              prov: "海南省",
              value: "临高县",
              label: "临高县",
            },
            {
              prov: "海南省",
              value: "白沙黎族自治县",
              label: "白沙黎族自治县",
            },
            {
              prov: "海南省",
              value: "昌江黎族自治县",
              label: "昌江黎族自治县",
            },
            {
              prov: "海南省",
              value: "乐东黎族自治县",
              label: "乐东黎族自治县",
            },
            {
              prov: "海南省",
              value: "陵水黎族自治县",
              label: "陵水黎族自治县",
            },
            {
              prov: "海南省",
              value: "保亭黎族苗族自治县",
              label: "保亭黎族苗族自治县",
            },
            {
              prov: "海南省",
              value: "琼中黎族苗族自治县",
              label: "琼中黎族苗族自治县",
            },
          ],
        },
        {
          label: "重庆市",
          value: "重庆市",
          children: [
            { label: "渝中区",value: "渝中区" },
            { label: "大渡口区",value: "大渡口区" },
            { label: "江北区",value: "江北区" },
            { label: "北碚区",value: "北碚区" },
            { label: "渝北区",value: "渝北区" },
            { label: "巴南区",value: "巴南区" },
            { label: "沙坪坝区",value: "沙坪坝区" },
            { label: "万盛区",value: "万盛区" },
            { label: "万州区",value: "万州区" },
            { label: "涪陵区",value: "涪陵区" },
            { label: "永川区",value: "永川区" },
            { label: "合川区",value: "合川区" },
            { label: "江津区",value: "江津区" },
            { label: "九龙坡区",value: "九龙坡区" },
            { label: "其他",value: "其他" },
          ],
        },
        {
          label: "四川省",
          value: "四川省",
          children: [
            {
              prov: "四川省",
              value: "成都市",
              label: "成都市",
            },
            {
              prov: "四川省",
              value: "自贡市",
              label: "自贡市",
            },
            {
              prov: "四川省",
              value: "攀枝花市",
              label: "攀枝花市",
            },
            {
              prov: "四川省",
              value: "泸州市",
              label: "泸州市",
            },
            {
              prov: "四川省",
              value: "德阳市",
              label: "德阳市",
            },
            {
              prov: "四川省",
              value: "绵阳市",
              label: "绵阳市",
            },
            {
              prov: "四川省",
              value: "广元市",
              label: "广元市",
            },
            {
              prov: "四川省",
              value: "遂宁市",
              label: "遂宁市",
            },
            {
              prov: "四川省",
              value: "内江市",
              label: "内江市",
            },
            {
              prov: "四川省",
              value: "乐山市",
              label: "乐山市",
            },
            {
              prov: "四川省",
              value: "南充市",
              label: "南充市",
            },
            {
              prov: "四川省",
              value: "眉山市",
              label: "眉山市",
            },
            {
              prov: "四川省",
              value: "宜宾市",
              label: "宜宾市",
            },
            {
              prov: "四川省",
              value: "广安市",
              label: "广安市",
            },
            {
              prov: "四川省",
              value: "达州市",
              label: "达州市",
            },
            {
              prov: "四川省",
              value: "雅安市",
              label: "雅安市",
            },
            {
              prov: "四川省",
              value: "巴中市",
              label: "巴中市",
            },
            {
              prov: "四川省",
              value: "资阳市",
              label: "资阳市",
            },
            {
              prov: "四川省",
              value: "阿坝藏族羌族自治州",
              label: "阿坝藏族羌族自治州",
            },
            {
              prov: "四川省",
              value: "甘孜藏族自治州",
              label: "甘孜藏族自治州",
            },
            {
              prov: "四川省",
              value: "凉山彝族自治州",
              label: "凉山彝族自治州",
            },
          ],
        },
        {
          label: "贵州省",
          value: "贵州省",
          children: [
            {
              prov: "贵州省",
              value: "贵阳市",
              label: "贵阳市",
            },
            {
              prov: "贵州省",
              value: "六盘水市",
              label: "六盘水市",
            },
            {
              prov: "贵州省",
              value: "遵义市",
              label: "遵义市",
            },
            {
              prov: "贵州省",
              value: "安顺市",
              label: "安顺市",
            },
            {
              prov: "贵州省",
              value: "毕节市",
              label: "毕节市",
            },
            {
              prov: "贵州省",
              value: "铜仁市",
              label: "铜仁市",
            },
            {
              prov: "贵州省",
              value: "黔西南布依族苗族自治州",
              label: "黔西南布依族苗族自治州",
            },
            {
              prov: "贵州省",
              value: "黔东南苗族侗族自治州",
              label: "黔东南苗族侗族自治州",
            },
            {
              prov: "贵州省",
              value: "黔南布依族苗族自治州",
              label: "黔南布依族苗族自治州",
            },
          ],
        },
        {
          label: "云南省",
          value: "云南省",
          children: [
            {
              prov: "云南省",
              value: "昆明市",
              label: "昆明市",
            },
            {
              prov: "云南省",
              value: "曲靖市",
              label: "曲靖市",
            },
            {
              prov: "云南省",
              value: "玉溪市",
              label: "玉溪市",
            },
            {
              prov: "云南省",
              value: "保山市",
              label: "保山市",
            },
            {
              prov: "云南省",
              value: "昭通市",
              label: "昭通市",
            },
            {
              prov: "云南省",
              value: "丽江市",
              label: "丽江市",
            },
            {
              prov: "云南省",
              value: "普洱市",
              label: "普洱市",
            },
            {
              prov: "云南省",
              value: "临沧市",
              label: "临沧市",
            },
            {
              prov: "云南省",
              value: "楚雄彝族自治州",
              label: "楚雄彝族自治州",
            },
            {
              prov: "云南省",
              value: "红河哈尼族彝族自治州",
              label: "红河哈尼族彝族自治州",
            },
            {
              prov: "云南省",
              value: "文山壮族苗族自治州",
              label: "文山壮族苗族自治州",
            },
            {
              prov: "云南省",
              value: "西双版纳傣族自治州",
              label: "西双版纳傣族自治州",
            },
            {
              prov: "云南省",
              value: "大理白族自治州",
              label: "大理白族自治州",
            },
            {
              prov: "云南省",
              value: "德宏傣族景颇族自治州",
              label: "德宏傣族景颇族自治州",
            },
            {
              prov: "云南省",
              value: "怒江傈僳族自治州",
              label: "怒江傈僳族自治州",
            },
            {
              prov: "云南省",
              value: "迪庆藏族自治州",
              label: "迪庆藏族自治州",
            },
          ],
        },
        {
          label: "西藏自治区",
          value: "西藏治区",
          children: [
            {
              prov: "西藏自治区",
              value: "拉萨市",
              label: "拉萨市",
            },
            {
              prov: "西藏自治区",
              value: "昌都地区",
              label: "昌都地区",
            },
            {
              prov: "西藏自治区",
              value: "山南地区",
              label: "山南地区",
            },
            {
              prov: "西藏自治区",
              value: "日喀则地区",
              label: "日喀则地区",
            },
            {
              prov: "西藏自治区",
              value: "那曲地区",
              label: "那曲地区",
            },
            {
              prov: "西藏自治区",
              value: "阿里地区",
              label: "阿里地区",
            },
            {
              prov: "西藏自治区",
              value: "林芝地区",
              label: "林芝地区",
            },
          ],
        },
        {
          label: "陕西省",
          value: "陕西省",
          children: [
            {
              prov: "陕西省",
              value: "西安市",
              label: "西安市",
            },
            {
              prov: "陕西省",
              value: "铜川市",
              label: "铜川市",
            },
            {
              prov: "陕西省",
              value: "宝鸡市",
              label: "宝鸡市",
            },
            {
              prov: "陕西省",
              value: "咸阳市",
              label: "咸阳市",
            },
            {
              prov: "陕西省",
              value: "渭南市",
              label: "渭南市",
            },
            {
              prov: "陕西省",
              value: "延安市",
              label: "延安市",
            },
            {
              prov: "陕西省",
              value: "汉中市",
              label: "汉中市",
            },
            {
              prov: "陕西省",
              value: "榆林市",
              label: "榆林市",
            },
            {
              prov: "陕西省",
              value: "安康市",
              label: "安康市",
            },
            {
              prov: "陕西省",
              value: "商洛市",
              label: "商洛市",
            },
          ],
        },
        {
          label: "甘肃省",
          value: "甘肃省",
          children: [
            {
              prov: "甘肃省",
              value: "兰州市",
              label: "兰州市",
            },
            {
              prov: "甘肃省",
              value: "嘉峪关市",
              label: "嘉峪关市",
            },
            {
              prov: "甘肃省",
              value: "金昌市",
              label: "金昌市",
            },
            {
              prov: "甘肃省",
              value: "白银市",
              label: "白银市",
            },
            {
              prov: "甘肃省",
              value: "天水市",
              label: "天水市",
            },
            {
              prov: "甘肃省",
              value: "武威市",
              label: "武威市",
            },
            {
              prov: "甘肃省",
              value: "张掖市",
              label: "张掖市",
            },
            {
              prov: "甘肃省",
              value: "平凉市",
              label: "平凉市",
            },
            {
              prov: "甘肃省",
              value: "酒泉市",
              label: "酒泉市",
            },
            {
              prov: "甘肃省",
              value: "庆阳市",
              label: "庆阳市",
            },
            {
              prov: "甘肃省",
              value: "定西市",
              label: "定西市",
            },
            {
              prov: "甘肃省",
              value: "陇南市",
              label: "陇南市",
            },
            {
              prov: "甘肃省",
              value: "临夏回族自治州",
              label: "临夏回族自治州",
            },
            {
              prov: "甘肃省",
              value: "甘南藏族自治州",
              label: "甘南藏族自治州",
            },
          ],
        },
        {
          label: "青海省",
          value: "青海省",
          children: [
            {
              prov: "青海省",
              value: "西宁市",
              label: "西宁市",
            },
            {
              prov: "青海省",
              value: "海东市",
              label: "海东市",
            },
            {
              prov: "青海省",
              value: "海北藏族自治州",
              label: "海北藏族自治州",
            },
            {
              prov: "青海省",
              value: "黄南藏族自治州",
              label: "黄南藏族自治州",
            },
            {
              prov: "青海省",
              value: "海南藏族自治州",
              label: "海南藏族自治州",
            },
            {
              prov: "青海省",
              value: "果洛藏族自治州",
              label: "果洛藏族自治州",
            },
            {
              prov: "青海省",
              value: "玉树藏族自治州",
              label: "玉树藏族自治州",
            },
            {
              prov: "青海省",
              value: "海西蒙古族藏族自治州",
              label: "海西蒙古族藏族自治州",
            },
          ],
        },
        {
          label: "宁夏回族自治区",
          value: "宁夏回族自治区",
          children: [
            {
              prov: "宁夏回族自治区",
              value: "银川市",
              label: "银川市",
            },
            {
              prov: "宁夏回族自治区",
              value: "石嘴山市",
              label: "石嘴山市",
            },
            {
              prov: "宁夏回族自治区",
              value: "吴忠市",
              label: "吴忠市",
            },
            {
              prov: "宁夏回族自治区",
              value: "固原市",
              label: "固原市",
            },
            {
              prov: "宁夏回族自治区",
              value: "中卫市",
              label: "中卫市",
            },
          ],
        },
        {
          label: "新疆维吾尔自治区",
          value: "新疆维吾尔自治区",
          children: [
            {
              prov: "新疆维吾尔自治区",
              value: "乌鲁木齐市",
              label: "乌鲁木齐市",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "克拉玛依市",
              label: "克拉玛依市",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "吐鲁番地区",
              label: "吐鲁番地区",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "哈密地区",
              label: "哈密地区",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "昌吉回族自治州",
              label: "昌吉回族自治州",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "博尔塔拉蒙古自治州",
              label: "博尔塔拉蒙古自治州",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "巴音郭楞蒙古自治州",
              label: "巴音郭楞蒙古自治州",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "阿克苏地区",
              label: "阿克苏地区",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "克孜勒苏柯尔克孜自治州",
              label: "克孜勒苏柯尔克孜自治州",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "喀什地区",
              label: "喀什地区",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "和田地区",
              label: "和田地区",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "伊犁哈萨克自治州",
              label: "伊犁哈萨克自治州",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "塔城地区",
              label: "塔城地区",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "阿勒泰地区",
              label: "阿勒泰地区",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "自治区直辖县级行政区划",
              label: "自治区直辖县级行政区划",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "石河子市",
              label: "石河子市",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "阿拉尔市",
              label: "阿拉尔市",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "图木舒克市",
              label: "图木舒克市",
            },
            {
              prov: "新疆维吾尔自治区",
              value: "五家渠市",
              label: "五家渠市",
            },
          ],
        },
        {
          label: "台湾省",
          value: "台湾省",
          children: [
            {
              prov: "台湾省",
              value: "台北市",
              label: "台北市",
            },
            {
              prov: "台湾省",
              value: "高雄市",
              label: "高雄市",
            },
            {
              prov: "台湾省",
              value: "基隆市",
              label: "基隆市",
            },
            {
              prov: "台湾省",
              value: "台中市",
              label: "台中市",
            },
            {
              prov: "台湾省",
              value: "台南市",
              label: "台南市",
            },
            {
              prov: "台湾省",
              value: "新竹市",
              label: "新竹市",
            },
            {
              prov: "台湾省",
              value: "嘉义市",
              label: "嘉义市",
            },
            {
              prov: "台湾省",
              value: "省直辖",
              label: "省直辖",
            },
          ],
        },
        {
          label: "香港特别行政区",
          value: "香港特别行政区",
          children: [
            {
              prov: "香港特别行政区",
              value: "香港岛",
              label: "香港岛",
            },
            {
              prov: "香港特别行政区",
              value: "九龙",
              label: "九龙",
            },
            {
              prov: "香港特别行政区",
              value: "新界",
              label: "新界",
            },
          ],
        },
        {
          label: "澳门特别行政区",
          value: "澳门特别行政区",
          children: [
            {
              prov: "澳门特别行政区",
              value: "澳门半岛",
              label: "澳门半岛",
            },
            {
              prov: "澳门特别行政区",
              value: "澳门离岛",
              label: "澳门离岛",
            },
            {
              prov: "澳门特别行政区",
              value: "无堂区划分区域",
              label: "无堂区划分区域",
            },
          ],
        },
      ], //地址数据
      selectplace: [], //选择的地址
      inputplace: "", //手动输入的地址
      marriage: "", //婚姻状况
      height: "", //身高
      heightoptions: [
        {
          value: "140cm以下",
        },
        {
          value: "140cm-150cm",
        },
        {
          value: "150cm-160cm",
        },
        {
          value: "160cm-170cm",
        },
        {
          value: "170cm-180cm",
        },
        {
          value: "180以上",
        },
      ],
      education: "", //学历
      educationoptions: [
        {
          value: "高中中专及以下",
        },
        {
          value: "大专",
        },
        {
          value: "本科",
        },
        {
          value: "双学士",
        },
        {
          value: "硕士",
        },
        {
          value: "博士",
        },
      ],
      salary: "", //月薪
      salaryoptions: [
        {
          value: "2000元以下",
        },
        {
          value: "2000-5000元",
        },
        {
          value: "5000-10000元",
        },
        {
          value: "10000-20000元",
        },
        {
          value: "20000-50000元",
        },
        {
          value: "50000元以上",
        },
      ],
      phone: "", //手机号
    };
  },
  methods: {
    //注册前的验证
    checking() {
      if (!this.sex) {
        document.querySelector("#sex").classList.add("red");
      }
      if (!this.birth) {
        document.querySelector("#birth").classList.add("red");
      }
      if (!this.marriage) {
        document.querySelector("#marriage").classList.add("red");
      }
      if (!this.obj.userphone) {
        document.querySelector("#username").classList.add("red");
      }
      if (!this.obj.sms) {
        document.querySelector("#verifycode").classList.add("red");
      }
      if (!this.pwd) {
        document.querySelector("#pwd").classList.add("red");
      }
      if (!this.pwdAgin) {
        document.querySelector("#pwdAgin").classList.add("red");
      }
      if (!this.nickname) {
        document.querySelector("#nickname").classList.add("red");
      }
      if (!this.qst) {
        document.querySelector("#qst").classList.add("red");
      }
      if (!this.asw) {
        document.querySelector("#qst").classList.add("red");
      }
      let flag = true;
      if (!this.agree) {
        // 没同意条款
        flag = false;
      }
      for (
        let i = 0;
        i < document.querySelectorAll(".reg_form li").length;
        i++
      ) {
        if (
          document.querySelectorAll(".reg_form li")[i].classList.contains("red")
        ) {
          // 必填项填写错误
          flag = false;
        }
      }
      return flag;
    },
    //注册
    register() {
      // 获取地址
      let place = this.selectplace.join("-");
      // 获取自我介绍
      let introduction = document.querySelector(".intro2").value;
      // 获取标签
      let label = document.querySelector(".intro1").innerText;
      // 根据sex设置头像url
      let avatar = "";
      if (this.sex == "男") {
        avatar = "../../public/img/loginAregister/man.png";
      } else if (this.sex == "女") {
        avatar = "../../public/img/loginAregister/female.png";
      }
      if (this.checking()) {
        this.$http
          .post("/register", {
            username: this.obj.userphone,
            password: this.pwd,
            nickname: this.nickname,
            sex: this.sex,
            birth: this.birth,
            marriage: this.marriage,
            canuse: 1,
            height: this.height,
            place: place,
            education: this.education,
            salary: this.salary,
            introduction: introduction,
            qst: this.qst,
            asw: this.asw,
            avatar: avatar,
            label: label,
          })
          .then((r) => {
            console.log(r.data);
            if (r.data.status == 1) {
              sessionStorage.setItem("username", this.obj.userphone);
              this.$router.push("/home"); //转到首页
            }
            alert(r.data.msg);
          });
      }
    },
    //添加标签
    handleAdd(tag) {
      if (this.tagSelect.indexOf(tag) == -1) {
        this.tagSelect.push(tag);
      }
    },
    // 取消标签
    handleClose(tag) {
      this.tagSelect.splice(this.tagSelect.indexOf(tag), 1);
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
          this.btntitle = "验证";
          this.isdisabled = false;
        }, 10000);
        this.$http
          .post("/smsverif", {
            phone: this.obj.userphone,
          })
          .then((res) => {
            let r = res.data;
            this.obj.verifcode = r.verifCode;
          });
      }
    },
    //选择地址的监听
    placeChange(value) {
      console.log(value); //打印地址
    },
    //全国人大常委会关于加强网络信息保护的决定
    open() {
      location.href =
        "http://www.npc.gov.cn/wxzl/gongbao/2013-04/16/content_1811077.htm";
    },
  },
};
</script>

<style scoped>
.red {
  border: 1px solid #f5bdbd;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.right .policy {
  text-indent: 10px;
  line-height: 14px;
  font-size: 12px;
  color: #c7c7c7;
}
.right .reg_btn {
  margin-top: 30px;
  margin-left: 54px;
  width: 100%;
  font-size: 30px;
}
.right > ul textarea.intro2 {
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  color: #939393;
  resize: none;
  width: 100%;
  height: 150px;
  padding: 16px;
  text-indent: 2em;
  font-size: 14px;
  line-height: 24px;
  box-sizing: border-box;
  outline: none;
}
.right > ul .el-tab-pane p {
  border: 1px solid #e0e0e0;
  background-color: #f6f5f5;
  color: #999;
  font-size: 12px;
  line-height: 33px;
}
.right > ul .el-tag {
  margin: 5px;
}
.right > ul > .form_line {
  width: 91%;
  height: 20px;
  margin: 0 auto;
  border-bottom: 1px dashed #ddd;
}
.right > ul > li > div img {
  height: 30px;
  width: 30px;
}
.right > ul > li > span:last-of-type {
  display: inline-block;
  width: 220px;
  padding-left: 13px;
  font-size: 12px;
  color: #ababab;
}
.right > ul > li > div {
  width: 327px;
}
.right > ul > li > span:first-of-type {
  display: inline-block;
  width: 85px;
  text-align: right;
}
.right > ul > li {
  width: 670px;
  display: flex;
  padding-top: 20px;
  padding-bottom: 10px;
  line-height: 32px;
}
.right > ul {
  padding-top: 4px;
  width: 670px;
  text-align: center;
  color: #666;
}
.right > span:last-of-type {
  right: -9px;
  background-position: top right;
}
.right > span:first-of-type {
  left: -9px;
  background-position: top left;
}
.right > span {
  position: absolute;
  top: 8px;
  width: 84px;
  height: 42px;
  background-image: url("../../public/img/loginAregister/reg_title.png");
}
.right > p {
  color: #ff687b;
  font-size: 12px;
  height: 37px;
  line-height: 37px;
  background-color: #f7f7f7;
  text-align: center;
  margin: 0px 30px 0;
}

.right > h1 {
  font-size: 18px;
  color: #f3316b;
  width: 670px;
  height: 53px;
  line-height: 53px;
}
.right {
  width: 670px;
  text-align: center;
  padding-bottom: 100px;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0 0 6px 0 #f1f1f1;
  position: relative;
}

.left .ad {
  width: 100%;
  height: 365px;
  background-image: url("../../public/img/loginAregister/ad.png");
}

.left .bg {
  width: 100%;
  height: 354px;
  background-image: url("../../public/img/loginAregister/y.png");
}

.left .logo {
  width: 220px;
  height: 200px;
  background-image: url("../../public/img/loginAregister/BeeLove.png");
  background-size: 100% 100%;
}

.left {
  width: 220px;
}

.w960 {
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
}

.main {
  background-color: rgb(246, 246, 246);
  width: 100%;
  background-position: center top;
}

.register {
  width: 100vm;
}
</style>
