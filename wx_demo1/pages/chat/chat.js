// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'微信',
    headLeft:'http://img0.imgtn.bdimg.com/it/u=2806989148,1612705122&fm=26&gp=0.jpg',
    headRight:'',
    says:[]
  },
  /**
   * 发送事件处理函数
   */
  coverSation (e) {
    // console.log(e);
    let obj = {},
    that = this,
    isay = e.detail.value.says,
    says = this.data.says,
    length = says.length,
    key = "";//在线聊天的机器

    wx.request({
      url: 'http://www.tuling123.com/openapi/api?key=' + key + '&info=' + isay,
      success: function (res) {
        // console.log('success',res);
       obj.robot = res.data.text;
       obj.isay = isay;
       says[length] = obj;
       that.setData({
         says:says
       });
      },
      fail: function (res) {
        console.log(res);
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
    let that = this;
    //获取用户信息
    wx.getUserInfo({
      success: function (e) {
        // console.log(e);
        that.setData({
          headRight:e.userInfo.avatarUrl
        });
      }
    })
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