<template>
	<view>
		<view class="lifetelevision common borderbottom bordertop" @tap="tocarbonfibertrend">
			<text>生活维修</text>
			<image src="/static/img/postmessage/right.png" mode=""></image>
		</view>
		<view class="livecircle">
			<view class="common borderxib">
				<text>生活圈</text>
			</view>
			<view class="littilecommon" @tap="topublishsmarket('roast')">
				<text>圈友吐槽</text>
				<image src="/static/img/postmessage/right.png" mode=""></image>
			</view>
			<view class="littilecommon" @tap="topublishsmarket('share')">
				<text>名品分享</text>
				<image src="/static/img/postmessage/right.png" mode=""></image>
			</view>
			<view class="littilecommon" @tap="topublishsmarket('disturb')">
				<text>非诚勿扰</text>
				<image src="/static/img/postmessage/right.png" mode=""></image>
			</view>
		</view>

		<view class="citysurrounding bordertop">
			<view class="common borderxib">
				<text>城市周边</text>

			</view>
			<view class="littilecommon" @tap="topublishsmarket('market')">
				<text>二手市场</text>
				<image src="/static/img/postmessage/right.png" mode=""></image>
			</view>
			<view class="littilecommon"  @tap="topublishsmarket('job')">
				<text>招聘求职</text>
				<image src="/static/img/postmessage/right.png" mode=""></image>
			</view>
			<view class="littilecommon" @tap="topublishsmarket('rent')">
				<text>转让出租</text>
				<image src="/static/img/postmessage/right.png" mode=""></image>
			</view>


		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			topublishsmarket(type) {
				uni.navigateTo({
					url: "/pages/postamessage/sendmessage?type=" + type
				})
			},
			//跳转生活维修
			tocarbonfibertrend(){
				uni.navigateTo({
					url:"/pages/lifemaintenance/carbonfibertrend"
				})
			}
	
		},
	}
</script>

<style lang="scss" scoped>
	.borderbottom {
		border-bottom: 14rpx solid #F6F6F6;
	}

	.bordertop {
		border-top: 14rpx solid #F6F6F6;
	}

	.borderxib {
		border-bottom: 2rpx solid #F6F6F6;
	}

	.common {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 31rpx 69rpx;
		background: white;


		text {
			font-size: 28rpx;
			font-weight: bold;
		}

		image {

			width: 40rpx;
			height: 45rpx;
		}

	}

	.littilecommon {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 31rpx 69rpx;
		background: white;
		border-bottom: 2rpx solid #F6F6F6;

		text {
			font-size: 28rpx;

		}

		image {

			width: 40rpx;
			height: 45rpx;
		}

	}

	.lifetelevision {}
</style>
