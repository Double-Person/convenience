<template>
	<view>
		<view class="content">
			<view class="item" v-for="(item,index) in datalist" :key="index" @tap="toclassification(item.url)">
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
						img:require("@/static/img/life/unlocking.png"),
						name:"开锁换锁",
						url:"/pages/lifemaintenance/lifeclass"
					},
					{
						img:require("@/static/img/life/hydroelectric.png"),
						name:"水电维修"
					},
					{
						img:require("@/static/img/life/computerrepair.png"),
						name:"电脑维修"
					},
					{
						img:require("@/static/img/life/homeappliances.png"),
						name:"家电维修"
					},
					{
						img:require("@/static/img/life/gasappliance.png"),
						name:"家电维修"
					},
					{
						img:require("@/static/img/life/hearth.png"),
						name:"燃具维修"
					},
					{
						img:require("@/static/img/life/homedecoration.png"),
						name:"家装维修"
					},
					{
						img:require("@/static/img/life/doormaintenance.png"),
						name:"卷门维修"
					},
					{
						img:require("@/static/img/life/housekeeping.png"),
						name:"家政服务"
					},
					{
						img:require("@/static/img/life/movehouse.png"),
						name:"搬家服务"
					},
					{
						img:require("@/static/img/life/cityrunerrands.png"),
						name:"同城跑腿"
					},
					{
						img:require("@/static/img/life/bottledwater.png"),
						name:"送桶装水"
					}
				]
				
			};
		},
		methods:{
			toclassification(url){
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
				width: 143rpx;
				height: 166rpx;
			}
			view{
				font-size:30rpx;
				color:#4C4C4C;
			}
		}
	}

</style>
