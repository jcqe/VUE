<template>
  <div>
    <div>
      <div>
        <div class="show" @click="isshow">
          <span>{{tag}}</span>
          <span>
            <i class="el-icon-arrow-down"></i>
          </span>
        </div>
        <div v-if="istrue"></div>
        <div v-if="!istrue">
          <select v-model="education">
            <option value="不限">不限</option>
            <option value="中专及以下">高中中专及以下</option>
            <option value="大专">大专</option>
            <option value="本科">本科</option>
            <option value="双学士">双学士</option>
            <option value="研究生">研究生</option>
            <option value="博士">博士</option>
          </select>
          <button type="button" @click="sure">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { log } from "util";

export default {
  data: function () {
    return {
      tag: "不限",
      education: "",
      istrue: true,
      educationresult:""
    };
  },
  /* 性别、年龄、婚姻状况、身高、地方、学历、月薪、图片 */
  created() {
    this.education = this.tag;
  },
  methods: {
    sure() {/* 得到值，并拼接查询语句，传递给父组件 */
    this.tag = this.education,
      this.istrue = true;
        this.educationresult = `education="${this.tag}"`
      this.$emit("myeducation",this.educationresult)
    },
    isshow() {
      this.istrue = false;
    },
  },
};
</script>
<style scoped="scoped">
.span {
  display: inline-block;
}
button {
  display: block;
  background-color: blue;
}
.show {
  width: 100px;
  background-color: #d7ebff;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
}
select {
  width: 100px;
  text-align: center;
}
</style>