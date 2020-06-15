import config from '../../config.js'

Page({
    data: {
        url: null,
        title: "",
    },
    onLoad: function () {
        console.log('生命周期函数--监听页面加载' + JSON.stringify(options))
        if (options.url != null) {
            var url = decodeURIComponent(options.url);
            if (url.indexOf('*') != -1) {
                url = url.replace("*", "?");
            }
            this.setData({
                url: url
            });
        } else {
            this.setData({
                url: 'https://' + config.baseUrl
            });
        }
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
    postMessage: function() {
        //接收页面传输的消息

    }
});