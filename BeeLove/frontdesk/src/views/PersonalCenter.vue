<template>
	<div class="container">
		<!-- 个人中心 -->
		<myhead></myhead>
		<mycenter></mycenter>
	</div>
</template>

<script>
	import myhead from "../components/PersonalCenter/BasicInformation.vue";
	import mycenter from "../components/PersonalCenter/CenterInfo.vue";
	export default {
		components: {
			myhead,
			mycenter,
		}
	};
</script>

<style scoped="scoped">

</style>
