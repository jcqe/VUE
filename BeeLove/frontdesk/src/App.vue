<template>
	<!-- 主组件 -->
	<div id="app" v-cloak>
		<myheader></myheader>

		<div class="nvgtbox">
			<div class="logobox container">
				<img class="logo" src="./assets/img/logo.png" alt="">
				<img class="gif" src="./assets/img/nvgtgif.gif" alt="">
			</div>

			<div class="container nvgt" @click="chengepage">
				<!-- 导航 -->
				<div class="hvptr">首页</div>
				<div class="hvptr">个人中心</div>
				<div class="hvptr">收件箱</div>
				<div class="hvptr">搜索</div>
				<div class="hvptr">晒幸福</div>
				<div class="hvptr">关于我们</div>
			</div>
		</div>
		
		<keep-alive>
			<router-view></router-view>
		</keep-alive>

		<copyright></copyright>
		<sidebar></sidebar>
	</div>

</template>

<script>
	import personal from "./views/PersonalCenter.vue";
	import inbox from "./views/Inbox.vue";
	import about from "./views/About.vue";
	import home from "./views/home.vue";
	import copyright from "./views/copyright.vue";
	import myheader from "./views/myheader.vue";
	import register from "./views/register.vue";
	import login from "./views/login.vue";
	import search from "./views/Search.vue";
	import showhappy from "./views/showhappy.vue";
	import sidebar from "./components/home/sidebar.vue";
	export default {
		components: {
			personal,
			inbox,
			myheader,
			copyright,
			login,
			register,
			showhappy,
			sidebar,
			search,
			about,
		},
		methods: {
			chengepage(e) {
				let path;
				let username = sessionStorage.getItem("username");
				if (e.target.innerHTML === "个人中心") {
					if (username === null) {
						path = "/login/loginform";
					} else {
						path = "/personalcenter/makefriends";
					}
				} else if (e.target.innerHTML === "首页") {
					path = "/home";
				} else if (e.target.innerHTML === "收件箱") {
					if (username === null) {
						path = "/login/loginform";
					} else {
						path = "/inbox";
					}
				} else if (e.target.innerHTML === "晒幸福") {
					path = "/showhappy";
				} else if (e.target.innerHTML === "搜索") {
					path = "/search";
				} else if (e.target.innerHTML === "关于我们") {
					path = "/about";
				} else {
					path = decodeURI(this.$route.fullPath);
				}

				if (decodeURI(this.$route.fullPath) === path) {
					this.$router.go(0);
				} else {
					this.$router.push(path);
				}
			}
		}
	};
</script>

<style scoped="scoped">
	.nvgt {
		position: relative;
		/* top: -90px; */
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		box-sizing: border-box;
		height: 130px;
		padding-bottom: 10px;
		font-size: 20px;
	}

	.nvgtbox {
		position: relative;
		width: 100%;
		height: 130px;
		box-sizing: border-box;
		background-color: #FFFFFF;
		margin-bottom: 10px;
	}

	.logobox {
		position: relative;
	}

	.logo {
		position: absolute;
		left: 66px;
		width: 120px;
		height: 120px;
	}

	.gif {
		position: absolute;
		right: 100px;
		width: 200px;
		height: 100px;
	}
</style>
