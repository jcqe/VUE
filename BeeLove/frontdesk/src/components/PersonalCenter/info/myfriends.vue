<template>
	<!-- 我的好友 -->
	<div class="all">
		<div class="left">
			<div>
				<div @click="showtextarea" :data-friendid="item.friends_id" :data-fn="item.name" class="friends" v-for="item in friendslist"
				 :key="item.friends_id">
					{{item.name}}
					<div :data-friendid="item.friends_id" @click.stop="delfriend" class="deletefriends">删除</div>
				</div>
			</div>
		</div>

		<div class="right" v-show="isshow">
			<div @dblclick="updatermk" class="fname">{{fnickname}}</div>
			<div class="textarea" contenteditable="true"></div>
			<el-button @click="sendtoinbox" type="primary" round>点击发送</el-button>
			<div v-if="tips1" class="tips1">发送成功</div>
			<div v-if="tips2" class="tips2">发送失败</div>
		</div>

		<div class="friendsapplybox" v-show="fapl">
			<div class="apply" v-for="item in faplArr" :key="item.person_id">
				<div class="hvptr">“{{item.nickname}}”申请加你为好友</div>
				<div class="cfriendsbtnbox">
					<div :data-id="item.person_id" @click="agreemakefriends" class="agree">同意</div>
					<div :data-id="item.person_id" @click="ignorefriendsapply" class="ignore">忽略</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isshow: false,
				friendslist: [],
				tips1: false,
				tips2: false,
				fnickname: "",
				alg: false,
				fapl: false,
				faplArr: "",
			};
		},
		methods: {
			
			sendtoinbox() {
				let friends_id = sessionStorage.getItem("fid");
				let username = sessionStorage.getItem("username");
				let content = document.getElementsByClassName("textarea")[0].innerHTML;
				let time = new Date();
				let year = time.getFullYear();
				let month = time.getMonth() + 1;
				let date = time.getDate();
				let sendtime = year + "-" + month + "-" + date;
				console.log(sendtime)
				this.$http.post("/sendtoinbox",{
					friends_id,
					username,
					content,
					sendtime
				}).then((res) => {
					console.log(res.data);

				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},
			agreemakefriends(e) {
				/* 同意加好友 */
				let username = sessionStorage.getItem("username");
				let person_id = e.target.getAttribute("data-id") * 1;
				this.$http.get("agreemakefriends", {
					params: {
						username,
						person_id
					}
				}).then((res) => {
					if (res.data.status == 1) {
						this.showfriends();
					} else {
						console.log(res.data.msg)
					}
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},

			ignorefriendsapply(e) {
				/* 忽略加好友 */
				let username = sessionStorage.getItem("username");
				let person_id = e.target.getAttribute("data-id") * 1;
				this.$http.get("ignorefriendsapply", {
					params: {
						username,
						person_id
					}
				}).then((res) => {
					if (res.data.status == 1) {
						this.showfriends();
					} else {
						console.log(res.data.msg)
					}
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},

			showtextarea(e) {
				this.isshow = true;
				this.fnickname = e.target.getAttribute("data-fn");
				let fid = e.target.getAttribute("data-friendid");
				sessionStorage.setItem("fid", fid);
			},

			delfriend(e) {
				/* 删除好友 */
				let username = sessionStorage.getItem("username");
				let friends_id = e.target.getAttribute("data-friendid");
				this.$http.get("/delfriend", {
					params: {
						username,
						friends_id
					}
				}).then((res) => {
					console.log(res.data.msg);
					this.showfriends();
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},

			showfriends() {
				/* 展示好友列表 */
				let username = sessionStorage.getItem("username");
				this.$http.get("showmyfriends", {
					params: {
						username
					}
				}).then((res) => {
					this.friendslist = res.data.arr1;
					this.faplArr = res.data.arr2;
					if (this.faplArr.length == 0) {
						this.fapl = false;
					} else {
						this.fapl = true;
					}
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},

			updatermk(e) {
				/* 双击编辑好友备注 */
				let ipt = e.target;
				ipt.setAttribute("contenteditable", true);
				ipt.focus();
				ipt.addEventListener("blur", () => {
					let friends_remarks = ipt.innerHTML.trim();
					let username = sessionStorage.getItem("username");
					let fid = sessionStorage.getItem("fid");
					this.$http.get("/changeremarks", {
						params: {
							friends_remarks,
							username,
							friends_id: fid
						}
					}).then((res) => {
						this.showfriends();
					}).catch((err) => {
						console.log("ajax请求失败！");
						console.log(err);
					});
				});
			},

		},
		mounted() {
			this.showfriends();
		},
	};
</script>

<style scoped="scoped">
	.agree {
		background-color: #E0C46C;
	}

	.agree:hover {
		background-color: #E6A23C;
	}

	.ignore {
		background-color: #cbd0d3;
	}

	.ignore:hover {
		background-color: #dbdee1;
	}

	.cfriendsbtnbox {
		display: flex;
	}

	.cfriendsbtnbox>div {
		width: 50px;
		height: 20px;
		font-size: 14px;
		border-radius: 10px;
		text-align: center;
		line-height: 20px;
		color: #FFFFFF;
		position: relative;
		top: 5px;
		left: 150px;
		margin-right: 20px;
		cursor: pointer;
	}

	.apply {
		width: 100%;
		height: 30px;
		display: flex;
		position: relative;
		margin-top: 2px;
		line-height: 30px;
		box-sizing: border-box;
		padding-left: 10px;
		border: #CCCCCC solid 1px;
	}

	.apply:hover {
		background-color: #f3f3f3;
	}

	.friendsapplybox {
		position: absolute;
		top: 540px;
		left: 360px;
		width: 500px;
		height: 200px;
		overflow-y: scroll;
		border: #CCCCCC solid 1px;
		box-sizing: border-box;
		padding-top: 1px;
		background-color: #FFF8F0;
	}

	.deletefriends {
		width: 40px;
		height: 24px;
		background-color: #f4f4f5;
		color: #909399;
		position: relative;
		top: -28px;
		left: 180px;
		text-align: center;
		line-height: 24px;
		font-size: 14px;
		border-radius: 10px;
		z-index: 2;
	}

	.deletefriends:hover {
		background-color: #CCCCCC;
		color: #f4f4f5;
		cursor: pointer;
		width: 50px;
		font-size: 16px;
		left: 175px;
	}

	.all {
		display: flex;
		justify-content: space-between;
	}

	.left {
		width: 300px;
		background-color: #FFFFFF;
		height: 700px;
		box-sizing: border-box;
		overflow-y: scroll;
	}

	.left>div {
		margin: 2px auto;
		width: 260px;
		background-color: #DDDDDD;
	}

	.friends {
		width: 260px;
		height: 30px;
		margin-top: 2px;
		line-height: 30px;
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding-left: 20px;
	}

	.friends:hover {
		background-color: #F3F3F3;
	}

	.right {
		width: 500px;
		height: 700px;
	}

	.fname {
		margin-top: 20px;
		margin-bottom: 20px;
		font-size: 24px;
		width: 100%;
		text-align: center;
	}

	.textarea {
		width: 480px;
		height: 300px;
		box-sizing: border-box;
		padding-left: 30px;
		padding-right: 30px;
		padding-top: 20px;
		outline: none;
		border: #CCCCCC solid 1px;
		border-radius: 20px 0px 0px 20px;
		overflow-y: scroll;
		font-size: 24px;
		background-color: #e6f1fe;
	}

	.right button {
		font-size: 20px;
		position: relative;
		left: 180px;
		top: 20px;
	}

	.tips1,
	.tips2 {
		color: #67C23A;
		position: relative;
		left: 200px;
		top: 30px;
	}

	.tips2 {
		color: #F56C6C;
	}
</style>
