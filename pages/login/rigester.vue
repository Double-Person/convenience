<template>
	<view>
		<view class="top">
			用户注册
				
			</view>
		<view class="ipt">
			<input type="text" placeholder="请输入手机号码" class="pho"/>
			<input type="password"  placeholder="请输入密码" class="psw"/>
			<input type="password"  placeholder="请确认密码" class="psw"/>
			
		</view>
			<button type="default" class="loginbtn" >注册</button>
			<view class="" style="display: flex;justify-content: center;">
				<text @tap="tologin" class="rigiester">直接登录</text>
				
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
			tologin(){
				uni.navigateTo({
					url: "./login"
				})
			}
		}
	}
</script>

<style lang="scss">
	.top{
		height: 160rpx;
		
		text-align: center;
		line-height: 160rpx;
		font-size: 50rpx;
		font-weight: bold;
	}
	.ipt{
		
		display: flex;
		flex-direction: column;
		align-items: center;
		input{
			height: 100rpx;
			border-bottom: 1px solid #CCCCCC;
			width: 90vw;
		}
	}
	.loginbtn{
		width: 85vw;
		margin: 0 auto;
	    height: 100rpx;
		line-height: 100rpx;
		background-image: linear-gradient(#F96770, #FD5591);
		color: white;
		border-radius: 60rpx;
		margin-top:100rpx;
	}
	.rigiester{
		
		font-size: 30rpx;
		text-decoration: underline;
		display: inline-block;
		width: 76vw;
		
		text-align: right;
		line-height: 60rpx;
		
	
	}
	

</style>
