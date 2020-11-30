<template>
	<view class="surrounding">
		<!-- 标题栏 -->
		<view class="fl al-center nav-bar">
			<view v-for="(item,index) in navBar" :key="index" class="nav-bar-item" @click="handelTitle(index)">
				<view class="title">{{item.label}}</view>
				<view class="border" :class="active == index ? 'active' : ''"></view>
			</view>
		</view>
		<view class="content" v-for="(item,index) in 3" :key="index" v-show="active===0">
			<view class="top flspacebet">
				<view class="topleft ">
					<view class="topleftpic">
						<image src="../../static/img/livecircle/1606275492(1).png" mode=""></image>
					</view>
					<view class="topleftname flcolcenter">
						<text style="font-size: 26rpx;font-weight: bold;">Id名字{{index}}</text>
						<text style="color:white;background:#FE4555;border-radius: 20rpx;font-size: 20rpx;padding: 8rpx 15rpx;width: 50rpx;">置顶</text>
					</view>
				</view>
				<view class="topright flcolcenter2">
					<view class="toprightpic">
						<image src="../../static/img/livecircle/duomeitiicon-@2x.png" mode=""></image>

					</view>
					<text style="color:#646464;font-size: 20rpx;">赞一下</text>

				</view>

			</view>
			<view class="center">
				<view class="centerword over-ellipsis-3">
					大奖赛点击哦啊借调时间段撒娇辽阔的吉安市劳动局哦我按实际do我氨基酸的空间马上来看得见哦我按实际大山里的喀什 撒旦教爱上精雕机动我按实际do我按键搜ID骄傲圣诞节阿斯利康加到框垃圾斗is阿奇偶ID骄傲ID记录卡撒娇

				</view>
				<view class="centerpic">
					<view class="">
						<image src="../../static/img/livecircle/1606276706(1).jpg" mode=""></image>

					</view>
					<view class="">
						<image src="../../static/img/livecircle/1606276706(1).jpg" mode=""></image>

					</view>
					<view class="">
						<image src="../../static/img/livecircle/1606276706(1).jpg" mode=""></image>

					</view>


				</view>
				<view class="bottom">
					<view class="bgbottom">
						<text class="address">广东 深圳 </text>
						<text class="givelike">5人点赞</text>
						<text class="browse">326人浏览</text>

					</view>


				</view>

			</view>

		</view>
		<view class="" v-show="active===1">
			11111
			
		</view>
		<view class="" v-show="active===2">
			2222222
			
		</view>
	<!-- 	<Footer/> -->
	</view>
</template>

<script>
	/* import Footer from "../../components/footer/footer.vue" */
	export default {
		components: {
			/* Footer */

		},
		data() {
			return {
				active: 0,
				navBar: [{
						value: 0,
						label: '圈友吐槽',
						list: []
					},
					{
						value: 1,
						label: '非诚勿扰',
						list: []
					},
					{
						value: 2,
						label: '民品分享',
						list: []
					},
				],
			
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

	.surrounding {

		background-color: #F6F6F6;
		height: 100vh;

		.nav-bar {
			background: #fff;
			width: 100%;
			height: 105rpx;
			padding-left: 60rpx;
			margin-bottom: 18rpx;

			.nav-bar-item {
				margin-right: 63rpx;

				.title {
					padding: 0 9rpx;


				}
			}

			.border {
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


	.content {
		background: white;
		padding: 40rpx 0 20rpx 0;
		margin-bottom:8rpx;

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

			.centerpic {
				display: flex;
				justify-content: space-between;
				margin: 35rpx 0;

				view {
					width: 30%;
					height: 175rpx;
					display: flex;
					border-radius: 20rpx;
					overflow: hidden;
					

					image {
						width: 100%;
						height: 100%;
					}
				}

			}

			.bottom {
				font-size:16rpx;
				color:#646464;
				.bgbottom {
					background: url(../../static/img/livecircle/dingwei%20%204@2x.png) no-repeat;
					background-size: cover;
					width: 514rpx;
					height: 31rpx;
					line-height: 31rpx;
					
					position: relative;
					.address{
						position: absolute;
						left: 30rpx;
						bottom: 0;
					}
					.givelike{
						position: absolute;
						right: 40rpx;
						bottom: 0;
					}
					.browse{
						position: absolute;
						right: -120rpx;
						bottom: 0;
					}

				}
			}

		}
	}
</style>
