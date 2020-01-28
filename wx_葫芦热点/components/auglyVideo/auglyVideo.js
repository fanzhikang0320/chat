// components/auglyVideo/auglyVideo.js
// const config = require('/utils/config.js');
const config = require('../../utils/config.js');
let app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoList: {
      type: Array,
      value: []
    },
    aps: {
      type: Object,
      value: {
        isShow: null
      }
    },
    playIndex: {
      type: null,
      value: null
    },
    page: {
      type: String,
      value: 'index'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 播放视频
     */
    myVideoPlay(e) {
      var videpList = this.data.videoList;
      var index = e.currentTarget.dataset.playIndex;
      var id = e.currentTarget.id;
      config.ajax(
        'POST',
        {id: id},
        config.videoPlay,
        (res) => {
          if (res.data.statusMsg == 'success') {
            videoList[index].videoUrl = res.data.data;
            if (!this.data.playIndex) {
              //没有播放视频时
              this.setData({
                videoList: videoList,
                playIndex: index,
                playid: id
              });
              var videoContext = wx.createVideoContext('myVideo' + id, this);
              videoContext.play();
            } else {
              //有播放时先将prev暂停到0s，再播放当前点击的
              var videoContext = wx.createVideoContext('myVideo' + this.data.playid, this);
              videoContext.seek(0);
              videoContext.pause();
              this.setData({
                videoList: videoList,
                playIndex: playIndex,
                playid: id
              });
              var videoContextCurrent = wx.createVideoContext('myVideo' + this.data.playid, this);
              videoContextCurrent.play();

            }
            var myEventDetail = {
              playIndex: this.data.playIndex,
              playid: this.data.playid,
              videoContextCurrent: videoContextCurrent,
              videoContext: videoContext
            };
            var myEventOption = {

            };
            //自定义组建的映射，触发事件的选项
            this.triggerEvent('videoPlay',myEventDetail,myEventOption);
          }
          
        }
      );
    },
  }
})
