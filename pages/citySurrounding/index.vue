<template>
	<!-- <scroll-view :refresher-threshold="80" scroll-y="true"> -->
		<view class="surrounding">

			<!-- 标题栏 -->
			<view class="fl al-center nav-bar">
				<view v-for="(item,index) in navBar" :key="index" class="nav-bar-item" @click="handelTitle(index)">
					<view class="title">{{item.label}}</view>
					<view class="border" :class="active == index ? 'active' : ''"></view>
				</view>
			</view>

			<!-- 二手市场 -->
			<SecondaryMarket v-show="active === 0" :marketlist="navBar[active].list" />

			<!-- 招聘求职 -->
			<JobHunting v-show="active === 1" :joblist="navBar[active].list" />

			<!-- 转让出租 -->
			<TransferRent v-show="active === 2" :houselist="navBar[active].list" />



		</view>
	<!-- </scroll-view> -->
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
		mixins: [mixin],
		data() {
			return {
				active: 0,
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
				marketlist: [], //市场列表
				houselist: [], //房屋列表
				joblist: [], //工作列表
				limit: 2,


			}

		},

		onLoad() {
			this.getList()

			console.log(this.$imgBaseUrl, "城市周边")
		},
		methods: {
			getList() {
				let {
					active
				} = this;
				this.handelTitle(active)
			},
			//房屋列表
			_houseIndex(obj) {
				houseIndex(obj).then(res => {
					this.commitDataFn(res.data)
				})
			},
			//工作列表
			_job(obj) {
				job(obj).then(res => {
					this.commitDataFn(res.data)
				})
			},

			//市场列表
			_market(obj) {
				market(obj).then(res => {
					this.commitDataFn(res.data)

				})
			},

			commitDataFn(data) {
				let list = this.navBar[this.active].list;
				list.push(...data)


				if ((data.length === 0) || (data.length < this.limit)) {
					console.log(this.navBar[this.active].page, '==========', data.length)
					this.navBar[this.active].finshed = true
				} else {
					this.navBar[this.active].page += 1
				}

			},

			handelTitle(index = 0) {
				this.active = index;
				if (this.navBar[index].finshed == true) {
					uni.showToast({
						title: '暂无更多数据',
						icon: 'none'
					})
					return false
				}
				let obj = {
					page: this.navBar[index].page,
					limit: this.limit
				}
				switch (index) {
					case 0:
						this._market(obj)
						break;
					case 1:
						this._job(obj)

						break;
					case 2:
						this._houseIndex(obj)
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
