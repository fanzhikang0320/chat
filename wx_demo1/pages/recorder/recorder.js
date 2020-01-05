// pages/recorder/recorder.js
//麦克风帧动画
function speaking () {
  let that = this;
  let i =  1;
  this.timer = setInterval(function () {
    i++;
    i = i % 5;
    that.setData({
      j:i
    });
  },200);
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    voices:[],
    isSpeaking:false,
    j:1//帧动画的初始展示的图片
  },
  /**
   * 按下录音的时候
   */
  touchdown () {
    // console.log('按下录音');
    let that = this;
    speaking.call(this);
    this.setData({
      isSpeaking:true
    });

  //开始录音
    wx.startRecord({
      success: function (res) {
        let tempFilePath = res.tempFilePath;//获取临时存储的路径
        console.log(tempFilePath);
        // 保存
        wx.saveFile({
          tempFilePath: tempFilePath,
          success: function (res) {
            //本地文件的存储大小限制是100Mb
            let savedFilePath = res.savedFilePath;//获取永久的存储路径
            console.log(savedFilePath)
          }
        })

        // 成功后的提示
        wx.showToast({
          title: '录音成功',
          icon:'success',
          duration:1000
        })
        // 获取录音音频列表
        wx.getSavedFileList({
          success:function (res) {
            let voice = [];
            for (let i = 0 ; i < res.fileList.length ; i++) {
              //格式化时间
              let createTime = new Date(res.fileList[i].createTime);
              //将音频单位b转换为kb
              let size = (res.fileList[i].size / 1024).toFixed(2);
              //建立对象存储于voices
              let voicesObj = {
                filePath:res.fileList[i].filePath,
                createTime:createTime,
                size:size
              };
              voices = voices.concat(voicesObj);
              that.setData({
                voices:voices
              });
            }
          }
        })


      }
    })
  },
  
  /**
   * 松开录音的时候
   */
  touchup () {
    // 录音停止
    console.log('松开录音');
    // 关闭麦克风
    this.setData({
      isSpeaking:false
    });
    clearInterval(this.timer);
    wx.stopRecord();
  },
  /**
   * 选择播放
   */
  gotoplay (e) {
    console.log(e.currentTarget.dataset.key);
    let currentFilePath = e.currentTarget.dataset.key;
    
    //点击播放提示框
    wx.showToast({
      title: '开始播放',
      icon:"success",
      duration:1000
    })
    //播放当前点击的录音
    wx.playVoice({
      filePath: currentFilePath,
      success () {
        wx.showToast({
          title: '播放结束',
          icon:'success',
          duration:1000
        })
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