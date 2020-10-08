<template>
	<!--  -->
	<div id="app" class="big">
		<lunbo></lunbo>
		<makefriends></makefriends>
		<links></links>
		<lunbo1></lunbo1>
		<emotion></emotion>
		<happinessShow></happinessShow>
	</div>
</template>

<script>
	import lunbo from "../components/home/lunbo.vue"
	import makefriends from "../components/home/makefriends.vue"
	import links from "../components/home/links.vue"
	import lunbo1 from "../components/home/lunbo1.vue"
	import emotion from "../components/home/emotion.vue"
	import happinessShow from "../components/home/happinessShow.vue"
	export default {
		components: {
			lunbo,
			makefriends,
			links,
			lunbo1,
			emotion,
			happinessShow,
		}
	}
</script>

<style scoped>
	.big {
		background-color: #F6F6F6;
	}
</style>
