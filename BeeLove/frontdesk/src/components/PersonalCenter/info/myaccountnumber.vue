<template>
	<!-- 我的账号 -->
	<div class="all">
		<div class="nav">
			<div @click="changenva" class="hvptr">修改密码</div>
			<div @click="changenva" class="hvptr">找回密码</div>
			<div @click="changenva" class="hvptr">我要反馈</div>
		</div>

		<div>
			<div v-if="wnav1" class="updatepwdbox">
				<div class="ptbox">
					<span class="ptwd">旧 密 码：</span><input class="pwdipt" @input="diswips" v-model="oldpwd" type="password">
				</div>
				<div class="ptbox">
					<span class="ptwd">新 密 码：</span><input class="pwdipt" @input="diswips" v-model="newpwd" type="password">
				</div>
				<div class="ptbox">
					<span class="ptwd">再次确认：</span><input class="pwdipt" @input="diswips" v-model="reconfm" type="password">
				</div>
				<div class="upwdtips">{{upwdtips}}</div>
				<div class="cbtn1box"><button @click="updatepwd" class="cbtn1" type="button">确认修改</button></div>
			</div>

			<div v-if="wnav2" class="getbkpwdbox">

				<div>
					<div>
						<div class="ctt">如果不能通过此方式找回密码，请联系管理员！</div>
						<!-- 密保问题答案 -->
						<div>
							<div class="ptbox">
								<span class="ptwd">
									密保问题：
								</span>
								<input @click="showqst" class="hvptr" v-model="qstipt" type="text" readonly="readonly">
								<button @click="showqst" type="button" class="showqst">显示问题</button>
							</div>
							<div class="ptbox">
								<span class="ptwd">
									密保答案：
								</span>
								<input v-model="aswipt" type="text">
							</div>
							<div class="upwdtips">{{qsttips}}</div>
							<div class="cbtn1box"><button @click="verificationsqt" type="button" class="besureqst">验证密保</button></div>

						</div>
						<!-- 密保问题答案 -->

						<!-- 重置密码 -->
						<div class="box" v-if="box1">
							<div class="ctt">请重新设置密码</div>
							<div class="ptbox">
								<span class="ptwd">
									新 密 码：
								</span>
								<input v-model="rnewpwd" type="password">
							</div>
							<div class="ptbox">
								<span class="ptwd">
									再次确认：
								</span>
								<input v-model="rconfmpwd" type="password">
							</div>
							<div class="upwdtips">{{rstpwdtips}}</div>
							<div class="cbtn1box"><button @click="resetpwd" type="button" class="reset">确认</button></div>
						</div>
						<!-- 重置密码 -->

						<!-- 修改密保 -->
						<div class="box" v-if="box2">
							<div class="ctt">修改密保</div>
							<div class="ptbox">
								<span class="ptwd">
									密保问题：
								</span>
								<input v-model="newqst" type="text">
							</div>
							<div class="ptbox">
								<span class="ptwd">
									密保答案：
								</span>
								<input v-model="newasw" type="text">
							</div>
							<div class="upwdtips">{{updstips}}</div>
							<div class="cbtn1box">
								<button @click="cancelbtn1" type="button" class="cancel">取消</button>
								<button @click="setnewsecret" type="button" class="updqst">确认</button>
							</div>
						</div>
						<!-- 修改密保 -->
					</div>
				</div>
			</div>

			<div v-if="wnav3" class="feedbackbox">
				<div class="textarea" contenteditable="true" @input="getcontent"></div>
				<div class="upwdtips">{{textareatips}}</div>
				<div class="cbtn1box"><button @click="feedback" class="cbtn1" type="button">提交</button></div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				wnav1: true,
				wnav2: false,
				wnav3: false,
				upwdtips: "",
				oldpwd: "",
				newpwd: "",
				reconfm: "",
				box1: false,
				box2: false,

				qsttips: "", // 显示密保提示
				qstipt: "", // 密保显示框
				aswipt: "", // 验证密保输入框

				rstpwdtips: "", // 重置密码提示
				rnewpwd: "", // 设置密码输入框
				rconfmpwd: "", // 再次确认输入框

				updstips: "", // 修改密保提示
				newqst: "", // 新密保问题
				newasw: "", // 新密保答案
				textareatips: "", // 反馈提示
				content: "", // 反馈内容
			};
		},
		methods: {
			changenva(e) {
				/* 选项卡 */
				this.wnav1 = false;
				this.wnav2 = false;
				this.wnav3 = false;
				switch (e.target.innerHTML.trim()) {
					case "修改密码":
						this.wnav1 = true;
						break;
					case "找回密码":
						this.wnav2 = true;
						break;
					case "我要反馈":
						this.wnav3 = true;
						break;
				}
			},
			updatepwd() {
				/* 点击确认修改按钮 */
				/* 密码6~20位 */
				let ipt = document.getElementsByClassName("pwdipt");
				this.upwdtips = "";

				// 判空
				if (this.oldpwd == "") {
					this.upwdtips = "请先输入旧密码！";
					ipt[0].focus();
				} else if (this.newpwd == "") {
					this.upwdtips = "请先输入新密码！";
					ipt[1].focus();
				} else if (this.reconfm == "") {
					this.upwdtips = "请确认密码！";
					ipt[2].focus();
				} else {
					// 判断两次输入的密码是否一致
					if (this.newpwd != this.reconfm) {
						this.upwdtips = "两次输入的密码不一致，请重新输入！";
						this.newpwd = "";
						this.reconfm = "";
						ipt[1].focus();
					} else {
						let username = sessionStorage.getItem("username");
						this.$http.post("/updatepwd", {
							username,
							newpwd: this.newpwd,
							oldpwd: this.oldpwd
						}).then((res) => {
							let obj = res.data;
							if (obj.status == 1) {
								this.upwdtips = obj.msg;
								this.oldpwd = ""
								this.newpwd = "";
								this.reconfm = "";
								setTimeout(() => {
									this.upwdtips = "";
								}, 2000);
							} else {
								this.upwdtips = obj.msg;
								ipt[0].focus();
							}
						}).catch((err) => {
							this.upwdtips = "修改失败！";
							console.log("ajax请求失败！");
							console.log(err);
						});
					}
				}




			},
			diswips() {
				/* 清除提示 */
				this.upwdtips = "";
			},
			showqst() {
				/* 显示密保 */
				let username = sessionStorage.getItem("username");
				this.qsttips = "";
				this.box1 = false;
				this.box2 = false;
				this.$http.post("/showqst", {
					username
				}).then((res) => {
					this.qstipt = res.data[0].qst;
				}).catch((err) => {
					console.log("ajax请求失败！")
					console.log(err);
				});
			},
			verificationsqt() {
				/* 验证密保 */
				let username = sessionStorage.getItem("username");
				this.qsttips = "";
				this.box1 = false;
				this.box2 = false;
				this.$http.post("/verificationsqt", {
					username,
					asw: this.aswipt
				}).then((res) => {
					let status = res.data.status;
					let msg = res.data.msg;

					if (status == 0) {
						this.qsttips = msg;
					} else {
						this.box1 = true;
						this.qstipt = "";
						this.aswipt = "";
						this.qsttips = msg;
						setTimeout(() => {
							this.qsttips = "";
						}, 1500);
					}
				}).catch((err) => {
					console.log("ajax请求失败！")
					console.log(err);
				});
			},
			resetpwd() {
				/* 重置密码 */
				this.rstpwdtips = "";
				if (this.rnewpwd == "") {
					this.rstpwdtips = "请先输入新密码";
				} else {
					if (this.rnewpwd != this.rconfmpwd) {
						this.rstpwdtips = "两次输入不一致，请重新输入！";
					} else {
						let username = sessionStorage.getItem("username");
						this.rstpwdtips = "";
						this.$http.post("/resetpwd", {
							username,
							newpwd: this.rnewpwd
						}).then((res) => {
							let status = res.data.status;
							let msg = res.data.msg;
							if (status == 1) {
								this.rstpwdtips = msg;
								setTimeout(() => {
									this.box1 = false;
									this.box2 = true;
								}, 1000);
							} else {
								this.rstpwdtips = msg;
							}
						}).catch((err) => {
							console.log("ajax请求失败！")
							console.log(err);
						});
					}
				}

			},
			cancelbtn1() {
				/* 取消修改密保 */
				this.box2 = false;
			},
			setnewsecret() {
				/* 设置新密保 */
				this.updstips = "";

				if (this.newqst.trim() == "") {
					this.updstips = "请先输入新密保问题！";
				} else if (this.newasw.trim() == "") {
					this.updstips = "请先输入新密保答案！";
				} else {
					let username = sessionStorage.getItem("username");
					this.$http.post("/setnewsecret", {
						username,
						newqst: this.newqst,
						newasw: this.newasw
					}).then((res) => {
						let status = res.data.status;
						let msg = res.data.msg;
						if (status == 1) {
							this.updstips = msg;
							setTimeout(() => {
								this.box2 = false;
							}, 1000);
						} else {
							this.updstips = msg;
						}
					}).catch((err) => {
						console.log("ajax请求失败！")
						console.log(err);
					});
				}
			},
			feedback() {
				/* 反馈 */
				this.textareatips = "";
				if (this.content.trim() == "") {
					this.textareatips = "请先填写反馈内容";
				} else if (this.content.length > 300) {
					this.textareatips = "内容不能超过300字！";
				} else {
					let username = sessionStorage.getItem("username");
					let date = new Date();
					let year = date.getFullYear();
					let month = date.getMonth() + 1;
					let day = date.getDate();
					let time = year + "-" + month + "-" + day;
					this.$http.post("/feedback", {
						username,
						content: this.content,
						time
					}).then((res) => {
						let status = res.data.status;
						let msg = res.data.msg;
						if (status == 0) {
							this.textareatips = msg;
						} else {
							this.textareatips = msg;
							let c = document.getElementsByClassName("textarea")[0];
							setTimeout(() => {
								this.textareatips = "";
								this.content = "";
								c.innerHTML = "";
							},1000);
						}
					}).catch((err) => {
						console.log("ajax请求失败！")
						console.log(err);
					});;
				}
			},
			getcontent(e) {
				this.content = e.target.innerText;
			},
		},
		watch: {
			"this.content"() {
				if (this.content.length >= 300) {
					this.textareatips = "内容不能超过300字！";
				}
			}
		}


	};
</script>

<style scoped="scoped">
	.all {
		height: 800px;
	}

	.all input,
	.all button {
		outline: none;
	}

	.all button {
		cursor: pointer;
		border: none;
		background-color: #409eff;
		color: #FFFFFF;
	}

	.all button:hover {
		background-color: #66b1ff;
	}

	.nav {
		display: flex;
		justify-content: space-between;
		width: 600px;
		margin: 20px auto;
		font-size: 20px;
	}

	.updatepwdbox,
	.getbkpwdbox,
	.feedbackbox {
		width: 700px;
		margin: 0px auto;
	}

	.updatepwdbox {
		position: relative;
		top: 100px;
	}

	.ptbox {
		width: 700px;
		background-color: lightblue;
		height: 50px;
		margin-bottom: 30px;
		box-sizing: border-box;
		padding-left: 100px;
		border-radius: 20px;
	}

	.ptwd {
		display: inline-block;
		width: 100px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 20px;
	}

	.ptbox>input {
		width: 300px;
		height: 36px;
		box-sizing: border-box;
		padding-left: 20px;
		padding-right: 20px;
		font-size: 36px;
		position: relative;
		top: 4px;
		left: 100px;
		border-radius: 20px;
		border: #dcdfe6 solid 1px;
	}

	.ptbox>input:focus {
		border: #409eff solid 1px;
	}

	.upwdtips {
		position: relative;
		width: 100%;
		text-align: center;
		top: 20px;
		height: 30px;
	}

	.cbtn1box {
		width: 100%;
		text-align: center;
		position: relative;
		top: 50px;
	}

	.cbtn1 {
		width: 140px;
		height: 40px;
		font-size: 24px;
		border-radius: 10px;
	}

	.ctt {
		width: 100%;
		text-align: center;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.box {
		margin-top: 100px;
	}

	.showqst {
		position: relative;
		top: -4px;
		left: 102px;
		width: 80px;
		height: 30px;
		border-radius: 15px;
	}

	.besureqst {
		width: 160px;
		height: 40px;
		font-size: 20px;
		border-radius: 15px;
	}

	.reset,
	.updqst,
	.cancel {
		width: 80px;
		height: 40px;
		font-size: 20px;
		border-radius: 15px;
	}

	.box .cbtn1box .cancel {
		margin-right: 30px;
		background-color: #909399;
	}

	.box .cbtn1box .cancel:hover {
		background-color: #a6a9ad;
	}

	.textarea {
		width: 600px;
		height: 400px;
		border: #CCCCCC solid 1px;
		border-radius: 10px;
		outline: none;
		margin: 50px auto;
		margin-bottom: 0px;
		box-sizing: border-box;
		padding: 50px;
		overflow-y: scroll;
		font-size: 20px;
		background-color: #E6F1FE;
	}
</style>
