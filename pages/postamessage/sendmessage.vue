<template>
	<view class="main">
		<textarea  value="" placeholder="添加文字描述......" />
		<view class="addpic">
			<gUpload></gUpload>
		</view>
		<view class="phonum">
			<view class="pic">
				<image src="../../static/img/postmessage/lianxiwomendianhua@2x.png" mode=""></image>
			</view>
			<input type="text" value="" placeholder="输入联系方式......"/>
		</view>
		
		<view class="sendbtn">
			<button class="fabu">发布</button>
			<button class="quxiao">取消</button>
			
			
		</view>
		
		
		
	</view>
</template>

<script>
	 import gUpload from "@/components/g-upload/g-upload.vue"

	export default {
		components:{
			gUpload
			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		padding: 45rpx 40rpx;
		textarea{
		
			width: 100%;
			height: 171rpx;
			
		}
		.addpic{
			margin-top: 20rpx;
			
		
		}
		.phonum{
			display: flex;
			height: 90rpx;
			align-items: center;
			border-top: 5rpx solid #F6F6F6;
			.pic{
				width:32rpx;
				height: 32rpx;
				image{
					width: 100%;
					height:100%
				}
			}
			input{
				margin-left: 20rpx;
			}
			
		}
		.sendbtn{
			margin-top: 206rpx;
			.fabu{
				width:265rpx;
				height: 80rpx;
				line-height: 80rpx;
				background:#FE4555;
				color: white;
				border-radius: 60rpx;
				
			}
			.quxiao{
				width:265rpx;
				height: 80rpx;
					line-height: 80rpx;
					margin-top: 21rpx;
				background:#ACACAC;
				color: white;
				border-radius: 60rpx;
				
			}
			
		}
	}

</style>
