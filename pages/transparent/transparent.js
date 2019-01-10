// pages/transparent/transparent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://pic1.win4000.com/wallpaper/2018-11-26/5bfb63c901521.jpg',
      'http://pic1.win4000.com/wallpaper/2018-11-26/5bfb63c77849f.jpg',
      'http://pic1.win4000.com/wallpaper/2018-11-26/5bfb63c632823.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 300,
    //滚动条监听
    scrollTop: null,
    navbarBackground: '255, 255, 255' //只允许使用RGB颜色
  },

  //滚动条监听
  scroll: function (e) {
    this.setData({ scrollTop: e.detail.scrollTop })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})