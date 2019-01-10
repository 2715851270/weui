// pages/refresh/refresh.js

//获取应用实例
const app = getApp()
const path = '/praise/pages/praise/'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 刷新组件
    this.refreshView = this.selectComponent("#refreshView")
  },

  //触摸开始
  handletouchstart: function (event) {
    this.refresh.handletouchstart(event)
  },
  //触摸移动
  handletouchmove: function (event) {
    this.refresh.handletouchmove(event)
  },
  //触摸结束
  handletouchend: function (event) {
    this.refresh.handletouchend(event)
  },
  //触摸取消
  handletouchcancel: function (event) {
    this.refresh.handletouchcancel(event)
  },
  //页面滚动
  onPageScroll: function (event) {
    this.refresh.onPageScroll(event)
  },
  onPullDownRefresh: function () {
    setTimeout(() => { this.refresh.stopPullRefresh() }, 5000)
  }
  
})