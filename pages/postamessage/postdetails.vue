<template>
	<view>
		<view class="main">
			<view class="title">
				<text>今日生活分享主体文字</text>
				<button @tap="setthetop">设置置顶</button>

			</view>
			
			<view class="coupons">
				<scroll-view scroll-x="true" class="scrollist">
					<view class="couponitem ershou" v-for="(item,index) in pic" :key="index">
						<image :src="$imgBaseUrl+item" mode=""></image>
					</view>
				</scroll-view>
			</view>
			
			<view class="concent">
				<view class="article">
				{{this.contents}}
				</view>

			</view>
		</view>
		<wyb-popup ref="popup" type="center" height="600" width="500" radius="6" :showCloseIcon="true">
			<view class="popup-content settopprop">
				<radio-group class="radio-group radioiinput">
					<label class="radio">
						<text>置顶 3元/天</text>
						<radio value="three" checked="" />
					</label>
					<label class="radio">
						<text>置顶 80元/月</text>
						<radio value="eighty" checked="" />
					</label>
				</radio-group>



				<button class="surebtn">确认支付</button>

			</view>
		</wyb-popup>

		<wyb-popup ref="privacypopup" type="center" height="800" width="500" radius="6" :showCloseIcon="true" style="position: relative;">
			<view class="popup-content ">
				<view class="privacytitle">
					隐私协议文字标题

				</view>
				<view class="privacycontent">

					文字内容文字内容文字内容文字内容文字内容文字文字内容
					文字内容文字内容文字内容文字内容文字内容文字文字内文
					字内容文字文字内容文字内容文字内容内容文字内容文字文
					字内容文字内容文字内容文字内容文字内容文字文字内容文
					字内容文字文字内容文字内容文字内容内容文字内
					文字内容文字内容文字内容文字内容文字内容文字文字内容
					文字内容文字文字内容文字内容文字内容内容文字内容文字
					文字内容文字内容文字内容文字内容文字内容文字文字内文
					字内容文字文字内容


				</view>
				<view class="privacybtn">
					<button class="no">不同意</button>
					<button class="yes">同意</button>

				</view>



			</view>
		</wyb-popup>


		<view class="sendmessage">
			<input type="text" value="" placeholder="说些什么吧" @tap="showprivacy" />

		</view>

	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue';
	import {
		market_detail
	} from '@/api/api.js'
	export default {
		components: {
			wybPopup
		},
		data() {
			return {
				pic:[],//图片数组
				contents:"",//产品描述

			};
		},
		onLoad(id) {
			console.log(id);
			market_detail(id).then(res => {
				console.log(res)
				this.pic=res.data.images;
				this.contents=res.data.content

			})



		},
		methods: {
			setthetop() {
				this.$refs.popup.show()
			},
			showprivacy() {
				this.$refs.privacypopup.show()

			}
		}
	}
</script>

<style lang="scss" scoped>
	.coupons {
		border-bottom: 5rpx solid #F6F6F6;
		.scrollist {
			width: 700rpx;
			white-space: nowrap;
			.couponitem {
				display: inline-block;
				margin-right: 40rpx;
				border-radius: 30rpx;		
				overflow: hidden;
			
			}
	
		}
	
	}

	.main {
		padding: 0 83rpx;

		.title {
			display: flex;
			align-items: center;
			height: 135rpx;

			text {
				font-size: 30rpx;
				font-weight: bold;
			}

			button {
				width: 150rpx;
				height: 40rpx;
				font-size: 18rpx;
				padding: 0;
				line-height: 40rpx;
				background: #A9A9A9;
				color: white;
				margin-left: 20rpx;
			}
		}

		.concent {
			.article {
				font-size: 18rpx;
				padding: 20rpx;
			}
		}
	}

	.sendmessage {
		background: #EAEAEA;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		input {
			width: 90vw;
			height: 70rpx;
			background: white;
			border-radius: 30rpx;
			text-indent: 30rpx;
		}
	}

	.surebtn {
		width: 200rpx;
		height: 70rpx;
		background: #FE4555;
		line-height: 70rpx;
		color: white;
		font-weight: bold;
		padding: 0;
		font-size: 30rpx;
		margin-top: 125rpx;
	}

	.radioiinput {
		display: flex;
		flex-direction: column;

		.radio {
			margin-top: 96rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

		}

	}

	.settopprop {
		padding: 0 56rpx;
	}

	.popup-content {
		padding: 55rpx;

		.privacytitle {
			font-size: 40rpx;
			font-weight: bold;
			text-align: center;
		}

		.privacycontent {
			font-size: 16rpx;
		}

		.privacybtn {
			display: flex;
			justify-content: space-between;
			position: absolute;

			bottom: 62rpx;


			button {
				width: 180rpx;
				height: 70rpx;
				line-height: 70rpx;
			}

			.no {
				background: white;
				border: 1px solid #939393;
				color: #8B8B8B;

			}

			.yes {
				background: #FE4555;
				color: white;
				margin-left: 20rpx;

			}
		}

	}
</style>
