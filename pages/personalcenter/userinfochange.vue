<template>
	<view>
		<view class="avatar">
			<image src="../../static/img/index/my.png" mode=""></image>
			<text style="color: white;">  <text>ID:</text> {{userinfolist.user_id}}</text>
		</view>
		<view class="content">
			<view class="nickname box">
				昵称:<input type="text" class="ipt" value="" :placeholder="userinfolist.nickname" placeholder-style="color:#CCCCCC;"/>
				
			</view>
			<view class="oldpassword box">
				旧密码:<input type="password" class="ipt"  value="" placeholder="请输入旧密码" placeholder-style="color:#CCCCCC;font-size:26rpx"/>
				
			</view>
			<view class="newpassword box">
				新密码:<input type="password" class="ipt"  value="" placeholder="请输入新密码" placeholder-style="color:#CCCCCC;font-size:26rpx"/>
				
				
			</view>
			<view class="surenewpassword box">
				确认新密码:<input type="password" class="ipt"  value="" placeholder="请确认新密码" placeholder-style="color:#CCCCCC;font-size:26rpx"/>	
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfolist:{},
			};
		},
		onLoad() {
			console.log(uni.getStorageSync('CONVENIENCE_INDO', "userinfo"))
			this.userinfolist=uni.getStorageSync('CONVENIENCE_INDO', "userinfo")
			
		},
		mounted() {
		
			
		}
	}
</script>

<style lang="scss" scoped>
	.avatar{
		width: 100%;
		height: 400rpx;
		background-image:linear-gradient(#F86F64,#FD5392);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		image{
			border: 1rpx solid white;
			width: 200rpx;
			height: 200rpx;
			margin-bottom: 20rpx;
			border-radius: 100%;
		}
	
	}
   .ipt{
	  
	  
   }
   .box{
	   display: flex;
	   align-items: center;
	   line-height: 100rpx;
	   border-bottom: 1rpx solid #ccc;
	   color: #999;
	   font-size: 35rpx;
   }
   .content{
	   padding: 0 40rpx;
   }
</style>
