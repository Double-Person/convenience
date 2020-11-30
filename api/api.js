import { ajax, baseUrl} from "./request.js";


// 登录
export const login = data => ajax({ url: '/user/login', data, method: 'POST' });

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

//城市周边--转让出租-发布房屋
export const add_house_comment = data => ajax({ url: '/house/add_house_comment', data, method: 'POST' });



