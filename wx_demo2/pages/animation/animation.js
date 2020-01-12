// pages/animation/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start:"北京",
    end:"深圳",
    lAnimation:'',
    rAnimation:''
  },
  trigger () {
    let that = this;
    let option = {
        duration:100,
        timingFunction:'ease-in'
    };
    //创建动画对象
    let lAnimation = wx.createAnimation(option);
    let rAnimation = wx.createAnimation(option);
    //动画开始-起点动画
    lAnimation.translateX(100);
    lAnimation.opacity(0.1).step(); 
    //终点动画
    rAnimation.translateX(-100);
    rAnimation.opacity(0.1).step();
    //设置
    that.setData({
      lAnimation:lAnimation.export(),
      rAnimation:rAnimation.export()
    });

    //第二段动画开始
    setTimeout(function () {
      // 起点
      lAnimation.translateX(0);
      lAnimation.opacity(1).step();
      //终点
      rAnimation.translateX(0);
      rAnimation.opacity(1).step();
      let temp = that.data.start;
      that.setData({
        lAnimation:lAnimation.export(),
        rAnimation:rAnimation.export(),
        end:temp,
        start:that.data.end
      });
    },100);

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