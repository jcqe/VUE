<template>
  <div class="layui-body" style="margin-left:66px">
    <!-- 内容主体区域 -->
    <div style="padding: 15px;">
      <span class="layui-breadcrumb">
        <a href>首页</a>
        <a href>国际新闻</a>
        <a href>亚太地区</a>
        <a>
          <cite>正文</cite>
        </a>
      </span>
    </div>
    <blockquote class="layui-elem-quote quoteBox mod_default_box">
      <form class="layui-form">
        <div class="layui-inline">
          <div class="layui-input-inline">
            <input type="text" class="layui-input searchVal" placeholder="请输入搜索的内容" />
          </div>
          <a class="layui-btn search_btn" data-type="reload">搜索</a>
        </div>
        <div class="layui-inline">
          <a class="layui-btn addNews_btn">添加用户</a>
        </div>
        <div class="layui-inline">
          <a class="layui-btn delAll_btn">批量删除</a>
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
        <tr>
          <td>
            <input type="checkbox" title="1" lay-skin="primary" value="1" />
          </td>
          <td>1</td>
          <td>13512341234</td>
          <td>张三</td>
          <td>1998-09-20</td>
          <td>未婚</td>
          <td>男</td>
          <td>我的名字</td>
          <td>张三</td>
          <td>1</td>
          <td>
            <button class="layui-btn layui-btn-normal">修改</button>
            <br />
            <button class="layui-btn layui-btn-warm">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
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
  methods: {},
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