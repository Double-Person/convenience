<template>
	<view class="content">
		<view class="aa">
			<view class="tophead">

			</view>
			<uni-nav-bar class="navbarindex" background-color="#FE4555">
				<view class="centersearch">
					<input type="text" value="" placeholder="站内/站外搜索" />
					<view class="searchicon">
						<image src="../../static/img/index/sousuo@2x.png" mode=""></image>
					</view>
				</view>
				<view slot="left" class="leftpic" @tap="tosingin">
					<image src="/static/img/index/qiandao@2x.png" mode=""></image>
					<text>每日签到</text>
				</view>
				<view slot="right" class="rightpic">
					<image src="/static/img/index/dingwei@2x.png" mode=""></image>
					<text>人民南路</text>
				</view>
			</uni-nav-bar>

		</view>

		<!-- 		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" autoplay="true">
			<swiper class="swiper-box">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item">
						<image src="../../static/img/index/1606371956(1).png" mode="" ></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot> -->

		<uni-swiper-dot :info="info" :current="current" field="content" mode="default">
			<swiper class="swiper-box" @change="change" autoplay="true"  circular=true>
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item" style="width: 100%;height: 100%;">
						<image :src="item.img" mode="" style="width: 100%;height: 100%;"></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>




		<view class="flcenter">
			<view class="items">
				<view class="eachitems" style="width: 20%;" v-for="(item,index) in logolist" :key="index" @tap="tootherpage(item.url)">
					<view class="itemlogo">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="itemsname">
						{{item.name}}
					</view>

				</view>


			</view>

		</view>
		<view class="natic">
			<image src="../../static/img/index/gonggao@2x.png" mode=""></image>
			<uni-notice-bar single="true" text=" 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏" background-color="white"
			 color="black"></uni-notice-bar>
		</view>
		<view class="coupons">
			<view class="title">
				<text class="left">优惠券抵扣</text>
				<text class="right">查看详情></text>

			</view>

			<scroll-view scroll-x="true" class="scrollist">
				<view class="couponitem" v-for="(item,index) in 8" :key="index">
					<view class="couponlist" style="position: relative;display: flex;justify-content: center;">
						<text style="font-size:20rpx;color:#FF6B5C;" class="quan">券</text>
						<view style="color: white;display: flex;flex-direction: column;align-items: center;position: absolute;top: 5rpx;margin: 0 auto;">
							<text style="font-size:23rpx;">
								¥<text style="font-size:65rpx;">20</text>
							</text>
							<text style="font-size:12rpx;margin-bottom: 10rpx;">(店铺红包)</text>
							<view style="color: white;font-size:17rpx;">满699元使用</view>
						</view>

					</view>





				</view>
			</scroll-view>
		</view>




		<view class="coupons">
			<view class="title">
				<text class="left">二手市场</text>
				<text class="right">查看详情></text>

			</view>

			<scroll-view scroll-x="true" class="scrollist">
				<view class="couponitem ershou" v-for="(item,index) in 8" :key="index">
					<image src="../../static/img/house.png" mode=""></image>

				</view>
			</scroll-view>
		</view>



		<view class="">
			<view class="bottomtitle">
				我爱分享
			</view>
			<view class="pubuliu">
				<waterfallsFlow :list="list">

					<view v-for="(item, index) of list" :key="index" slot="slot{{index}}">
						<view class="cnt">
							<view class="text">{{ item.text }}</view>
						</view>
					</view>
					<template v-slot:default="item">
						<view class="cnt">
							<view class="text" style="font-size: 20rpx;">{{ item.text }}</view>
						</view>
					</template>
				</waterfallsFlow>
			</view>
		</view>


	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue";
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue';
	import waterfallsFlow from "@/components/maramlee-waterfalls-flow/maramlee-waterfalls-flow.vue";
	import adTabbar from '@/components/andy-ADTabbar/andy-ADTabbar.vue';
	import adTabbarItem from '@/components/andy-ADTabbar/andy-ADTabbarItem.vue';


	export default {
		components: {
			uniNavBar,
			uniSwiperDot,
			uniNoticeBar,
			waterfallsFlow,
			adTabbar,
			adTabbarItem,


		},

		data() {
			return {
				logolist: [{
						img: require("../../static/img/index/images/chengshi@2x_01.png"),
						name: "生活维修",
						url: "",

					},
					{
						img: require("../../static/img/index/images/chengshi@2x_03.png"),
						name: "生活信息",
						url: "",
					},
					{
						img: require("../../static/img/index/images/chengshi@2x_05.png"),
						name: "社保查询",
						url: "",
					},
					{
						img: require("../../static/img/index/images/chengshi@2x_07.png"),
						name: "违章查询",
						url: "",
					},
					{
						img: require("../../static/img/index/images/chengshi@2x_14.png"),
						name: "同城商圈",
						url: "",
					},
					{
						img: require("../../static/img/index/images/chengshi@2x_15.png"),
						name: "生活影视",
						url: "/pages/lifeandtv/lifeandtv",
					},
					{
						img: require("../../static/img/index/images/chengshi@2x_13.png"),
						name: "生活圈",
						url: "/pages/lifecircle/lifecircle",
					},
					{
						img: require("../../static/img/index/images/chengshi@2x_12.png"),
						name: "城市周边",
						url: "/pages/citySurrounding/index",
					}

				],
				info: [{
						img: require("../../static/img/index/1606371956(1).png")
					}, {
						img: require("../../static/img/house.png")
					},
					{
						img: require("../../static/img/postmessage/1606289840.jpg")
					}
				],
				current: 0,
				mode: 'round',
				list: [{
						id: 1,
						image_url: require("../../static/img/index/images/1606363388(1).jpg"),

						text: "小小的猫咪，甚是呆萌，呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌",
					},
					{
						id: 2,
						image_url: require("../../static/img/index/images/1606363400(1).jpg"),


						text: "迪士尼动画之……",
					},
					{
						id: 3,
						image_url: require("../../static/img/index/images/1606363414(1).jpg"),

						text: "火箭升空瞬间，宏伟壮观啊",
					},
					{
						id: 4,
						image_url: require("../../static/img/index/images/1606363430(1).jpg"),

						text: "火箭升空瞬间，宏伟壮观啊",
					},
					{
						id: 5,
						image_url: require("../../static/img/index/images/1606363388(1).jpg"),

						text: "小小的猫咪，甚是呆萌，呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌呆萌",
					},
					{
						id: 6,
						image_url: require("../../static/img/index/images/1606363400(1).jpg"),


						text: "迪士尼动画之……",
					},
					{
						id: 7,
						image_url: require("../../static/img/index/images/1606363414(1).jpg"),

						text: "火箭升空瞬间，宏伟壮观啊",
					},
					{
						id: 8,
						image_url: require("../../static/img/index/images/1606363430(1).jpg"),

						text: "火箭升空瞬间，宏伟壮观啊",
					},


				],


			}
		},
		onLoad() {
			console.log(this.$imgBaseUrl, 222222)

		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			tootherpage(url) {
				uni.navigateTo({
					url: url

				})
			},
			//跳转签到
			tosingin() {
				uni.navigateTo({
					url: "/pages/signin/signin",
				})
			},
			onReachBottom(){
				console.log(222)
			},
			
			
			

		}
	}
</script>

<style scoped lang="scss">
	/deep/.uni-navbar__header {
		line-height: 0 !important;
	}

	.tophead {
		height: var(--status-bar-height);
		background: #FE4555;
	}

	.navbarindex {

		.centersearch {
			position: relative;

			input {
				width: 420rpx;
				height: 80rpx;
				background: rgba(0, 0, 0, .2);
				border-radius: 50rpx;
				text-indent: 78rpx;

			}

			.searchicon {
				width: 38rpx;
				height: 38rpx;

				image {
					width: 100%;
					height: 100%;
				}

				position: absolute;
				top: 20rpx;
				left: 31rpx;
			}
		}


		.leftpic {

			display: flex;
			flex-direction: column;
			font-size: 20rpx;
			color: white;
			align-items: center;


			image {
				width: 34rpx;
				height: 36rpx;

			}

			text {
				line-height: 40rpx;
			}

		}

		.rightpic {

			display: flex;
			flex-direction: column;
			font-size: 20rpx;
			color: white;
			align-items: center;


			image {
				width: 26rpx;
				height: 34rpx;

			}

			text {
				line-height: 40rpx;
			}

		}

	}

	.items {
		width: 638rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.eachitems {
			padding: 0 10rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 40rpx 0;

			.itemlogo {
				width: 100rpx;
				height: 100rpx;
				margin-bottom: 20rpx;

				image {
					width: 100%;
					height: 100%;
				}


			}

			.itemsname {
				font-size: 28rpx;

			}

		}








	}

	.natic {
		display: flex;
		align-items: center;
		padding: 30rpx 40rpx;
		border-top: 5rpx solid #F6F6F6;
		border-bottom: 5rpx solid #F6F6F6;

		image {
			width: 39rpx;
			height: 29rpx;
			margin-right: 39rpx;

		}
	}

	/deep/.uni-noticebar {
		width: 600rpx;
		margin-bottom: 0;
	}

	.coupons {
		padding: 0 40rpx;
		padding-bottom: 27rpx;
		border-bottom: 5rpx solid #F6F6F6;


		.title {
			display: flex;
			justify-content: space-between;
			padding: 38rpx 0;

			.left {
				font-size: 26rpx;
				font-weight: bold;
			}

			.right {
				font-size: 20rpx;
				color: #646464;

			}
		}

		.scrollist {
			width: 700rpx;
			white-space: nowrap;

			.couponitem {

				display: inline-block;

				.couponlist {
					width: 140rpx;
					height: 150rpx;
					background: url(../../static/img/index/yuanjiao.png);
					background-size: cover;
					margin-right: 20rpx;
				}
			}

		}

	}

	.bottomtitle {
		font-size: 26rpx;
		font-weight: bold;
		line-height: 80rpx;
		margin-left: 41rpx;

	}

	.pubuliu {
		padding: 0 55rpx;
		margin-bottom: 150rpx;
	}

	.ershou {
		width: 170rpx;
		height: 210rpx;
		padding: 20rpx;
		border: 1px solid #F6F6F6;
		margin-right: 5rpx;

		image {
			width: 100%;
			height: 100%;

		}
	}

	.swiper-item {
		image {}
	}

	.quan {
		position: absolute;
		top: 10rpx;
		left: 15rpx;
	}

	.swiper-box {
		height: 440rpx;
	}
</style>
