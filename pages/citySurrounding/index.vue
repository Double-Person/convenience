<template>
	<view class="surrounding">
		<!-- 标题栏 -->
		<view class="fl al-center nav-bar">
			<view v-for="(item,index) in navBar" :key="index" class="nav-bar-item" @click="handelTitle(index)">
				<view class="title">{{item.label}}</view>
				<view class="border" :class="active == index ? 'active' : ''" ></view>
			</view>
		</view>
		
		<!-- 二手市场 -->
		<SecondaryMarket v-show="active === 0"/>
		
		<!-- 招聘求职 -->
		<JobHunting v-show="active === 1"/>
		
		<!-- 转让出租 -->
		<TransferRent v-show="active === 2"/>
		
		
	</view>
</template>

<script>
	import SecondaryMarket from './SecondaryMarket.vue';
	import JobHunting from './JobHunting.vue';
	import TransferRent from './TransferRent.vue';
	
	export default {
		components:{
			SecondaryMarket, JobHunting, TransferRent
		},
		data() {
			return {
				active: 0,
				navBar: [
					{value: 0, label: '二手市场', list: []},
					{value: 1, label: '招聘求职', list: []},
					{value: 2, label: '转让出租', list: []},
				]
			}
		},
		methods: {
			handelTitle(index) {
				this.active = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.active {
		background: #FE4555 !important;
		font-weight: 800 !important;
	}
	
	.surrounding{
		background-color: #F6F6F6;
		height: 100vh;
		.nav-bar{
			background: #fff;
			width: 100%;
			height: 105rpx;
			padding-left: 60rpx;
			margin-bottom: 18rpx;
			.nav-bar-item{
				margin-right: 63rpx;
				.title{
					padding: 0 9rpx;
				}
			}
			.border{
				height: 20rpx;
				margin-top: -8rpx;
				background: #fff;

				height: 25rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #2E2E2E;
				

			}
		}
	}
</style>
