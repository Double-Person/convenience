<template>
	<view>

		<view class="top">
			登录
		</view>
		<view class="ipt">
			<input type="text" v-model="info.account" placeholder="请输入手机号码" class="pho" />
			<input type="password" v-model="info.password" placeholder="请输入密码" class="psw" />
		</view>
		<button type="default" class="loginbtn" @click="_login">登录</button>
		<view class="" style="display: flex;justify-content: center;">
			<text @tap="torigester" class="rigiester">用户注册</text>
		</view>

		<view class="bottomargument">
			<radio-group>
				<label class="uni-list-cell uni-list-cell-pd fl al-center jc-center"  @tap="agreeargument">
					<view >
						<radio value="" :checked="agree" color="#FE4555"/>
					</view>
					<view class="userargument">用户协议</view>
				</label>
			</radio-group>

		</view>


    <wyb-popup ref="privacypopup" type="center" height="800" width="500" radius="6" :showCloseIcon="true" style="position: relative;"
     :scrollY="true">
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
    			<button class="yes" @tap="close">同意</button>
    
    		</view>
    
    
    
    	</view>
    </wyb-popup>
	
	
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue';
	import {
		login
	} from "../../api/api.js"
	export default {
		data() {
			return {
				agree: false,
				info: {
					account: 'admin',
					password: '123456'
				},

			};
		},
		methods: {
			_login() {
				login({ ...this.info
				}).then(({
					data: {
						userinfo
					},
					msg
				}) => {
					console.log(userinfo, msg)
					uni.setStorageSync('CONVENIENCE_TOKEN', userinfo.token)
					uni.setStorageSync('CONVENIENCE_INDO', userinfo)
					uni.switchTab({
						url: "/pages/index/index",
						fail(err) {
							console.log(err)
						}
					})
				})
			},
			torigester() {
				uni.navigateTo({
					url: '/pages/login/rigester',

				})
			},
			agreeargument() {
				if (this.agree == false) {
					this.agree = true
				} else {
					this.agree = false
				}
		
				

			},
			close() {
				this.$refs.privacypopup.close()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		height: 160rpx;

		text-align: center;
		line-height: 160rpx;
		font-size: 50rpx;
		font-weight: bold;
	}

	.ipt {

		display: flex;
		flex-direction: column;
		align-items: center;

		input {
			height: 100rpx;
			border-bottom: 1px solid #CCCCCC;
			width: 90vw;
		}
	}

	.loginbtn {
		width: 85vw;
		margin: 0 auto;
		height: 100rpx;
		line-height: 100rpx;
		background-image: linear-gradient(#F96770, #FD5591);
		color: white;
		border-radius: 60rpx;
		margin-top: 100rpx;
	}

	.rigiester {

		font-size: 30rpx;
		text-decoration: underline;
		display: inline-block;
		width: 75vw;

		text-align: right;
		line-height: 60rpx;


	}

	.userargument {
		font-size: 24rpx;
		text-decoration: underline;
		margin-left: 15rpx;
	}

	.bottomargument {
		position: fixed;
		bottom: 71rpx;
		width: 100%;
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
/deep/	uni-radio:not([disabled]) .uni-radio-input:hover{
		border-color:#FE4555
	}
	
	
	
</style>
