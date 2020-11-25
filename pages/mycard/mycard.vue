<template>
	<view class="main">
		<view class="title">
			可用卡卷

		</view>
		<view class="concent">
			<view class="eachitem" v-for="(item,index) in dataList" :key="index" :style="{background:'url(' + item.url+ ')',backgroundRepeat:'no-repeat',backgroundSize: 'cover'}"
			 @tap="sharecard">
				<view class="topitem">
					<text>{{item.price}}元维修优惠券</text>
					<text>{{item.integration}}积分</text>

				</view>
				<view class="bottomitem">
					<text class="bottomleft">大财主才能兑换</text>
					<text class="bottomright">可兑换</text>
				</view>

			</view>
			<view class="notitemtitle">
				不可用卡卷

			</view>
			<view class="concent">
				<view class="eachitem" v-for="(item,index) in notdatalist" :key="index" :style="{background:'url(' + item.url+ ')',backgroundSize: 'cover'}">
					<view class="topitem">
						<text>微信分享{{item.price}}人</text>
						<text>{{item.integration}}积分</text>

					</view>
					<view class="bottomitem">
						<text class="bottomleft">大财主才能兑换</text>
						<text class="bottomright">不可兑换</text>
					</view>

				</view>




			</view>



		</view>
		<wyb-popup ref="popup" type="center" height="500" width="500" radius="6" :showCloseIcon="true">
			<view class="popup-content">
				<view class="index_mycard">
					<view class="head">
						首页-我的卡卷

					</view>
					<view class="sharecontent">
						<text class="sharetitle">分享主题文字</text>
						<view class="shareword over-ellipsis-2">激动我按实际do我as建档立卡选择框刺激哦我直接插了酒叟ID睡觉奥ID解耦我阿双方均哦我as大家都我按实际都阿斯加德</view>

					</view>

				</view>
				<view class="sendto">
					<view class="sendtotitle">
						发送给
					</view>
					<view class="sendbody">
						<view class="activ">
							<view class="every">
								<image src="../../static/img/mycard/headpic.jpg" mode=""></image>

							</view>
							<text class="name">张三</text>

						</view>
						<view class="activ">
							<view class="every">
								<image src="../../static/img/mycard/headpic.jpg" mode=""></image>

							</view>
							<text class="name">张三</text>

						</view>
						<view class="activ">
							<view class="every">
								<image src="../../static/img/mycard/headpic.jpg" mode=""></image>

							</view>
							<text class="name">张三</text>

						</view>
						<view class="activ">
							<view class="every">
								<image src="../../static/img/mycard/headpic.jpg" mode=""></image>
						
							</view>
							<text class="name">张三</text>
						
						</view>
						<view class="activ">
							<view class="every">
								<image src="../../static/img/mycard/headpic.jpg" mode=""></image>
						
							</view>
							<text class="name">张三</text>
						
						</view>
						<view class="activ">
							<view class="every">
								<image src="../../static/img/mycard/headpic.jpg" mode=""></image>
						
							</view>
							<text class="name">张三</text>
						
						</view>
						<view class="activ">
							<view class="every">
								<image src="../../static/img/mycard/headpic.jpg" mode=""></image>
						
							</view>
							<text class="name">张三</text>
						
						</view>
						<view class="activ">
							<view class="every">
								<image src="../../static/img/mycard/headpic.jpg" mode=""></image>
						
							</view>
							<text class="name">张三</text>
						
						</view>

					</view>

				</view>
			</view>
		</wyb-popup>

	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	export default {
		components: {
			wybPopup

		},
		data() {
			return {
				dataList: [{
						url: require("../../static/img/mycard/pinkcard.png"),
						price: 10,
						integration: 30,
						itemclass: 1,
					},
					{
						url: require("../../static/img/mycard/pinkcard.png"),
						price: 20,
						integration: 50,
						itemclass: 1,
					},
					{
						url: require("../../static/img/mycard/bluecard.png"),
						price: 20,
						integration: 50,
						itemclass: 1,
					},
					{
						url: require("../../static/img/mycard/bluecard.png"),
						price: 20,
						integration: 50,
						itemclass: 1,
					},
					{
						url: require("../../static/img/mycard/bluecard.png"),
						price: 20,
						integration: 50,
						itemclass: 1,
					},
					{
						url: require("../../static/img/mycard/perporcard.png"),
						price: 20,
						integration: 50,
						itemclass: 1,
					},
					{
						url: require("../../static/img/mycard/yellowcard.png"),
						price: 20,
						integration: 50,
						itemclass: 1,
					},
					{
						url: require("../../static/img/mycard/yellowcard.png"),
						price: 20,
						integration: 50,
						itemclass: 1,
					},



				],
				notdatalist: [{
					url: require("../../static/img/mycard/cccard.png"),
					price: 10,
					integration: 30,
					itemclass: 1,
				}, {
					url: require("../../static/img/mycard/cccard.png"),
					price: 10,
					integration: 30,
					itemclass: 1,
				}, {
					url: require("../../static/img/mycard/cccard.png"),
					price: 10,
					integration: 30,
					itemclass: 1,
				}]



			};
		},
		methods: {
			sharecard() {
				this.$refs.popup.show()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wdsz {
		font-size: 40rpx;
		font-weight: bold;
	}

	.main {
		padding: 0 82rpx;

		.title {
			font-size: 26rpx;
			margin: 107rpx 0 49rpx 0;
		}

		.concent {
			.eachitem {
				width: 505rpx;
				height: 129rpx;
				padding: 12rpx 40rpx;
				position: relative;
				margin-bottom: 39rpx;

				.topitem {
					font-size: 40rpx;
					font-weight: bold;
					display: flex;
					justify-content: space-between;
					align-items: center;
					line-height: 105rpx;
				}

				.bottomitem {
					display: flex;
					justify-content: space-between;

					.bottomleft {
						font-size: 18rpx;
						color: white;
					}

					.bottomright {
						font-size: 30rpx;
						font-weight: bold;
						color: white;
					}

				}


			}

			.notitemtitle {
				font-size: 26rpx;
				margin-bottom: 49rpx;
			}

		}


	}

	.index_mycard {
		padding: 49rpx 42rpx;

		.head {
			font-size: 40rpx;
			font-weight: bold;
			margin-bottom: 20rpx;

		}

		.sharecontent {
			.sharetitle {
				line-height: 60rpx;
				font-size: 30rpx;

			}

			.shareword {
				font-size: 16rpx;
				height: 60rpx;

			}
		}

	}

	.sendto {
		.sendtotitle {
			font-size: 20rpx;
			font-weight: bold;
			padding: 0 0 38rpx 42rpx;
			border-top: 1rpx solid #C8C8C8;
			padding: 30rpx;
		}
		.sendbody {
			display: flex;
			.activ {
				width: 25%;
			
				padding: 0 17rpx;
				display: flex;
				flex-direction: column;
				align-items: center;

				.every {
					width: 80rpx;
					height: 80rpx;

					image {
						width: 100%;
						height: 100%;
					}

				}

				.name {
					font-size: 16rpx;
				}


			}



		}
	}
</style>
