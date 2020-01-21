// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expressList:['申通','圆通','EMS'],
    kuaidiListCode: ['shentong','yuantong','ems'],
    index: 0,
    orderCode: '',
    current: {
      context:'到达河南省',
      time: '2020-01-01'
    },
    orderCodeList: []
  },
  // picker操作
  bindPickerChange (e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    });
  },
  /**
   * 获取订单号
   */
  getOrderCode (e) {
    this.setData({
      orderCode: e.detail.value
    });
  },
  /**
   * 查询订单信息
   */
  searchOrderInfo () {
    let kuaidiUrl = 'http://www.kuaidi100.com/query?type=' + this.data.kuaidiListCode[this.data.index] + '&postid=' + this.orderCode;
    let that = this;
    wx.request({
      url: kuaidiUrl,
      success: function (res) {
        // console.log(res);
        that.setData({
          orderCodeList: res.data.data,
          current: {
            context: res.data.data[0].context,
            time: res.data.data[0].time
          }
        });
        
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