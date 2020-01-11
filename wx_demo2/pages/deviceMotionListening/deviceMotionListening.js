  // pages/deviceMotionListening/deviceMotionListening.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screen:'正面',
    alpha:0
  },
  startScreenClick () {
    wx.startDeviceMotionListening ({
      success: function (res) {
        // console.log('start',res);
      }
    })
  },
  endScreenClick () {
    wx.stopDeviceMotionListening({
      success: function (res) {
        // console.log('end',res);
      },
      fail: function (err) {
        console.log(err);
       }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.onDeviceMotionChange (res => {
      let screen = '正面';
      let alpha = parseFloat(res.alpha);
      console.log('alpha:',res);
      if (alpha > 45 && alpha < 136) {
        screen = '左侧';
      } else if (alpha > 225 && alpha < 316) {
        screen = '右侧';
      } else if (alpha > 135 && alpha < 226) {
        screen = '反面';
      } else {
        screen = '正面';
      };

      // 数据绑定到data
      that.setData({
        screen,
        alpha
      });
    })
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