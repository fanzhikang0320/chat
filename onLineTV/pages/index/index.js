// pages/index/index.js

const db = wx.cloud.database({env: 'cloud990320'}); //创建数据库对象
const channelListObj = db.collection('channelList'); //连接操作所需的表
const _cmd = db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    channelLists: []
  },
  /**
   * 电视频道跳转
   */
  goToTVChannel (e) {
    let id = e.currentTarget.dataset.id;
    let channelName = e.currentTarget.dataset.channelname;
    wx.navigateTo({
      url: '/pages/channelList/channelList?channelId=' + id + '&channelName=' + channelName,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //云数据库字段的加载
    let that = this;
    channelListObj.get().then(res => {
      // console.log(res.data);
      that.setData({
        channelLists: res.data
      });
    });
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