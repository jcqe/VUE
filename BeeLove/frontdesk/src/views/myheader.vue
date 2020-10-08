<template>
	<!-- 顶部 -->
	<div class="all">
		<div class="container box">
			<div class="left">
				<div class="hvptr">收藏本站</div>
				<div class="hvptr">手机APP</div>
				<div class="hvptr">微信公众号</div>
				<div class="hvptr">红娘专线</div>
			</div>

			<div class="right">
				<div v-if="tips1" class="hvptr" @click="login">登录</div>
				<div v-if="tips1" class="hvptr" @click="register">注册</div>
				<div class="hvptr">充值</div>
				<div v-if="tips2" class="hvptr" @click="logout">注销</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tips1: true,
				tips2: false,
				nickname: ""
			};
		},
		methods: {
			register() {
				this.$router.push("/register");
			},
			login() {
				this.$router.push("/login/loginform");
			},
			logout() {
				/* 注销 */
				this.$store.state.username = "";
				this.nickname = "";
				sessionStorage.removeItem("username");
				let username = sessionStorage.getItem("username");
				this.$router.go(0);
				if (this.$route.fullPath == "/" || this.$route.fullPath == "home") {
					this.$router.go(0);
				} else {
					this.$router.go(0);
					this.$router.push("/");
				}
				
				this.tips1 = true;
				this.tips2 = false;
			}
		},
		watch: {
			"$store.state.username"() {
				if (this.$store.state.username === null) {
					this.tips1 = true;
					this.tips2 = false;
				} else {
					this.tips1 = false;
					this.tips2 = true;
				}
			},
		},
	};
</script>

<style scoped="scoped">
	.all {
		width: 100%;
		height: 30px;
		background-color: #f7f7f7;
		line-height: 30px;
	}

	.box,
	.left,
	.right {
		width: 1190px;
		height: 30px;
		display: flex;
		justify-content: space-between;
	}

	.left,
	.right {
		width: 500px;
	}
</style>
