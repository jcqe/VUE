<template>
	<div>
		<div class="search">
			<div class="container">
				<searchbox class="searchbox"></searchbox>
				<img :src="src" />
				<searchselect></searchselect>
				
			</div>
		</div>
	</div>
</template>
<script>
	import searchbox from "../components/Search/Searchbox.vue";
	import searchselect from "../components/Search/searchselect.vue";
	import guanggao from "../../public/img/search/1554358141116.jpg"
	
	export default {
		data: function() {
			return {
				src: guanggao,
			};
		},
		components: {
			searchbox,
			searchselect,
			
		},
	};
</script>
<style scoped="scoped">
	.search {
		background-color: #f4f1ec;
	}

	.searchbox {
		width: 550px;
		margin: 0 auto;
		padding-top: 20px;
		
	}
	img{
		width: 100%;
	}
</style>
