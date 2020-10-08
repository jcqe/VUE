<template>
	<!-- 礼物商城 -->
	<div class="all">
		<div class="top">
			<div>礼物商城</div>
			<div class="hvptr">更多&gt;</div>
		</div>
		<div class="btm">
			<div v-for="item in gifArr">
				<div class="hvptr">
					<img :src="item.src" alt="">
				</div>
				<div>{{item.msg}}</div>
				<el-button>赠送</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import g1 from "../../../assets/img/PersonalCenter/gft1.gif";
	import g2 from "../../../assets/img/PersonalCenter/gft2.gif";
	import g3 from "../../../assets/img/PersonalCenter/gft3.gif";
	import g4 from "../../../assets/img/PersonalCenter/gft4.gif";
	import g5 from "../../../assets/img/PersonalCenter/gft5.gif";
	import g6 from "../../../assets/img/PersonalCenter/gft6.gif";
	export default {
		data() {
			return {
				gifArr: [{
						src: g1,
						msg: "一起放风筝"
					},
					{
						src: g2,
						msg: "一起放风筝"
					},
					{
						src: g3,
						msg: "一起放风筝"
					},
					{
						src: g4,
						msg: "一起放风筝"
					},
					{
						src: g5,
						msg: "一起放风筝"
					},
					{
						src: g6,
						msg: "一起放风筝"
					}
				]
			};
		}
	};
</script>

<style scoped="scoped">
	.all {
		position: relative;
		box-sizing: border-box;
		padding: 0px;
		margin-bottom: 20px;
	}

	.top {
		width: 340px;
		height: 60px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		border-bottom: solid 1px #F5F5F5;
	}

	.btm {
		position: relative;
		right: 10px;
		width: 340px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.btm>div {
		width: 113px;
		height: 191px;
		position: relative;
		left: 20px;
	}

	.btm img {
		width: 84px;
		height: 84px;
	}
</style>
