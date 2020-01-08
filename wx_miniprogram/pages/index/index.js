// pages/index/index.js
Page({
  chooseImages:[],
  /**
   * 页面的初始数据
   */
  data: {
    updateImage:''
  },
  /**
   * 获取图片
   */
  chooseImage () {
    let that = this;
    wx.chooseImage({
      count:4,
      success: function(res) {
        // console.log(res);
        that.chooseImages = res.tempFilePaths;
        that.setData({
          updateImage:res.tempFilePaths
        });

      },
    })
  },
  /**
   * 获取图片信息
   */
  getImageInfo () {
    let that = this;
    wx.getImageInfo({
      src: that.chooseImages,
      success (res) {
        // console.log(res);
      }
    })
  },
  /**
   * 预览图片
   */
  previewImage () {
    let that = this;
    wx.previewImage({
      urls: [that.chooseImages[0]],
      current:0
    })
  },
  download () {
    
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