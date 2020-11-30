<template>
	<view>
		
		<view class="top">
		登录
			
		</view>
	<view class="ipt">
		<input type="text" v-model="info.account" placeholder="请输入手机号码" class="pho"/>
		<input type="password" v-model="info.password" placeholder="请输入密码" class="psw"/>
		
	</view>
		<button type="default" class="loginbtn" @click="_login">登录</button>
		<view class="" style="display: flex;justify-content: center;">
			<text @tap="torigester" class="rigiester">用户注册</text>
			
		</view>
		
	</view>
</template>

<script>
	import { login } from "../../api/api.js"
	export default {
		data() {
			return {
				info: {
					account: 'admin',
					password: '123456'
				}
			};
		},
		methods:{
			_login() {
				login({...this.info}).then(({data: {userinfo}, msg}) => {
					console.log(userinfo,msg)
					uni.setStorageSync('CONVENIENCE_TOKEN', userinfo.token)
					uni.setStorageSync('CONVENIENCE_INDO', userinfo)
					uni.switchTab({
						url: "/pages/index/index",
						fail(err) {
							console.log(err)
						}
					})
				})
			},
			torigester(){
				uni.navigateTo({
					url:'/pages/login/rigester',
				
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		width: 75vw;
		
		text-align: right;
		line-height: 60rpx;
		
	
	}

	

</style>
