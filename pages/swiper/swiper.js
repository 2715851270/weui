// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img.hb.aicdn.com/cd884310681e359bc60d7baa290c249301768a927d5e7-wfcMl3_fw658',
      'http://img.hb.aicdn.com/cd884310681e359bc60d7baa290c249301768a927d5e7-wfcMl3_fw658',
      'http://img.hb.aicdn.com/cd884310681e359bc60d7baa290c249301768a927d5e7-wfcMl3_fw658'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 300,
    margin: 80,
    swiperIndex: 0
  },

  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  // 卡片式 Swiper
  swiperChange(e) {
    var that = this;
    that.setData({
      swiperIndex: e.detail.current, // 定义当前数据的swiperIndex等于当前数据的current
    })
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