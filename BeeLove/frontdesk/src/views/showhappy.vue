<template>
	<div class="showhappy">
		<div class="concern">
			<writehappy></writehappy>
		</div>
		<div>
			<div class="advert">
				<img src="../assets/img/showhappy/advertisement0.jpg" alt />
			</div>
			<showhead></showhead>
			<picshow></picshow>
			<div class="advert">
				<img src="../assets/img/showhappy/advertisement1.jpg" alt />
			</div>
			<showhead></showhead>
			<textShow></textShow>
		</div>
	</div>
</template>

<script>
	import picshow from "@/components/showhappy/picShow/picShow.vue";
	import textShow from "@/components/showhappy/textShow/textShow.vue";
	import showhead from "@/components/showhappy/showhead.vue";
	import writehappy from "@/components/showhappy/writeHappy.vue";

	export default {
		data() {
			return {
				timer: "",
				content: "",
				fileArr: [],
			};
		},
		components: {
			picshow,
			textShow,
			showhead,
			writehappy,
		},
		methods: {
			//发表故事
			publish(event) {
				let path = "/showhappy/writeHappy";
				if (this.$route.path === path) {
					this.$router.go(0);
				} else {
					this.$router.push(path);
				}
			},
		},
	};
</script>

<style scoped>
	.showhappy {
		width: 1349px;
	}

	.concern {
		width: 970px;
		margin: 20px auto;
	}

	.advert {
		text-align: center;
		width: 970px;
		margin: 20px auto;
	}

	.publish {
		cursor: pointer;
	}
</style>
