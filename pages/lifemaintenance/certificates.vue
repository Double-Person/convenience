<template>
	<view>
		<view class="content">
			
			<!-- 身份证上传 -->
			<view class="idcard">
				<view class="titlename">
					身份证件上传:
				</view>
				<view class="cname">
					<text>身份证件(人像面):</text>
					<view class="flcenter" >
						<image src="@/static/img/life/sendpic.png" mode="" class="photopic"></image>
					</view>
				</view>
				<view class="cname">
					<text>身份证件(国徽面):</text>
					<view class="flcenter" >
						<image src="@/static/img/life/sendpic.png" mode="" class="photopic"></image>
					</view>
				</view>
				
			</view>
			<!-- 营业执照上传 -->
			<view class="certificate">
				<view class="titlename" style="padding: 45rpx 0;">
					营业执照上传:
				</view>
				<view class="cname">
					<view class="flcenter">
						<image src="@/static/img/life/sendpic.png" mode="" class="photopic"></image>
					</view>
				</view>
			</view>
			<!-- 其他资质 -->
			<view class="rests">
				<view class="titlename" style="padding: 45rpx 0;">
					其他资质文件上传（特种行业许可证 技能资格证以及 其他从业证书）：
				</view>
				<view class="flcenter">
					
					<view class="">
						<image src="@/static/img/life/sendpic.png" mode="" class="photopic"></image>
					</view>
				</view>
				
				
			</view>
			<!-- 联系人电话 -->
			<view class="pho">
				<view class="titlename" style="padding: 45rpx 0;">
					联系人手机号:
				</view>	
				<input type="text" value="" class="phoinput"/>
			</view>
			
			<!-- 所属行业 -->
			<view class="industry">
				<view class="titlename" style="padding: 45rpx 0;">
					所属行业:
				</view>	
			      <picker  mode="selector" @change="bindPickerChange" style="width: 200rpx; height: 50rpx;" :value="index" :range="array">
			      					  <view class="uni-input choose">{{array[index]}}</view>
			             
			       </picker>
			</view>
			<!-- 备注 -->
			<view class="remark">
				注:资质文件上传后,请保持手机通畅,审核结果将以短信方式告知,如有疑问,请联系客服
				<view class="kefupho">
					<text style="line-height: 50rpx;">客服电话:</text>
					<text class="cblue" style="line-height: 40rpx;">0831-8212072</text>
					<text class="cblue" style="line-height: 40rpx;">0831-4088880</text>
				</view>
			</view>
			<button class="finish">完成</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 array: ['请选择','中国', '美国', '巴西', '日本'],
				 index:0,
				
			};
		},
		methods:{
			  bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
			        },
		}
	}
</script>

<style lang="scss" scoped>
	.titlename{
		color:#FE3737;
		font-size:30rpx;
		
	}
	.cname{
		color:#626262;
		font-size: 30rpx;
		line-height: 104rpx;
	}
	.photopic{
		width: 371rpx;
		height: 371rpx;
	}
	.phoinput{
		border-bottom: 1rpx solid #A7A7A7;
	}
	.content{
		padding: 73rpx 20rpx 0 20rpx;
	}
	.hangyexuanze{
		select{
			width: 297rpx;
			height: 83rpx;
			
		}
	}
	.cblue{
		color: #2C8FDD;
	}
	.choose{
		width: 297rpx;
		height: 83rpx;
		background:#CECFCE;
		font-size:30rpx;
		color: #2C2C2C;
		text-align: center;
		line-height: 83rpx;
		border-radius: 10rpx;
	}
    .remark{
		margin-top:100rpx;
		font-size: 18rpx;
		color: #CCCCCC;
		.kefupho{
			display: flex;
			flex-direction: column;
		}
	}
	.finish{
		width:200rpx;
		height: 70rpx;
		background:#FE4555;
		color: white;
		font-size: 30rpx;
		line-height: 70rpx;
		margin-top: 15rpx;
		margin-bottom: 25rpx;
	}
</style>
