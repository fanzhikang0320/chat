// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 0
  },
  /**
   * 计算
   */
  calNum (e) {
    //获取用户输入的值
    let that = this;
    let num1 = Number(e.detail.value.num1);
    let num2 = Number(e.detail.value.num2);
    let symbol1 = e.detail.target.dataset.type;
    if (num1 == '' || num2 == '') {
      wx.showToast({
        title: '数值不能为空',
        icon: 'none'
      });
      return;
    } 
    if (isNaN(num1) || isNaN(num2)) {
      wx.showToast({
        title: '请填入有效数字',
        icon: 'none'
      });
      return ;
    }
  wx.showLoading({
    title: '正在计算中...',
  })
  //提交到云函数进行处理
  wx.cloud.callFunction({
    name: 'cal',
    data: {
      num1: num1,
      num2: num2,
      symbol1: symbol1
    },
    success: res => {
      wx.hideLoading();
      that.setData({
        value: res.result
      });
    },
    fail: res => {
      console.log('fail',res);
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