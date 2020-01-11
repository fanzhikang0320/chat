// pages/captureScreen/captureScreen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userCaptureScreen:'用户没有截屏'
  },
  addPhone () {
    wx.addPhoneContact({
      firstName: '张三',
      nickName:'Mr.zhang',
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
    let that = this;
    //监测用户截屏
    wx.onUserCaptureScreen(function(res){
      that.setData({
        userCaptureScreen:'用户截屏'
      });
      //长震动反馈
      wx.vibrateLong({
        success: function () {
          wx.showToast({
            title: '截屏成功',
            duration:500
          })
        }
      })
      // wx.vibrateShort({
      //   success: function () {
      //     wx.showToast({
      //       title: '截屏成功',
      //       duration: 1000
      //     })
      //   }
      // })
    })
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