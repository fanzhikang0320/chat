// pages/backgroundAudio/backgroundAudio.js
const audioUrl = '../../sound/newYear.mp3';


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 播放
   */
  play() {
    wx.playBackgroundAudio({
      dataUrl: audioUrl,
      title:'最甜情歌',
      coverImgUrl:'../../images/22.png',
      success () {
        console.log('success');
      },
      fail () {
        console.log('fail');
      }
    });
    wx.onBackgroundAudioPlay(() => {
      console.log('开始播放歌曲');

    });
  },
  /**
   * 暂停
   */
  pause () {
    wx.pauseBackgroundAudio();
    wx.onBackgroundAudioPause( () => {
      console.log('暂停播放');
    });
  },
  /**
   * 停止
   */
  stop () {
    wx.stopBackgroundAudio();
    wx.onBackgroundAudioStop(() => {
      console.log('停止播放');
    });
  },
/**
 * 指定从第几秒播放
 */
  seek () {
    wx.seekBackgroundAudio({
      position: 20,
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