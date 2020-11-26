<template>
	<view>
		账号<input type="text" v-model="info.account"  />
		密码<input type="text" v-model="info.password" />
		<button type="default" @click="_login">登录</button>
		<text @tap="torigester">暂无账号,前往注册</text>
		
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
					uni.setStorageSync('CONVENIENCE_TOKEN', userinfo.token)
					uni.setStorageSync('CONVENIENCE_INDO', userinfo)
					uni.navigateTo({
						url: "../index/index"
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
	

</style>
