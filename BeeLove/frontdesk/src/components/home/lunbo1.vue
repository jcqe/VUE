<template>
	<div class="lbig">
		<el-carousel trigger="click" height="340px" direction="vertical">
			<el-carousel-item v-for="item in 5" :key="item">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>

</script>

<style>
	.lbig .el-carousel__button {
		width: 14px !important;
		height: 14px !important;
		border-radius: 7px !important;
	}
</style>

<style scoped="scoped">
	.lbig {
		width: 1190px;
		margin: 0 auto;
		overflow: hidden;
	}

	.el-carousel {
		min-width: 1190px;
	}



	.el-carousel__container {
		width: 100%;
		min-width: 1190px !important;
	}

	.el-carousel__item {
		cursor: pointer;
	}

	.lbig .el-carousel__item:nth-child(1) {
		background-image: url(../../assets/img/home/lunbo7.png);
		background-position-x: 0px;
	}

	.lbig .el-carousel__item:nth-child(2) {
		background-image: url(../../assets/img/home/lunbo8.jpg);
		background-position-x: 0px;
	}

	.lbig .el-carousel__item:nth-child(3) {
		background-image: url(../../assets/img/home/lunbo9.jpg);
		background-position-x: 0px;
	}

	.lbig .el-carousel__item:nth-child(4) {
		background-image: url(../../assets/img/home/lunbo10.png);
		background-position-x: 0px;
	}

	.lbig .el-carousel__item:nth-child(5) {
		background-image: url(../../assets/img/home/lunbo11.jpg);
		background-position-x: 0px;
	}
</style>
