<template>
	<div class="box container">
		<div class="top"></div>
		<div class="md" v-if="reply">
			<div class="replybox">
				<div class="textarea" contenteditable="true"></div>
				<div class="replytips">{{replytips}}</div>
				<div class="btnbox">
					<div class="btn cancel hvptr" @click="cancel">取消</div>
					<div class="btn confirm hvptr" @click="send">确定</div>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="left">
				<img :src="avatarsrc"><br>
				<span>资料完整度</span>
				<br />
				<span>靠谱的综合评分</span>
				<br />
				<span>婚恋个性匹配问答</span>
			</div>

			<div class="right">
				<div class="rtab">
					
					<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
						<el-tab-pane label="收件箱" name="first">
							<div class="mail" v-for="(item,index) in maillist" :key="index">
								<div>
									<div class="inf">{{item.content}}</div>
									<div class="senderinfo">
										<span>{{item.nickname}}</span>
										<span>{{item.time.substr(0,10)}}</span>
									</div>
								</div>
								<el-button :data-id="item.id" type="primary" @click="showreplybox">回复</el-button>
								<div @click="deleteemail" class="delete hvptr" :data-id="item.infoid">删除</div>
							</div>
						</el-tab-pane>

					</el-tabs>
				</div>
				
			</div>
		</div>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				activeName: "first",
				avatarsrc: "",
				reply: false,
				replytips: "",
				maillist: ""
			};
		},
		methods: {

			deleteemail(e) {
				let id = e.target.getAttribute("data-id");
				this.$http.get("/deleteemail", {
					params: {
						id
					}
				}).then((res) => {
					if (res.data.status == 1) {
						this.getinbox();
					} else {
						console.log(res.data.msg);
					}
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},
			handleClick(tab, event) {},
			send() {
				this.replytips = "";
				let content = document.getElementsByClassName("textarea")[0].innerHTML;
				if (content.trim() == "") {
					this.replytips = "请先输入内容！";
				} else {
					let username = sessionStorage.getItem("username");
					let person_id = this.$store.state.replyid;
					let time = new Date();
					let date = time.getDate();
					let month = time.getMonth() + 1;
					let year = time.getFullYear();
					let sendtime = year + "-" + month + "-" + date;
					// console.log(person_id)
					this.$http.post("/reply", {
						username,
						person_id,
						sendtime,
						content
					}).then((res) => {
						if (res.data.status == 1) {
							this.replytips = res.data.msg;
							setTimeout(() => {
								this.replytips = "";
								content = "";
								this.reply = false;
							}, 1500);
						} else {
							this.replytips = res.data.msg;
						}

					}).catch((err) => {
						console.log("ajax请求失败！");
						console.log(err);
					});
				}
			},
			cancel() {
				this.reply = false;
				this.replytips = "";
				document.getElementsByClassName("textarea")[0].innerHTML == "";
			},
			showreplybox(e) {
				this.replytips = "";
				this.reply = true;
				this.$store.state.replyid = e.target.parentNode.getAttribute("data-id");
			},
			getinbox() {

				let username = sessionStorage.getItem("username");
				this.$http.get("/getinbox", {
					params: {
						username
					}
				}).then((res) => {
					this.maillist = res.data.arr;
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},
		},
		watch: {
			"$store.state.avatarsrc"() {
				this.avatarsrc = this.$store.state.avatarsrc;
			},
		},
		mounted() {
			this.avatarsrc = this.$store.state.avatarsrc;
			this.getinbox();
		}
	};
</script>

<style scoped="scoped">
	.md {
		width: 1190px;
		height: 500px;
		background-color: transparent;
		position: absolute;
		z-index: 2;
	}
	.replybox {
		width: 500px;
		height: 450px;
		left: 900px;
		background-color: #FFFFFF;
		opacity: 1;
		z-index: 3;
		margin: 0 auto;
		box-sizing: border-box;
		padding-top: 20px;
	}

	.mail .delete {
		width: 70px;
		height: 40px;
		position: absolute;
		right: 60px;
		top: 120px;
		box-sizing: border-box;
		text-align: center;
		line-height: 40px;
		color: #FFFFFF;
		border-radius: 5px;
		background-color: #7b7b7b;
	}

	.mail .delete:hover {
		background-color: #6f6f6f;
	}

	.replytips {
		width: 100%;
		text-align: center;
	}

	.cancel {
		background-color: #7b7b7b;
	}

	.cancel:hover {
		background-color: #6f6f6f;
	}

	.confirm {
		background-color: #409eff;
	}

	.confirm:hover {
		background-color: #66b1ff;
	}



	.textarea {
		width: 400px;
		height: 300px;
		margin: 20px auto;
		border: 1px solid #8C8C8C;
		outline: none;
		padding: 10px 20px 10px;
		overflow-y: scroll;
		border-radius: 30px 0 0 30px;

	}

	.btnbox {
		width: 500px;
		height: 80px;
		display: flex;
		justify-content: center;
		position: absolute;
		left: 320px;
		bottom: 10px;
	}

	.btnbox .btn {
		width: 80px;
		height: 30px;
		/* border: 1px solid #000000; */
		text-align: center;
		line-height: 30px;
		color: #FFFFFF;
		font-size: 18px;
		border-radius: 15px;
		margin-left: 40px;
	}

	.inf {
		width: 600px;
		height: 150px;
		overflow-y: scroll;
	}

	.senderinfo {
		width: 100%;
		height: 30px;
		position: relative;
		left: 50px;
		margin-top: 6px;
	}

	.senderinfo>span {
		display: inline-block;
		margin-right: 50px;
	}

	.mail {
		width: 800px;
		height: 200px;
		margin: 10px auto;
		box-sizing: border-box;
		padding-right: 200px;
		padding-top: 10px;
		padding-left: 20px;
		border: #CCCCCC solid 1px;
		position: relative;
		word-wrap: break-word;
	}

	.mail button {
		position: absolute;
		right: 60px;
		top: 40px;
	}

	.top {
		height: 80px;
		background-image: url(../../assets/img/inbox/top.jpg);
		margin-bottom: 30px;
	}

	.content {
		display: flex;
	}

	.left {
		width: 178px;
		height: 210px;
		margin: 0 auto;
		text-align: center;
		border: solid 1px #d9d9d9;
	}

	.left img {
		width: 110px;
		height: 135px;
	}

	.left span {
		font-size: 14px;
		color: #409eff;
	}

	.right {
		width: 980px;
		height: 500px;
		border: solid 1px #d9d9d9;
		margin-bottom: 30px;
		overflow-y: scroll;
	}
</style>
