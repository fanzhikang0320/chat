// pages/accelerated/accelerated.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:'/image/yao.jpg',
    loading:'/image/loading.gif',
    hasResult:null,
    bar_state: 0,
    winWidth: 0,
    winHeight: 0
  },
  /**
   * 摇一摇
   */
  startAnimation () {
    let that = this;
    //x轴的位移
    let h1 = '35%';
    let h2 = '65%';

    if (this.data.bar_state == 1) {
      h1 = '40%';
      h2 = '40%';
      setTimeout(function () {
        that.setData({
          bar_state:0,
          hasResult:0
        });
        setTimeout(function () {
          that.setData({
            hasResult:1
          });
        },3000);
      },500);
    } else {
      h1 = '25%';
      h2 = '55%';
      this.setData({
        bar_state:1
      });
      setTimeout(function () {
        that.startAnimation();
      },600);
    };

    //动画调用
    this.animation1.height(h1).step();
    this.animation2.top(h2).step();
    this.setData({
      animation1: that.animation1.export(),
      animation2: that.animation2.export()
    });
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
    let that = this;
    that.initAnimation();//初始化动画

    //重力加速度
    wx.onAccelerometerChange(function(res){
      console.log(res);
      if (res.x > 7 && res.y > 7) {
        wx.showToast({
          title: '摇一摇',
          icon:'success',
          duration:2000
        });
        that.startAnimation();
      }
    });

    //获取系统信息
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight:res.windowHeight
        });
      },
    })

  },
  // 初始化动画
  initAnimation () {
    let that = this;
    //实例化动画效果
    this.animation1 = wx.createAnimation({
      //动画持续时间
      duration:400,
      timingFunction:'ease',//运行轨迹方式
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res);
      }
    });
    this.animation2 = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
      transformOrigin: 'left top 0',
      success : function (res) {
        console.log(res);
      }
    })
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