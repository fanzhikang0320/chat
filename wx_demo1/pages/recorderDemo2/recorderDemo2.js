// pages/recorderDemo2/recorderDemo2.js

const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();


Page({
  
  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 开始录音
   */
  start () {
    const options = {
      duration:10000,//录音时长
      sampleRate:16000,//采样率
      numberOfChannels:1,//录音通道数
      encodeBiRate:96000,//编码采样率
      format:'mp3',//设置音频格式，有效值aac/mp3
      frameSize:50,//指定帧大小，单位：kb
    };
    //开始录音
    recorderManager.start(options);
    //监测开始录音
    recorderManager.onStart(function () {
      console.log('开始录音。。。');
    });
    // 当录音出错的时候
    recorderManager.onError(function (res) {
      console.log('录制出错',res);
    });

  },
  // 停止录音
  stop () {
    recorderManager.stop();
    recorderManager.onStop(function (res) {
      console.log('停止录音。。。');
      this.tempFilePath = res.tempFilePath;
    });
  },
  play () {
    innerAudioContext.autoplay = true;
    innerAudioContext.src = this.tempFilePath;
    innerAudioContext.onPlay(function () {
      console.log('开始播放');
    });
    innerAudioContext.onError(function (err) { 
      console.log('播放出错',err);
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