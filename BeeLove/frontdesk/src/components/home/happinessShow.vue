<template>
	<div class="happinessShow container">
		<div class="happinessShow_top">
			<h2><span class="happinessShow_topico"></span><span>晒幸福</span></h2>
			<div class="happinessShow_top_center">
				<div class="happinessShow_top_center_box" style="color: #ff4c71;">80后</div>
				<div class="happinessShow_top_center_box">型男</div>
				<div class="happinessShow_top_center_box">郎才女貌</div>
				<div class="happinessShow_top_center_box">一见钟情</div>
			</div>
			<div class="happinessShow_top_more" @click="toshowhappy">更多<span class="happinessShow_topico1"></span></div>
		</div>
		<div class="happinessShow_lowbox">
			<div class="happinessShow_lowbox_left">
				<div class="happinessShow_lowbox_0 show_img1">
					<div class="happinessShow_tit0">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img2">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img3">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
			</div>
			<div class="happinessShow_lowbox_right">
				<div class="happinessShow_lowbox_1 show_img4">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img5">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img6">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img7">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img8">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img9">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img10">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img11">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img12">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img13">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img14">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img15">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img16">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img17">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
				<div class="happinessShow_lowbox_1 show_img18">
					<div class="happinessShow_tit1">
						<div class="happinessShow_tit_t1">雪儿&兔子</div>
						<div class="happinessShow_tit_t2">2011.7.16</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			toshowhappy(){
				this.$router.push("/showhappy")
			},
		}
	}
</script>

<style scoped="scoped">
	.happinessShow {
		margin-top: 20px;
		width: 1190px;
		display: flex;
		justify-content: center;
		height: 584px;
		background-color: white;
		flex-wrap: wrap;
	}

	.happinessShow_top {
		width: 1150px;
		height: 60px;
		margin-top: 20px;
		display: flex;
	}

	.happinessShow_top_center_box:hover {
		color: #ff4c71;
	}

	.happinessShow_topico {
		float: left;
		width: 30px;
		height: 30px;
		margin: 3px 5px 0 0;
		background: url(../../assets/img/home/new-index-all.jpg) no-repeat 0 -60px;
	}

	.happinessShow_topico1 {
		display: inline-block;
		height: 13px;
		width: 13px;
		background-image: url(../../assets/img/home/new-index-all.jpg);
		background-position: 4px -118px;
	}

	.happinessShow_top_center {
		margin-left: 40px;
		width: 460px;
		height: 32px;
		display: flex;
	}

	.happinessShow_top_center_box {
		height: 32px;
		width: 88px;
		text-align: center;
		line-height: 32px;
		color: #888;
		cursor: pointer;
	}

	.happinessShow_top_more {
		font-size: 16px;
		width: 50px;
		height: 30px;
		line-height: 30px;
		color: #888;
		position: relative;
		cursor: pointer;
		left: 500px;
	}



	.happinessShow_top_more:hover {
		color: #B8E7FF;
	}

	.happinessShow_lowbox {
		width: 1133px;
		height: 484px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		border-radius: 5px;
		overflow: hidden;
	}

	.happinessShow_lowbox_left {
		width: 322px;
		height: 484px;
		flex-wrap: wrap;
		justify-content: space-between;
		display: flex;
	}

	.happinessShow_lowbox_right {
		width: 811px;
		height: 484px;
		flex-wrap: wrap;
		justify-content: space-around;
		display: flex;
	}

	.happinessShow_lowbox_0 {
		height: 322px;
		width: 322px;
	}

	.happinessShow_tit0 {
		width: 100%;
		height: 45px;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		display: none;
		position: relative;
		top: 277px;
	}

	.happinessShow_tit1 {
		width: 100%;
		height: 45px;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		display: none;
		position: relative;
		top: 115px;
	}

	.happinessShow_lowbox_0:hover .happinessShow_tit0 {
		display: block;
	}

	.happinessShow_lowbox_1:hover .happinessShow_tit1 {
		display: block;
	}

	.happinessShow_tit_t1 {
		padding-top: 5px;
		margin-left: 10px;
		font-size: 14px;
	}

	.happinessShow_tit_t2 {
		margin-left: 10px;
		font-size: 12px;
		color: #A5A5A5;
	}

	.happinessShow_lowbox_1 {
		height: 160px;
		width: 160px;
	}

	.show_img1 {
		background-image: url(../../assets/img/home/show1.jpg);
	}

	.show_img2 {
		background-image: url(../../assets/img/home/show2.jpg);
	}

	.show_img3 {
		background-image: url(../../assets/img/home/show3.jpg);
	}

	.show_img4 {
		background-image: url(../../assets/img/home/show4.jpg);
	}

	.show_img5 {
		background-image: url(../../assets/img/home/show5.jpg);
	}

	.show_img6 {
		background-image: url(../../assets/img/home/show6.jpg);
	}

	.show_img7 {
		background-image: url(../../assets/img/home/show7.jpg);
	}

	.show_img8 {
		background-image: url(../../assets/img/home/show8.jpg);
	}

	.show_img9 {
		background-image: url(../../assets/img/home/show9.jpg);
	}

	.show_img10 {
		background-image: url(../../assets/img/home/show10.jpg);
	}

	.show_img11 {
		background-image: url(../../assets/img/home/show11.jpg);
	}

	.show_img12 {
		background-image: url(../../assets/img/home/show12.jpg);
	}

	.show_img13 {
		background-image: url(../../assets/img/home/show13.jpg);
	}

	.show_img14 {
		background-image: url(../../assets/img/home/show14.jpg);
	}

	.show_img15 {
		background-image: url(../../assets/img/home/show15.jpg);
	}

	.show_img16 {
		background-image: url(../../assets/img/home/show16.jpg);
	}

	.show_img17 {
		background-image: url(../../assets/img/home/show17.jpg);
	}

	.show_img18 {
		background-image: url(../../assets/img/home/show18.jpg);
	}
</style>
