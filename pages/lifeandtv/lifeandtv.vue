<template>
	<view>
		<!-- 	<v-tabs
		 v-model="current"
		 :tabs="tabs"
		 @change="changeTab"
		 color="#2E2E2E"
		 activeColor="#000000"
		 :bold="bool"
		 height="106rpx"
		 lineHeight="20rpx"
		 lineColor="#FE4555"
		 :lineScale="num"
		 lineRadius=0
		 :fixed="bool"
		 paddingItem="0 50rpx"
		 
		></v-tabs> -->

		<view class="toptaps">
			<text>短视频</text>


		</view>


		<view class="content" v-for="(item,index) in videolist" :key="index">
			<video :src="$imgBaseUrl+item.voide_file"></video>
			<view class="bottom">
				<text class="title over-ellipsis">{{item.content}}</text>
			</view>
		</view>
		<!-- <view class="addvideo" @tap="addvideo">
			
		</view> -->

		<flixedadd :backgroundColor="backgroundColor" :selectbackgroundColor="selectbackgroundColor" :color="color"
		 :selectcolor="selectcolor" :addlistdata="addlistdata" @addlisttap="addlisttap"></flixedadd>








	</view>
</template>

<script>
	import flixedadd from "../../components/xiaosikaifa-flixedadd/xiaosikaifa-flixedadd.vue";
	import mixin from "@/mixin/mixin.js"
	import {
		getvideo
	} from '@/api/api.js'

	export default {
		components: {
			flixedadd
		},
		mixins: [mixin],
		data() {
			return {
				current: 0,
				tabs: ['短视频', '电视剧', '综艺', '动漫', '军事', '国内', '新闻'],
				bool: true,
				num: 0.8,
				backgroundColor: "#FE4555",
				selectbackgroundColor: "white",
				color: "white",
				selectcolor: "#FE4555",
				addlistdata: [{
						title: "上传视频",
						src: "../../static/img/livecircle"
					},

				],
				videolist:[],//视频列表
				page: 1,
				limit: 10,
			}
		},
		onLoad() {
			this.getList();
			this.getvideolist()
			
		},
		methods: {
			getList(){
				this.getvideolist()
			},

			// 获取视频列表
			getvideolist() {
				let obj={page:1,limit:10}
				getvideo(obj).then(res=>{
					this.videolist=res.data
					console.log(this.videolist)
				})
				
			},
			changeTab(index) {
				console.log('当前选中的项：' + index)
			},
			addvideo() {
				alert(111)
			},
			addlisttap: function(index) {
				console.log(index)
				if (index == 0) {
					uni.navigateTo({
						url: "./sendvideo"
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {


		margin-bottom: 5rpx;

		video {
			width: 100vw;
			height: 500rpx;
		}

		.bottom {
			display: flex;
			justify-content: space-between;
			padding: 0 46rpx;
			line-height: 98rpx;

			.title {
				color: #2E2E2E;
				font-size: 26rpx;
			}
		}
	}

	.toptaps {
		height: 106rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;

		text {
			border-bottom: 20rpx #FE4555 solid;
			font-size: 30rpx;
			padding: 0 20rpx;

		}
	}
</style>
