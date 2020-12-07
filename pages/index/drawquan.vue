<template>
	<view class="main">
		<view class="tomycard">
			<button type="default">我的卡券</button>
		</view>
		
		<view class="title">
			可领卡券
		</view>
		<!-- <view :class="this.flag == true ? 'bgr' : 'bgb'" class="box">
			
		</view> -->
		<view v-for="(item,index) in dataList" :key="index" :class="item.itemclass==1 ? 'bgpink eachitem1' : item.itemclass==2 ? 'bgblue eachitem2' : item.itemclass==3 ? 'bgperple eachitem3' : 'bgyellow eachitem4' ">
			<view class="" v-show="item.itemclass==1" @tap="toaaa">
				<view class="fl jc-between top">
					<text>{{item.price}}元维修优惠券</text>
					<text>{{item.integration}}积分</text>
				</view>
				<view class="fl jc-between bottom">
					<text>大财主头衔才可用</text>
					<text style="font-size:30rpx;">可领取</text>	
				</view>
			</view>
			
			<view class="" v-show="item.itemclass==2">
				<view class="fl jc-between top">
					<text>微信分享{{item.price}}人</text>
					<text>10元</text>
				</view>
				<view class="fl jc-between bottom">
					<text>满80可用</text>
					<text style="font-size:30rpx;">可领取</text>	
				</view>
			</view>
			
			<view class="" v-show="item.itemclass==3">
				<view class="fl jc-between top">
					<text>{{item.price}}积分</text>
					<text>置顶1天</text>
				</view>
				<view class="fl jc-between bottom">
					<text></text>
					<text style="font-size:30rpx;">可领取</text>	
				</view>
			</view>
			
			<view class="" v-show="item.itemclass==4">
				<view class="fl jc-between top">
					<text>{{item.price}}元抵扣券</text>
					<text>30积分</text>
				</view>
				<view class="fl jc-between bottom" style="color: #9C9C9C;">
					<text>大财主可兑换</text>
					<text style="font-size:30rpx;">可领取</text>	
				</view>
			</view>
		</view>
		<view class="title">
			不可领卡券
		</view>
		<view class="notdatalist" v-for="(item,index) in notdatalist" :key="'no'+index" :style="{background:'url(' + item.url+ ')',backgroundSize: 'cover'}">
			<view class="" v-show="item.itemclass==9">
				<view class="fl jc-between top">
					<text>微信分享{{item.price}}人</text>
					<text>{{item.integration}}元</text>
				</view>
				<view class="fl jc-between bottom">
					<text>满400可用</text>
					<text style="font-size:30rpx;">不可领取</text>	
				</view>
			</view>
			<view class="" v-show="item.itemclass==8">
				<view class="fl jc-between top">
					<text>{{item.price}}元维修优惠券</text>
					<text>{{item.integration}}积分</text>
				</view>
				<view class="fl jc-between bottom">
					<text>大财主可用</text>
					<text style="font-size:30rpx;">不可领取</text>	
				</view>
			</view>
			<view class="" v-show="item.itemclass==7">
				<view class="fl jc-between top">
					<text>{{item.price}}元抵扣券</text>
					<text>{{item.integration}}积分</text>
				</view>
				<view class="fl jc-between bottom">
					<text>大财主可用</text>
					<text style="font-size:30rpx;">不可领取</text>	
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				dataList: [{
					
						price: 10,
						integration: 30,
						itemclass: 1,
					},
					{
						
							price: 20,
							integration: 30,
							itemclass: 1,
						},
					{
						
						price: 3,
						integration: 50,
						itemclass: 2,
					},
					{
						
						price: 4,
						integration: 50,
						itemclass: 2,
					},
					{
						
						price: 5,
						integration: 50,
						itemclass: 2,
					},
					{
					
						price: 50,
						integration: 50,
						itemclass: 3,
					},
					{
					
						price: 5,
						integration: 50,
						itemclass: 4,
					},
					{
					
						price: 8,
						integration: 50,
						itemclass: 4,
					},
				
				
				
				],
				notdatalist: [{
					url: require("../../static/img/mycard/cccard.png"),
					price: 10,
					integration: 30,
					itemclass: 9,
					
				}, {
					url: require("../../static/img/mycard/cccard.png"),
					price: 30,
					integration: 80,
					itemclass: 8,
					
				}, {
					url: require("../../static/img/mycard/cccard.png"),
					price: 10,
					integration: 80,
					itemclass: 7,
				
				}]
				
			}
		},
		methods:{
			toaaa(){
				
				uni.navigateTo({
					url:"../mycard/CardDraw"
				})
			}
		}
	}
</script>

<style scoped  lang="scss">
	.main{
		padding: 0 83rpx;
		.title{
			font-size: 30rpx;
			font-weight: bold;
			text-align: center;
			line-height: 100rpx;
			margin-top: 30rpx;
		}	
		.notdatalist{
			width:505rpx;
			height: 163rpx;
			background-size: cover;
			background-repeat: no-repeat;
			margin-bottom: 40rpx;
			position: relative;
			padding: 0 40rpx;
			.top{
				position: absolute;
				top: 50%;
				height: 40rpx;
				line-height: 40rpx;
				margin-top: -20rpx;
				width:505rpx;
				font-size:40rpx;
				font-weight: bold;
			}
			.bottom{
				position: absolute;
				bottom: 0;
				height: 40rpx;
				line-height: 40rpx;
				width:505rpx;
				color: white;
				font-size:18rpx;
			}
			
			
		}
		.tomycard{
			display: flex;
		   position: relative;
			
			button{
				
				width: 160rpx;
				padding: 0;
				font-size: 28rpx;
				position: absolute;
				right: 0;
			    
			}
		}
	}
	.bgpink{
		background: url("../../static/img/mycard/pinkcard.png");
	}
	.bgblue{
		background: url("../../static/img/mycard/bluecard.png");
	}
	.bgperple{
		background: url("../../static/img/mycard/perporcard.png");
		
	}
	.bgyellow{
		background: url("../../static/img/mycard/yellowcard.png");
		
	}
	.bggird{
		background: url("../../static/img/mycard/cccard.png");
	}
	.eachitem1{
		width:505rpx;
		height: 163rpx;
		background-size: cover;
		background-repeat: no-repeat;
		margin-bottom: 40rpx;
		position: relative;
		padding: 0 40rpx;
		.top{
			font-size: 40rpx;
			font-weight: bold;
			position: absolute;
			height:40rpx;
			line-height: 40rpx;
			top: 50%;
			margin-top:-20rpx;
			width: 505rpx;
			
		}
		.bottom{
			font-size: 18rpx;
			color: white;
			position: absolute;
			height:40rpx;
			line-height: 40rpx;
			bottom: 0;
			width: 505rpx;
		}
	}
	.eachitem2{
		width:445rpx;
		height: 163rpx;
		background-size: cover;
		background-repeat: no-repeat;
		margin-bottom: 40rpx;
		position: relative;
		padding: 0 40rpx 0 100rpx;
		.top{
			font-size: 40rpx;
			font-weight: bold;
			position: absolute;
			height:40rpx;
			line-height: 40rpx;
			top: 50%;
			margin-top:-20rpx;
			width: 445rpx;
			
		}
		.bottom{
			font-size: 18rpx;
			color: white;
			position: absolute;
			height:40rpx;
			line-height: 40rpx;
			bottom: 0;
			width: 445rpx;
		}
	}
	
	.eachitem3{
		width:350rpx;
		height: 163rpx;
		background-size: cover;
		background-repeat: no-repeat;
		margin-bottom: 40rpx;
		position: relative;
		padding: 0 40rpx 0 195rpx;
		.top{
			font-size: 40rpx;
			font-weight: bold;
			position: absolute;
			height:40rpx;
			line-height: 40rpx;
			top: 50%;
			margin-top:-20rpx;
			width: 350rpx;
			
		}
		.bottom{
			font-size: 18rpx;
			color: white;
			position: absolute;
			height:40rpx;
			line-height: 40rpx;
			bottom: 0;
			width: 350rpx;
		}
	}
	
	.eachitem4{
		width:402rpx;
		height: 163rpx;
		background-size: cover;
		background-repeat: no-repeat;
		margin-bottom: 40rpx;
		position: relative;
		padding: 0 40rpx 0 143rpx;
		.top{
			font-size: 40rpx;
			font-weight: bold;
			position: absolute;
			height:40rpx;
			line-height: 40rpx;
			top: 50%;
			margin-top:-20rpx;
			width: 402rpx;
			
		}
		.bottom{
			color:red;
			font-size: 18rpx;
			color: white;
			position: absolute;
			height:40rpx;
			line-height: 40rpx;
			bottom: 0;
			width: 402rpx;
		}
	}


</style>