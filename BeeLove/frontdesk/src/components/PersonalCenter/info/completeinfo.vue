<template>
	<!-- 完善资料 -->
	<div class="all">
		<div>
			<div class="tips">昵称</div>
			<div>
				<input v-model="nickname" type="text">
			</div>
		</div>
		<div>
			<div class="tips">性别</div>
			<div>
				<input v-model="sex" type="text" readonly="readonly">
			</div>
		</div>
		<div>
			<div class="tips">出生日期</div>
			<div>
				<input v-model="birth" type="text">
			</div>
		</div>
		<div>
			<div class="tips">所在地区</div>
			<div>
				<input v-model="place" type="text">
			</div>
		</div>
		<div>
			<div class="selbox">
				<div>婚姻状况</div>
				<div>
					<el-select v-model="marriagedeft">
						<el-option v-for="item in marriage" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
			</div>
		</div>

		<div>
			<div class="selbox">
				<div>学历</div>
				<div>
					<el-select v-model="educationdeft">
						<el-option v-for="item in education" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
			</div>
		</div>

		<div>
			<div class="selbox">
				<div>月薪</div>
				<div>
					<el-select v-model="salarydeft">
						<el-option v-for="item in salary" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
			</div>
		</div>

		<div>
			<div class="selbox">
				<div>民族</div>
				<div>
					<el-select v-model="nationaldeft">
						<el-option v-for="item in national" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
			</div>
		</div>

		<div>
			<div class="selbox">
				<div>购车情况</div>
				<div>
					<el-select v-model="carpurchasedeft">
						<el-option v-for="item in carpurchase" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
			</div>
		</div>

		<div class="filebox">
			<el-button @click="upavatar" type="primary" round>修改头像</el-button>
			<div class="fiptbox"><input class="avatarfile" type="file"></div>
		</div>

		<div class="btbox">
			<el-button @click="updateinfo" type="primary" round>保存</el-button>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				nickname: "",
				sex: "",
				birth: "",
				place: "绵阳",
				marriage: [
					/* 婚姻状况 */
					{
						value: '未婚',
						label: '未婚'
					}, {
						value: '离异',
						label: '离异'
					}, {
						value: '丧偶',
						label: '丧偶'
					}
				],

				education: [
					/* 学历 */
					{
						value: '高中及以下',
						label: '高中及以下'
					}, {
						value: '大专',
						label: '大专'
					}, {
						value: '本科',
						label: '本科'
					},{
						value: '双学士',
						label: '双学士'
					}, {
						value: '硕士',
						label: '硕士'
					},
					{
						value: '博士',
						label: '博士'
					}
				],

				salary: [
					/* 月薪 */
					{
						value: '2000元以下',
						label: '2000元以下'
					},
					{
						value: '2000~5000元',
						label: '2000~5000元'
					},
					{
						value: '5000~10000元',
						label: '5000~10000元'
					},
					{
						value: '10000~20000元',
						label: '10000~20000元'
					},
					{
						value: '20000~50000元',
						label: '20000~50000元'
					},
					{
						value: '50000元以上',
						label: '50000元以上'
					},
				],

				national: [
					/* 民族 */
					{
						value: '汉族',
						label: '汉族'
					},
					{
						value: '其他民族',
						label: '其他民族'
					}
				],

				carpurchase: [
					/* 购车情况 */
					{
						value: '有车',
						label: '有车'
					},
					{
						value: '无车',
						label: '无车'
					}
				],


				// 默认选中
				marriagedeft: '未婚',
				educationdeft: '本科',
				salarydeft: "5000~10000元",
				nationaldeft: "汉族",
				carpurchasedeft: "有车",
			};

		},

		methods: {
			upavatar() {
				document.getElementsByClassName("avatarfile")[0].click();
			},

			getbaseinfo() {
				/* 显示用户基本信息 */
				let username = sessionStorage.getItem("username");
				this.$http.get("/getbaseinfo", {
					params: {
						username
					}
				}).then((res) => {
					let obj = res.data;
					this.nickname = obj.nickname;
					this.sex = obj.sex;
					this.birth = obj.birth.substr(0, 10);
					this.marriagedeft = obj.marriage;

					if (obj.palce != null) {
						this.place = obj.palce;
					}

					if (obj.education != null) {
						this.educationdeft = obj.education;
					}
					if (obj.salary != null) {
						this.salarydeft = obj.salary;
					}
					if (obj.national != null) {
						this.nationaldeft = obj.national;
					}
					if (obj.carpurchase != null) {
						this.carpurchasedeft = obj.carpurchase;
					}
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				});
			},

			updateinfo() {
				let username = sessionStorage.getItem("username");
				let file = document.getElementsByClassName("avatarfile")[0].files[0];
				if (file == undefined) { // 未选择头像
					this.$http.post("/updateinfonoavatar", {
						username,
						nickname: this.nickname,
						birth: this.birth,
						marriage: this.marriagedeft,
						place: this.place,
						education: this.educationdeft,
						salary: this.salarydeft,
						national: this.nationaldeft,
						carpurchase: this.carpurchasedeft
					}).then((res) => {
						// let obj = res.data;
						this.$store.state.nickname = this.nickname;
					}).catch((err) => {
						console.log("ajax请求失败！");
						console.log(err);
					});



				} else { // 选择了头像
					let formData = new FormData();
					formData.append("userDefaultAvatar", file, file.name);
					formData.append("username", username);
					formData.append("nickname", this.nickname);
					formData.append("birth", this.birth);
					formData.append("marriage", this.marriagedeft);
					formData.append("place", this.place);
					formData.append("education", this.educationdeft);
					formData.append("salary", this.salarydeft);
					formData.append("national", this.nationaldeft);
					formData.append("carpurchase", this.carpurchasedeft);
					
					const config = {
						headers: {
							"Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
						}
					};
					this.$http.post("/updateinfohasavatar", formData, config).then((res) => {
						let obj = res.data;
						this.$store.state.avatarsrc = obj.avatar;
						this.$store.state.nickname = this.nickname;
					}).catch((err) => {
						console.log("ajax请求失败！");
						console.log(err);
					});

				}

			},
		},

		created() {
			this.getbaseinfo();
		},

	}
</script>

<style scoped="scoped">
	.update {
		font-size: 24px;
		position: relative;
		left: 100px;
		top: 50px;
	}

	.filebox {
		position: relative;
		top: 20px;
		height: 50px;
	}

	.fiptbox {
		width: 200px;
		height: 60px;
		position: relative;
		left: 450px;
		overflow: hidden;
	}

	.avatarfile {
		position: relative;
		top: -8px;
		left: -135px;
		display: inline-block;
		width: 400px;
		height: 40px;
	}

	.filebox button {
		font-size: 20px;
		background-color: #409eff;
		position: absolute;
		left: 300px;
	}

	.filebox button:hover {
		background-color: #66b1ff;
	}

	.selbox {
		width: 100%;
		height: 50px;
		display: flex;
	}

	.selbox>div:nth-child(1) {
		margin-left: 100px;
		font-size: 18px;
	}

	.selbox>div:nth-child(2) {
		position: absolute;
		left: 250px;
	}

	input {
		outline: none;
		width: 300px;
		height: 30px;
		font-size: 24px;
		box-sizing: border-box;
		padding-left: 20px;
		position: absolute;
		left: 250px;
		margin-top: 10px;
	}

	.all {
		width: 830px;
		padding-bottom: 20px;
	}

	.all>div {
		width: 100%;
		display: flex;
		height: 50px;
		line-height: 50px;
	}

	.tips {
		font-size: 18px;
		position: relative;
		left: 100px;
		top: 0px;
	}

	.all>.btbox {
		width: 90px;
		height: 40px;
		text-align: center;
		position: relative;
		left: 360px;
		margin-bottom: 50px;
		margin-top: 100px;
	}

	.all>.btbox button {
		height: 40px;
		font-size: 20px;
		line-height: 20px;
	}
</style>
