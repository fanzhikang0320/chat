// pages/index/index.js
const scanType = {
  'WX_CODE':'微信小程序',
  'QR_CODE':'二维码',
  'EAN_8':'条形码'
};
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scanResult: {
      isShow: true,
      type: '',
      text: '',
      msg:''
    }
  },
  /**
   * 扫一扫
   */
  onScan () {
    let that = this;
    wx.scanCode({
      success: function (res) {
        console.log(res);
        let msg = '';
        if (res.scanType == 'WX_CODE' && res.result == '') {
          msg = '宝宝心里苦，但宝宝不说。。'
        };
        that.setData({
          isShow: true,
          type: scanType[res.scanType],
          text: res.result,
          msg
        });
        //存入缓存中
        if (that.data.scanCode !== '') {
          wx.getStorage({
            key: 'scanLogs',
            success: function(res) {
              // console.log(res);
              let scanLogs = res.data || [];
              that.scanResult.data = Data.now();
              scanLogs.unshift(that.data.scanResult);
              wx.setStorageSync('scanLogs', scanLogs)
            },
          })
        }

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