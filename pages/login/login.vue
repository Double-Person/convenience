<template>
	<view>
		账号<input type="text" value=""  />
		密码<input type="text" value="" />
		<button type="default">登录</button>
		<text @tap="torigester">暂无账号,前往注册</text>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
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
