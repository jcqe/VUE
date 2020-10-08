<template>
	<div class="all">
		<div class="top">
			<div>今日推荐</div>
			<div class="hvptr">更多&gt;</div>
		</div>

		<div class="btm">
			<div @click="showdetails" :data-id="item.id" v-for="item in personlist" :key="item.id">
				<div :data-id="item.id" class="imgbox">
					<!-- 图片 -->
					<img :data-id="item.id" class="img" :src="item.avatar" alt="">
				</div>
				<div :data-id="item.id">
					{{item.nickname}}
				</div>
			</div>

		</div>
		<el-drawer :visible.sync="drawer" :with-header="false">
			<div class="detailsbox">
				<div class="avrbox">
					<img class="personavr" :src="personavatar" alt="">
				</div>
				<div class="personinfo">
					<div class="personnknm">{{personnknm}}</div>
					<div>
						<div>学历：{{personeducation}}</div>
						<div class="pslry">身高：{{personheight}}</div>
					</div>
					<div>
						<div>购车：{{personcarpurchase}}</div>
						<div class="pslry">月薪：{{personsalary}}</div>
					</div>
					<div>
						<div>民族：{{personnational}}</div>
						<div>婚姻：{{personmarriage}}</div>
					</div>
				</div>
				<div class="ctrlbox">
					<div @click="attente" class="attention">关注</div>
					<div @click="aplmyfriend" class="aplmyfriend">加好友</div>
					<div @click="addtoblacklist" class="addtoblacklist">拉黑</div>
					<div @click="reportperson" class="report">举报</div>
				</div>
				<div class="reportcontent" v-show="showreport">
					<div class="reason">请填写举报原因</div>
					<div contenteditable="true" class="ctt"></div>
					<div class="reporttips">{{reporttips}}</div>
					<div class="cttbtnbox">
						<div @click="confirmreport" class="confirmreport">确定</div>
						<div @click="cancelreport" class="cancelreport">取消</div>
					</div>
				</div>
				<div class="personphotobox">
					<div v-for="(item, index) in personphotolist" :key="index">
						<img :src="item.url">
					</div>
				</div>
				<div class="introbox">
					<span>自我介绍：</span>
					{{personintroduction}}
				</div>
			</div>
		</el-drawer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				personlist: [],
				drawer: false,
				person_id: "",

				persondetails: "",
				personnknm: "",
				personeducation: "",
				personheight: "",
				personcarpurchase: "",
				personsalary: "",
				personnational: "",
				personmarriage: "",
				personintroduction: "",
				personavatar: "",
				personphotolist: "",
				reporttips: "",
				showreport: false,
			};
		},
		methods: {
			cancelreport() {
				/* 取消举报 */
				this.showreport = false;
			},
			confirmreport() {
				/* 确认举报 */
				this.reporttips = "";
				let content = document.getElementsByClassName("ctt")[0].innerHTML.trim();
				if (content == "") {
					this.reporttips = "还未填写举报原因";
				} else {
					let username = sessionStorage.getItem("username");
					let person_id = this.$store.state.person_id;
					this.reporttips = "";
					this.$http.post("/reportperson",{
						username,
						person_id,
						content
					}).then((res) => {
						if (res.data.status == 1) {
							this.reporttips = res.data.msg;
							setTimeout(() => {
								this.showreport = false;
								this.reporttips = "";
								document.getElementsByClassName("ctt")[0].innerHTML = "";
							},1500);
						} else {
							this.reporttips = res.data.msg;
						}
					}).catch((err) => {
						console.log("ajax请求失败！");
						console.log(err);
					});
					
					
				}
			},
			reportperson() {
				/* 举报按钮，显示举报框 */
				this.showreport = true;
			},
			attente() {
				/* 关注 */
				let username = sessionStorage.getItem("username");
				let person_id = this.$store.state.person_id;
				this.$http.get("/attente", {
					params: {
						username,
						person_id
					}
				}).then((res) => {
					console.log(res.data);
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},

			aplmyfriend() {
				/* 加好友 */
				let username = sessionStorage.getItem("username");
				let person_id = this.$store.state.person_id;
				this.$http.get("/aplmyfriend", {
					params: {
						username,
						person_id
					}
				}).then((res) => {
					console.log(res.data);
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},

			addtoblacklist() {
				/* 拉黑 */
				let username = sessionStorage.getItem("username");
				let person_id = this.$store.state.person_id;
				this.$http.get("/addtoblacklist", {
					params: {
						username,
						person_id
					}
				}).then((res) => {
					console.log(res.data);
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},

			recommended() {
				/* 今日推荐 */
				let username = sessionStorage.getItem("username");
				this.$http.get("/recommended", {
					params: {
						username
					}
				}).then((res) => {
					this.personlist = res.data;
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},

			showdetails(e) {
				/* 展示详细信息 */
				this.drawer = true; // 显示侧边栏
				this.person_id = e.target.getAttribute("data-id") * 1;

				this.$http.get("/showdetails", {
					params: {
						id: this.person_id
					}
				}).then((res) => {
					this.persondetails = res.data;
					let list = res.data;
					this.personnknm = list.nickname;
					this.personeducation = list.education;
					if (this.personeducation == null) {
						this.personeducation = "*";
					}
					this.personheight = list.height;
					if (this.personheight == null) {
						this.personheight = "*";
					}
					this.personcarpurchase = list.carpurchase;
					this.personsalary = list.salary;
					if (this.personsalary == null) {
						this.personsalary = "*";
					}
					this.personnational = list.national;
					if (this.personnational == null) {
						this.personnational = "*";
					}
					this.personmarriage = list.marriage;
					this.personintroduction = list.introduction;
					this.personavatar = list.avatar;
					this.personphotolist = list.urlArr;
					this.$store.state.person_id = list.id;
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});

			},
		},
		mounted() {
			this.recommended();
		}
	};
</script>

<style scoped="scoped">
	.reason,.reporttips {
		width: 100%;
		text-align: center;
	}
	.confirmreport {
		background-color: #7b7b7b;
	}
	.confirmreport:hover {
		background-color: #6f6f6f;
	}
	
	.cttbtnbox {
		width: 300px;
		display: flex;
		position: absolute;
		left: 100px;
		top: 320px;
	}

	.cttbtnbox>div {
		width: 100px;
		height: 40px;
		border-radius: 20px;
		text-align: center;
		line-height: 40px;
		margin-left: 24px;
		cursor: pointer;
		color: #FFFFFF;
		font-size: 22px;
	}

	.ctt {
		outline: none;
		width: 400px;
		height: 250px;
		margin: 10px auto;
		border: #000000 solid 1px;
		border-radius: 20px 0px 0px 20px;
		box-sizing: border-box;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 10px;
		overflow-y: scroll;
		font-size: 18px;
	}

	.ctt:focus {
		background-color: #E0E0E0;
	}

	.reportcontent {
		width: 500px;
		height: 380px;
		background-color: #CCCCCC;
		z-index: 5;
		position: absolute;
		top: 300px;
		left: 20px;
		box-sizing: border-box;
		border-radius: 30px;
	}

	el-drawer {
		outline: none;
	}

	.introbox {
		width: 600px;
		word-wrap: break-word;
		height: 150px;
		background-color: #eceef2;
		position: absolute;
		top: 780px;
		box-sizing: border-box;
		padding-left: 20px;
		padding-right: 30px;
		padding-top: 10px;
	}

	.report {
		background-color: #000000;
	}

	.report:hover {
		background-color: #333333;
	}

	.addtoblacklist {
		background-color: #909399;
	}

	.addtoblacklist:hover {
		background-color: #a6a9ad;
	}

	.aplmyfriend,.cancelreport {
		background-color: #409eff;
	}

	.aplmyfriend:hover,.cancelreport:hover {
		background-color: #66b1ff;
	}

	.attention {
		background-color: #f56c6c;
	}

	.attention:hover {
		background-color: #f78989;
	}

	.personphotobox {
		width: 600px;
		height: 340px;
		background-color: #eceef2;
		position: absolute;
		top: 430px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		overflow-y: scroll;
		box-sizing: border-box;
		padding-left: 20px;
		padding-right: 50px;
	}

	.personphotobox>div {
		width: 240px;
		height: 300px;
		margin-top: 10px;
	}

	.personphotobox>div>img {
		width: 240px;
		height: 300px;
	}

	.ctrlbox {
		width: 600px;
		height: 100px;
		position: absolute;
		background-color: #eceef2;
		top: 320px;
		display: flex;
		box-sizing: border-box;
	}

	.ctrlbox>div {
		width: 100px;
		height: 40px;
		border-radius: 20px;
		text-align: center;
		line-height: 40px;
		position: relative;
		top: 30px;
		left: 20px;
		margin-left: 24px;
		cursor: pointer;
		color: #FFFFFF;
		font-size: 22px;
	}

	.personnknm {
		line-height: 75px;
		box-sizing: border-box;
		font-size: 26px;
		margin-bottom: 40px;
		margin-top: 20px;
	}

	.personinfo>div {
		width: 100%;
		height: 70px;
		position: relative;
		display: flex;
	}

	.personinfo>div>div {
		width: 120px;
	}

	.personinfo>div>.pslry {
		width: 200px;
	}

	.personinfo {
		width: 300px;
		height: 300px;
		position: relative;
		top: -300px;
		left: 260px;
	}

	.avrbox {
		width: 240px;
		height: 300px;
	}

	.personavr {
		width: 240px;
		height: 300px;
	}

	.detailsbox {
		width: 100%;
		overflow-wrap: break-word;
	}

	.all {
		background-color: #FFFFFF;
		border-top: solid 1px #f5f5f5;
	}

	.top {
		width: 800px;
		display: flex;
		justify-content: space-between;
		position: relative;
		left: 15px;
		height: 62px;
		line-height: 62px;
	}

	.btm {
		width: 830px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-left: 10px;
		padding-right: 10px;
		box-sizing: border-box;
	}

	.btm>div {
		width: 190px;
		height: 282px;
		box-sizing: border-box;
		font-size: 14px;
		text-align: center;
	}

	.imgbox {
		width: 190px;
		height: 190px;
		margin-bottom: 30px;
	}

	.img {
		width: 190px;
		height: 190px;
	}
</style>
