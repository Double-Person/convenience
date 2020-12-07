<template>
	<view>
		<view class="content">
			
		</view>
		<view class="integral">
			<view class="top">
				<text>当前积分</text>
				<image src="../../static/img/user/mn_jifen_fill@2x.png" mode=""></image>
			</view>
			<view class="bottom">
				100分
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	page{background-color: #F1F1F1;}
	.content{
		height: 172rpx;
		background:#FE4555;
	}
	.integral{
		/* width: 665rpx; */
		height: 236rpx;
		background: white;
		margin:-118rpx  42rpx 0 42rpx;
		z-index: 99;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-weight: bold;
		.top{
			line-height: 90rpx;
			
			text{
				font-size: 30rpx;
			}
			image{
				width:28rpx;
				height: 28rpx;
			}
		}
		.bottom{
			color:#FE4555;
			font-size:40rpx;
			
		}
		
		
	}

</style>
