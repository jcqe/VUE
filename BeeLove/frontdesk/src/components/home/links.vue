<template>
	<div class="big">
		<div class="link_1"></div>
		<div class="link_2">
			<div class="link_21">
				<div class="link_2_top link_2_top1">比翼应用</div>
				<div class="link_2_box link2_1"></div>
				<div class="link_2_box link2_2"></div>
				<div class="link_2_box link2_3"></div>
				<div class="link_2_box link2_4"></div>
				<div class="link_2_box link2_5"></div>
				<div class="link_2_box link2_6"></div>
			</div>
			<div class="link_22">
				<div class="link_2_top link_2_top2">搜索神功</div>
				<div class="link_2_box link2_7"></div>
				<div class="link_2_box link2_8"></div>
				<div class="link_2_box link2_9"></div>
				<div class="link_2_box link2_10"></div>
				<div class="link_2_box link2_11"></div>
				<div class="link_2_box link2_12"></div>
			</div>
		</div>
		<div class="link_3">
			<div class="link_3_box link3_1"></div>
			<div class="link_3_box link3_2"></div>
			<div class="link_3_box link3_3"></div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.big {
		width: 1190px;
		height: 600px !important;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		background-color: #F6F6F6 !important;
	}

	.link_1 {
		width: 1190px;
		height: 100px;
		background-image: url(../../assets/img/home/link1.png);
		cursor: pointer;
	}

	.link_2 {
		width: 1190px;
		height: 240px;
		display: flex;
		justify-content: space-between;
	}

	.link_21 {
		background-color: white;
		display: flex;
		width: 590px;
		height: 244px;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.link_22 {
		background-color: white;
		display: flex;
		width: 590px;
		height: 244px;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.link_2_top {
		width: 590px;
		height: 40px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		color: white;
		text-align: center;
		line-height: 40px;
		font-size: 20px;
	}

	.link_2_top1 {
		background-color: #FF537C;
	}

	.link_2_top2 {
		background-color: #43B2F8;
	}

	.link_2_box {
		width: 196px;
		height: 100px;
		background-color: #FF537C;
		cursor: pointer;
	}

	.link_2_box:hover {
		box-shadow: 0px 0px 20px #E8E8E8;
		z-index: 100;
	}

	.link_3 {
		width: 1190px;
		height: 150px;
		display: flex;
	}

	.link2_1 {
		background-image: url(../../assets/img/home/link2-1.jpg);
	}

	.link2_2 {
		background-image: url(../../assets/img/home/link2-2.jpg);
	}

	.link2_3 {
		background-image: url(../../assets/img/home/link2-3.jpg);
	}

	.link2_4 {
		background-image: url(../../assets/img/home/link2-4.jpg);
	}

	.link2_5 {
		background-image: url(../../assets/img/home/link2-5.jpg);
	}

	.link2_6 {
		background-image: url(../../assets/img/home/link2-6.jpg);
	}

	.link2_7 {
		background-image: url(../../assets/img/home/link2-7.jpg);
	}

	.link2_8 {
		background-image: url(../../assets/img/home/link2-8.jpg);
	}

	.link2_9 {
		background-image: url(../../assets/img/home/link2-9.jpg);
	}

	.link2_10 {
		background-image: url(../../assets/img/home/link2-10.jpg);
	}

	.link2_11 {
		background-image: url(../../assets/img/home/link2-11.jpg);
	}

	.link2_12 {
		background-image: url(../../assets/img/home/link2-12.jpg);
	}

	.link_3 {
		width: 1190px;
		height: 150px;
		display: flex;
		justify-content: space-between;
	}

	.link_3_box {
		width: 390px;
		height: 150px;
		border-radius: 10px;
		cursor: pointer;
	}

	.link3_1 {
		background-image: url(../../assets/img/home/link3-1.jpg);
	}

	.link3_2 {
		background-image: url(../../assets/img/home/link3-2.jpg);
	}

	.link3_3 {
		background-image: url(../../assets/img/home/link3-3.jpg);
	}
</style>
