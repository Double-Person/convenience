<template>
	<view class="main">
		<input type="text" v-model="title" placeholder="请输入标题" class="publishtitle" placeholder-style="text-align:center"/>
		<textarea class="textarea" maxlength="-1" v-model="content" placeholder="添加文字描述......" placeholder-style="font-size:28rpx"/>
		<view class="addpic">
			<view class="imgshow" v-if="videourl !=''">
				<video class="upload" :src="$imgBaseUrl+videourl" mode=""  @tap="uploadFileToServe" style="width: 500rpx;height: 500rpx;"></video>
			</view>
			<view class="imgshow" v-else >
				<image class="upload" src="../../static/img/livecircle/videosend.png" mode=""  @tap="uploadFileToServe"></image>
			</view>
			
		</view>
		
		
	<!-- 	<view class="phonum">
			<view class="pic">
				<image src="/static/img/postmessage/lianxiwomendianhua@2x.png" mode=""></image>
			</view>
			<input type="number" maxlength="11" v-model="parmas.phone" placeholder="输入联系方式......"/>
		</view> -->
		
		<view class="sendbtn">
			<button class="fabu" @tap="publish">发布</button>
			<button class="quxiao">取消</button>
		</view>
		
		
		
	</view>
</template>

<script>
	import mixin from '@/mixin/mixin.js'
	 
	 import {
		upLoadFile,
		addvideo
	 } from '@/api/api.js'

	export default {
		mixins:[mixin],
		data() {
			return {
				type: '',
				title:'',
				content:'',
				videourl:"",//视频上传路径
			};
		},
		onLoad(opt) {
			this.type = opt.type
		},
		methods:{
			publish(){
				
				
				if(!this.title) 
					return uni.showToast({ title: '标题不能为空',icon:'none' });
				if(!this.content)
					return uni.showToast({ title: '发布内容不能为空',icon:'none' });
				if(!this.videourl)
					return uni.showToast({ title: '不能上传空视频',icon:'none' });
				console.log(this.videourl)
				addvideo({title:this.title,content:this.content,voide_file:this.videourl}).then(res=>{
					console.log(res)
				})	
				
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
			  urlList：要上传的视频：数组类型
			  */
			 uploadFileToServe() {	
				uni.chooseVideo({
					success:(choosevideo)=>{
						const tempFilePath=choosevideo.tempFilePath
						console.log(tempFilePath,choosevideo)
						upLoadFile({path:tempFilePath}).then(res=>{
							/* console.log(res.data) */
							let videos=JSON.parse(res.data)
							this.videourl=videos.data.url
						})
					}
				})
			  }	,
			  
			  
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		padding: 45rpx 40rpx;
		.textarea{
		   
			width: 100%;
			height: 171rpx;
			border: 1rpx solid #eee;
			
			
			
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
		margin-bottom:20rpx;
	}

	.imgshow{
		// &::after{
		// 	width: 140rpx;
		// 	height: 140rpx;
		// 	content: '';
		// }
		
		width: 500rpx;
		height: 500rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin:  50rpx auto;
		image{
			width: 140rpx;
			height: 140rpx;
			margin-bottom: 20rpx;
			margin-right: 34rpx;
		}
		.upload{
			width: 50%;
			height: 50%;
			
		}
		
		
	}
</style>
