<template>
	<view class="job-hunting">
		<view v-for="(item, index) in joblist" :key="index" class="list">
			<!-- 用户头部信息 -->
			<view class="user-title">
				<UserTitle top :item="item"></UserTitle>
			</view>
			<view class="list-item">
				<view class="comment-content">
					{{item.content}}
				</view>
				<view class="fl jc-between fl-warp comment-pics" @tap="toinfo(item.id)">
					<image :src="$imgBaseUrl+data" mode="" v-for="(data, pic) in item.images" :key="pic" class="fl jc-between fl-warp"></image>
				</view>

				<view class="access">{{item.hit}}人浏览</view>

				<!-- 评论 -->
				<AddInput btn="留下信息" class="add-comment" @add="add"/>

			</view>

			<view class="null"></view>
		</view>
		
	</view>
</template>

<script>
	import UserTitle from "./UserTitle.vue";
	import AddInput from "@/components/addInput/AddInput.vue"
	import {add_job_comment} from "@/api/api.js"
	export default {
		props:["joblist"],
		components: {
			UserTitle,AddInput
		},
	
		methods: {
		
		
			add(val) {
				console.log(val)
			},
			toinfo(id){
				uni.navigateTo({
					url:"./jobhuntinginfo?id="+id
				})
				
			}
		}
	};
</script>

<style lang="scss" scoped>
	.job-hunting {
		background: #fff;
		padding: 36rpx 40rpx 0 40rpx;

		.list {
			.user-title{
				margin-top: 27rpx;
			}

			.list-item {
				margin-top: 23rpx;
				.comment-content {
					width: 599rpx;
					font-size: 20rpx;
					font-weight: 400;
					color: #2e2e2e;
					line-height: 28rpx;
					margin: 31rpx auto;
				}

				.comment-pics {
					width: 599rpx;
					margin: 0 auto;

					&::after {
						content: "";
						width: 175rpx;
					}

					image {
						width: 175rpx;
						height: 175rpx;
						margin-bottom: 31rpx;
					}
				}

				.access {
					font-size: 16rpx;
					font-weight: 400;
					color: #646464;
					width: 599rpx;
					margin: 0 auto;
				}
				.add-comment{
					width: 599rpx;
					margin: 32rpx auto 28rpx auto;
				}

				.comment-list {
					width: 595rpx; //  671px;
					padding: 0 38rpx;
					border-top: 2rpx solid #f6f6f6;
					margin-top: 48rpx;

					.comment-icon {
						font-size: 20rpx;
						font-weight: 400;
						color: #2e2e2e;
						margin: 18rpx 0 43rpx 0;

						image {
							width: 25rpx;
							height: 17rpx;
							object-fit: cover;
							margin-right: 5rpx;
						}
					}

					.user-info {
						width: 596rpx;
						font-size: 16rpx;
						font-weight: 400;
						color: #646464;
						.header-name {
							image {
								width: 42rpx;
								height: 42rpx;
								border-radius: 50%;
								vertical-align: middle;
								margin-right: 15rpx;
							}
						}


					}
					
					.content{
						font-size: 16rpx;
						color: #646464;
						margin: 15rpx 0 0 0;
						padding-bottom: 27rpx;
						border-bottom: 2rpx solid #f6f6f6;
					}
				}
			}
		
		.null{
			width: 750rpx;
			height: 14rpx;
			background: #F6F6F6;
			margin-left: -38rpx;
		}
		
		}
	}
	
</style>
