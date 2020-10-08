<template>
	<div class="sidebar">
		<div class="sidebar-box sidebar-box1" @click="touser">
			<div class="side-user">
				<div class="side-userson" @click="touser">
					<div class="side-userson_1"></div>
					<div class="side-userson_2">
						<div class="side-userson_21">欢迎您！不羁</div>
						<div class="side-userson_22">比翼Id：16516165</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sidebar-box sidebar-box2" @click="tosearch"></div>
		<div class="sidebar-box sidebar-box3" @click="toinbox"></div>
		<div class="sidebar-box sidebar-box4" @click="lookmsg"></div>
		<div class="side-msg" v-show="msgshow">
			<div class="side-msg_top">消息
				<span class="side-msg_topbt" @click="lookmsg">收起></span>
			</div>
			<div></div>
		</div>
		<div class="sidebar-box sidebar-box5">
			<div class="side-app">
				<div class="side-app_top">扫一扫下载app</div>
				<div class="app_img"></div>
			</div>
		</div>
		<div class="sidebar-box sidebar-box6" @click="totop"></div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				msgshow: false,
			}
		},
		methods: {
			totop() {
				scrollTo(0, 0);
			},
			tosearch() {
				if (this.$router.history.current.path != "/search") {
					this.$router.push("/search")
				}
			},
			toinbox() {
				if (this.$router.history.current.path != "/inbox") {
					this.$router.push("/inbox")
				}
			},
			touser() {
				if (this.$router.history.current.path != "/personalcenter/makefriends") {
					this.$router.push("/personalcenter/makefriends")
				}
			},
			lookmsg() {
				this.msgshow = !this.msgshow
			},
		}
	}
</script>

<style scoped>
	.app_img {
		margin: 5px;
		width: 150px;
		height: 150px;
		background-image: url(../../assets/img/app.png);
		background-size: cover;
	}

	.side-msg {
		user-select: none;
		overflow: hidden;
		top: 130px;
		right: 50px;
		position: absolute;
		width: 250px;
		height: 130px;
		background-color: white;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.side-app_top {
		color: white;
		line-height: 35px;
		background-color: #FF537C;
		height: 35px;
		width: 160px;
	}

	.side-app {
		display: none;
		width: 160px;
		position: absolute;
		height: 195px;
		top: 74px;
		left: -165px;
		cursor: pointer;
		background-color: white;
		animation: hide 0.5s linear both;
	}

	.sidebar {
		background-color: white;
		width: 45px;
		height: 270px;
		position: fixed;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		z-index: 10000;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
		border-radius: 5px 0 0 5px;
	}

	.side-msg_top {
		border-top-left-radius: 5px;
		color: white;
		line-height: 35px;
		padding-left: 10px;
		text-align: left;
		background-color: #FF537C;
		height: 35px;
		width: 100%;

	}

	.side-msg_topbt {
		cursor: pointer;
		user-select: none;
		display: inline-block;
		position: absolute;
		right: 0px;
	}

	.side-user {
		display: none;
		width: 310px;
		height: 100px;
		cursor: pointer;
		background-color: transparent;
	}

	.side-userson {
		width: 290px;
		height: 100px;
		cursor: pointer;
		display: flex;
		align-items: center;
		background-color: white;
	}

	.side-userson_1 {
		width: 60px;
		height: 60px;
		position: relative;
		left: 20px;
		background-image: url(../../assets/img/home/user0.jpg);
		border-radius: 50%;
		background-size: cover;
	}

	.side-userson_2 {
		width: 160px;
		height: 60px;
		left: 30px;
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}

	.side-userson_21 {
		text-align: left;
		line-height: 30px;
		font-size: 20px;
		width: 160px;
		height: 35px;
	}

	.side-userson_22 {
		text-align: left;
		width: 160px;
		height: 15px;
		color: #A2A2A2;
	}

	@keyframes hide {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	.sidebar-box5:hover .side-app {
		display: block;
		animation: hide 0.5s linear both;
	}

	.side-app:hover~.sidebar-box5 {
		background-position: -26px -316px;
	}

	.side-user:hover~.sidebar-box1 {
		background-position: -26px 8px;
	}

	.sidebar-box1:hover .side-user {
		display: flex;
		position: absolute;
		right: 40px;
		animation: hide 0.5s linear both;
	}

	.sidebar-box {
		border-bottom: 1px solid rgba(0, 0, 0, 0.3);
		text-align: center;
		width: 40px;
		height: 40px;
		background-image: url(../../assets/img/home/sidebar.jpg);
		cursor: pointer;
		background-repeat: no-repeat;
		background-size: 255%;
	}

	.sidebar-box1 {
		background-position: 10px 10px;
	}

	.sidebar-box1:hover {
		background-position: -26px 8px;
	}

	.sidebar-box2 {
		background-position: 10px -135px;
	}

	.sidebar-box2:hover {
		background-position: -26px -138px;
	}

	.sidebar-box3 {
		background-position: 10px -168px;
	}

	.sidebar-box3:hover {
		background-position: -26px -172px;
	}


	.sidebar-box4 {
		position: relative;
		background-position: 10px -207px;
	}

	.sidebar-box4:hover {
		background-position: -26px -209px;
	}


	.sidebar-box5 {
		background-position: 10px -315px;
	}

	.sidebar-box5:hover {
		background-position: -26px -316px;
	}


	.sidebar-box6 {
		background-position: 10px -385px;
	}
</style>
