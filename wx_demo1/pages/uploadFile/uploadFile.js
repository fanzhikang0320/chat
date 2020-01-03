// pages/uploadFile/uploadFile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 上传文件
   */
  uploadFile () {
    //选择图片
    wx.chooseImage({
      success: function(res) {
        //获取选择的图片的临时存储路径
        const tempFilePath = res.tempFilePaths;

        const uploadFileTask = wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload',
          filePath:tempFilePath,
          name: 'pic1',
          success: function (res) {
            console.log('success', res);
          },
          fail: function (res) {
            console.log('fail', res);
          },
          complete: function (res) {
            console.log('回调函数');
          },
        })
      },
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