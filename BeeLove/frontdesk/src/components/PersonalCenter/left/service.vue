<template>
	<!-- 服务中心 -->
	<div class="all">
		<div class="top">
			<div>服务中心</div>
			<div class="hvptr">更多&gt;</div>
		</div>

		<div class="btm">
			<div v-for="item in svsArr">
				<img :src="item" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	import svs1 from "../../../assets/img/PersonalCenter/svs1.png";
	import svs2 from "../../../assets/img/PersonalCenter/svs2.png";
	import svs3 from "../../../assets/img/PersonalCenter/svs3.png";
	import svs4 from "../../../assets/img/PersonalCenter/svs4.png";
	import svs5 from "../../../assets/img/PersonalCenter/svs5.png";
	import svs6 from "../../../assets/img/PersonalCenter/svs6.png";
	export default {
		data() {
			return {
				svsArr: [svs1, svs2, svs3, svs4, svs5, svs6]
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
		overflow: hidden;
	}

	.top {
		width: 300px;
		height: 60px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		border-bottom: solid 1px #F5F5F5;
	}

	.btm {
		position: relative;
		left: -5px;
		width: 340px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.btm>div {
		width: 110px;
		height: 110px;
		margin-bottom: 2px;
	}

	.btm>div>img {
		width: 110px;
		height: 110px;
	}
</style>
