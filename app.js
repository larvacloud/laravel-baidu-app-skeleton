/**
 * @file app.js
 * @author swan
 */
import config from './config'
/* globals swan */

App({
    globalData: {
        appName: config.appName,
        systemInfo: {},
        networkType: '未知'
    },
    onLogin(options) {
        console.log('生命周期函数 -- 监听 Web 态小程序登录成功' + JSON.stringify(options))
        // 使用 options.code 换取 session_key
        // 仅在 Web 态小程序初次登录成功后会被触发
    },
    onLaunch(options) {
        console.log('生命周期函数 -- 监听小程序初始化' + JSON.stringify(options))
        // 小程序主动更新
        this.updateManager()
        this.systemInfo()
        this.getNetworkType()
        console.log('App名称：' + this.globalData.appName)
        console.log('系统参数：' + JSON.stringify(this.globalData.systemInfo))
    },
    onShow(options) {
        console.log('生命周期函数 -- 监听小程序显示' + JSON.stringify(options))
    },
    onHide() {
        console.log('生命周期函数 -- 监听小程序隐藏')
    },
    onError(err) {
        console.log('catch error', err);
        swan.showModal({
            content: JSON.stringify(err)
        });
    },
    onPageNotFound(res) {
        console.log('Page not found.');
        console.log(res);
        swan.showModal({
            title: '',
            content: JSON.stringify(res)
        });
    },
    updateManager: function () {
        // 获取小程序更新机制兼容
        if (swan.canIUse('getUpdateManager')) {
            const updateManager = swan.getUpdateManager()
            updateManager.onCheckForUpdate(function (res) {
                // 请求完新版本信息的回调
                if (res.hasUpdate) {
                    updateManager.onUpdateReady(function () {
                        swan.showModal({
                            title: '更新提示',
                            content: '新版本已经准备好，是否重启应用？',
                            success: function (res) {
                                if (res.confirm) {
                                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                                    updateManager.applyUpdate()
                                }
                            }
                        })
                    })
                    updateManager.onUpdateFailed(function () {
                        // 新的版本下载失败
                        swan.showModal({
                            title: '新版本下载失败，请稍后再试',
                            icon: 'none'
                        })
                    })
                }
            })
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            swan.showModal({
                title: '提示',
                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            })
        }
    },
    systemInfo: function () {
        swan.getSystemInfo({
            success: res => {
                this.globalData.systemInfo = res;
            }
        });
    },
    getNetworkType: function() {
        swan.getNetworkType({
            success: res => {
                this.globalData.networkType = res.networkType;
            }
        });
        swan.onNetworkStatusChange(res => {
            this.globalData.networkType = res.networkType;
        }); 
    }
});
