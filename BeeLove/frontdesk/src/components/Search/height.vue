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
        <div v-if="!istrue" class="howage">
          <select v-model="height">
             <option value="不限">不限</option>
            <option value="140cm以下">140cm以下</option>
            <option value="140cm~150cm">140cm~150cm</option>
            <option value="150cm~160cm">150cm~160cm</option>
            <option value="160cm~170cm">160cm~170cm</option>
            <option value="170cm~180cm">170cm~180cm</option>
            <option value="180以上">180以上</option>
          </select>
           <button type="button" @click="sure">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { log } from 'util';

export default {
  data: function () {
    return {
      tag:"不限",
      istrue:true,
      heightresult:"",
      height:"不限"
    };
  },
  /* 性别、年龄、婚姻状况、身高、地方、学历、月薪、图片 */

  methods:{
      sure(e){/* 得到值，并拼接查询语句，传递给父组件 */
          this.tag = this.height,
      this.istrue = true;
        this.heightresult = `height="${this.tag}"`
      this.$emit("myheight",this.heightresult)
      },
      isshow(){
         this.istrue = false 
      }
  }

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
.howage {
  font-size: 12px;
}
</style>