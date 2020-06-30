import request from './request'
import config from '../config'

export function login(code, user_info) {
    return request({
        method: 'POST',
        url: '/oauth/token',
        data: {
            grant_type: 'mini-program',
            client_id: config.appId,
            client_secret: config.appSecret,
			provider: "baidu_smart_program",
            code: code,
            user_info: user_info
        }
    })
}

export function logout() {
    if (logout) {
        getApp().globalData.userInfo = '';
        wx.reLaunch({
            url: '/pages/index/index'
        })
    } else {
        wx.showToast({
            title: '注销失败!',
            icon: 'warn',
            duration: 1000,
        });
    }
}