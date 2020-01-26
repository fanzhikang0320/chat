// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 显示弹框
   */
  showDialog () {
    //通过组件对象，调用组件内的方法
    this.dialog.showDialog();
  },
  _cancelEvent () {
    this.dialog.hideDialog();
    console.log('click cancelButton');
  },
  _confirmEvent () {
    this.dialog.hideDialog();
    console.log('click confirmButton');
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
    //获取组件
    this.dialog = this.selectComponent('#dialog');
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