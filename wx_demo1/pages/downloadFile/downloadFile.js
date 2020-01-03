// pages/downloadFile/downloadFile.js
Page({
  filePath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578052051388&di=5c1081504ee6e9c6e63371ada33fed6a&imgtype=0&src=http%3A%2F%2Fdimg04.c-ctrip.com%2Fimages%2Fvacations%2Fimages2%2F290%2F1354%2F1354_59_s30663_C_500_280.jpg',
  /**
   * 页面的初始数据
   */
  data: {
    imgSrc:'',
    per:''
  },
  /**
   * 下载文件
   */
  downloadFile () {
    let that = this;
    this.downloadTask = wx.downloadFile({
      url:this.filePath,
      success: function (res) {
        console.log('success',res);
        if (res.statusCode == 200) {
          console.log(res.tempFilePath);
          that.setData({
            imgSrc:res.tempFilePath
          });
        }
      },
      fail: function (res) {
        console.log('fail',res);
      },
      complete: function (res) {
        console.log('complete');
      }
    })
    this.downloadTask.onProgressUpdate((res) => {
      console.log('下载进度百分比',res.progress);
      console.log('已经下载数据长度',res.totalBytesWritten);
      console.log('预期下载数据总长度',res.totalBytesExpectedToWrite);
      that.setData({
        per: res.totalBytesWritten / res.totalBytesExpectedToWrite * 100
      });
    })
  },
  /**
   * 取消下载
   */
  downloadFileAbort () {
    this.downloadTask.abort();
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