// pages/shearPlate/shearPlate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:'锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。'
  },
  /**
   * 一键复制
   */
  copy () {
    let that = this;
    wx.setClipboardData({
      data: that.data.detail,
      success: function (res) {
        wx.showModal({
          title: '提示',
          content: '复制成功',
          showCancel:false
        })
      }
    });
  },
  /**
   * 显示剪切内容
   */
  show () {
    wx.getClipboardData({
      success: function (res) {
        console.log(res);
      }
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