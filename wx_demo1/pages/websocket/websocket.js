// pages/websocket/websocket.js
Page({
  message:'',
  /**
   * 页面的初始数据
   */
  data: {
    responseString:'hello world'
  },
  /**
   * 数据获取操作
   */
  recodeMessage (e) {
    // console.log(e);
    this.message = e.detail.value;//获取输入的内容
  },
  /**
   * 发送数据
   */
  sendMessage () {
    let that = this;
    // 发送socket数据
    wx.sendSocketMessage({
      data: that.message,
    })
    
    //接收到服务器端的数据
    wx.onSocketMessage(function(res){
      console.log(res);
      that.setData({
        responseString:res.data
      });
      
    })
    //错误事件的回调
    wx.onSocketError(function (err) {
      console.log(err);
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
    //建立连接
    wx.connectSocket({
      url: 'ws://121.40.165.18:8800',
    })
    //判断连接是否成功
    wx.onSocketOpen(() => {
      console.log('success');
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //关闭socket连接
    wx.closeSocket({})
    wx.onSocketClose(function () {
      console.log('socket已经关闭');
    })
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