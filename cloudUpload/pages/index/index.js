// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filePath: ''
  },
  /**
   * 上传图片至云存储
   */
  uploadImg () {
    let that = this;
    //选择图片
    wx.chooseImage({
      success: function(res) {
        //获取图片临时路径
        let tempFilePaths = res.tempFilePaths[0];
        //上传
        that.setUploadImg(tempFilePaths);
      },
    })
  },
  /**
   * 上传文件至云存储
   */
  setUploadImg (path) {
    if (path == '') {
      wx.showToast({
        title: '参数错误',
        icon: 'none'
      });
      return ;
    }
    wx.cloud.uploadFile({
      cloudPath: 'image1.png',//云端存储文件的名称,自定义
      filePath: path, //文件路径
      config: {
        env: 'cloud990320'
      },
      success: res => {
        console.log('success',res);
      },
      fail: res => {
        console.log('error',res);
      }
    });
  },

  /**
   * 下载文件从云端
   */
  downloadImg (e) {
    let that = this;
    //获取云存储上的fileId
    let fileId = e.detail.value.cloudId;
    //判断输入框是否输入内容
    if (!fileId) {
      wx.showToast({
        title: '请输入id号',
        icon: 'none'
      });
      return ;
    }
    //执行下载操作
    wx.cloud.downloadFile({
      fileID: fileId,
      success: res => {
        // console.log(res);
        if (res.statusCode == 200) {
          that.setData({
            filePath: res.tempFilePath
          });
        }
      },
      fail: res => {
        wx.showToast({
          title: '抱歉，没有找到该图片',
          icon: 'none',
          duration: 1000
        })
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