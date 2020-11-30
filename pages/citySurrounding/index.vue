<template>
	<view class="surrounding">
	<scroll-view scroll-y="true" >
		<!-- 标题栏 -->
		<view class="fl al-center nav-bar">
			<view v-for="(item,index) in navBar" :key="index" class="nav-bar-item" @click="handelTitle(index)">
				<view class="title">{{item.label}}</view>
				<view class="border" :class="active == index ? 'active' : ''"></view>
			</view>
		</view>
		
		<!-- 二手市场 -->
		<SecondaryMarket v-show="active === 0" :marketlist="marketlist" />
		
		<!-- 招聘求职 -->
		<JobHunting v-show="active === 1" :joblist="joblist" />
		
		<!-- 转让出租 -->
		<TransferRent v-show="active === 2" :houselist="houselist" />
		
		
	</scroll-view>
	</view>
</template>

<script>
	import SecondaryMarket from './SecondaryMarket.vue';
	import JobHunting from './JobHunting.vue';
	import TransferRent from './TransferRent.vue';
	import mixin from "@/mixin/mixin.js"
	import {
		houseIndex,
		house_detail,

		job,		
		job_detail,

		market,
		market_detail,
	} from '@/api/api.js'

	export default {
		components: {
			SecondaryMarket,
			JobHunting,
			TransferRent
		},
		mixins:[mixin],
		data() {
			return {
				active: 0,
				navBar: [{
						value: 0,
						label: '二手市场',
						list: []
					},
					{
						value: 1,
						label: '招聘求职',
						list: []
					},
					{
						value: 2,
						label: '转让出租',
						list: []
					},
				],
				marketlist: [], //市场列表
				houselist: [], //房屋列表
				joblist: [], //工作列表
				where: {
					page: 1,
					limit: 2,
					
				},
				finshed: false,
			}

		},
		
		onLoad() {
			this.getList()
			
			console.log(this.$imgBaseUrl, "城市周边")
		},
		methods: {
			getList(){
				/* if(this.finshed) return false; */
				market(this.where).then(res => {
					this.marketlist = res.data;
					/* this.marketlist.push(res.data); */
					/* if(this.marketlist < this.where.limit) {
						this.finshed = true
					} */
					this.where.page+=1;
					
				
					console.log(this.where.page)
				})
					
				
				
				
			},
			//房屋列表
			_houseIndex() {
				houseIndex(this.where).then(res => {
					this.houselist = res.data
					
				})
			},
			//工作列表
			_job() {
				job(this.where).then(res => {
					this.joblist = res.data
				})
			},
		
			//市场列表
		/* 	_market() {
				market(this.where).then(res => {
					console.log(res)
					this.marketlist = res.data
				})
			}, */

			handelTitle(index) {
				this.active = index
				switch (index) {
					case 0:
						this._market()
						break;
					case 1:
					this._job()
						
						break;
					case 2:
						this._houseIndex()
						break;




				}
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
</style>
