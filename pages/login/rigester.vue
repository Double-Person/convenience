<template>
	<view>
		<view class="top">
			用户注册
				
			</view>
		<view class="ipt">
				<input type="text" v-model="parmas.username" placeholder="请输入用户名" class="pho"/>
			<input type="text" v-model="parmas.mobile"  onblur="rechecking" placeholder="请输入手机号码" class="pho"/>
			<input type="password" v-model="parmas.password"  placeholder="请输入密码" class="psw"/>
			<input type="password"  v-model="surepwd"  placeholder="请确认密码" class="psw"/>
			
		</view>
			<button type="default" class="loginbtn"  @tap="registerbtn">注册</button>
			<view class="" style="display: flex;justify-content: center;">
				<text @tap="tologin" class="rigiester">直接登录</text>
			</view>
		
	</view>
</template>

<script>
	import {
	register
	} from '@/api/api.js'
	export default {
		data() {
			return {	
				surepwd:"",
				parmas:{
					username:"",
					password:"",
					mobile:"",
					
				}
				
			};
		},
		methods:{
			tologin(){
				uni.navigateTo({
					url: "./login"
				})
			},
			registerbtn(){
				const {username,password,mobile}=this.parmas;
				
				
				if(!username)
					return uni.showToast({ title: '用户名不能为空',icon:'none' });
				if(!password)
					return uni.showToast({ title: '密码不能为空',icon:'none' })
				if(!mobile)
					return uni.showToast({ title: '手机号不能为空',icon:'none' })
				if(this.surepwd!=password)
					return uni.showToast({ title: '两次密码输入不一致',icon:'none' })	
					
				
				
				register(this.parmas).then(res=>{
					if(res.code==1){
						uni.showToast({
							title:"注册成功",
							icon:""
						}),
					setTimeout(() => {
					uni.switchTab({
						url: '../index/index',
					
						
					})
					}, 500)
					}else{
						uni.showToast({
							title:"注册失败",
							icon:""
						})
						
					}
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
