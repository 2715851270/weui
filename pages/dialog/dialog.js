// pages/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    showMsgModal: false
  },

  // 显示消息提示框
  actionToast: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },

  // 显示 loading 提示框
  actionLoading: function () {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },

  // 显示模态对话框
  actionModal: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      confirmColor: '#1890ff',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  // 自定义模态框
  actionCusModal: function () {
    this.setData({
      showModal: true
    })
  },
  preventTouchMove: function () {

  },
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  onCancel: function () {
    this.hideModal();
  },
  onConfirm: function () {
    this.hideModal();
  },

  // 通知模态框
  actionMsgModal: function () {
    this.setData({
      showMsgModal: true
    })
  },
  preventMsgTouchMove: function () {
    
  },
  hideMsgModal: function () {
    this.setData({
      showMsgModal: false
    });
  },
  onread: function () {
    this.hideMsgModal();
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