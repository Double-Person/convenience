<template>
	<view class="main">
		<view class="content fl jc-between al-center">
			<image src="../../static/img/index/1606371956(1).png" mode="" @tap="toclassifyinfo"></image>
			<view class="rightinfo fl jc-between al-center">
				<view class="left">
					<view class="title" style="line-height: 60rpx;">
						啦啦啦啦
					</view>
					<text style="line-height: 40rpx;">金牛区</text>
					<text>155562255</text>
				</view>
				<view class="right">
					<button @tap="tocopyreader"></button>
				</view>
				
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
		methods:{
			tocopyreader(){
			console.log(11)
			},
			toclassifyinfo(){
				uni.navigateTo({
					url:"/pages/lifemaintenance/classifyinfo"
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	page{background-color:#F1F1F1;}
	.main{
		padding:23rpx 15rpx;
		background: white;
	}
	.content{
		
		image{
			width: 243rpx;
			height: 179rpx;
			border-radius: 5rpx;
			
		}
		.rightinfo{
			
			height:130rpx;
			width: 428rpx;
			.left{
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				.title{
					font-size: 30rpx;
					color:#0A0A0A;	
					font-weight: bold;
				}
				text{
					color:#7A7A7A;
					font-size:28rpx;
				}
				
			}
			.right{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 52rpx;
				button{
					color: white;
					width: 62rpx;
					height: 62rpx;
					border-radius: 50%;
					padding: 0;
					margin: 0;
					
					background:url(../../static/img/life/pho.png);
					background-size: cover;
					
				
					
				}
			}
			
		}
	}
	

</style>
