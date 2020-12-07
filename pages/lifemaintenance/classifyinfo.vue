<template>
	<view>
		<uni-swiper-dot :info="info" :current="current" field="content" mode="default">
			<swiper class="swiper-box" autoplay="true"  circular=true>
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item" style="width: 100%;height: 100%;">
						<image :src="item.img" mode="" style="width: 100%;height: 100%;"></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		
		<view class="content">
			<view class="" style="font-size: 32rpx;color:#3D3D3D;padding: 35rpx 27rpx;border-bottom: 5rpx solid #F1F1F1;">
				啦啦啦啦服务部
			</view>
			<view class="pho fl jc-between lh100 al-center">
				<view class="">
					<text class="commleft">电话</text>
					<text class="commright">13547845146</text>
				</view>
				<image src="../../static/img/life/pho.png" mode=""></image>
			</view>
			<view class="address lh100">
				<text class="commleft">地址</text>
				<text class="commright">成都市金牛区24小时服务</text>
			</view>
			<view class="attestation lh100">
				<text class="commleft">认证</text>
			  <text class="commright">公安备案 工商注册</text>
				
			</view>
			<view class="servicecontent">
				<text class="commleft" style="padding: 0 20rpx;">服务内容</text>
				<br/>
				<view class="commright" style="padding:35rpx 20rpx;">肯定是奇偶我爱神的箭哦我爱谁谁激动你说的肯定是奇偶我爱神的箭哦我爱谁谁激动你说的肯定是奇偶我爱神的箭哦我爱谁谁激动你说的肯定是奇偶我爱神的箭哦我爱谁谁激动你说的肯定是奇偶我爱神的箭哦我爱谁谁激动你说的  </view>
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue";
	export default {
		components:{
			uniSwiperDot
		},
		data() {
			return {
				info: [{
						img: require("../../static/img/index/1606371956(1).png")
					}, {
						img: require("../../static/img/house.png")
					},
					{
						img: require("../../static/img/postmessage/1606289840.jpg")
					}
				],
				current: 0,
				mode: 'round',
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.commleft{
		color:#9A9A9A;
		font-size:30rpx;
	}
	.commright{
		color: #3D3D3D;
		font-size: 30rpx;
		margin-left:19rpx;
		
	}
	.lh100{
		line-height: 100rpx;
		border-bottom: 5rpx solid #F1F1F1;
		padding: 0 20rpx;
	}
	.servicecontent{
		
	}
	.content{
		.pho{
			image{
				width:55rpx;
				height: 55rpx;
			}
		}
	}
	.swiper-box {
		height: 345rpx;
	}

</style>
