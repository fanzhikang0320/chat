// pages/channelList/channelList.js

const db = wx.cloud.database({ env: 'cloud990320' }); //创建数据库对象
const channelListObj = db.collection('channelList'); //连接操作所需的表
const channelMenuObj = db.collection('channelMenu');

const _cmd = db.command;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    channelADArr: [],
    programList: []
  },
  /**
   * 栏目介绍
   */
  programInfo (e) {
    wx.setStorage({
      key: 'programDescription',
      data: this.data.programList[e.currentTarget.dataset.id],
      success: res => {
        wx.navigateTo({
          url: '/pages/programInfo/programInfo',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  id: -1,
  onLoad: function (options) {
    // console.log(options);
    this.id = options.channelId; //接收传进来的id
    this.channelName = options.channelName; //接收传过来的卫视名称
    // 根据传进来的卫视名称去数据库找到对应的值
    this.getChannelNameById(this.channelName);
  },

  /**
   * 查找卫视名称
   */
  getChannelNameById (name) {
    let that = this;
    channelMenuObj.where({
      data: {
        channelName: name
      }
    }).get().then(res => {
      // console.log(res);
      // return;
      that.setData({
        channelADArr: res.data[0].channelAD,
        programList: res.data[0].programList
      });



    }).catch(console.error);
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