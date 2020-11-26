<template>
	<view class="index">
		<!-- 1651 -->

		<view class="calendar">
			<view class="warp">
				<view class="curent-time">{{currentTime}}</view>
				<view class="fl jc-around">
					<view v-for="(item,index) in week" :key="index" class="day">
						{{item.label}}
					</view>
				</view>

				<view class="fl fl-warp day-list">
					<view v-for="(item,index) in dayList" :key="index" class="item-day">
						<view class="every-day" :class="judgeBeforeAfter(item.num) ? 'before-day' : 'after-day' ">{{item.num}}</view>
						<image class="check-icon" v-if="isShowCheck(item)" src="/static/img/signin/icon_right@2x.png" mode=""></image>
						<!-- <image class="check-icon" src="/static/img/correct.svg" mode=""></image> -->
					</view>
				</view>

			</view>


		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTime: '',
				dayList: [
					// {id: 0, check: false}
				],
				week: [{
						value: 0,
						label: '日'
					},
					{
						value: 1,
						label: '一'
					},
					{
						value: 2,
						label: '二'
					},
					{
						value: 3,
						label: '三'
					},
					{
						value: 4,
						label: '四'
					},
					{
						value: 5,
						label: '五'
					},
					{
						value: 6,
						label: '六'
					}
				]
			}
		},
		async created() {
			this.currentTime = await this.getCurrentTime();

			// await this.getCurrentMonthCountDay();

			// await this.getCurrentMonthDay();

			await this.computedDayList()
		},
		methods: {
			// 是否显示选中的签到时间
			isShowCheck(info) {
				if (info.num == '') {
					return false;
				} else {
					let time = this.getTimeStamp();
					let day = time.getDate();

					if (info.num * 1 > day * 1) {
						return false;
					} else {
						// do some things ……  判断是否显示选中
						return true
					}
				}
			},

			/**
			 * @property {number | string} prop_name = [value] 
			 * @return {boolean} true 当前时间之后， false 当前时间之前
			 */
			judgeBeforeAfter(num) {
				if (num == '') return false;
				else {
					let time = this.getTimeStamp();
					let day = time.getDate();
					if (num * 1 > day * 1) return false;
					else return true
				}

			},



			getTimeStamp(timeStamp) {
				let time = null;
				if (!timeStamp) {
					time = new Date();
					return time
				}
				time = new Date(timeStamp);
				return time;
			},
			// 获取当前日期
			getCurrentTime() {
				let time = this.getTimeStamp();
				let year = time.getFullYear();
				let mounth = time.getMonth() + 1;
				let day = time.getDate();

				return `${year}年${mounth.toString().padStart(2,'0')}月${day.toString().padStart(2,'0')}`
			},
			// 获取当前月总天数
			getCurrentMonthCountDay() {
				let time = this.getTimeStamp();
				let curMonthDays = new Date(time.getFullYear(), (time.getMonth() + 1), 0).getDate();
				return curMonthDays
			},

			/** 获取当前月 多少号 号星期几
			 * @param {number}  多少号
			 * @return {number} 星期（0- 6 【周天到周六】）
			 */
			getCurrentMonthDay(day = 1) {
				let time = this.getTimeStamp();
				time.setDate(day);
				let days = time.getDay();
				return days
			},

			// 计算显示
			computedDayList() {
				// this.dayList
				let arr = [{
						num: '',
						check: true
					},
					{
						num: '',
						check: true
					},
					{
						num: '',
						check: true
					},
					{
						num: '',
						check: true
					},
				]
				// arr.length = this.getCurrentMonthDay();
				// if(this.getCurrentMonthDay() == 0) {
				// 	arr = []
				// }else {

				// }
				arr.length = this.getCurrentMonthDay();
				this.dayList.push(...arr);


				let len = this.getCurrentMonthCountDay();
				for (let i = 1; i <= len; i++) {
					let obj = {
						num: i,
						check: true
					};
					this.dayList.push(obj);
				}

				console.log(this.dayList)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.before-day {
		font-weight: 800;
		color: #2E2E2E;

	}

	.after-day {
		font-weight: 400;
		color: #8F8F8F;

	}

	.calendar {
		margin: 0 auto;
		width: 585rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 22rpx;


		.warp {
			width: 484rpx;
			margin-left: 44rpx;
			padding-bottom: 42rpx;

			.curent-time {
				font-size: 24rpx;
				font-weight: 800;
				color: #2E2E2E;
				padding: 52rpx 0 43rpx 0;

			}

			.day {
				font-size: 24rpx;
				color: #2E2E2E;
				width: 14.286%;
				text-align: center;
			}

			.day-list {
				margin-top: 79rpx;
				.item-day {
					width: 14.286%;
					height: 60rpx;
					text-align: center;
					position: relative;

					.every-day {
						font-size: 24rpx;
					}

					.check-icon {
						width: 32rpx;
						height: 22rpx;
						vertical-align: middle;
						object-fit: cover;
						position: absolute;
						top: 26rpx;
						left: 50%;
						transform: translateX(-50%);
					}

				}
			}
		}


	}
</style>
