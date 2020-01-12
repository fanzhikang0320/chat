// pages/mutual/mutual.js
Page({
  menuList:['学校','家庭','公司','网吧'],
  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * showToast不需要人为参与
   */
  showToastEvent () {
    wx.showToast({
      title: 'This is showToast!',
      icon:'success',//success,none,loading
      image:'/image/loading.gif',//当image和icon属性同时出现的时候，image的优先级高于icon
      duration:1500,
      mask:false,
      success: function (res) {
        console.log('success');
      },
      fail: function () {
        console.log('fail');
      },
      complete: function () {
        console.log('complete');
      }
    })
  },
  showModalEvent () {
    wx.showModal({
      title: 'This is showModal!',
      content: '确定要删除吗？',
      showCancel:true,//是否需要隐藏取消按钮
      cancelText:'返回',//取消按钮显示的字体
      cancelColor:'#f40',//
      confirmText:'ok',
      confirmColor:'green',
      success: function (res) {
        console.log(res);//返回用户点击的哪个按钮
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    })
  },
  showLoadingEvent () {
    wx.showLoading({
      title: 'loading...',
      mask:false,
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {},
      complete: function (res) {}
    });
    setTimeout(function () {
      wx.hideLoading({
        success: function () {},
        fail: function () {},
        complete: function (){}
      });
    },3000);
  },
  showActionSheetEvent () {
    let that = this;
    wx.showActionSheet({
      itemList: that.menuList,
      itemColor:'#0000ff',
      success: function (res) {
        console.log('success',res);
        //返回结果：{errMsg: "showActionSheet:ok", tapIndex: 0}
      },
      fail: function (res) {
        console.log('fail',res);
      },
      complete: function (res) {
        console.log('complete',res);
        //{errMsg: "showActionSheet:ok", tapIndex: 0}
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