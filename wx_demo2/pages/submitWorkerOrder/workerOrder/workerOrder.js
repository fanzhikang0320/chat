// pages/submitWorkerOrder/workerOrder/workerOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  blur () {
    // wx.hideNavigationBarLoading();
    wx.setNavigationBarTitle({
      title: '提交工单',
    })
  },
  input () {
    // wx.showNavigationBarLoading();
    wx.setNavigationBarTitle({
      title: '用户正在输入...',
    })
  },
  formSubmit (e) {
    // console.log(e);
    let workerOrderTitle = e.detail.value.workerOrderTitle;
    let workerOrderContent = e.detail.value.workerOrderContent;
    // 把数据存于本地缓存
    wx.setStorage({
      key: 'workerOrder',
      data:{
        'title': workerOrderTitle,
        'content': workerOrderContent
      },
      success: function () {
        wx.showToast({
          title: '工单已提交',
          icon:'success',
          duration:1000,
          success: function (res) {
            //跳转到首页
            setTimeout(function () {
              wx.redirectTo({
                url: '/pages/submitWorkerOrder/submitWorkerOrder',
              })
            },1000);
            
          }
        })
      }
    });
    //省略向服务器发送
    // wx.request({
    //   url: '',
    //   data: {},
    //   method:'GET',
    //   success: function (res) {

    //   }
    // })

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