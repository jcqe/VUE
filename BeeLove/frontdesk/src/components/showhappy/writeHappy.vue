<template>
  <div class="writeHappy">
    <div class="title">
      <i class="publish"></i>
      <span class="incident">发布我的成功故事</span>
    </div>
    <textarea v-model="content" cols="55" rows="10"></textarea>
    <p :style="{color:mycolor}" class="tips">{{count}}/{{total}}</p>
    <div class="numtips">最多上传四张照片</div>
    <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      accept=".jpg, .bmp, .jpeg, .png, .gif"
      :on-change="uploadCheck"
      :limit="4"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>

    <div class="fabu">
      <el-button type="primary" @click="publish">发布</el-button>
    </div>
  </div>
</template>

<script>
import Bus from "@/Bus/index.js";
export default {
  data() {
    return {
      upload: true,
      content: "",
      count: 0,
      total: 300,
      mycolor: "#ccc",
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  },
  updated() {
    //字数控制
    this.count = this.content.length;
    if (this.content.length > 10) {
      this.mycolor = "red";
      this.$message.info("字数超出300字啦!!");
    } else if (this.content.length <= 10) {
      this.mycolor = "#ccc";
    }
  },
  methods: {
    //提交数据
    publish(event) {
      if(this.fileList==="undefined"){
        this.$message.error("晒出你们的幸福照片吧!")
      }
      //增加分页的总长度
      Bus.$emit("addLength", 1);

      //获取上传时间
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      if (month.toString.length < 2) {
        month = "0" + (now.getMonth() + 1);
      }
      let day = now.getDate();
      if (day.toString.length < 2) {
        day = "0" + day;
      }
      let time = `${year}-${month}-${day}`;
      let formData = new FormData();
      for (let i = 0; i < this.fileList.length; i++) {
        formData.append(
          "file" + i,
          this.fileList[i].raw,
          this.fileList[i].raw.name
        );
      }
      let username = sessionStorage.getItem("username");
      formData.append("username", username);
      formData.append("content", this.content);
      formData.append("time", time);
      const config = {
        headers: {
          "Content-Type":
            "multipart/form-data;boundary=" + new Date().getTime(),
        },
      };
      this.$http
        .post("/publishStory", formData, config)
        .then((res) => {
        })
        .catch((error) => {
          console.log(error);
        });
      this.$message.success("发表成功!");
      //清空发表内容
      this.content = "";
      while(this.fileList.length>0) {
        this.handleRemove(this.fileList[0]);
      }
    },
    //检查文件类型
    uploadCheck(file, fileList) {
      let reg = /.+(.jpg|.bmp|.jpeg|.png|.gif)$/i;
      this.fileList = fileList;
      let fileLength = this.fileList.length;
      if (fileList.length === 1) {
        this.upload = false;
      }
      if (!reg.test(file.name)) {
        this.fileList.splice(fileLength - 1, 1);
        this.$message.error("只允许上传图片");
      }
      this.isHasDataChange = true;
    },
    //上传图片---删除照片
    handleRemove(file) {
      let index = this.fileList.indexOf(file);
      this.fileList.splice(index, 1);
    },
    //上传图片---大图显示
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
.writeHappy {
  box-sizing: content-box;
  border: #e2ddd5 1px solid;
  padding: 10px 21px;
  position: relative;
}
.title {
  background: #fff;
  border: #e2ddd5 1px solid;
  width: 840px;
  padding: 10px 21px;
}
.publish {
  width: 20px;
  height: 20px;
  background: url(../../assets/img/showhappy/spirit.png) no-repeat;
  display: inline-block;
  margin-right: 10px;
  background-position: 0 -102px;
}
.incident {
  font-size: 18px;
  color: #333;
  height: 20px;
  line-height: 20px;
  display: inline-block;
}
textarea {
  resize: none;
  height: 100px;
  display: block;
  overflow-y: auto;
  padding: 5px;
  cursor: text;
  background: #fff;
  border: #ddd solid 1px;
  font-size: 16px;
  font-family: "微软雅黑";
  color: #444;
  width: 872px;
}
.tips {
  position: absolute;
  right: 78px;
  top: 140px;
}
.fabu {
  position: absolute;
  right: 40px;
  top: 300px;
  width: 70px;
}
.numtips {
  color: rgb(204, 204, 204);
}
</style>