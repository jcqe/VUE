<template>
 <div >
     <div>
      <div >
          <div class="show" @click="isshow" >
              <span >{{tag}}</span>
              <span>
                <i class="el-icon-arrow-down"></i>
              </span>
              
          </div>
          <div v-if="istrue"></div>
          <div v-if="!istrue" >
              <select v-model="marriage">
                <option value="不限" >不限</option>
                  <option value="未婚" >未婚</option>
                   <option value="离异">离异</option>
                    <option value="丧偶">丧偶</option>
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
      marriage:"",
      istrue:true,
      marriageresult:""
    };
  },

  created(){
    this.marriage = this.tag  
  },
  methods:{
      sure(){/* 得到值，并拼接查询语句，传递给父组件 */
          this.tag = this.marriage,
          this.istrue = true 
           this.marriageresult = `marriage="${this.tag}"`
          this.$emit("mymaritalstatus",this.marriageresult)
      },
      isshow(){
         this.istrue = false 
      }
  }

};
</script>
<style scoped="scoped">
.span{
    display: inline-block;
}
button{
    display: block;
    background-color: blue;
}
.show{
    width: 50px;
    background-color: #D7EBFF;
    border: 1px solid #ccc;
   display: flex;
   justify-content: space-around;
}
select{
  width: 50px;
  text-align: center;
}
</style>