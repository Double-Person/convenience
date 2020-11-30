<template>
	<view>
		<view class="main">
			<view class="title">
				<text>{{titlename}}</text>
				<button @tap="setthetop">设置置顶</button>

			</view>
			
			<view class="coupons">
				<scroll-view scroll-x="true" class="scrollist">
					<view class="couponitem ershou" v-for="(item,index) in pic" :key="index">
						<image :src="$imgBaseUrl+item" mode=""></image>
					</view>
				</scroll-view>
			</view>
			
			<view class="concent">
				<view class="article">
				{{this.contents}}
				</view>

			</view>
		</view>
		<view class="comment-list" >
			<view class="comment-icon">
				<image src="/static/img/comment.png" mode=""></image>评论
			</view>
			<view v-for="item in comments" :key="item.id">
				<view class="fl jc-between al-center user-info">
					<view class="header-name">
						<image :src="item.user.avatar" mode=""></image>{{item.user.nickname}}
					</view>
				
				<!-- 	<view class="publish-time">{{new Date(item.createtime)}}</view> -->
					<view class="publish-time">{{new Date(item.createtime).getFullYear() + '-' + (new Date(item.createtime).getMonth() + 1) + '-' + new Date(item.createtime).getDate() + ' ' + new Date(item.createtime).getHours() + ':' + new Date(item.createtime).getMinutes() + ':' + new Date(item.createtime).getSeconds()}}</view>
				</view>
									
				<view class="content">{{item.content}}</view>
				
			</view>
			
			
		</view>
		<wyb-popup ref="popup" type="center" height="600" width="500" radius="6" :showCloseIcon="true">
			<view class="popup-content settopprop">
				<radio-group class="radio-group radioiinput">
					<label class="radio">
						<text>置顶 3元/天</text>
						<radio value="three" checked="" />
					</label>
					<label class="radio">
						<text>置顶 80元/月</text>
						<radio value="eighty" checked="" />
					</label>
				</radio-group>



				<button class="surebtn">确认支付</button>

			</view>
		</wyb-popup>

		<wyb-popup ref="privacypopup" type="center" height="800" width="500" radius="6" :showCloseIcon="true" style="position: relative;" :scrollY="true">
			<view class="popup-content ">
				<view class="privacytitle">
					隐私协议文字标题

				</view>
				<view class="privacycontent">

					文字内容文字内容文字内容文字内容文字内容文字文字内容
					文字内容文字内容文字内容文字内容文字内容文字文字内文
					字内容文字文字内容文字内容文字内容内容文字内容文字文
					字内容文字内容文字内容文字内容文字内容文字文字内容文
					字内容文字文字内容文字内容文字内容内容文字内
					文字内容文字内容文字内容文字内容文字内容文字文字内容
					文字内容文字文字内容文字内容文字内容内容文字内容文字
					文字内容文字内容文字内容文字内容文字内容文字文字内文
					字内容文字文字内容


				</view>
				<view class="privacybtn">
					<button class="no">不同意</button>
					<button class="yes" @tap=agree>同意</button>

				</view>



			</view>
		</wyb-popup>


		<view class="sendmessage">
			<input type="text" v-model="commontconent" placeholder="说些什么吧" @tap="showprivacy"/>
			<button class="sendcommont" @tap="sendcommonts">发送</button>

		</view>
		<view class="" style="height: 200rpx;">
			
		</view>
		

	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue';
	import {
		job_detail,//工作详情
		add_job_comment,//招聘工作评论
	} from '@/api/api.js'
	export default {
		components: {
			wybPopup
		},
		data() {
			return {
				pic:[],//图片数组
				contents:"",//产品描述
				titlename:"",//标题,
				comments:[],//评论,
				sendcommontid:"",//招聘id
				commontconent:"",//评论内容
				
				

			};
		},
		onLoad(id) {
			this.sendcommontid=id.id;
			console.log(this.sendcommontid);
			job_detail(id).then(res => {
				console.log(res)
				this.pic=res.data.images;
				this.contents=res.data.content;
				this.titlename=res.data.title;
				this.comments=res.data.comment;
			})
		},
	
		methods: {
			setthetop() {
				this.$refs.popup.show()
			},
			showprivacy() {
				this.$refs.privacypopup.show()
			},
			agree(){
				this.$refs.privacypopup.close()
			},
			sendcommonts(){
				console.log(this.sendcommontid,this.commontconent)	
				add_job_comment({job_id:this.sendcommontid,content:this.commontconent}).then(res=>{
					console.log(res)
				})			
			}
		}
	}
</script>

<style lang="scss" scoped>
	.coupons {
		border-bottom: 5rpx solid #F6F6F6;
		.scrollist {
			width: 700rpx;
			white-space: nowrap;
			.couponitem {
				display: inline-block;
				margin-right: 40rpx;
				border-radius: 30rpx;		
				overflow: hidden;
			
			}
	
		}
	
	}

	.main {
		padding: 0 83rpx;

		.title {
			display: flex;
			align-items: center;
			height: 135rpx;

			text {
				font-size: 30rpx;
				font-weight: bold;
			}

			button {
				width: 150rpx;
				height: 40rpx;
				font-size: 18rpx;
				padding: 0;
				line-height: 40rpx;
				background: #A9A9A9;
				color: white;
				margin-left: 20rpx;
			}
		}

		.concent {
			.article {
				font-size: 18rpx;
				padding: 20rpx;
			}
		}
	}

	.sendmessage {
		background: #EAEAEA;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		input {
			width: 90vw;
			height: 70rpx;
			background: white;
			border-radius: 30rpx;
			text-indent: 30rpx;
		}
	}

	.surebtn {
		width: 200rpx;
		height: 70rpx;
		background: #FE4555;
		line-height: 70rpx;
		color: white;
		font-weight: bold;
		padding: 0;
		font-size: 30rpx;
		margin-top: 125rpx;
	}

	.radioiinput {
		display: flex;
		flex-direction: column;

		.radio {
			margin-top: 96rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

		}

	}

	.settopprop {
		padding: 0 56rpx;
	}

	.popup-content {
		padding: 55rpx;

		.privacytitle {
			font-size: 40rpx;
			font-weight: bold;
			text-align: center;
		}

		.privacycontent {
			font-size: 16rpx;
		}

		.privacybtn {
			display: flex;
			justify-content: space-between;
			position: absolute;

			bottom: 62rpx;


			button {
				width: 180rpx;
				height: 70rpx;
				line-height: 70rpx;
			}

			.no {
				background: white;
				border: 1px solid #939393;
				color: #8B8B8B;

			}

			.yes {
				background: #FE4555;
				color: white;
				margin-left: 20rpx;

			}
		}

	}
	.comment-list {
		width: 595rpx; //  671px;
		padding: 0 38rpx;
		border-top: 2rpx solid #f6f6f6;
		margin-top: 48rpx;
	
		.comment-icon {
			font-size: 20rpx;
			font-weight: 400;
			color: #2e2e2e;
			margin: 18rpx 0 43rpx 0;
	
			image {
				width: 25rpx;
				height: 17rpx;
				object-fit: cover;
				margin-right: 5rpx;
			}
		}
	
		.user-info {
			width: 596rpx;
			font-size: 16rpx;
			font-weight: 400;
			color: #646464;
			.header-name {
				image {
					width: 42rpx;
					height: 42rpx;
					border-radius: 50%;
					vertical-align: middle;
					margin-right: 15rpx;
				}
			}
	
	
		}
		
		.content{
			font-size: 16rpx;
			color: #646464;
			margin: 15rpx 0 0 0;
			padding-bottom: 27rpx;
			border-bottom: 2rpx solid #f6f6f6;
		}
	}
	.sendcommont{
		width: 140rpx;
		font-size: 30rpx;
		padding: 0;
		margin-left: 30rpx;
		background-color:#F86D66;
		color: white;
	}
	
</style>
