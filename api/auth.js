import request from './request'
import config from '../config'

export function login(data) {
    return request({
        method: 'POST',
        url: '/oauth/token',
        data: {
            grant_type: 'social',
            client_id: config.appId,
            client_secret: config.appSecret,

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