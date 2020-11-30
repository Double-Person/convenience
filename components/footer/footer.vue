<template>
	<view>
		<view class="footer">
			<view class="eachitem" v-for="(item,index) in footerlist" :key="index" @click="toorrerpages(item.url,index)">
				<image :src="item.img2" v-if="index==current"></image>
				<image :src="item.img" v-if="index!=current"></image>
				<text>{{item.title}}</text>
			</view>
			<view class="centerlogo">
				<image src="../../static/img/index/add.png" mode="" @click="rightrole"></image>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				footerlist: [{
						img: require("../../static/img/index/indexicon2.png"),
						img2: require("../../static/img/index/indexicon.png"),
						title: "首页",
						url: "/pages/index/index"
					},
					{
						img: require("../../static/img/index/zixun.png"),
						img2: require("../../static/img/index/zixun2.png"),
						title: "咨询",
						url: "/pages/citySurrounding/index"
					},
					{
						img: "",
						title: "",
						url: ""
					},

					{
						img: require("../../static/img/index/message.png"),
						img2: require("../../static/img/index/message2.png"),
						title: "信息",
						url: "/pages/lifecircle/lifecircle"
					},
					{
						img: require("../../static/img/index/my.png"),
						img2: require("../../static/img/index/my2.png"),
						title: "我的",
						url: "/pages/personalcenter/personalcenter"
					}
				]

			};
		},
		methods: {
			toorrerpages(url, index) {
				this.current = index;
			
			/* 	uni.navigateTo({
					url:url
				}) */
				console.log(this.current,index)
				uni.navigateTo({
					url:url
				})
				
				/* let routes = getCurrentPages();
				let urls = "/" + routes[routes.length - 1].route;
				console.log(urls,url)
				if (urls == url) {
					return
				} else {
					uni.navigateTo({
						url: urls

					})
				} */
				

			},
			rightrole() {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		position: fixed;
		bottom: 0;
		z-index: 99;
		height: 118rpx;
		background: white;
		width: 100vw;
		display: flex;
		justify-content: space-between;

		.eachitem {
			display: flex;
			flex-direction: column;
			align-items: center;
			border: 1px solid white;
			justify-content: space-around;

			image {
				width: 50rpx;
				height: 50rpx;
			}

			text {
				color: #9A9A9A;
				font-size: 30rpx;
			}
		}
	}

	.spacielclass {
		width: 100rpx;
		height: 100rpx;
	}

	.centerlogo {
		border: 1rpx solid red;
		/* transform:rotate(45deg); */
		position: absolute;
		left: 50%;
		margin-left: -50rpx;
		top: 50%;
		margin-top: -50rpx;

		image {
			width: 100rpx;
			height: 100rpx;
		}
	}

	.right {
		width: 100rpx;
		height: 100rpx;
		transform: rotate(45deg);
		transition: all ease 0.5s;

	}

	.rote {
		transform: rotate(0deg);

	}
</style>
