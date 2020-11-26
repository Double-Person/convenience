import { ajax, baseUrl} from "./request.js";


// 判断是第一次
export const login = data => ajax({ url: '/user/login', data, method: 'POST' });


export const houseIndex = data => ajax({ url: '/house/index', data, method: 'POST' });


