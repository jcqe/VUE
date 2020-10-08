<template>
	<!-- 我的照片 -->
	<div class="all">
		<div class="photo">
			<div v-for="item in photoArr" :key="item.id">
				<div class="imgbox">
					<img class="img" :src="item.url" alt="">
					<div class="deletebox">
						<div :data-pid="item.id" @click="deletephoto" class="deletebtn hvptr">删除</div>
					</div>
				</div>
			</div>
		</div>
		
		<div v-show="canuppt">
			<div class="filebox">
				<el-button @click="choosept" type="primary" round>选择照片</el-button>
				<div class="fiptbox"><input class="avatarfile" type="file"></div>
			</div>
			
			<div class="btnbox">
				<el-button @click="uploadpt" type="primary" round>上传</el-button>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				photoArr: [],
				canuppt: true
			};
		},
		methods: {
			choosept() {
				/* 选择照片 */
				document.getElementsByClassName("avatarfile")[0].click();
			},
			uploadpt() {
				/* 上传照片按钮 */
				let username = sessionStorage.getItem("username");
				let file = document.getElementsByClassName("avatarfile")[0].files[0];
				if (file == undefined) {
					alert("你还未选择照片！");
				} else {
					let formData = new FormData();
					formData.append("userDefaultAvatar", file, file.name);
					formData.append("username", username);
					const config = {
						headers: {
							"Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
						}
					};

					this.$http.post("/uploadphoto", formData, config).then((res) => {
						let obj = res.data;
						console.log(obj);
						this.showmyphoto();
					}).catch((err) => {
						console.log("ajax请求失败！");
						console.log(err);
					});
				}
			},
			
			showmyphoto() {
				/* 显示我的照片 */
				let username = sessionStorage.getItem("username");
				this.$http.post("/showmyphoto", {
					username
				}).then((res) => {
					this.photoArr = res.data;
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},
			
			deletephoto(e) {
				/* 删除照片 */
				let id = (e.target.getAttribute("data-pid")) * 1; // 图片的id
				let username = sessionStorage.getItem("username");
				this.$http.post("/deletephoto", {
					id
				}).then((res) => {
					console.log(res.data);
					this.showmyphoto();
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},
			
		},
		watch: {
			photoArr() {
				/* 监听用户有多少张照片，8张及以上就不能上传了 */
				if (this.photoArr.length < 8) {
					this.canuppt = true;
				} else {
					this.canuppt = false;
				}
			}
		},
		created() {
			this.showmyphoto();
		}
	};
</script>

<style scoped="scoped">
	.deletebtn {
		width: 40px;
		height: 30px;
		line-height: 30px;
		font-size: 20px;
		position: absolute;
		left: 80px;
		top: 10px;
	}
	.deletebox {
		display: none;
		width: 100%;
		height: 50px;
		background-color: rgba(0,0,0,0.3);
		position: relative;
		top: -54px;
		color: #CCCCCC;
		box-sizing: border-box;
	}
	.btnbox {
		position: relative;
		width: 200px;
		left: 380px;
	}

	.filebox {
		text-align: center;
		position: relative;
		top: 10px;
	}

	.fiptbox {
		position: relative;
		left: 480px;
		top: -36px;
		width: 180px;
		overflow: hidden;
	}

	.avatarfile {
		position: relative;
		left: -100px;
		font-size: 20px;
		outline: none;
	}

	.all {
		width: 830px;
		height: 800px;
	}

	.photo {
		width: 830px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.imgbox {
		width: 200px;
		height: 300px;
		margin-bottom: 10px;
	}

	.img {
		width: 200px;
		height: 300px;
	}
	.imgbox:hover>.deletebox {
		display: block;
	}
</style>
