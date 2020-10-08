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
          <select v-model="salary">
             <option value="不限">不限</option>
            <option value="2000以下">2000以下</option>
            <option value="2000~5000元">2000~5000元</option>
            <option value="5000~10000元">5000~10000元</option>
            <option value="7000~20000元">7000~20000元</option>
            <option value="20000~50000元">20000~50000元</option>
            <option value="50000元以上">50000元以上</option>
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
      salary: "",
      istrue: true,
      arr:[],
      salaryresult:""
    };
  },

  created() {
    this.salary = this.tag;
  },
  methods: {
    sure() {/* 得到值，并拼接查询语句，传递给父组件 */
    this.tag = this.salary,
      this.istrue = true;
      this.salaryresult = `salary="${this.tag}"`
    this.$emit("mysalary",this.salaryresult)
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
  width: 150px;
  background-color: #d7ebff;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
}
select {
  width: 150px;
  text-align: center;
}
</style>