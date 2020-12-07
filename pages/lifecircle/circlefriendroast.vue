<template>
	<view>
		<view class="content" v-for="(item,index) in roastlist" :key="index">
			<view class="top flspacebet">
				<view class="topleft ">
					<view class="topleftpic">
						<image :src="item.user.avatar" mode=""></image>
					</view>
					<view class="topleftname flcolcenter">
						<text style="font-size: 26rpx;font-weight: bold;">{{item.user.nickname}}</text>
						<text style="color:white;background:#FE4555;border-radius: 20rpx;font-size: 20rpx;padding: 8rpx 15rpx;width: 50rpx;"
						 v-show="item.is_top==1">置顶</text>
					</view>
				</view>
				<!-- <view class="topright flcolcenter2">
					<view class="toprightpic">
						
						<image :src="item.is_like==0 ? '/static/img/livecircle/duomeitiicon-@2x.png' : '/static/img/livecircle/duomeitiicon.png'" mode=""  @click=" Givealike(item)" ></image>
					</view>
					<text style="color:#646464;font-size: 20rpx;" :key="index">{{item.is_like==0 ? "赞一下" : "已点赞"}}</text>
				</view> -->
			</view>
			<view class="center" @tap="topageinfo(item.id)">
				<view class="centerword over-ellipsis-3">
					{{item.content}}
					
				</view>
				<view class="centerpic coupons">
					<scroll-view scroll-x="true" class="scrollist">
						<view class="couponitem" v-for="(img,num) in item.images" :key="num">
							<image :src="$imgBaseUrl+img" mode=""></image>
						</view>
					</scroll-view>
				</view>
				<view class="bottom">
					<view class="bgbottom">
						<image src="@/static/img/livecircle/dingwei--4@2x_02.png" mode=""></image>
						<text class="address">{{item.city ? item.city : "获取失败"}}</text>
						<!-- <text class="givelike">{{item.like}}人点赞</text>
						<text class="browse">{{item.hit}}人浏览</text> -->
					</view>
				</view>

			</view>

		</view>

	</view>
</template>

<script>
	import mixin from "@/mixin/mixin.js";
	import {
		throttle
	} from '@/utils/utils';
	const testThrottle = throttle()
	import {
		addroastlike,
	} from '@/api/api.js'
	export default {
		props: ["roastlist"],
		mixins: [mixin],
		data() {
			return {
				cccimg:"../../static/img/livecircle/duomeitiicon-@2x.png",
				redimg:"../../static/img/livecircle/duomeitiicon.png",
				
			};
		},
		mounted() {
		

		},
		methods: {
			Hasalike(){
				uni.showToast({
					title:"已点赞,请勿重复点赞",
					icon:"none"
				})				
			},
			
			// 进入详情页
			topageinfo(id){
				uni.navigateTo({
					url: "./circleroastinfo?id=" + id
				})
				
			}





		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background: white;
		padding: 40rpx 0 20rpx 0;
		margin-bottom: 8rpx;

		.top {
			padding: 0 39rpx;

			.topleft {
				display: flex;

				.topleftpic {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
					}

				}

				.topleftname {
					margin-left: 20rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;



				}
			}

			.topright {

				.toprightpic {
					width: 43rpx;
					height: 38rpx;

					image {
						width: 100%;
						height: 100%;
					}

				}

			}

		}

		.center {
			display: flex;
			flex-direction: column;
			padding: 0 76rpx;

			.centerword {
				font-size: 20rpx;
				color: #2E2E2E;

				margin: 35rpx 0;

			}

			.coupons {
				border-bottom: 5rpx solid #F6F6F6;

				.scrollist {
					width: 700rpx;
					white-space: nowrap;

					.couponitem {
						display: inline-block;
						margin-right: 30rpx;
						border-radius: 30rpx;
						overflow: hidden;

						image {
							width: 200rpx;
							height: 200rpx;
						}

					}

				}

			}

			.bottom {
				font-size: 16rpx;
				color: #646464;

				.bgbottom {
				/* 	background: url(../../static/img/livecircle/dingwei--4@2x_02.png) no-repeat;
					background-size: cover; */
					image{
						width: 30rpx;
						height: 30rpx;
					}
				    text{
						padding-left: 10rpx;
					}
				
					width: 514rpx;
					height: 31rpx;
					line-height: 31rpx;

					position: relative;

					.address {
						position: absolute;
						left: 30rpx;
						bottom: 0;
					}

					.givelike {
						position: absolute;
						right: 40rpx;
						bottom: 0;
					}

					.browse {
						position: absolute;
						right: -120rpx;
						bottom: 0;
					}

				}
			}

		}
	}
</style>
