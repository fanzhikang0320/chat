// pages/compass/compass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    direction:'----',
    angle:'----',
    rotate:''
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //
    let that = this;
    wx.onCompassChange(function(res){
      // console.log(res);
      let direction = res.direction.toFixed(2);
      let radios = res.direction.toFixed(0);
      that.setData({
        angle:direction,
        rotate:360 - radios,
        direction:this.check(radios)
      });
    });
    //判断手机是否有罗盘
    setTimeout(function () {
      if (that.data.direction == '----' && that.data.angle == '----') {
        wx.showToast({
          title: '手机没有罗盘，无法使用该功能',
          icon:'fail',
          duration:2000,
          mask:true
        })
      }
    },3000);
  },
  /**
   * 判断方向
   */
  check (res) {
    if (15 < res && res <= 75) {
      return '东北'
    } else if (75 < res && res <= 105) {
      return '正东'
    } else if (105 < res && res<= 165) {
      return '东南'
    } else if (165 < res && res <= 195) {
      return '正南'
    } else if (195 < res && i <= 255) {
      return '西南'
    } else if (255 < res && res <= 285) {
      return '正西'
    } else if (285 < res && res <= 345) {
      return '西北'
    } else if (res <= 15 && res >= 345) {
      return '正北'
    }
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
    return {
      title:'我现在面向' + this.data.direction + '方向，点我使用迷你指南针，为你指引方向',
      path:'/pages/compass/compass'
    }
  }
})