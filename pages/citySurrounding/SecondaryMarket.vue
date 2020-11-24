<template>
	<view class="secondary-market">
		<view v-for="(item,index) in 3" :key="index" class="list">
			<view class="">
				<UserTitle phone></UserTitle>
			</view>
			<view class="fl jc-between list-item">
				<view v-for="(item,index) in 5" :key="index" class="item">
					<image class="img" src="/static/img/house.png"></image>
				</view>
			</view>
			<view class="publish-time">
				<image class="publish-img" src="/static/img/fabu.png"></image>
			发布于 2020.8.31</view>
		</view>
		
	

	</view>
</template>

<script>
	import UserTitle from "./UserTitle.vue";
	export default {
		components:{
			UserTitle
		}
	}
</script>

<style lang="scss" scoped>
	.secondary-market{
		background: #fff;
		padding: 36rpx 40rpx 0 40rpx;
		.list {
			margin-bottom: 14rpx;
			.list-item{
				flex-wrap: wrap;
				margin-top: 23rpx;
				&::after{
					content: '';
					width: 190rpx;
				}
				.item {
					width: 190rpx;
					height: 264rpx;
					box-shadow: 0 0 10rpx 10rpx #eee;
					margin-bottom: 14rpx;
					.img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}
			.publish-time{
				height: 48rpx;
				line-height: 48rpx;
				font-size: 18rpx;
				font-weight: 400;
				color: #646464;
				text-align: right;
				.publish-img{
					width: 40rpx;
					height: 40rpx;
					vertical-align: middle;
					margin-right: 15rpx;
				}
			}
		
		}
	}
</style>
