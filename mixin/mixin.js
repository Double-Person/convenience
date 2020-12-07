const mixin = {
	data() {
		return {
			limit: 1
		}
	},
	mounted() {
		console.log('全局mixin');
		// this.test()
	},
	onReachBottom() {
		console.log('上拉刷新全局')
		if (typeof this.getList === 'function') {
			this.getList()
		}
	},
	methods: {
	

	}
}
export default mixin
