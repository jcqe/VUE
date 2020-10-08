<template>
	<div class="right">
		<!-- 右边 -->
		<div class="toplk">
			<!-- 顶部导航栏 -->
			<div class="cbox" @click="changespg">
				<div>交友中心</div>
				<div>完善资料</div>
				<div>我的照片</div>
				<div>我的好友</div>
				<div>我的账号</div>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import makefriends from "./info/makefriends.vue";
	import completeinfo from "./info/completeinfo.vue";
	import myphoto from "./info/myphoto.vue";
	import myfriends from "./info/myfriends.vue";
	import myaccountnumber from "./info/myaccountnumber.vue";
	export default {
		components: {
			makefriends,
			completeinfo,
			myphoto,
			myfriends,
			myaccountnumber
		},

		methods: {
			changespg(e) {
				/* 点击交友中心等 */
				let path;
				if (e.target.innerHTML.length === 4) {
					/* 点击到正确的位置 */
					switch (e.target.innerHTML) {
						case "交友中心":
							path = "/personalcenter/makefriends";
							break;
						case "完善资料":
							path = "/personalcenter/completeinfo";
							break;
						case "我的照片":
							path = "/personalcenter/myphoto";
							break;
						case "我的好友":
							path = "/personalcenter/myfriends";
							break;
						case "我的账号":
							path = "/personalcenter/myaccountnumber";
							break;
					}

					if (decodeURI(this.$route.fullPath) === path) {
						this.$router.go(0);
					} else {
						this.$router.push(path);
					}
				}
			},

		},


	};
</script>

<style scoped="scoped">
	.right {
		width: 830px;

		/* float: right; */

		position: absolute;

		right: 0px;
		background-color: #FFFFFF;
	}

	.toplk {
		width: 100%;
		height: 52px;
		border-bottom: solid 1px #f5f5f5;
	}

	.cbox {
		display: flex;
		justify-content: space-between;
		height: 52px;
		font-size: 18px;
		line-height: 52px;
		width: 700px;
		position: relative;
		left: 20px;
		cursor: pointer;
	}
</style>
