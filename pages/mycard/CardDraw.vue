<template>
	<view class="card-draw">
		<view class="title">维修师傅签字，用户消耗一张优惠券</view>

		<view class="coupon">
			<image src="/static/img/mycard/pinkcard.png" mode=""></image>
			<view class="info">
				<view class="fl jc-between al-center top">
					<text>10元维修优惠券</text>
					<text>30积分</text>
				</view>
				<view class="fl jc-between al-center bottom">
					<text class="left">大财主头衔才可用积分兑换维修优惠券</text>
					<text class="right">可兑换</text>
				</view>
			</view>

			<view class="cavas">
				<canvas class="mycanvas" canvas-id="canvasid" disable-scroll="true" @touchstart="ontouchstart" @touchmove="touchmove"
				 @touchend="touchend"></canvas>
			</view>
			<view class="btn" @click="finish">确认签字</view>
		</view>
	</view>
</template>

<script>
	var x = 20;
	var y = 20;
	export default {
		data() {
			return {
				headerStyleHeight: 0,
				headerStyleTop: 0,
				oc: "",
				points: [], //路径点集合 
				showCanvas: false, //
			};
		},
		onLoad() {
			this.initCanvas()
		},

		methods: {
			finish() {
				console.log('========');
				let that = this;
				// debugger
				uni.canvasToTempFilePath({
					canvasId: "canvasid",
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err)
					}
				});
			},


			initCanvas() {
				this.showCanvas = true;
				this.oc = uni.createCanvasContext('canvasid');
				console.log(this.oc);
				//设置画笔样式
				this.oc.lineWidth = 4;
				this.oc.lineCap = "round";
				this.oc.lineJoin = "round";
				// this.oc.setStrokeStyle("#ffffff");

			},
			ontouchend(e) {
				oc.ontouchmove = null;
			},
			ontouchmove(e) {
				const {
					clientX,
					clientY
				} = e.changedTouches[0];
				oc.lineTo(clientX - oc.offsetLeft, clientY - oc.offsetTop);
				oc.stroke();
			},
			//触摸开始，获取到起点

			ontouchstart(e) {
				// debugger
				//   ctx.beginPath();
				const startX = e.changedTouches[0].x;
				const startY = e.changedTouches[0].y;
				let startPoint = {
					X: startX,
					Y: startY
				};
				this.points.push(startPoint);
				//每次触摸开始，开启新的路径
				this.oc.beginPath();
			},
			//触摸移动，获取到路径点
			touchmove(e) {
				let moveX = e.changedTouches[0].x;
				let moveY = e.changedTouches[0].y;
				let movePoint = {
					X: moveX,
					Y: moveY
				};
				this.points.push(movePoint); //存点
				let len = this.points.length;
				if (len >= 2) {
					this.draw(); //绘制路径
				}

			},

			// 触摸结束，将未绘制的点清空防止对后续路径产生干扰
			touchend() {
				this.points = [];
			},
			draw() {
				let point1 = this.points[0]
				let point2 = this.points[1]
				this.points.shift()
				this.oc.moveTo(point1.X, point1.Y)
				this.oc.lineTo(point2.X, point2.Y)
				this.oc.stroke()
				this.oc.draw(true)
			},




			down() {
				uni.canvasToTempFilePath({
					canvasId: 'mycanvas',
					success: function(res) {

					}
				})
			}
		},

		created() {}
	};
</script>

<style lang="scss" scoped>
	.mycanvas {
		width: 100%;
		height: 100%;
	}

	.card-draw {
		width: 585rpx;
		margin: 80rpx auto 0 auto;

		.title {
			font-size: 26rpx;
			font-weight: 400;
			color: #2E2E2E;
		}

		.coupon {
			width: 585rpx;
			height: 153rpx;
			margin-top: 46rpx;
			position: relative;

			image {
				width: 100%;
				height: 100%;
				vertical-align: middle;
			}

			.info {
				position: absolute;
				top: 57rpx;
				left: 40rpx;
				right: 43rpx;

				.top {
					font-size: 40rpx;
					font-weight: 800;
					color: #2E2E2E;
				}

				.bottom {
					color: #FFFFFF;

					.left {
						font-size: 18rpx;
						font-weight: 400;
					}

					.right {
						font-size: 30rpx;
						font-weight: 800;
						opacity: 0.8;
					}
				}
			}

			.cavas {
				width: 584rpx;
				height: 625rpx;
				background: #EFE9E8;
				border-radius: 10rpx;
				margin: 3rpx auto;

			}

			.btn {
				width: 200rpx;
				height: 70rpx;
				line-height: 70rpx;
				text-align: center;
				background: #FE4555;
				border-radius: 10rpx;
				margin: 67rpx auto 161rpx auto;

				font-size: 30rpx;
				font-weight: 800;
				color: #FFFFFF;



			}
		}
	}
</style>
