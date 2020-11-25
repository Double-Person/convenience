<template>
	<view class="main">
		<textarea  value="" placeholder="添加文字描述......" />
		<view class="addpic">
			<gUpload></gUpload>
		</view>
		<view class="phonum">
			<view class="pic">
				<image src="../../static/img/postmessage/lianxiwomendianhua@2x.png" mode=""></image>
				<input type="text" value="" placeholder="输入联系方式......"/>
			</view>
			
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
			border: 1px solid red;
		
		}
		.phonum{
			.pic{
				width:32rpx;
				height: 32rpx;
				image{
					width: 100%;
					height:100%
				}
			}
			
		}
	}

</style>
