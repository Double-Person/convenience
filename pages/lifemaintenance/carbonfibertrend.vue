<template>
	<view>
		<view class="content">
			<view class="item" v-for="(item,index) in datalist" :key="index" @tap="tosend(item.url)">
				<image :src="item.img" mode=""></image>
				<view class="">
					{{item.name}}
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datalist:[
					{
						img:require("@/static/img/life/locking.png"),
						name:"开锁换锁",
						url:"/pages/lifemaintenance/sendcarbonmsg"
					},
					{
						img:require("@/static/img/life/wujin.png"),
						name:"五金建材",
						url:"/pages/lifemaintenance/sendcarbonmsg"
					},
					{
						img:require("@/static/img/life/jiadian.png"),
						name:"家电维修",
						url:"/pages/lifemaintenance/sendcarbonmsg"
					}
				]
				
			};
		},
	methods:{
		tosend(url){
			uni.navigateTo({
				url:url
			})
			
		}
	}
	}
</script>

<style lang="scss" scoped>
	.content{
		display: flex;
		flex-wrap: wrap;
		padding: 0 52rpx;
		justify-content: space-between;
		margin-top:24rpx;
		
	  
		.item{
			
			 width: 30%;
			 display: flex;
			 flex-direction: column;
			 align-items: center;
			 margin-bottom:62rpx;
			image{
				width: 154rpx;
				height: 110rpx;
			}
			view{
				font-size:30rpx;
				color:#4C4C4C;
				line-height: 80rpx;
			}
		}
	}

</style>
