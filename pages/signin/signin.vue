<template>
	<view>
		<view class="top">
			<button>今日签到</button>
		</view>


		<view class="content">
			<view class="title">
				<text>累计积分232分</text>
			</view>
			<view class="main">
				<view class="">
					<!-- 基本用法 -->
					<uni-steps :options="[{title: '长工'}, {title: '穷人'}, {title: '富人'}, {title: '小财主'}, {title: '大财主'}]" :active="4"
					 active-color="white"></uni-steps>

				</view>
				
				<view class="calendar">
				<!-- 	 <qian-dao
					        :list="list"
					        :date="date"
					        :time_key="time_key"
					        @day_change="day_change_fun"
					        @date_change="date_change_fun"
					    ></qian-dao> -->
					
				</view>



			</view>



		</view>
	</view>

</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	 import QianDao from "@/components/qian-dao/qian-dao.vue";
	export default {
		data() {
			return {
				 // 当前的日期
				                date: "",
				
				                // 存放时间的key值
				                time_key: "",
				                // 已经签到的数据列表
				                list: [],
				
				                // // 存放时间的key值
				                // time_key: "time",
				                // // 已经签到的数据列表
				                // list: [{
				                //  time: "2020-05-10",
				                // }, {
				                //  time: "03-15",
				                // }, {
				                //  time: "20",
				                // }, {
				                //  time: "31"
				                // }],

			};
		},
		components: {
			uniSteps,
			 QianDao,
		},
		methods:{
			 // 点击天
			            day_change_fun(day) {
			                console.log(JSON.parse(JSON.stringify(day)));
			
			                // 存放时间的key值
			                let time_key = this.time_key;
			
			                // 如果没有签到（可以补签，需要补签的可以这么写）
			                /* if (!day.click) {
			                    if (time_key) {
			                        let obj = {};
			                        obj[time_key] = day.nyr;
			                        this.list.push(obj);
			                    } else {
			                        this.list.push(day.nyr);
			                    }
			                } */
			
			                // 如果今天没有签到(只签到今天的，如果只需要签到今天的可以这么写)
			                if (!day.click && day.type == "today") {
			                 if (time_key) {
			                     let obj = {};
			                     obj[time_key] = day.nyr;
			                     this.list.push(obj);
			                 } else {
			                     this.list.push(day.nyr);
			                 }
			                }
			            },
			            // 日期改变时触发
			            date_change_fun(date) {
			                // 更新日期
			                this.date = date;
			
			                // 清空已经签到的列表
			                this.list = [];
			
			                // 根据日期获取已经签到的列表然后赋值
			                // 存放时间的key值
			                let time_key = this.time_key;
			                if (time_key) {
			                    this.list.push({
			                        time: "01"
			                    });
			                } else {
			                    this.list.push("01");
			                }
			            },
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		height: 264rpx;
		background-image: linear-gradient(#F86D66, #F96770);
		display: flex;
		align-items: center;

		button {
			width: 330rpx;
			height: 120rpx;
			line-height: 120rpx;
			color: #FE4555;
			font-size: 40rpx;
			font-weight: bold;
			border-radius: 200rpx;
		}
	}

	.content {
		height: 1000rpx;
		background-image: linear-gradient(#F96770, #FD5591);
		padding: 0 83rpx;

		.title {
			font-size: 30rpx;
			color: white;
			font-weight: bold;
			border-top: 1px solid white;
			height: 40rpx;
			position: relative;
			display: flex;
			justify-content: center;

			text {
				position: absolute;
				top: -16rpx;
				background: #F96970;
				padding: 0 20rpx;

			}
		}




	}
</style>
