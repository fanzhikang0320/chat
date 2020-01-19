// pages/goBackTop/goBackTop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cangotop:false
  },
  //系统自带屏幕滚动事件
  onPageScroll: function (e) {
    // console.log('ok');
    
    if (e.scrollTop > 100) {
      //当页面距离大于100px，显示回到顶部区域
      this.setData({
        cangotop: true
      });
    } else {
      this.setData({
        cangotop: false
      });
    }
  },
  /**
   * 向上回到顶部
   */
  goTop (e) {
    //判断基础库是否可用
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0,
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，暂时无法使用该功能',
      })
    }
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