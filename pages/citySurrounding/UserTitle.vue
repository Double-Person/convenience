<template>
	<view class="fl jc-between al-center user-title">
		<view class="fl user-info">
			<image class="img" :src="item && item.user.avatar" mode=""></image>
			<view class="info">
				<view class="name">{{item && item.user.nickname}}</view>
				<view class="placed-top" v-show="item.is_top===1">置顶</view>
			</view>
		</view>
		<view class="call-phone" v-show="phone" @click="callPhone(item && item.mobile)">拨打电话</view>



	</view>

</template>

<script>
	export default {
		props: {
			top: {
				type: Boolean,
				default: false
			},
			phone: {
				type: Boolean,
				default: false
			},
			item: {
				type: Object,

			},

		},
		onLoad() {
			console.log(item,"数据")
		},
		methods: {
			callPhone(phone) {
				if (!phone)
					return uni.showToast({ title: '手机号为空', icon: 'none' })

				uni.makePhoneCall({
					phoneNumber: phone
				});

			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-title {
		.user-info {
			.img {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
			}

			.info {
				margin-left: 28rpx;

				.name {

					height: 26rpx;
					font-size: 26rpx;
					font-weight: 800;
					color: #2E2E2E;
				}

				.placed-top {
					width: 80rpx;
					height: 30rpx;
					background: $main-color;
					border-radius: 15rpx;
					text-align: center;
					margin-top: 6rpx;

					font-size: 20rpx;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
		}

		.call-phone {
			width: 160rpx;
			height: 80rpx;
			background: $main-color;
			border-radius: 40rpx;

			font-size: 26rpx;
			font-weight: 800;
			color: #FFFFFF;
			line-height: 80rpx;
			text-align: center;


		}
	}
</style>
