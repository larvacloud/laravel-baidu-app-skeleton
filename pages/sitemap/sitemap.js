const api = require('../../api/index')

Page({
    data: {
        listData: [],//列表数据
        totalPage: 1,//总页数
        currentPage: 1,//当前页数
        path: 'pages/sitemap/sitemap'//路径
    },
    onLoad: function (e) {
        // 初始页面打开时，需要读取页面的 currentPage 参数（即翻页页码），并根据参数值请求数据
        let {currentPage} = e;
        // 起始页码为 1，如读取到的值为空，默认赋值起始页码
        currentPage = +currentPage || 1;
        // 根据当前页码获取该页数据资源
        this.requestData(currentPage);
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
    requestData(currentPage) {
        // 发起数据资源请求。
        api.article.sitemap(currentPage).then(res => {
            this.setData({
                    listData: res.data,
                    totalPage: res.meta.last_page,
                    currentPage:res.meta.current_page,
            });
            console.log(res);
        }).catch(err => {
            console.log(err)
        });
    }
});