<template>
	<!-- 版权 -->
	<div class="copyright">
		<div class="copyright_big">
			<div class="copyright_top">
				<div class="copyright_top_left">
				</div>
				<div class="copyright_top_right">
					<div class="copyright_top_right1">
						<div class="copyright_txt">
							<span class="copyright_link">关于我们</span>
						</div>
						<div class="copyright_txt">
							<span class="copyright_link">联系我们</span></div>
						<div class="copyright_txt">
							<span class="copyright_link">无线业务</span></div>
						<div class="copyright_txt">
							<span class="copyright_link">注册条款</span></div>
						<div class="copyright_txt">
							<span class="copyright_link">安全中心</span></div>
						<div class="copyright_txt">
							<span class="copyright_link">区链块</span></div>
					</div>
					<div class="copyright_top_right2">
						<div class="copyright_txt">
							<span class="copyright_link">招聘信息</span></div>
						<div class="copyright_txt">
							<span class="copyright_link">交友信息</span></div>
						<div class="copyright_txt">
							<span class="copyright_link">隐私保护</span></div>
						<div class="copyright_txt">
							<span class="copyright_link">帮助中心</span></div>
						<div class="copyright_txt">
							<span class="copyright_link">营业执照</span></div>
						<div class="copyright_txt">
							<span class="copyright_link">投资者关系</span></div>
					</div>
					<div class="copyright_top_right3">
						<div class="copyright_txt1">
							<span class="copyright_link">ICP证书：沪B2-2****074</span></div>
						<div class="copyright_txt1">
							<span class="copyright_link">增值电信业务经营许可证：沪B2-20****13</span></div>
						<div class="copyright_txt1">
							<span class="copyright_link">京公网安备11010502****24号</span></div>
						<div class="copyright_txt1">
							<span class="copyright_link">沪ICP备09***640号-1</span></div>
					</div>
				</div>
			</div>
			<div class="copyright_bottom">
				<div class="copyright_bottom1">
					中文实名：比翼 不良和违法信息举报专线：0316-52***32 邮编：1****9 客服电话：010-57***066
				</div>
				<div class="copyright_bottom2">
					公司名称：上海mafei信息科技有限公司 公司地址：北京市朝阳区安定路**号****大厦**层
				</div>
				<div class="copyright_bottom3">
					© 2020-2040 版权所有
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.copyright {
		width: 100%;
		height: 300px;
		background-color: #F6F6F6;
		line-height: 300px;
	}

	.copyright_big {
		user-select: none;
		width: 900px;
		height: 300px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
	}

	.copyright_top {
		padding-top: 20px;
		height: 150px;
		width: 900px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid #666;
	}

	.copyright_top_left {
		width: 100px;
		height: 100px;
		background-image: url(../assets/img/logo.png);
		background-size: 100px 100px;
	}

	.copyright_top_right {
		width: 800px;
		height: 150px;
		display: flex;
		justify-content: space-around;
	}

	.copyright_top_right1 {
		display: flex;
		width: 200px;
		height: 150px;
		flex-wrap: wrap;

	}

	.copyright_txt {
		width: 200px;
		height: 24px;
		text-align: center;
		line-height: 20px;
		color: #7F7F7F;
		font-size: 14px;
	}

	.copyright_txt1 {
		width: 300px;
		height: 24px;
		text-align: center;
		line-height: 20px;
		color: #7F7F7F;
		font-size: 14px;
	}

	.copyright_link:hover {
		cursor: pointer;
		color: #12B7F5 !important;
	}

	.copyright_top_right2 {
		flex-wrap: wrap;
		display: flex;
		width: 200px;
		height: 150px;
	}

	.copyright_top_right3 {
		flex-wrap: wrap;
		display: flex;
		width: 300px;
		height: 150px;
	}

	.copyright_bottom1 {
		width: 900px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		color: #7F7F7F;
	}

	.copyright_bottom2 {
		width: 900px;
		height: 40px;
		text-align: center;
		line-height: 30px;
		color: #7F7F7F;
	}

	.copyright_bottom3 {
		width: 900px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		color: #7F7F7F;
	}

	.copyright_bottom {
		height: 150px;
		width: 900px;
		display: flex;
		flex-wrap: wrap;
	}
</style>
