<template>
	<view class="surrounding">
		<!-- 标题栏 -->
		<view class="fl al-center nav-bar">
			<view v-for="(item,index) in navBar" :key="index" class="nav-bar-item" @click="handelTitle(index)">
				<view class="title">{{item.label}}</view>
				<view class="border" :class="active == index ? 'active' : ''"></view>
			</view>
		</view>

		<!-- 圈友吐槽 -->
		<Circlefriendroast v-show="active===0" :roastlist="navBar[active].list" />

		<!-- 非诚勿扰 -->
		<Donotdisturb v-show="active===1" :makelist="navBar[active].list"/>

		<!-- 民品分享 -->
		<Civiliangoodsshare v-show="active===2" :Mplist="navBar[active].list"/>


	</view>
</template>

<script>
	import Circlefriendroast from "./circlefriendroast.vue";
	import Donotdisturb from "./donotdisturb.vue";
	import Civiliangoodsshare from "./civiliangoodsshare.vue";
	import mixin from "@/mixin/mixin.js"
	import {
		roast,
		make,
		Mp,
		addroastlike

	} from '@/api/api.js'

	export default {
		components: {
			Circlefriendroast,
			Donotdisturb,
			Civiliangoodsshare
		},
		mixins: [mixin],
		data() {
			return {
				active: 0,
				navBar: [{
						value: 0,
						label: '圈友吐槽',
						finshed:false,
						page:1,
						list: []
					},
					{
						value: 1,
						label: '非诚勿扰',
							finshed:false,
						page:1,
						
						list: []
					},
					{
						value: 2,
						label: '民品分享',
							finshed:false,
						page:1,
						list: []
					},
				],
                roastlist: [], //吐槽列表
                makelist: [], //非诚勿扰列表
                Mplist: [], //分享列表
                limit: 10,
			}
		},
		onLoad() {
			this.getList();
		},
		methods: {
			// 子组件点赞
			Givealike(id) {
				console.log(id.id)
				let ids=id.id
				// return
				if(id.is_like==0){
					addroastlike({subject_id:ids}).then(res=>{
						console.log(res,2222)
					   	this._roast()
					})
				}else{
					console.log("已点赞")
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
						this._roast(obj)
						break;
					case 1:
						this._make(obj)

						break;
					case 2:
						this._Mp(obj)
						break;
				}
			},
			getList() {
				this.handelTitle(this.active)
			},
		
			// 圈友吐槽
				_roast(obj){
					roast(obj).then(res=>{
						this.commitDataFn(res.data)
						console.log(res.data,"执行了一次")
					})
				},
				//非诚勿扰
				_make(obj){
					make(obj).then(res=>{
					this.commitDataFn(res.data)
					console.log(res.data)
					})
				},
				//民品分享
				_Mp(obj){
					Mp(obj).then(res=>{
						this.commitDataFn(res.data)
						console.log(res.datq)
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
