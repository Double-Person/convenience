let baseUrl_ = ''
// #ifdef H5   
baseUrl_ = ''
// #endif


// #ifdef APP-PLUS
baseUrl_ = 'http://bianmin.hkzhtech.com/api'
// #endif
export const baseUrl = baseUrl_


export const imgBaseUrl = 'http://bianmin.hkzhtech.com'


export const ajax = (option) => {
	if (!option.url) {
		throw new TypeError('请求地址不能为空')
		return false
	}
	return new Promise((resolve, reject) => {
		let token = null
		try {
			const value = uni.getStorageSync('CONVENIENCE_TOKEN');

			if (value) {
				token = value
			} else {

				var pagelength = getCurrentPages();
				var pageLast = pagelength[pagelength.length - 1];
				let currentRouter = pageLast.route
				console.log('---', currentRouter)
				if ((currentRouter != 'pages/login/login')) {
					uni.navigateTo({
						url: "/pages/login/login"
					})
					return false;
				}

			}
		} catch (e) {

			console.log(e)
		}
       
		uni.request({
			url: baseUrl + option.url,
			data: option.data || {},
			method: option.method || 'GET',
			header: {
				'token': token,
				"Content-Type": "application/x-www-form-urlencoded"
			},
			success: (res) => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '请求失败，请稍后重试',
						icon: 'none'
					})
					reject('系统错误');

				} else {
					resolve(res.data);
				}


			},
			fail: err => {

				uni.showToast({
					title: '请求失败，请稍后重试',
					icon: 'none'
				})
				reject(err);
			},
		});
	})
}

