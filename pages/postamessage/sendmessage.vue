<template>
	<view class="main">
		<input type="text" v-model="publishtitle" placeholder="请输入标题" class="publishtitle" />
		<textarea v-model="publishcontent" placeholder="添加文字描述......" />
		<view class="addpic">
			<gUpload ref='gUpload' :mode="imgList" @chooseFile='chooseFile' @imgDelete='imgDelete' :control='control' :columnNum="columnNum"></gUpload>
		</view>
		<view class="phonum">
			<view class="pic">
				<image src="../../static/img/postmessage/lianxiwomendianhua@2x.png" mode=""></image>
			</view>
			<input type="text" v-model="publishphonenumber" placeholder="输入联系方式......"/>
		</view>
		
		<view class="sendbtn">
			<button class="fabu" @tap="publish">发布</button>
			<button class="quxiao">取消</button>
			
			
		</view>
		
		
		
	</view>
</template>

<script>
	 import gUpload from "@/components/g-upload/g-upload.vue";
	 import {
	 	add_job,
		upload
	 } from '@/api/api.js'

	export default {
		components:{
			gUpload
			
		},
		data() {
			return {
				publishtitle:"",//发布标题
				publishcontent:"",//发布内容
				publishphonenumber:"",//发布电话
				   title: 'Hello',
				        control: true,
				        columnNum: 4,
				        imgList: []
				
			};
		},
		methods:{
			publish(){
				add_job(this.publishtitle,this.publishcontent,this.publishphonenumber).then(res=>{
					console.log(res)
				})
				
			},
			
			
			
			
			
			
			    //点击上传控件上传
			      uploadImg() {
					
			        this.$refs.gUpload.uploadImg()
			      },
			
			      /*
			      上传后返回的值：
			      list：上传后图片数组
			      v：返回当前上传图片的临时路径
			      */
			      chooseFile(list, v) {
					
			        console.log("上传图片_list：", list)
			        console.log("上传图片_v：", v);
			        this.uploadFileToServe(v)
			      },
			
			      /*
			      删除图片：
			      list：删除返回删除后剩余的图片数组
			      eq：返回删除的数组
			      */
			      imgDelete(list, eq) {
			        console.log("删除图片_list：", list)
			        console.log("删除图片_eq：", eq)
			      },
			
			      //控件内外部切换
			      switch1Change(e) {
			        this.control = !this.control
			      },
			
			      //图片行个数切换
			      switch2Change(e) {
			        this.columnNum = this.columnNum == 3 ? '4' : '3'
			      },
			
			      /*
			      执行上传服务：
			      urlList：要上传的图片：数组类型
			      */
			     uploadFileToServe(urlList) {
					 
			        if (!urlList || urlList.length <= 0) {
			          return
			        };
			        for (let i = 0; i < urlList.length; i++) {
			          uni.uploadFile({
			            url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
			            filePath: urlList[i],
			            name: 'file',
			            formData: {
			              'user': 'test'
			            },
			            success: (uploadFileRes) => {
			              console.log(uploadFileRes.data);
			            }
			          });
			        }
			      }	
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		padding: 45rpx 40rpx;
		textarea{
		
			width: 100%;
			height: 171rpx;
			
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
</style>
