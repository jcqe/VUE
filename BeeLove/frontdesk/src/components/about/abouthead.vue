<template>
	<div class="container">
		<div class="head_banner">
			<div class="main">
				<p class="t1">关于我们</p>
				<p class="t2">Cooperative Partner</p>
				<img src="../../assets/img/about/ab_banner_line.png" alt />
			</div>
		</div>
		<div class="introduction">
			<span>关于比翼</span>
			比翼(Beelove),全球领先的婚恋交友平台。自创立以来，比翼(Beelove)持续稳居行业翘楚地位，占据互联网婚恋交友76%的用户浏览时间份额，互联网婚恋市场份额占据31.7%。迄今为止，
			比翼用户注册总数超1.7亿。一共举办大小活动1500余场，已有数十万单身男女通过比翼(Beelove)找到了自己的幸福
		</div>
		<div class="course">
			<h4>品牌历程</h4>
			<div class="block">
				<el-timeline>
					<el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon" :type="activity.type"
					 :color="activity.color" :size="activity.size" :timestamp="activity.timestamp">{{activity.content}}</el-timeline-item>
				</el-timeline>
			</div>
		</div>
		<div class="contact">
			<h4>联系我们</h4>
			<img src="../../assets/img/about/map.png" alt />
			<div class="right">
				<div class="rtop">
					<p>比翼（BeeLove）www.beelove.com总部:</p>
					<span>0571-87756677、18745636924</span> <br>
					<span>0571-87757667、18712336989</span> <br>
					<span>功能：渠道合作、活动策划等</span><br>
					<br>
					<br>
					<span>0571-87999999</span> <br>
					<span>功能：产品合作、网站推广等</span>
				</div>
				<div class="rmiddle">
					<p> 比翼客服中心：</p>
					<span>客服电话：400-800-9980、13654892567 &nbsp; &nbsp; 传真：0517-12369874</span> <br>
					<span>功能：会员注册、实时签线、功能答疑、会员投诉等</span>
				</div>
				<div class="rbottom">
					<p>比翼全国VIP服务中心：</p>
					<span>全国用户可拨打"比翼热线"：0571-32568947</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				activities: [{
					content: '“比翼”联合钱江晚报、西湖小游伴新媒体有限公司、亲青恋，携手举办“人间四月天为爱把手牵”维也纳联谊活动。',
					timestamp: '2018-04-12 20:46',
					color: '#d76fa4'
				}, {
					content: '“比翼”联合嵊州市广播电视总台、嵊州市新闻传媒中心、嵊州市越剧小镇、绍兴中翔温泉城，携手举办“青年之声亲青恋”相约剡城大型户外联谊交友活动。',
					timestamp: '2017-04-03 17:23',
					color: '#d76fa4'

				}, {
					content: '“比翼”联合浙大紫金港校区思想咖啡，成功举办“不负春光不负卿”咖啡馆交友派对。',
					timestamp: '2016-04-03 15:46',
					color: '#d76fa4'
				}, {
					content: '“比翼”推出周末约吧“我在地铁遇见你”520特别活动。',
					timestamp: '2015-05-20 16:46',
					color: '#d76fa4'
				}]
			};
		}
	};
</script>
<style scoped="scoped">
	.head_banner {
		width: 100%;
		height: 263px;
		background: url(../../assets/img/about/about_banner.jpg);
		color: white;
		position: relative;
	}

	.main {
		text-align: center;
		color: #fff;
		position: relative;
		top: 50px;
	}

	.t1,
	.t2 {
		font-size: 36px;
		line-height: 51px;
	}

	.head_banner img {
		margin-top: 20px;
	}

	.introduction span {
		margin-right: 50px;
	}

	.introduction {
		margin: 30px auto 0px auto;
		line-height: 1.7;
	}

	.course {
		background: #f5f5f5;
		padding: 30px 0px;
		margin: 50px auto;
		height: 335px;
	}

	.course h4 {
		color: #d76fa4;
		font-size: 36px;
		font-weight: bold;
		clear: both;
		text-align: center;
		margin: 20px;
	}

	.course block {
		margin-left: 50px;
	}

	.el-timeline {
		margin-left: 80px;
	}

	.el-timeline-item__content {
		color: #d76fa4;
	}
	.contact{
		margin-bottom: 50px;
	}

	.contact h4 {
		text-align: center;
		color: #d76fa4;
		font-size: 36px;
		margin: 30px auto;
	}

	.contact img {
		width: 600px;
		height: 370px;
	}

	.contact .right {
		width: 540px;
		height: 370px;
		float: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.contact .right p {
		color: #d76fa4;
		line-height: 1.7;
	}

	.contact .right span {
		color: #8c8b90;
		line-height: 1.7;
	}
</style>
