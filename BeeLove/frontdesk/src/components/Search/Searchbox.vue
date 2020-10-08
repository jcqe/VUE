<template>
 <div>
     <div>
      <div class="searchbar">
        <el-input placeholder="请输入内容" v-model="input4" >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <span class="ser" @click="sendlable">搜索</span>
      </div>
      <p class="tip">热搜搜索词：</p>
      <span v-for="(item,index) in list" :key="index" @click="Tagsearch">{{item}}</span>
      <button type="button" @click="changegroup">换一组</button>
    </div>
 </div>
    

</template>
<script>
import { log } from 'util';
import Bus from "../../bus.js"
export default {
  data: function () {
    return {
      input4: "",
      tags: ["内敛", "开朗", "简单","独立", "NBA", "旅行", "美食", "看书","跳舞", "企业高管", "建筑行业", "单亲家庭","四世同堂", "房奴", "攒钱ing"],
      list: ["形象好", "娇小", "长发", "文静","喜欢"],
    };
  },
  methods:{
    sendlable(){ /* 传送输入框值 */
      Bus.$emit("getlable",this.input4)
    },
      Tagsearch(e){ /* 输入框随着选择改变 */
          this.input4 = e.target.innerHTML
      },
      getRandomArrayElements(arr, count) {/* 随机获取标签数组 */
        var shuffled = arr.slice(0), 
        i = arr.length, 
        min = i - count, temp, index;
        while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    this.list = shuffled.slice(min);
},
changegroup(){/* 改变标签 */
  this.getRandomArrayElements(this.tags,5)
}
  },
  
};
</script>
<style scoped="scoped">
.searchbar{
  width: 600px;
  background-color: #F43B6F;
  padding: 5px;
  box-sizing: border-box;
}
.el-input.el-input--prefix {
  width: 480px;
}
.ser {
  display: inline-block;
  width: 60px;
  height: 40px;
  font-size: 22px;
  margin-left: 30px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  letter-spacing:5px
}
.tip {
  display: inline-block;
  margin: 10px 0;
}
span {
  margin-right: 20px;
  cursor: pointer;
  font-size: 14px;
}
</style>