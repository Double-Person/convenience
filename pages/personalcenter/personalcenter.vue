<template>
	<view>
		<view class="top">
			<view class="topbanner">
				<view class="pagename">
					我的
				</view>
				<view class="avatar">
					<view class="pic">
						<image src="../../static/andy-ADTabbar/my-hover.png" mode=""></image>
					</view>
					<view class="nickname">
						撒大声地
					</view>
				</view>
			</view>
		</view>
		<view class="centerlist">
			<view class="eachitem" v-for="(item,index) in datalist" :key="index" @tap="topages(item.url)">
				<view class="">
					<image :src="item.img" mode=""></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="con">
			<view class="eachcon" v-for="(item,index) in conlist" :key="index" @tap="toconpages(item.url)">
				
					<image :src="item.img" mode=""></image>
					<text>{{item.title}}</text>
					
				
			</view>
		</view>
		<view class="word">
			<view>
			·立即分享·
			</view>
			
		</view>
		<view class="share">
			<view class="shareitem" v-for="(item,index) in sharelist" :key="index">
				<image :src="item.img" mode=""></image>
				<text>{{item.title}}</text>
				
			</view>
			
		</view>
		<view class="footerbottom">
			
		</view>

	</view>
</template>

<script>
	
	export default {
		components:{
		
		},
		onLoad() {
		},
		methods:{
			topages(url){
				uni.navigateTo({
					url:url
				})
			},
			toconpages(url){
				alert(1)
				uni.navigateTo({
					url:url
				})
				
			}
		},
		data() {
			return {
				datalist: [{
						img: require("../../static/img/login/renzhen.png"),
						name: "资质认证"
					},
					{
						img: require("../../static/img/login/chaxun.png"),
						name: "资质查询"
					},
					{
						img: require("../../static/img/login/fabu.png"),
						name: "我的发布"
					},
					{
						img: require("../../static/img/login/tiezi.png"),
						name: "帖子管理",
						url:"/pages/postamessage/postamessage"
					},
					{
						img: require("../../static/img/login/wujiaoxing.png"),
						name: "我的收藏"
					},
					{
						img: "",
						name: ""
					},


				],
                conlist:[
					{
						img:require("../../static/img/user/house.png"),
						title:"平台建设"
					},
					{
						img:require("../../static/img/user/hand.png"),
						title:"申请代理"
					},
					{
						img:require("../../static/img/user/qunfengyouhuiquan@2x.png"),
						title:"我的卡卷",
						url:"/pages/mycard/mycard"
					},
					{
						img:require("../../static/img/user/mn_jifen_fill@2x.png"),
						title:"我的积分"
					}
				],
			    sharelist:[
					{
						img:"../../static/img/user/pengyouquan.png",
						title:"朋友圈"
					},
					{
						img:"../../static/img/user/weixinpengyou.png",
						title:"微信朋友"
					},
					{
						img:"../../static/img/user/QQ.png",
						title:"QQ"
					},
					{
						img:"../../static/img/user/sinaweibo.png",
						title:"更多"
					}
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		.topbanner {
			height: 300rpx;
			background-image: linear-gradient(#F86D66 30%, #FD5591);

			.pagename {
				color: white;

				text-align: center;
				line-height: 140rpx;
			}

			.avatar {
				display: flex;
				align-items: center;
				margin-top: 20rpx;
				margin-left: 60rpx;

				.pic {
					width: 120rpx;
					height: 120rpx;
					border: 1rpx solid white;
					border-radius: 50%;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
					}

				}

				.nickname {
					color: white;
					padding-left: 40rpx;

				}

			}

		}
	}

	.centerlist {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		border-bottom: 20rpx solid #E0E0E0;

		.eachitem {
			display: flex;
			flex-direction: column;
			align-items: center;

			width: 30%;
			padding: 40rpx 0;

			view {
				width: 50rpx;
				height: 50rpx;
				margin-bottom: 40rpx;

				image {
					width: 100%;
					height: 100%;


				}
			}

			text {
				font-size: 30rpx;
			}
		}
	}
	
	.con{
		display: flex;
		flex-wrap: wrap;
		padding: 50rpx 0;
		.eachcon{
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 50rpx;
			image{
				width: 40rpx;
				height: 40rpx;
			}
			text{
				font-size: 30rpx;
				padding-left: 20rpx;
			}
		}
	}
	.word{
		border-top: 1rpx solid #000;
		text-align: center;
		display: flex;
		justify-content: center;
		width: 60%;
		margin: 0 auto;
		
		
		view{
		   width: 260rpx;
			margin-top: -22rpx;
			background: white;
			
			
			
		}
	}
	.share{
		display: flex;
		justify-content: space-around;
		.shareitem{
		
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 40rpx 0;
			image{
				width: 90rpx;
				height: 90rpx;
			}
			text{
				font-size: 30rpx;
			}
		}
	}

</style>
