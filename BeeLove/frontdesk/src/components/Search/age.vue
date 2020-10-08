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
          <div v-if="!istrue" class="howage" >
             最小年龄：<input type="number" min="18" max="99" v-model="minage" ><br>
             最大年龄：<input type="number" :min="min" max="99" v-model="maxage">
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
      minage:18,
      istrue:true,
      maxage:99,
      min:"",
      ageresult:""
    };
  },
  
  watch:{
    minage(){ /* 监听最小值 */
        this.min = this.minage
    }
  },
  methods:{
      sure(e){  /* 得到值，并拼接查询语句，传递给父组件 */
        if(this.minage<18){
          this.minage = 18
        }
        if(this.maxage<this.minage){
          this.maxage = this.minage
        }else if(this.maxage>99){
          this.maxage=99
        }
          this.tag = this.minage+"~"+this.maxage,
          this.istrue = true 
          
          this.ageresult = `YEAR(NOW())-YEAR(birth)>=${this.minage} and YEAR(NOW())-YEAR(birth)<=${this.maxage}`
          this.$emit("myage",this.ageresult)
      }, 
      isshow(){ /* 选则框隐藏 */
         this.istrue = false 
      }
  }

};
</script>

<style scoped="scoped">
span{
    display: inline-block;
}
button{
    display: block;
    background-color: blue;
}
.show{
    width: 100px;
    background-color: #D7EBFF;
    border: 1px solid #ccc;
   display: flex;
   justify-content: space-around;
}
select{
  width: 50px;
  text-align: center;
}
input{
    width: 35px;
}
.howage{
    font-size: 12px;
}
</style>