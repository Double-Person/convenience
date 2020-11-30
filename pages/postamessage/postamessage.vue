<template>
	<view>
		<view class="lifetelevision common borderbottom bordertop">
			<text>生活影视</text>
			<image src="../../static/img/postmessage/向右箭头.png" mode=""></image>
		</view>
		<view class="livecircle">
			<view class="common borderxib">
				<text>生活圈</text>
			</view>
			<view class="littilecommon">
				<text>圈友吐槽</text>
				<image src="../../static/img/postmessage/向右箭头.png" mode=""></image>
			</view>
			<view class="littilecommon">
				<text>名品分享</text>
				<image src="../../static/img/postmessage/向右箭头.png" mode=""></image>
			</view>
			<view class="littilecommon">
				<text>非诚勿扰</text>
				<image src="../../static/img/postmessage/向右箭头.png" mode=""></image>
			</view>
		</view>

		<view class="citysurrounding bordertop">
			<view class="common borderxib">
				<text>城市周边</text>

			</view>
			<view class="littilecommon" @tap="topublishsmarket">
				<text>二手市场</text>
				<image src="../../static/img/postmessage/向右箭头.png" mode=""></image>
			</view>
			<view class="littilecommon">
				<text>招聘求职</text>
				<image src="../../static/img/postmessage/向右箭头.png" mode=""></image>
			</view>
			<view class="littilecommon">
				<text>转让出租</text>
				<image src="../../static/img/postmessage/向右箭头.png" mode=""></image>
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
			topublishsmarket() {
				uni.navigateTo({
					url: "/pages/postamessage/sendmessage"
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
