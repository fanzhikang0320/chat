// pages/phoneCallTask/phoneCallTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    btnDisabled: false,
    btnValue: '',
    name: '',
    phone: '',
    code: '',
    seconde: 60
  },
  /**
   * 获取输入姓名
   */
  bindNameInput (e) {
    let name = e.detail.value;
    this.setData({
      name: name
    });
  },
  /**
   * 获取输入手机号
   */
  bindPhoneInput (e) {
    let phone = e.detail.value;
    this.setData({
      phone: phone
    });
    if (phone != '') {
      this.setData({
        hidden: false,
        btnValue: '获取验证码'
      });
    } else {
      this.setData({
        hidden: true
      });
    }
  },
  /**
   * 获取输入验证码
   */
bindCodeInput (e) {
  let code = e.detail.value;
  this.setData({
    code: code
  });
},
/**
 * 获取验证码
 */
  getCode () {
    let that = this;
    //先去确认渠道商的短信通道是否已经开通 
  },




  /**
   * 获取需要拨打的电话
   */
  callPhone: '',
  callPhoneInput (e) {
    // console.log(e.detail.value);
    this.callPhone = e.detail.value; 
  },
  /**
   * 拨打电话
   */
  makeCallPhone () {
    let that = this;
    wx.makePhoneCall({
      phoneNumber: that.callPhone,
      success: function (res) {
        console.log('success',res);
      },
      fail : function (res) {
        console.log('fail',res);
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