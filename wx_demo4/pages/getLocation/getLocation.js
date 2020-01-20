// pages/getLocation/getLocation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    locationPath: ''
  },
  /**
   * 获取当前位置
   */
  getLocation () {
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        // console.log(res);
        //显示中文位置，获取腾讯地理位置api操作
        wx.request({
          url: 'http://api.go2map.com/engine/api/regeocoder/json?points='+res.longitude + ',' + res.latitude + '&type=1',
          success: function (res) {
            // console.log(res);
            let locationPath = res.data.response.data[0].address;
            that.setData({
              locationPath: locationPath
            });
          }
        })
      },
    })
  },

  /**
   * 获取发票抬头信息
   */
  getInvoiceTitle () {
    wx.chooseInvoiceTitle({
      success: function (res) {
        console.log(res);
      }
    })
  },
  /**
   * 获取已经开具过的发票信息
   * 只能在真机上操作
   */
chooseInvoice () {
  wx.chooseInvoice({
    success: function (res) {
      console.log(res);
    }
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