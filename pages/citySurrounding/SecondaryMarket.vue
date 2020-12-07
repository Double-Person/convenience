<template>
	<view class="secondary-market">
		<view v-for="(item,index) in marketlist" :key="index" class="list">
			<view class=""  >
				<UserTitle phone :item="item"> </UserTitle>
			</view>
			<view class="over-ellipsis-2" style="font-size:20rpx;padding: 0 76rpx;">
				{{item.content}}
				
			</view>
			<view class="fl jc-between list-item"  @tap="toinfo(item.id)">
				<view v-for="(data,pic) in item.images" :key="pic" class="item">
					<image class="img" :src="$imgBaseUrl + data"></image>
				</view>
			</view>
			<view class="publish-time">
				<image class="publish-img" src="/static/img/fabu.png"></image>
			发布于 {{item.createtime}}</view>
		</view>

	</view>
</template>

<script>
	import UserTitle from "./UserTitle.vue";

	
	
	export default {
		props:["marketlist"],
		components:{
			UserTitle,
			
		},
				
		methods:{
			toinfo(id){
				uni.navigateTo({
					url:"./smarketinfo?id="+id
				})
				
			}
			
			
		
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
					width: 175rpx;
					height: 175rpx;
					
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
