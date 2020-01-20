// pages/wxLogin/wxLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 登录
   * 服务器地址需要在微信开发公众平台上去设置为合法域名
   */
  wxLogin () {
    this.login();
  },
  getCompInfo () {
    let that  = this;
    wx.getStorage({
      key: 'wxUserInfo',
      success: function(res) {
        let userOpenId = res.openId;
        let userSession_key = res.session_key;
        //验证登录状态
        wx.checkSession({
          success: function () {
            that.send(); //发送数据请求
          },
          fail: function () {
            //重新登陆
            that.login();
          }
        });
      },
    })
  },

  send () {
    wx.request({
      url: 'xxx服务器',
      data: {
        openId: userOpenId,
        session_key: userSession_key
      },
      success: function (res) {
        //业务处理
      },
      fail: function (res) {

      }
    })
  },
  login () {
    wx.login({
      success: function (res) {
        // console.log(res);
        //向服务器发送请求
        wx.request({
          url: 'xxx服务器',
          data: {
            code: res.code, //携带生成的code发送给服务器
          },
          success: function (res) {
            console.log('success', res);
            let openId = res.openId;
            let session_key = res.session_key;
            //存储登录状态到storage
            wx.setStorage({
              key: 'wxUserInfo',
              data: {
                openId: openId,
                session_key: session_key
              },
            })
          },
          fail: function (res) {
            console.log('fail', res);
          }
        })
      }
    })
  },
  getAppId () {
    const accountInfo = wx.getAccountInfoSync();
    console.log(accountInfo);
    console.log(accountInfo.miniProgram.appId);
  },
  /**
   * 获取用户信息
   */
  getUserInfo () {
    wx.getUserInfo({
      success: function (res) {
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