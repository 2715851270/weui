App({
  // 获取手机导航栏高度
  onLaunch: function (options) {
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.globalData.statusBar = res.statusBarHeight;
      }, fail(err) {
        console.log(err);
      }
    })
  },

  globalData: {
    userInfo: null,
    statusBar: 0
  }
})
