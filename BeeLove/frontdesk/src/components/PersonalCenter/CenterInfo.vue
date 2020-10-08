<template>
	<div class="center">
		<!-- 中间 -->
		<right></right>
		<left></left>
	</div>
</template>

<script>
	import left from "./Footleft.vue";
	import right from "./Footright.vue";
	export default {
		components: {
			left,
			right
		}
	};
</script>

<style scoped="scoped">
	.center {
		margin-top: 20px;
		border-radius: 5px;
		position: relative;
		top: 0px;
		height: 900px;
	}
</style>
