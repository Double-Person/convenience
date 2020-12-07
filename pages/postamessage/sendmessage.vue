<template>
	<view class="main">
		<input type="text" v-model="parmas.title" placeholder="请输入标题" class="publishtitle" />
		<textarea class="textarea" maxlength="-1" v-model="parmas.content" placeholder="添加文字描述......" />
		<view class="addpic">
			<view class="fl fl-warp imgshow">
				
				<view v-for="(item,index) in parmas.images" :key="index" v-if="parmas.images">
					<image :src="$imgBaseUrl + item" mode=""></image>
				</view>
				<image class="upload" src="/static/img/postmessage/upload.png" mode=""  @tap="uploadFileToServe" v-if="parmas.images.length < 5"></image>
			</view>
		</view>
		
		
		<view class="phonum">
			<view class="pic">
				<image src="/static/img/postmessage/lianxiwomendianhua@2x.png" mode=""></image>
			</view>
			<input type="number" maxlength="11" v-model="parmas.phone" placeholder="输入联系方式......"/>
		</view>
		
		<view class="sendbtn">
			<button class="fabu" @tap="publish">发布</button>
			<button class="quxiao">取消</button>
		</view>
		
		
		
	</view>
</template>

<script>
	import mixin from '@/mixin/mixin.js'
	 
	 import {
	 	add_job,
		add_market,
		add_house,
		addroast,
		addmake,
		addmp,
		upLoadFile
	 } from '@/api/api.js'

	export default {
		mixins:[mixin],
		data() {
			return {
				type: '',
				myaddress:"",
				parmas: {
					title: '',
					content: '',
					phone: '',
					images: [],
					city:"成都",
				},
				
			};
		},
		
		onLoad(opt) {
			this.getaddress();
			this.type = opt.type
			this.parmas.images = []
		
		},
		mounted() {
			
			
		},
		
		
		methods:{
			// 获取城市地址
			getaddress(){
				let that=this;
				uni.getLocation({
				    type: 'wgs84',
					　geocode:true,
				    success: function (res) {
						that.parmas.city=res.address.street
						console.log(that.parmas)
				    },fail(err) {
						console.log(err)
				    }
				});
			
			},
			publish(){
				
				const {title, content, images, phone} = this.parmas
				if(!title) 
					return uni.showToast({ title: '标题不能为空',icon:'none' });
				if(!content)
					return uni.showToast({ title: '发布内容不能为空',icon:'none' })
				if(!phone)
					return uni.showToast({ title: '手机号不能为空',icon:'none' })
							
				switch(this.type) {
					
					case 'market': // 二手市场
					
					add_market(this.parmas).then(({code, msg}) => {
						this.isSuccess({code, msg})
					})
					break;
					case 'job': // 招聘求职
					add_job(this.parmas).then(({code, msg}) => {
						this.isSuccess({code, msg})
					})
					break;
					case 'rent':  // 转让出租
					add_house(this.parmas).then(({code, msg}) => {
						this.isSuccess({code, msg})
					})
					break;
					case 'roast':  // 圈友吐槽
					addroast(this.parmas).then(({code, msg}) => {
						this.isSuccess({code, msg})
					})
					break;
					case 'share':  // 名品分享
					addmp(this.parmas).then(({code, msg}) => {
						this.isSuccess({code, msg})
					})
					break;
					case 'disturb':  // 非诚勿扰
					addmake(this.parmas).then(({code, msg}) => {
						this.isSuccess({code, msg})
					})
					break;
				}
				
			},
			
			isSuccess({code, msg}) {
				if(code == 1) {
					uni.showToast({
						title: msg,
						icon: 'none'
					})
					setTimeout(() => {
						uni.navigateTo({
							url: 'postamessage'
						})
					}, 500)
				}
			},
			
			  /*
			  执行上传服务：
			  urlList：要上传的图片：数组类型
			  */
			 uploadFileToServe() {	
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						upLoadFile({path: tempFilePaths[0]}).then(res => {
							if(JSON.parse(res.data).code == 1) {
								let url = JSON.parse(res.data).data.url
								this.parmas.images.push(url)
							}
							
						})
					}
				});
				
			 
			  }	
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		padding: 45rpx 40rpx;
		.textarea{
		
			width: 100%;
			height: 171rpx;
			border-bottom: 1rpx solid #eee;
			
			
		}
		.addpic{
			margin-top: 20rpx;		
		
		}
		.phonum{
			display: flex;
			height: 90rpx;
			align-items: center;
			border-top: 5rpx solid #F6F6F6;
			.pic{
				width:32rpx;
				height: 32rpx;
				image{
					width: 100%;
					height:100%
				}
			}
			input{
				margin-left: 20rpx;
			}
			
		}
		.sendbtn{
			margin-top: 206rpx;
			.fabu{
				width:265rpx;
				height: 80rpx;
				line-height: 80rpx;
				background:#FE4555;
				color: white;
				border-radius: 60rpx;
				
			}
			.quxiao{
				width:265rpx;
				height: 80rpx;
					line-height: 80rpx;
					margin-top: 21rpx;
				background:#ACACAC;
				color: white;
				border-radius: 60rpx;
				
			}
			
		}
	}
    .publishtitle{
		border: 1px solid #ccc;
		text-indent: 0.5rem;
		margin-bottom:20rpx;
	}

	.imgshow{
		// &::after{
		// 	width: 140rpx;
		// 	height: 140rpx;
		// 	content: '';
		// }
		image{
			width: 140rpx;
			height: 140rpx;
			margin-bottom: 20rpx;
			margin-right: 34rpx;
		}
		.upload{
			width: 140rpx;
			height: 140rpx;
			margin-right: 0rpx;
		}
		
		
	}
</style>
