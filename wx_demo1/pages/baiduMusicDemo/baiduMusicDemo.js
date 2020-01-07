// pages/baiduMusicDemo/baiduMusicDemo.js

Page({

  // 初始化操作
  onAudioState: () => {
    // console.log('ok1');
    let that = this;
    //监听play播放事件
    wx.onBackgroundAudioPlay(() => {
      console.log('ok3');
      //play被触发时
      that.setData({
        isPlaying: true,
        changeImg: true
      });
      console.log('onPlay');
    });
    //监听音乐暂停事件
    wx.onBackgroundAudioPause(() => {
      that.setData({
        isPlaying:false
      });

      console.log('onPause');
    });

    //监听音乐停止的时候
    wx.onBackgroundAudioStop(() => {
      that.setData({
        isPlaying:false,
        changeImg:false
      });
      console.log('onStop');
    });

  },

  onAudioTap () {
    
    if (this.data.isPlaying) {
        //当状态处于播放时,点击后应该是暂停
        wx.pauseBackgroundAudio();
    } else {
      //当状态处于暂停时，点击后应该是播放
      let music = this.data.music;
      wx.playBackgroundAudio({
        dataUrl: music.url,
        title:music.title,
        coverImgUrl:music.coverImg
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    isPlaying:false,//记录当前是否在播放
    changeImg:false,//记录图片播放和停止时显示的状态
    music:[
      {
        url:'http://music.163.com/#/song?id=1409329655',
        title:'最甜情歌',
        coverImg:'/images/11.png'
      }
    ]
  },
  /**
   * 快进或者慢进
   */
  onPositionTap (e) {
    //获取点击按钮
    let how = e.target.dataset.how;
    // console.log(how);
    //获取音乐的状态
    wx.getBackgroundAudioPlayerState({
      success (res) {
        console.log(res);
        if (res.status == 1) {
          //正在播放

          // 获取音乐总时长
          let duration = res.duration;
          //音乐播放位置
          let currentPosition  = res.currentPosition;
          //判断how
          if (how == "0") {
            //表示后退10s，如果当前秒数小于10s直接设置为1s
            let position = currentPosition - 10;
            if (position < 10) {
              position = 1;
            }
            wx.seekBackgroundAudio({
              position: position,
            })
            //给用户提示
            wx.showToast({
              title: '快退10s',
              duration:500
            })
          } else if (how == '1') {
            //快进，在当前播放位置添加10s，如果离总时长小于10s直接到最后剩余1s
            let position = currentPosition + 10;
            if (position > duration) {
              position = duration - 1;
            }
            wx.seekBackgroundAudio({
              position: position,
            });
            wx.showToast({
              title: '快进10s',
              duration:500
            })
          }
        } else {
          //非播放状态
          wx.showToast({
            title: '音乐未播放',
            duration:800
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //页面加载时，注册监听事件
    this.onAudioState();
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