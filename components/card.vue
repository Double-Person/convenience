<template>
	<view class="main flcenter">
		<view class="eachlist" v-for="(item,index) in dataList" :key="index" :style="{background:'url(' + item.url+ ')',backgroundRepeat:'no-repeat',backgroundSize: 'cover'}">
			<view class="centerword flspacebet">
				<text>{{item.price}}元维修优惠券</text>
				<text>{{item.integration}}积分</text>

			</view>
			<view class="bottomword flspacebet">
				<text>大财主头衔才可用积分兑换维修优惠券</text>
				<text class="right">可兑换</text>

			</view>


		</view>

	</view>
</template>

<script>
	export default {
		name: "Cardlist",
		data() {
			return {
				dataList: [{
					url: require("../static/img/mycard/pinkcard.png"),
					price: 10,
					integration: 30,
				}, 
				{
					url: require("../static/img/mycard/pinkcard.png"),
					price: 10,
					integration: 30,
				},
				{
					url: require("../static/img/mycard/pinkcard.png"),
					price: 10,
					integration: 30,
				},
				{
					url: require("../static/img/mycard/pinkcard.png"),
					price: 10,
					integration: 30,
				},
				{
					url: require("../static/img/mycard/pinkcard.png"),
					price: 10,
					integration: 30,
				},
				]

			};
		}
	}
</script>

<style lang="scss" scoped>
	.eachlist {
		width: 505rpx;
		height: 129rpx;
		padding: 12rpx 40rpx;

		.centerword {
			font-size: 40rpx;
			font-weight: bold;
			padding: 30rpx 0;


		}

		.bottomword {
			font-size: 18rpx;
			color: white;

			.right {
				font-size: 30rpx;
				font-weight: bold;

			}
		}

	}
</style>
