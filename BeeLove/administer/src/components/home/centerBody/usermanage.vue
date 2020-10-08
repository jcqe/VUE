<template>
  <!-- 内容主体区域 -->
  <div >
    <span class="layui-breadcrumb">
      <a href>用户管理</a>
      <a>
        <cite>用户列表</cite>
      </a>
    </span>

    <blockquote class="layui-elem-quote quoteBox mod_default_box" style="margin:20px 0">
      <form class="layui-form">
        <div class="layui-inline">
          <div class="layui-input-inline">
            <input type="text" class="layui-input searchVal" placeholder="请输入搜索的内容" />
          </div>
          <a class="layui-btn search_btn" @click="searchUser">搜索</a>
        </div>
        <div class="layui-inline">
          <a class="layui-btn addNews_btn" @click="addchUser">添加用户</a>
        </div>
        <div class="layui-inline">
          <a class="layui-btn delAll_btn" @click="delUserlist">批量删除</a>
        </div>
      </form>
    </blockquote>
    <table class="layui-table">
      <colgroup>
        <col width="150" />
        <col width="200" />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>选择</th>
          <th>用户id</th>
          <th>用户电话</th>
          <th>昵称</th>
          <th>出生日期</th>
          <th>婚姻状况</th>
          <th>性别</th>
          <th>密保问题</th>
          <th>密保答案</th>
          <th>账号状态</th>
          <th style="width:100px">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userlist" :key="user.id">
          <td>
            <input type="checkbox" value="user.id" />
          </td>
          <td>{{user.id}}</td>
          <td>{{user.username}}</td>
          <td>{{user.nickname}}</td>
          <td>{{user.birth}}</td>
          <td>{{user.marriage}}</td>
          <td>{{user.sex}}</td>
          <td>{{user.qst}}</td>
          <td>{{user.asw}}</td>
          <td>{{user.canuse}}</td>
          <td>
            <button class="layui-btn layui-btn-normal" @click="updateUser">修改</button>
            <br />
            <button class="layui-btn layui-btn-warm" @click="delUser">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      userlist: [
        {
          id: 1,
          username: "13545674567",
          nickname: "张三",
          birth: "1998-09-20",
          marriage: "未婚",
          sex: "男",
          qst: "我的名字",
          asw: "张三",
          canuse: "1",
        },
        {
          id: 1,
          username: "13545674567",
          nickname: "张三",
          birth: "1998-09-20",
          marriage: "未婚",
          sex: "男",
          qst: "我的名字",
          asw: "张三",
          canuse: "1",
        },
      ],
    };
  },
  mounted() {
    layui.use("element", function () {
      var element = layui.element;
    });
    layui.use("form", function () {
      var form = layui.form;

      //监听提交
      form.on("submit(formDemo)", function (data) {
        layer.msg(JSON.stringify(data.field));
        return false;
      });
    });
  },
  methods: {
    // 搜索用户
    searchUser() {},
    // 添加用户
    addchUser() {},
    // 批量删除用户
    delUserlist() {},
    // 修改用户
    updateUser() {
      layui.use("layer", function () {
        var layer = layui.layer;
        layer.msg("hello");
      });
    },
    // 删除用户
    delUser() {},
  },
};
</script>

<style scoped>
.layui-form a {
  margin-left: 10px;
}
td,
th {
  width: 100px !important;
  text-align: center;
}
</style>