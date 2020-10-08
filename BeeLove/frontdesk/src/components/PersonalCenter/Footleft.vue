<template>
	<div class="left">
		<!-- 左边 -->
		<service></service>
		<gift></gift>
		<recruitment></recruitment>
	</div>
</template>

<script>
	import service from "./left/service.vue"; // 服务中心
	import gift from "./left/gift.vue"; // 礼物商城
	import recruitment from "./left/recruitment.vue"; // 招聘
	export default {
		components: {
			service,
			gift,
			recruitment
		}
	};
</script>

<style scoped="scoped">
	.left {
		width: 340px;
		float: left;
		position: absolute;
		left: 0px;
		background-color: #FFFFFF;
	}
</style>
