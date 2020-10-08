<template>
	<div class="loginform">
		<!-- 头部标题 -->
		<ul class="loginTit">
			<li>会员登录</li>
		</ul>
		<!-- 底部输入 -->
		<div class="loginInner">
			<!-- 提示信息 -->
			<p style="color:red" class="login_info el-icon-error"></p>
			<!-- 账号和密码输入 -->
			<ul>
				<li>
					<label class="lab">登录帐号</label>
					<div class="demo-input-suffix login_inBox">
						<el-input placeholder="邮箱/ID/手机号" v-model="username" clearable></el-input>
					</div>
				</li>
				<li>
					<label class="lab pwd">密码</label>
					<div class="demo-input-suffix login_inBox">
						<el-input placeholder="邮箱/ID/手机号" type="password" v-model="password" clearable></el-input>
					</div>
				</li>
				<li>
					<div class="demo-input-suffix login_inBox">
						<el-checkbox v-model="checked">两周内自动登录</el-checkbox>
					</div>
				</li>
				<li>
					<div class="login_inBox">
						<el-button type="danger" @click="userLogin">登录</el-button>
						<a href="#">
							<span><a href="http://localhost:8080/#/login/phonelogin">忘记密码</a></span>
						</a>
					</div>
				</li>
			</ul>
			<hr />
			<!-- 没有账号，转到注册 -->
			<p class="goReg">
				<a href="http://localhost:8080/#/register">还不是会员？立即注册</a>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: "", //用户账号
				password: "", //用户密码
				checked: "", //是否同意用户协议
			};
		},
		methods: {
			// 登录判断
			userLogin() {
				if (this.username == "") {
					document.querySelector(".login_info").style.display = "block";
					document.querySelector(".login_info").innerHTML = "请填写您的登录账号";
				} else if (this.password == "") {
					document.querySelector(".login_info").style.display = "block";
					document.querySelector(".login_info").innerHTML = "请填写您的密码";
				} else if (this.username && this.password && this.checked) {
					document.querySelector(".login_info").style.display = "none";
					this.$http.post("/login", {
							username: this.username,
							password: this.password,
						})
						.then((r) => {
							if (r.data.status == 0) {
								sessionStorage.setItem("username", this.username);
								this.$store.state.username = this.username;
								this.$router.push("/home"); //转到首页
								this.username = "";
								this.password = "";
								this.checked = "";
							}
						}).catch((err) => {
							console.log("ajax请求失败！");
							console.log(err);
						});
				}
			},
		},
	};
</script>

<style scoped>
	.login_info {
		display: none;
		background-color: rgb(254, 250, 203);
		border: 1px solid rgb(254, 226, 203);
		text-indent: 1em;
		line-height: 30px;
		font-size: 14px;
		color: #666;
		width: 100%;
	}

	hr {
		color: #999;
	}

	a:hover {
		color: steelblue;
	}

	a {
		color: #666;
	}

	.goReg {
		text-align: center;
	}

	.loginInner .login_inBox {
		position: relative;
		width: 220px;
		height: 30px;
		float: right;
		color: rgb(136, 136, 136);
	}

	.loginInner>ul>li>.lab {
		width: 80px;
		height: 32px;
		line-height: 32px;
		margin-right: 9px;
		font-size: 14px;
		color: #666;
		text-align: right;
		display: inline-block;
	}

	.loginInner>ul>li {
		margin-top: 10px;
		margin-bottom: 30px;
	}

	.loginInner>ul {
		width: 100%;
		height: 230px;
	}

	.loginInner {
		width: 367px;
		height: 321px;
		padding: 15px 20px 20px 19px;
		border: 1px solid #d3d3d3;
		border-top: none;
		box-sizing: border-box;
	}

	.loginTit li {
		width: 100%;
		height: 100%;
		background-color: #fafafa;
		color: #000;
		text-align: left;
		text-indent: 30px;
		cursor: default;
		font-size: 18px;
		line-height: 52px;
	}

	.loginTit {
		width: 365px;
		height: 52px;
		background: #fafafa;
		border: 1px solid #d3d3d3;
	}

	.loginform {
		margin-left: 64px;
		margin-top: 45px;
		background-color: #fff;
		width: 367px;
		height: 373px;
	}
</style>
