<template>
	<view>
		<v-tabs
		 v-model="current"
		 :tabs="tabs"
		 @change="changeTab"
		 color="#2E2E2E"
		 activeColor="#000000"
		 :bold="bool"
		 height="106rpx"
		 lineHeight="20rpx"
		 lineColor="#FE4555"
		 :lineScale="num"
		 lineRadius=0
		 :fixed="bool"
		 paddingItem="0 50rpx"
		 
		></v-tabs>
		
		
		<view class="content" v-for="(item,index) in 3" :key="index">
			<video src="../../static/video/testvideo.mp4" controls="" ></video>
			<view class="bottom">
				<text class="title">《西行路上》沙僧当众吹sax</text>
				<text class="fenzhi">9.8分</text>
				
			</view>
		</view>
		
		
		
		
	
		
		

	</view>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      tabs: ['首页', '短视频', '电视剧', '综艺', '动漫', '军事', '国内', '新闻'],
	  bool:true,
	  num:0.8
    }
  },
  methods: {
    changeTab(index) {
      console.log('当前选中的项：' + index)
    }
  }
}
</script>

<style lang="scss" scoped>
	.content{
		
		border: 1px solid red;
		margin-bottom: 5rpx;
		video{
			width: 100vw;
			height: 500rpx;
		}
		.bottom{
			display: flex;
			justify-content: space-between;padding: 0 46rpx;
			line-height:98rpx;
			.title{
				color: #2E2E2E;
				font-size:26rpx;
				
			}
			.fenzhi{
				color:#FE4555;
				font-size: 26rpx;
			}
		}
	}

</style>
