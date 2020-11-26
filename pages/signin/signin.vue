<template>
	<view>
		<view class="top">
			<button>今日签到</button>
		</view>


		<view class="content">
			<view class="title">
				<text>累计积分232分</text>
			</view>
			<view class="main">
				<view class="maintop" style="display: flex;flex-direction: column;align-items: center;">
				     <view class="singinpic">
				     	
				     </view>
					<uni-steps :options="[{title: '长工',integral:'20分'}, {title: '穷人',integral:'50分'}, {title: '富人',integral:'100分'}, {title: '小财主',integral:'200分'}, {title: '大财主',integral:'300分'}]" :active="2"
					 active-color="white" ></uni-steps>

				</view>
				<Calendar></Calendar>
			</view>
			
			<view class="bottomcard">
				<text class="word">未达到大财主头衔,无法兑换卡卷</text>
				<text> > </text>
				
			</view>



		</view>
	</view>

</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	 import QianDao from "@/components/qian-dao/qian-dao.vue";
	 import Calendar from "@/components/calendar/Calendar.vue"
	export default {
		data() {
			return {
			};
		},
		components: {
			uniSteps,
			 QianDao,
			 Calendar
		},
		methods:{
		
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		.maintop{
		
		
			
		}
		
	}
	.top {
		height: 264rpx;
		background-image: linear-gradient(#F86D66, #F96770);
		display: flex;
		align-items: center;

		button {
			width: 330rpx;
			height: 120rpx;
			line-height: 120rpx;
			color: #FE4555;
			font-size: 40rpx;
			font-weight: bold;
			border-radius: 200rpx;
		}
	}

	.content {
		height: 100vh;
		background-image: linear-gradient(#F96770, #FD5591);
		padding: 0 83rpx;

		.title {
			font-size: 30rpx;
			color: white;
			font-weight: bold;
			border-top: 1px solid white;
			height: 40rpx;
			position: relative;
			display: flex;
			justify-content: center;

			text {
				position: absolute;
				top: -16rpx;
				background: #F96970;
				padding: 0 20rpx;

			}
		}
	}
	.singinpic{
		
		width: 535rpx;
		margin-left: 15rpx;
		margin-bottom: 16rpx;
		
		height: 59rpx;
		background: url(../../static/img/signin/nanren%20@2x.png);
		background-size: cover;
	}
	.bottomcard{
		background: white;
		margin-top:45rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding:0 37rpx;
		border-radius: 20rpx;
		.word{
			font-size:26rpx;
			color:#929292;
		}
	}
</style>
