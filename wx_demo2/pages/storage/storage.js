// pages/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //设置缓存
  setStorage () {
    wx.setStorage({
      key: 'num',
      data: '1',
      success (res) {
        console.log('success',res);
      },
      fail (res) {
        console.log('fail',res);
      }
    })
  },
  //移除缓存
  removeStorage () {
    wx.removeStorage({
      key: 'num',
      success: function (res) { 
        console.log('移除成功');
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //获取缓存信息
  getStorageInfo () {
    wx.getStorageInfo({
      success: function(res) {
        console.log(res);
      },
    })
  },
  // 清除缓存
  clearStorage () {
    wx.clearStorage();
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