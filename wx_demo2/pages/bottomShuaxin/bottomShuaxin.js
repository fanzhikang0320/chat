// pages/bottomShuaxin/bottomShuaxin.js
const _newList = ['中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国']


Page({

  /**
   * 页面的初始数据
   */
  data: {
    newList: _newList
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
    _newList.push('中国正在腾飞');
    this.setData({
      newList:_newList
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})