// pages/workerDemo/workerDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   *主线程触发
   */
  touch () {
    // 创建worker线程对象
    const worker = wx.createWorker('/workers/myWorker.js');
    //发送数据
    worker.postMessage({
      x: 11.34,
      y: 34.34
    })
    //监控
    worker.onMessage((res) => {
      console.log(res);
    });


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