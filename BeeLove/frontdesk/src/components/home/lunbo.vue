<template>
	<div class="lunbo_big">
		<div class="block">
			<el-carousel trigger="click" height="340px">
				<el-carousel-item v-for="item in rdArr" :key="item">
					<img :src="item" class="imgpos">
				</el-carousel-item>
			</el-carousel>
			<div class="container usermsgbox">
				<div class="usermsg usermsg1" v-show="showuser">
					<div class="usermsg_box1">
						<div class="usermsg_box1_left" @click="touser">
							<img :src="userobj[0].avatar" alt="" class="usermsg_box1_lefttx">
						</div>
						<div class="usermsg_box1_right">
							<div class="usermsg_box1_right_1">你好，{{userobj[0].nickname}}
								<div class="out">[退出]</div>
							</div>
							<div class="usermsg_box1_right_2">
								<div class="user_vip1 user_vip"></div>
								<div class="user_vip2 user_vip"></div>
								<div class="user_vip3 user_vip"></div>
								<div class="user_vip4 user_vip"></div>
							</div>
							<div class="usermsg_box1_right_3">
								推荐服务：<span style="color: #FF4C71;cursor:pointer;">30元包月</span>
							</div>
						</div>
					</div>
					<div class="usermsg_box2">
						<div class="usermsg_box2_1 usermsg_box2__box">
							<div class="usermsg_box2_top">照片</div>
							<div class="usermsg_box2_bot" @click="tomyphoto">上传</div>
						</div>
						<div class="usermsg_box2_2 usermsg_box2__box">
							<div class="usermsg_box2_top">资料</div>
							<div class="usermsg_box2_bot" @click="tocompleteinfo">完善</div>
						</div>
						<div class="usermsg_box2_3 usermsg_box2__box">
							<div class="usermsg_box2_top">邮件</div>
							<div class="usermsg_box2_bot" @click="toinbox">查看</div>
						</div>
						<div class="usermsg_box2_4 usermsg_box2__box">
							<div class="usermsg_box2_top">比翼宝</div>
							<div class="usermsg_box2_bot">服务</div>
						</div>
					</div>
					<div class="usermsg_box3" @click="touser">进入MyBeeLove></div>
				</div>
				<div class="usermsg usermsg2" v-show="!showuser">
					<div class="usermsg21" @click="changezhuce1" v-show="showzhuce">
						<span class="user_all usera1"></span>免费注册
					</div>
					<div class="usermsg22" @click="changezhuce2" v-show="showzhuce">
						<span class="user_all usera2"></span>媒体节目
					</div>
					<div class="usermsg21 usermsg21_1" @click="changezhuce1" v-show="!showzhuce">
						<span class="user_all usera1 usera1_1"></span>免费注册
					</div>
					<div class="usermsg22 usermsg22_1" @click="changezhuce2" v-show="!showzhuce">
						<span class="user_all usera2 usera2_1"></span>媒体节目
					</div>
					<div class="usermsg23" v-show="showzhuce">
						比翼
						<i>20</i>
						年
						<i>4</i>
						亿注册会员
					</div>
					<div class="usermsg24" v-show="showzhuce">
						严肃婚恋交友 · 实名认证 · 一对一服务
					</div>
					<div class="usermsg25" v-show="showzhuce" @click="toregister">
						免费注册
					</div>
					<div class="usermsg26" v-show="showzhuce">
						我是会员，<span style="color: #2f81d7; cursor: pointer;" @click="tologin">立即登录</span>
					</div>
					<div class="usermsg27" v-show="!showzhuce">
						<div class="media media1">
							<div class="mediaimg mediaimg1"></div>
							<div class="mediatit">百里挑一</div>
						</div>
						<div class="media media2">
							<div class="mediaimg mediaimg2"></div>
							<div class="mediatit">非诚勿扰</div>
						</div>
						<div class="media media3">
							<div class="mediaimg mediaimg3"></div>
							<div class="mediatit">为你而来</div>
						</div>
						<div class="media media4">
							<div class="mediaimg mediaimg4"></div>
							<div class="mediatit">中国式相亲</div>
						</div>
					</div>
					<div class="usermsg28" v-show="!showzhuce">
						我要上电视
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import rd1 from "../../assets/img/home/lunbo1.png";
	import rd2 from "../../assets/img/home/lunbo2.jpg";
	import rd3 from "../../assets/img/home/lunbo3.jpg";
	import rd4 from "../../assets/img/home/lunbo4.jpg";
	import rd5 from "../../assets/img/home/lunbo5.jpg";
	import rd6 from "../../assets/img/home/lunbo6.jpg";
	import tx from "../../assets/img/home/user0.jpg";
	import img1 from "../../assets/img/home/people1.jpg";
	import img2 from "../../assets/img/home/people2.jpg";
	import img3 from "../../assets/img/home/people3.jpg";
	import img4 from "../../assets/img/home/people4.jpg";
	import img5 from "../../assets/img/home/people5.jpg";
	import img6 from "../../assets/img/home/people6.jpg";
	import img7 from "../../assets/img/home/people7.jpg";
	import img8 from "../../assets/img/home/people8.jpg";
	import img9 from "../../assets/img/home/people9.jpg";
	import img10 from "../../assets/img/home/people10.jpg";
	export default {
		data: function() {
			return {
				username: '',
				userobj: [{
					nickname: 1,
				}],
				userarr: [{
						nickname: 1,
						height: "165cm",
						birth: "1999-09-22T11:25:55.000Z",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
				],
				rdArr: [
					rd1,
					rd2,
					rd3,
					rd4,
					rd5,
					rd6
				],
				showuser: false,
				showzhuce: true,
				update: "",
			}
		},
		methods: {
			toinbox() {
				this.$router.push("/inbox");
			},
			tocompleteinfo() {
				this.$router.push("/personalcenter/completeinfo");
			},
			tomyphoto() {
				this.$router.push("/personalcenter/myphoto");
			},
			tologin() {
				this.$router.push("/login/loginform");
			},
			toregister() {
				this.$router.push("/register");
			},
			touser() {
				this.$router.push("/personalcenter/makefriends");
			},
			changezhuce1() {
				this.showzhuce = true;
			},
			changezhuce2() {
				this.showzhuce = false;
			},
		},
		created() {
			this.update = setInterval(() => {
				if (sessionStorage.getItem("username")) {
					this.showuser = true;
					this.username = sessionStorage.getItem("username");
					this.$http.post("/homeuser", {
							username: this.username,
						})
						.then((r) => {
							this.userobj = r.data;
							let time = new Date()
							if (!this.userobj[0].avatar) {
								this.userobj[0].avatar = tx
							}
						});
				} else {
					this.showuser = false;
				};
			})
		},
		beforeDestroy() {
			clearInterval(this.update)
		},
	}
</script>

<style>
	.lunbo_big .el-carousel__button {
		width: 14px !important;
		height: 14px !important;
		border-radius: 7px !important;
	}

	.el-carousel__indicators {
		z-index: 30 !important;
	}
</style>

<style scoped="scoped">
	.block {
		height: 340px;
	}

	.imgpos {

		transform: translate(-300px);
	}

	.usermsg2 {
		display: flex;
		flex-wrap: wrap;
		border-top-left-radius: 0 !important;
		border-top-right-radius: 0 !important;
		height: 240px;
		margin-top: 73px;
	}

	.user_all {
		width: 20px;
		height: 20px;
		transform: translate(-5px, 5px);
		display: inline-block;
		background-image: url(../../assets/img/home/lunbouserall.png);
	}

	.usera1 {
		transform: translate(-2px, 4px);
		background-position: 0 -160px;
	}

	.usera1_1 {
		background-position: 0 -115px !important;
	}

	.usera2_1 {
		background-position: 0 -183px !important;
	}

	.usera2 {
		background-position: 0 -137px;
	}

	.usermsg21 {
		width: 260px;
		height: 57px;
		border-top-left-radius: 7px;
		background-color: #FAF7FB;
		position: absolute;
		top: -57px;
		text-align: center;
		line-height: 57px;
		font-size: 18px;
		cursor: pointer;
	}

	.usermsg21_1 {
		background-color: rgba(250, 166, 173, 0.3) !important;
		color: white !important;
	}

	.usermsg22_1 {
		background-color: #FAF7FB !important;
		color: black !important;
	}

	.usermsg22 {
		cursor: pointer;
		color: white;
		font-size: 18px;
		line-height: 57px;
		text-align: center;
		width: 260px;
		height: 57px;
		top: -57px;
		border-top-right-radius: 7px;
		background-color: rgba(250, 166, 173, 0.3);
		position: absolute;
		left: 260px;
	}

	.usermsg23 {
		width: 520px;
		height: 34px;
		background-color: white;
		padding-top: 44px;
		text-align: center;
		font-size: 30px;
		line-height: 34px;
	}

	.usermsg24 {
		width: 520px;
		height: 44px;
		background-color: white;
		text-align: center;
		line-height: 44px;
	}

	.usermsg25 {
		width: 278px;
		height: 50px;
		color: white;
		background-color: #F22B5A;
		text-align: center;
		line-height: 50px;
		margin: 7px auto;
		border-radius: 5px;
		font-size: 24px;
		cursor: pointer;

	}

	.usermsg26 {
		width: 510px;
		height: 46px;
		background-color: white;
		text-align: center;
		line-height: 46px;
		margin: 0 auto;
	}

	.usermsg27 {
		width: 510px;
		height: 143px;
		background-color: white;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.media {
		width: 118px;
		height: 121px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-content: space-around;
	}

	.mediaimg {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: 4px solid #DED6D8;
		cursor: pointer;
		background-position: -1px;
	}

	.mediatit {
		width: 118px;
		height: 27px;
		text-align: center;
		line-height: 35px;
		font-size: 18px;
		cursor: pointer;
	}

	.mediatit:hover {
		color: #55A5F9;
	}

	.mediaimg1 {
		background-image: url(../../assets/img/mediaimg1.png);
	}

	.mediaimg2 {
		background-image: url(../../assets/img/mediaimg2.png);
	}

	.mediaimg3 {
		background-image: url(../../assets/img/mediaimg3.png);
	}

	.mediaimg4 {
		background-image: url(../../assets/img/mediaimg4.png);
	}

	.usermsg28 {
		background-color: #F22B5A;
		width: 278px;
		height: 50px;
		font-size: 24px;
		border-radius: 5px;
		color: white;
		margin: 0 auto;
		text-align: center;
		line-height: 50px;
		cursor: pointer;
	}

	.usermsgbox {
		height: 340px;
		position: relative;
		top: -340px;
		z-index: 2;
	}

	.usermsg {
		width: 520px;
		border-radius: 7px;
		background-color: white;
	}

	.usermsg_box1 {
		height: 110px;
		width: 483px;
		margin-top: 16px;
		margin-bottom: 16px;
		display: flex;
		justify-content: space-around;
	}

	.usermsg_box1_left {
		height: 110px;
		width: 110px;
		border-radius: 55px;
		overflow: hidden;
		cursor: pointer;
	}

	.usermsg_box1_lefttx {
		height: 110px;
		width: 110px;
	}

	.usermsg_box1_right {
		width: 357px;
		height: 110px;
	}

	.usermsg_box1_right_1 {
		width: 357px;
		height: 54px;
		font-size: 20px;
		line-height: 40px;
		display: flex;
	}

	.out {
		position: relative;
		right: -185px;
		cursor: pointer;
		color: #95B1D5;
	}

	.usermsg_box1_right_2 {
		width: 357px;
		height: 20px;
		display: flex;
	}

	.user_vip {
		width: 20px;
		height: 20px;
		padding-right: 10px;
		background-image: url(../../assets/img/home/vip.gif);
		background-repeat: no-repeat;
		cursor: pointer;
	}

	.user_vip2 {
		background-position: 0px -20px;
	}

	.user_vip3 {
		background-position: 0px -40px;
	}

	.user_vip4 {
		background-position: 0px -60px;
	}


	.usermsg_box1_right_3 {
		width: 357px;
		height: 34px;
		line-height: 34px;
	}

	.usermsg_box2 {
		height: 110px;
		width: 520px;
		display: flex;
		border-bottom: 1px solid #E7E3E4;
	}

	.usermsg_box2__box {
		width: 130px;
		height: 110px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.usermsg_box2_top {
		width: 130px;
		height: 60px;
		text-align: center;
		font-size: 20px;
		line-height: 60px;
		color: #808080;
	}

	.usermsg_box2_bot {
		width: 60px;
		height: 30px;
		border-radius: 15px;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
		border: 1px solid #EBEAEC;
	}

	.usermsg_box2_bot:hover {
		color: #FF80B7;
		border: 1px solid #FDE1E9;
	}

	.usermsg_box3 {
		height: 48px;
		width: 520px;
		line-height: 48px;
		text-align: center;
		color: #ff6c88;
		cursor: pointer;
	}
</style>
