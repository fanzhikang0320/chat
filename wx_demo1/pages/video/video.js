// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'',
    danmuList:[
      {
        text:'这是我看的最厉害的',
        color:'green',
        time:1
      },
      {
        text:'真的6666',
        color:'#f49',
        time:2
      }
    ]
  }, 
  // 获取视频
  bindButtonTap () {
    let that = this;
    // 微信api
    wx.chooseVideo({
      sourceType:['album','camera'],//视频来源是否是照相机还是文件
      maxDuration:60,//播放最大时长
      camera:['front','back'],//摄像头使用前置还是后置
      success (res) {
        // console.log(res);
        that.setData({
          src:res.tempFilePath
        });

      }
    })
  },
  bindInputBlur (e) {
    console.log(e);
  },
  bindSendDanmu () {

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