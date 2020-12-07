<template>
	<view>
		<view class="topsendpic">
			<image src="@/static/img/life/sendpic.png" mode=""></image>
		</view>
		
		<view class="content">
			<view class="eachitem">
				<text>标题:</text><input type="text" value=""/>
			</view>
			
			<view class="eachitem">
				<text>身份信息:</text><input type="text" value=""/>
			</view>
			
			<view class="eachitem">
				<text>备案证明:</text><input type="text" value=""/>
			</view>
			
			<view class="eachitem">
				<text>地址:</text><input type="text" value=""/>
			</view>
			
			<view class="eachitem">
				<text>详细地址:</text><input type="text" value=""/>
			</view>
			
			<view class="eachitem">
				<text>联系人:</text><input type="text" value=""/>
			</view>
			
			<view class="eachitem">
				<text>联系电话:</text><input type="text" value=""/>
			</view>
			
			<view class="contentinput">
				<text>内容:</text><textarea value=""/>
			</view>
		</view>
		<button>编辑</button>
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
	.topsendpic{
		padding:39rpx 0 39rpx 30rpx;
		background: white;
		image{
			width:121rpx;
			height: 121rpx;
		}
	}
	.content{
		background: white;
		padding: 0 0 40rpx 0;
		.eachitem{
			padding: 0 0 0 23rpx;
			border-bottom: 1rpx solid #F1F1F1;
			height: 80rpx;
			display: flex;
			align-items: center;
			
			text{
				color:#9B9B9B;
				font-size: 28rpx;
				
			}	
			input{
				color: #2A2A2A;
				font-size: 28rpx;
				
			width: 65%;
			}
		}
		.contentinput{
				padding: 0 23rpx;
			text{
				color:#9B9B9B;
				font-size: 28rpx;
			}	
			
			textarea{
				border: 1px solid #F1F1F1;
				width: 100%;
				height: 153rpx;
				margin-top: 23rpx;
				font-size: 28rpx;
				border-radius: 20rpx;
			}
		}
		
	}
	button{
		background:#FE4555;
		color: white;
		font-size:30rpx;
		width: 200rpx;
		height: 70rpx;
		line-height: 70rpx;
		margin-top:45rpx;
	}

</style>
