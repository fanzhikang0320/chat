// pages/index/index.js
var app = getApp();
var page = 1;
const config = require('../../utils/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSubscibe: false,
    mask: true,
    nodata: false,
    hotWord: [],
    videoList: [],
    page: 'index',
    playIndex: null
  },
  myVideoPlay (e) {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    //用户登录
    wx.login({
      success: res => {
        // console.log(res);
        // res.code
        config.ajax(
          'POST',
          {wxcode: res.code},
          config.wxLogin,
          (res) => {
            app.globalData.openid = res.data.data.openId;
            config.ajax(
              'POST',
              {openid: res.data.data.openId},
              config.isSubscibe,
              (res) => {
                that.setData({
                  isSubscibe: res.data.data
                });
                app.globalData.isSubscibe = res.data.data
              },
              (res) => {},
              (res) => {}
            );
        })
      },
      fail: res => {},
      complete: res => {}
    });
    page = 1;
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    });
    //获取组件实例
    this.videoGroup = this.selectComponent('#videoGroup');
    this.getVideoList();
  },
  /**
   * 发送请求，获取视频列表
   */
  getVideoList (art) {
    if (art == undefined || art == null || art == '') {
      var hotWordsId = '';
    } else {
      var hotWordsId = art;
    }
    var params = {
      hotWordsId: hotWordsId,
      page: page,
      limit: config.limit
    };
    //获取数据
    config.ajax(
      'POST',
      params,
      config.videoList,
      (res) => {
        if (this.data.videoList.length != 0) {
          if (page == 1) {
            this.setData({
              videoList: res.data.data.list
            });
          } else {
            this.setData({
              videoList: this.data.videoList.concat(res.data.data.list)
            });
          }
        } else {
          this.setData({
            videoList: res.data.data.list,
            mask: true
          });
        }
        if (res.data.data.list.length < config.limit) {
          this.setData({
            nodata: true,
            allnum: res.data.data.totalCount
          });
        }
        //取消loding
        wx.hideLoading();
      },
    );
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