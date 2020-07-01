/**
 * @file index.js
 * @author swan
 */
const app = getApp()
const api = require('../../api/index')

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: swan.canIUse('button.open-type.getUserInfo')
    },
    onLoad(options) {
        console.log('生命周期函数--监听页面加载' + JSON.stringify(options))
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    getUserInfo(e) {
        swan.login({
            success: (data) => {
                swan.getUserInfo({
                    success: (res) => {
                        api.auth.login(data.code,res.userInfo).then(res => {
                            console.log(res)
                        }).catch(err => {
                            console.log(err)
                        });
                        this.setData({
                            userInfo: res.userInfo,
                            hasUserInfo: true
                        });
                    },
                    fail: () => {
                        this.setData({
                            userInfo: e.detail.userInfo,
                            hasUserInfo: true
                        });
                    }
                });
            },
            fail: () => {
                swan.showModal({
                    title: '未登录',
                    showCancel: false
                });
            }
        });
    }
})
