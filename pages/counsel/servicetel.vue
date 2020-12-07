<template>
	<view>
		<view class="content">
			<image src="../../static/img/index/servicetel.png" mode=""></image>
			<text>025655555</text>
			<button>拨打电话</button>
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
	page{background-color:#F1F1F1;}
	.content{
		background: white;
		height:456rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		image{
			width:119rpx;
			height: 123rpx;
			margin: 42rpx 0;
		}
		text{
			font-size:36rpx;
			color:#828282;
		}
		button{
			width: 200rpx;
			height: 70rpx;
			font-size:30rpx;
			color: white;
			background:#FE4555;
			line-height: 70rpx;
			margin: 109rpx 0 38rpx 0;
			
		}
	}

</style>
