//封装api接口
import { request } from './request.ts';
//导出模块
/* 页面使用
 import {User} from './api.js';
 User.login()
 */
export class Home {
	// 导出方法

	static async bannerList(params: any) {
		return await request("/Home/bannerList", params, "POST")
	}
}