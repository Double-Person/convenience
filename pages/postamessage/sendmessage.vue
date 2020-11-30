<template>
	<view class="main">
		<input type="text" v-model="parmas.title" placeholder="请输入标题" class="publishtitle" />
		<textarea class="textarea" maxlength="-1" v-model="parmas.centent" placeholder="添加文字描述......" />
		<view class="addpic">
			<view class="fl jc-between fl-warp imgshow">
				<image class="upload" src="/static/img/postmessage/upload.png" mode=""  @tap="uploadFileToServe" v-if="parmas.images < 5"></image>
				<view v-for="(item,index) in parmas.images" :key="index" v-if="parmas.images">
					<image :src="$imgBaseUrl + item" mode=""></image>
				</view>
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
		upLoadFile
	 } from '@/api/api.js'

	export default {
		mixins:[mixin],
		data() {
			return {
				type: '',
				
				parmas: {
					title: '',
					centent: '',
					phone: '',
					images: []
				}
				
			};
		},
		
		onLoad(opt) {
			this.type = opt.type
			this.parmas.images = []
		},
		
		
		methods:{
			publish(){
				
				const {title, centent, images, phone} = this.parmas
				if(!title) 
					return uni.showToast({ title: '标题不能为空',icon:'none' });
				if(!centent)
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
		image{
			width: 140rpx;
			height: 140rpx;
			margin-bottom: 20rpx;
		}
		.upload{
			width: 140rpx;
			height: 140rpx;
		}
		
		
	}
</style>
