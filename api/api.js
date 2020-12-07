import { ajax, baseUrl} from "./request.js";


// 登录
export const login = data => ajax({ url: '/user/login', data, method: 'POST' });
//注册
export const register = data => ajax({ url: '/user/register', data, method: 'POST' });

//文件上传
export const upload = data => ajax({ url: '/common/upload', data, method: 'POST' });


//城市周边--二手市场-市场列表
export const market = data => ajax({ url: '/market/index', data, method: 'POST' });

//城市周边--二手市场-市场详情
export const market_detail = data => ajax({ url: '/market/market_detail', data, method: 'POST' });

//城市周边--二手市场-发布市场
export const add_market = data => ajax({ url: '/market/add_market', data, method: 'POST' });

//城市周边--二手市场-发布市场评论
export const add_market_comment = data => ajax({ url: '/market/add_market_comment', data, method: 'POST' });


//城市周边--招聘求职-工作列表
export const job = data => ajax({ url: '/job/index', data, method: 'POST' });

//城市周边--招聘求职-工作详情
export const job_detail = data => ajax({ url: '/job/job_detail', data, method: 'POST' });

//城市周边--招聘求职-发布工作
export const add_job = data => ajax({ url: '/job/add_job', data, method: 'POST' });

//城市周边--招聘求职-发布工作评论
export const add_job_comment = data => ajax({ url: '/job/add_job_comment', data, method: 'POST' });


//城市周边--转让出租-房屋列表
export const houseIndex = data => ajax({ url: '/house/index', data, method: 'POST' });

//城市周边--转让出租-房屋详情
export const house_detail = data => ajax({ url: '/house/house_detail', data, method: 'POST' });

//城市周边--转让出租-发布房屋
export const add_house = data => ajax({ url: '/house/add_house', data, method: 'POST' });

//城市周边--转让出租-发布房屋评论
export const add_house_comment = data => ajax({ url: '/house/add_house_comment', data, method: 'POST' });






// -----------------------------------生活圈-----------------------------------------------
//圈友吐槽
export const roast = data => ajax({ url: '/life/roast', data, method: 'POST' });

//圈友吐槽详情
export const roastdetail = data => ajax({ url: '/life/roast_detail', data, method: 'POST' });

//发布圈友御草
export const addroast = data => ajax({ url: '/life/add_roast', data, method: 'POST' });

//发布圈友吐槽评论
export const addroastcomment = data => ajax({ url: '/life/add_roast_comment', data, method: 'POST' });

//朋友圈吐槽点赞
export const addroastlike = data => ajax({ url: '/life/add_roast_like', data, method: 'POST' });

//非诚勿扰
export const make = data => ajax({ url: '/life/make', data, method: 'POST' });

//非诚勿扰详情
export const makedetail = data => ajax({ url: '/life/make_detail', data, method: 'POST' });

//发布非诚勿扰
export const addmake = data => ajax({ url: '/life/add_make', data, method: 'POST' });

//发布非诚勿扰评论
export const addmakecomment = data => ajax({ url: '/life/add_make_comment', data, method: 'POST' });

//非诚勿扰点赞
export const addmakelike = data => ajax({ url: '/life/add_make_like', data, method: 'POST' });

//民品分享
export const Mp = data => ajax({ url: '/life/mp', data, method: 'POST' });

//民品分享详情
export const mpdetail = data => ajax({ url: '/life/mp_detail', data, method: 'POST' });

//发布民品分享
export const addmp = data => ajax({ url: '/life/add_mp', data, method: 'POST' });

//发布民品分享评论
export const addmpcomment = data => ajax({ url: '/life/add_mp_comment', data, method: 'POST' });

//民品分享点赞
export const addmplike = data => ajax({ url: '/life/add_mp_like', data, method: 'POST' });


// --------------------------------- 生活影视  ------------------------------------------

// 影视列表
export const getvideo = data => ajax({ url: '/video/index', data, method: 'POST' });

//影视详情
export const videodetail = data => ajax({ url: '/video/video_detail', data, method: 'POST' });

//删除影视
export const delvideo = data => ajax({ url: '/video/del_video', data, method: 'POST' });

//发布影视
export const addvideo = data => ajax({ url: '/video/add_video', data, method: 'POST' });


// ---------------------------------个人中心----------------------------------
//我的发布
export const release = data => ajax({ url: '/person/release', data, method: 'POST' });
//我的帖子
export const placard = data => ajax({ url: '/person/placard', data, method: 'POST' });


// -----------------------------签到---------------------------------------------
export const dosign = data => ajax({ url: '/addons/signin/api.index/dosign', data, method: 'POST', notApi: true });







export const upLoadFile = (option) => {
	if(!option.path) {
		throw new TypeError('文件上传路径不能为空')
	}
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '上传中',
			icon: 'loading',
			mask: true
		})
		
		
		let token = null
		try {
		    const value = uni.getStorageSync('CONVENIENCE_TOKEN');
			
		    if (value) {	
				token = value
		    }else {
				if(true) {
					
				}
			}
		} catch (e) {
		  
			console.log(e)
		}
		
		
		uni.uploadFile({
			url: baseUrl + '/common/upload',
			filePath: option.path,
			name: option.name || 'file',
			header: {
			    'token': token
			},
			formData: {
				// file: 'test'
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes)
				uni.hideLoading()
				resolve(uploadFileRes)
			},
			fail: err => {
				uni.hideLoading();
				uni.showToast({
					title: '上传失败，请重新上传',
					icon: 'none'
				})
				reject(err)
			},
			complete() {
				
			}
		});
	})
	
}
