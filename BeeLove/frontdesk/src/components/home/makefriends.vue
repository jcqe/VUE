<template>
	<div class="big">
		<div class="top">
			<h2 class="top_1"><span class="ico"></span>交友搜缘分</h2>
			<div class="top_2">
				<div class="label" style="color: #ff4c71;">同城人</div>
				<div class="label">爱旅行</div>
				<div class="label">小萝莉</div>
				<div class="label">爱美食</div>
				<div class="label">星座速配</div>
				<div class="label">90后</div>
				<div class="label">80后</div>
			</div>
			<div class="top_3">
				<span class="top_3_c">换一组<span class="bak k1"></span></span>

				<span class="top_3_c" @click="tosearch">搜索<span class="bak k2"></span></span>

			</div>
		</div>
		<div class="friends_imgbox">
			<div v-for="item in fatearr" class="friends_imgboxx">
		<img  :src="item.img" alt="">
		<div class="friends_name">{{item.nickname}}</div>
		<div class="friends_msg">
			<div class="friends_msgname">{{item.nickname}}</div>
			<div class="friends_msgage">{{item.age}}岁&nbsp;{{item.height}}cm</div>
			<div class="friends_msgta">联系ta</div>
		</div>
			</div>
		
		</div>
		
	</div>
</template>

<script>
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
				fatearr:[
					{
						nickname:"米宝宝",
						height:"165",
						age:"21",
						img:img2,
					},
					{
						nickname:"爱吃西蓝花",
						height:"165",
						age:"21",
						img:img1,
					},
					{
						nickname:"吃不醒",
						height:"165",
						age:"21",
						img:img3,
					},
					{
						nickname:"仙仙",
						height:"165",
						age:"21",
						img:img4,
					},
					{
						nickname:"DWFSCA",
						height:"165",
						age:"21",
						img:img5,
					},
					{
						nickname:"人生&小哀",
						height:"165",
						age:"21",
						img:img6,
					},
					{
						nickname:"Angle誓暖",
						height:"165",
						age:"21",
						img:img7,
					},
					{
						nickname:"何你",
						height:"165",
						age:"23",
						img:img8,
					},
					{
						nickname:"可儿",
						height:"165",
						age:"20",
						img:img9,
					},
					{
						nickname:"蒹葭",
						height:"165",
						age:"22",
						img:img10,
					},
				],
			}
		},
		methods:{
			tosearch(){
				this.$router.push("/search")
			},
		}
	}
</script>

<style scoped>
	.friends_imgbox{
		height: 621px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 1190px;
		position: relative;
	}
	.friends_msgname{
		padding-top: 10px;
		margin-left: 20px;
		width: 222px;
		height: 32px;
		line-height: 32px;
	}
	.friends_msgta{
		cursor: pointer;
		width:110px;
		height: 30px;
		margin: 15px;
		line-height: 30px;
		text-align: center;
		border-radius: 20px;
		background-color: #FF4C71;
	}
	.friends_msgage{
		margin-left: 20px;
		width: 222px;
		height: 20px;
		line-height: 20px;
	}
	.friends_msg{
		display: none;
		flex-wrap: wrap;
		justify-content: center;
		background-color: transparent;
		color: white;
		top: 156px;
		position: absolute;
		height: 140px;
		width: 222px;
	}
	.friends_imgboxx{
		position: relative;
	}
	.friends_imgboxx:hover .friends_name{
		display: none;
	}
	.friends_imgboxx:hover .friends_msg{
		display: flex;
	}
	.friends_name{
		color: white;
		margin-left: 20px;
		top: 258px;
		z-index: 800;
		position: absolute;
		background-color: transparent;
		}
	.big {
		width: 1190px;
		height: 702px !important;
		margin: 20px auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		background-color: white !important;
	}

	.top {
		z-index: 222;
		width: 1150px;
		height: 60px;
		display: flex;
		align-items: center;
	}

	.top_1 {
		height: 38px;
		width: 165px;
		background-color: white;
		display: flex;
		align-items: center;
	}

	.ico {
		float: left;
		width: 30px;
		height: 30px;
		margin: 8px 5px 0 0;
		background: url(../../assets/img/home/new-index-all.jpg) no-repeat 0 0;
	}

	.top_2 {
		width: 465px;
		height: 32px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: relative;
		right: 140px;
	}

	.label {
		height: 32px;
		width: 68px;
		text-align: center;
		line-height: 32px;
		color: #888888;
		font-size: 16px;
		cursor: pointer;
	}

	.label:hover {
		color: #FF4C71;
	}

	.top_3 {
		width: 160px;
		height: 32px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: relative;
		color: #888888;
		right: 10px;
	}

	.top_3_c {
		cursor: pointer;
		margin-left: 20px;
	}

	.top_3_c:hover {
		color: #B8E7FF;
	}

	.bak {
		display: inline-block;
		width: 13px;
		height: 14px;
		position: relative;
		left: 10px;
		background-image: url(../../assets/img/home/new-index-all.jpg);
	}

	.k1 {
		background-position: 0px -132px;
	}

	.k2 {
		background-position: 4px -118px;
	}

	img {
		width: 222px;
		height: 296px;
	}
</style>
