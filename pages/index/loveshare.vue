<template>
<!-- 	<view class="surrounding">
	
		<view class="fl al-center nav-bar">
			<view v-for="(item,index) in navBar" :key="index" class="nav-bar-item" @click="handelTitle(index)">
				<view class="title">{{item.label}}</view>
				<view class="border" :class="active == index ? 'active' : ''"></view>
			</view>
		</view>
		
		
		
		<view class="">
					<view class="bottomtitle">
						我爱分享
					</view>
					<view class="pubuliu">
						<waterfallsFlow :list="list">
							<template v-slot:default="item" >
								<view class="cnt">
									<view class="text over-ellipsis-2" style="font-size: 20rpx;">{{ item.text }}</view>
								</view>
							</template>
						</waterfallsFlow>
					</view>
				</view> 
		
		222222222222
		
	</view> -->
</template>

<script>
/* 	import waterfallsFlow from "@/components/maramlee-waterfalls-flow/maramlee-waterfalls-flow.vue";
	export default {
		components:{
			waterfallsFlow,
		},
		data() {
			return {
				navBar: [{
						value: 0,
						page: 1,
						finshed: false,
						label: '二手市场',
						list: []
					},
					{
						value: 1,
						page: 1,
						finshed: false,
						label: '招聘求职',
						list: []
					},
					{
						value: 2,
						page: 1,
						finshed: false,
						label: '转让出租',
						list: []
					},
				],
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
				
			};
		}
	} */
</script>

<style lang="scss" scoped>
/* 	.active {
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
	 */

</style>
