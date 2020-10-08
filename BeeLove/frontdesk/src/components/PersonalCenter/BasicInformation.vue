<template>
	<div class="box">
		<!-- 头部基本信息 -->
		<div class="left">
			<div class="lbox">
				<div class="imgbox hvptr">
					<img class="img hvptr" :src="avatar" alt="">
				</div>
				<div class="info">
					<div class="nickname hvptr">{{nickname}}</div>
					<div class="btbox">
						<div @click="toinbox" class="inbox hvptr">
							收信箱
						</div>
						<div class="inbox hvptr">
							谁看过我
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="cbox">
			<div class="ctop">
				<div>
					<div  @click="toinbox" class="bscolor count hvptr">{{notread}}</div>
					<div class="tips">未读</div>
				</div>
				<div>
					<div class="bscolor count hvptr">8</div>
					<div class="tips">谁看过我</div>
				</div>
			</div>
			<div class="cbtm">
				<div>
					<div class="hvptr">0</div>
					<div>赞过我</div>
				</div>
				<div>
					<div class="hvptr">0</div>
					<div>关注我</div>
				</div>
				<div>
					<div class="hvptr">0</div>
					<div>联系人</div>
				</div>
			</div>
		</div>

		<div class="rbox">
			<div class="block">
				<el-carousel height="180px">
					<el-carousel-item v-for="item in rdArr" :key="item">
						<a href="">
							<img :src="item">
						</a>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
	</div>
</template>

<script>
	import rd1 from "../../assets/img/PersonalCenter/rd1.jpg";
	import rd2 from "../../assets/img/PersonalCenter/rd2.jpg";
	export default {
		data() {
			return {
				rdArr: [], // 轮播图
				avatar: "", // 头像
				nickname: "", // 昵称
				notread: 0, // 未读邮件
			};
		},
		watch: {
			"$store.state.avatarsrc"() {
				this.avatar = this.$store.state.avatarsrc;
			},
			"$store.state.nickname"() {
				this.nickname = this.$store.state.nickname;
			}
		},
		methods: {
			getuserbaseinfo() {
				let username = sessionStorage.getItem("username");
				/* 获取头部用户基本信息 */
				this.$http.get("/userbaseinfo", {
					params: {
						username
					}
				}).then((res) => {
					let obj = res.data;
					this.$store.state.avatarsrc = obj.url;
					this.nickname = obj.nickname;
					this.notread = obj.notread;
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},
			toinbox() {
				this.$router.push("/inbox");
			},
		},
		created() {
			// 轮播图
			this.rdArr.push(rd1);
			this.rdArr.push(rd2);
			this.getuserbaseinfo();
		},
		mounted() {
			this.getuserbaseinfo();
		}
	};
</script>

<style scoped="scoped">
	.bscolor {
		color: #ff5175;
	}

	.box {
		width: 100%;
		height: 180px;
		box-sizing: border-box;
		background-color: #FFFFFF;
		position: relative;
		border-radius: 5px;
	}

	.left {
		width: 380px;
		height: 180px;
		position: absolute;
	}

	.lbox {
		width: 361px;
		height: 154px;
		margin-top: 10px;
		margin-left: 22px;
		display: flex;
	}

	.imgbox {
		width: 100px;
		height: 100px;
		border-radius: 50px;
		background-color: #ccc;
		position: relative;
		top: 30px;
	}

	.img {
		width: 100px;
		height: 100px;
		border-radius: 50px;
		;
	}

	.info {
		position: relative;
		top: 20px;
		left: 20px;
	}

	.nickname {
		position: absolute;
		top: 30px;
		font-size: 20px;
		width: 200px;
		height: 26px;
		line-height: 26px;
		text-align: center;
	}

	.btbox {
		position: absolute;
		bottom: 50px;
		width: 200px;
		height: 32px;
		display: flex;
		justify-content: space-between;
	}

	.inbox {
		width: 80px;
		height: 30px;
		border: #ff5175 solid 1px;
		border-radius: 5px;
		text-align: center;
		line-height: 30px;
		color: #ff5175;
	}

	.cbox {
		width: 433px;
		height: 180px;
		position: absolute;
		left: 380px;
	}

	.ctop {
		width: 100%;
		height: 90px;
		border-bottom: #e8e8e8 solid 1px;
		display: flex;
		justify-content: space-around;
		text-align: center;
	}

	.count {
		font-size: 40px;
	}

	.tips {
		color: #000000;
		font-size: 20px;
		position: relative;
		top: 10px;
		left: 0px;
	}

	.cbtm {
		width: 300px;
		height: 80px;
		display: flex;
		justify-content: space-between;
		text-align: center;
		position: absolute;
		left: 66px;
		top: 110px;
	}


	.rbox {
		width: 340px;
		height: 180px;
		position: absolute;
		right: 0px;
		overflow: hidden;
	}
</style>
