<template>
	<div class="emotion container">
		<div class="emotion_top">
			<h2><span class="emotion_topico"></span><span>情感</span></h2>
			<div class="emotion_top_center">
				<div class="emotion_top_center_box" style="color: #ff4c71;">热文推荐</div>
				<div class="emotion_top_center_box">情感驿站</div>
				<div class="emotion_top_center_box">私密空间</div>
				<div class="emotion_top_center_box">求倾述</div>
				<div class="emotion_top_center_box">爱情训练营</div>
				<div class="emotion_top_center_box">微调查</div>
			</div>
			<div class="emotion_top_more">更多<span class="emotion_topico1"></span></div>
		</div>
		<div class="emotion_low">
			<div class="emotion_low_box">
				<div class="a">
					<div class="emotion_low_box_img emotion1">
					</div>
				</div>
				<div class="emotion_low_box_img_txt">《少年的你》看哭无数人：我们都...</div>
				<div class="emotion_low_box_txt">
					<span class="pooo"></span>做人，别丢良心；做事，别伤人...
				</div>
				<div class="emotion_low_box_txt">
					<span class="pooo"></span>人至中年，有多少活成了狗！
				</div>
				<div class="emotion_low_box_txt">
					<span class="pooo"></span>男人总对你做这三件事，就是不...
				</div>
				<div class="emotion_low_box_txt">
					<span class="pooo"></span>“调查过上千件婚外情，我告诉...
				</div>
			</div>
			<div class="emotion_low_box">
				<div class="a">
					<div class="emotion_low_box_img emotion2">
					</div>
				</div>
				<div class="emotion_low_box_img_txt"> 婚姻为什么让我们变得如此恶毒</div>
				<div class="emotion_low_box_txt">
					<span class="pooo"></span>越爱争对错，婚姻死得越快
				</div>
				<div class="emotion_low_box_txt">
					<span class="pooo"></span>徐峥朋友圈表白陶虹：婚姻越来...
				</div>
				<div class="emotion_low_box_txt">
					<span class="pooo"></span>“女儿，婚后一定做个不讲理的...
				</div>
				<div class="emotion_low_box_txt">
					<span class="pooo"></span>他说：“我想谈恋爱，但是我不...
				</div>
			</div>
			<div class="emotion_low_box">
				<div class="a">
					<div class="emotion_low_box_img emotion3">
					</div>
				</div>
				<div class="emotion_low_box_img_txt">女人遇到危险，保命还是保贞洁？</div>
				<div class="emotion_low_box_txt">
					<span class="pooo"></span>七夕节，你最想得到什么？
				</div>
				<div class="emotion_low_box_txt">
					<span class="pooo"></span>帅哥和丑男哪个更容易出轨？
				</div>
				<div class="emotion_low_box_txt">
					<span class="pooo"></span>男人为什么会有“情妇”？
				</div>
				<div class="emotion_low_box_txt">
					<span class="pooo"></span>“摇”出的帅哥、美女，你敢约...
				</div>
			</div>
			<div class="emotion_low_box">
				<div class="emotion_low_box_titel">人气排行榜</div>
				<div class="emotion_phb"><span class="phb_kuai" style="background-color: #fb6585;">1</span><span class="phb_txt">相亲第一次见面，该吃多少钱的...</span></div>
				<div class="emotion_phb"><span class="phb_kuai" style="background-color: #fb6585;">2</span><span class="phb_txt">男子月薪6000上交妻子5500，1...</span></div>
				<div class="emotion_phb"><span class="phb_kuai" style="background-color: #fb6585;">3</span><span class="phb_txt">网聊多久见面才最合适？</span></div>
				<div class="emotion_phb"><span class="phb_kuai">4</span><span class="phb_txt">21岁大学生娶55岁大妈，爱情...</span></div>
				<div class="emotion_phb"><span class="phb_kuai">5</span><span class="phb_txt">男博士相亲一周后要女方退还30...</span></div>
				<div class="emotion_phb"><span class="phb_kuai">6</span><span class="phb_txt">男人婚前买的房该加女友名字吗？</span></div>
				<div class="emotion_phb"><span class="phb_kuai">7</span><span class="phb_txt">近六成女性无房不嫁？</span></div>
			</div>
		</div>
	</div>
</template>
<script>
</script>

<style scoped="scoped">
	.phb_kuai {
		color: white;
		display: inline-block;
		height: 20px;
		width: 20px;
		text-align: center;
		line-height: 20px;
		border-radius: 5px;
		background-color: #cdcfd4;
	}

	.phb_txt {
		margin-left: 10px;
	}

	.emotion {
		margin-top: 20px;
		width: 1190px;
		display: flex;
		justify-content: center;
		height: 425px;
		background-color: white;
		flex-wrap: wrap;
	}

	.emotion_low_box_img_txt {
		height: 26px;
		position: relative;
		top: -26px;
		color: white !important;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		background-color: rgba(0, 0, 0, 0.3);
		padding-left: 15px;
	}

	.emotion_top {
		width: 1150px;
		height: 60px;
		margin-top: 20px;
		display: flex;
	}

	.emotion_topico {
		float: left;
		width: 30px;
		height: 30px;
		margin: 8px 5px 0 0;
		background: url(../../assets/img/home/new-index-all.jpg) no-repeat 0 -30px;
	}

	.emotion_topico1 {
		display: inline-block;
		height: 13px;
		width: 13px;
		background-image: url(../../assets/img/home/new-index-all.jpg);
		background-position: 4px -118px;
	}

	.emotion_top_center {
		margin-left: 40px;
		width: 488px;
		height: 32px;
		display: flex;
	}

	.emotion_top_center_box {
		height: 32px;
		width: 88px;
		text-align: center;
		line-height: 32px;
		color: #888;
		cursor: pointer;
	}

	.emotion_low_box_titel {
		height: 60px;
		font-size: 22px;
	}

	.emotion_phb {
		height: 20px;
		padding-bottom: 20px;
		cursor: pointer;
	}

	.emotion_phb:hover {
		color: #55ADFB;
	}

	.emotion_top_center_box:hover {
		color: #ff4c71;
	}

	.emotion_top_more {
		font-size: 16px;
		width: 50px;
		height: 30px;
		line-height: 30px;
		color: #888;
		position: relative;
		cursor: pointer;
		left: 500px;
	}

	.emotion_top_more:hover {
		color: #B8E7FF;
	}

	.emotion_low {
		width: 1150px;
		height: 325px;
		margin-bottom: 20px;
		display: flex;
		justify-content: space-between;
	}

	.emotion_low_box {
		width: 272px;
		height: 325px;
	}

	.a {
		width: 272px;
		height: 170px;
		border-radius: 10px;
		overflow: hidden;
	}

	.emotion_low_box_img {
		width: 272px;
		height: 170px;
		border-radius: 10px;
		background-size: cover;
		transform: scale(1, 1);
		transition: transform 0.5s;
	}

	.emotion_low_box_img:hover {
		transform: scale(1.2, 1.2);
		cursor: pointer;
		transition: transform 0.5s;
	}

	.emotion1 {
		background-image: url(../../assets/img/home/emtion1.jpg);
	}

	.emotion2 {
		background-image: url(../../assets/img/home/emtion2.jpg);
	}

	.emotion3 {
		background-image: url(../../assets/img/home/emtion3.jpg);
	}

	.emotion_low_box_txt {
		width: 252px;
		height: 34px;
		display: block;
		padding-left: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 34px;
		cursor: pointer;
	}

	.emotion_low_box_txt:hover {
		color: #55ADFB;
	}

	.pooo {
		display: inline-block;
		position: relative;
		left: -16px;
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: #cdcfd4;
		overflow: hidden;
	}
</style>
