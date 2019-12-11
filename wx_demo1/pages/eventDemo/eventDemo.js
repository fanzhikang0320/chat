// pages/eventDemo/eventDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swierRpxHeight:0,
    navigatorList:[
      {
        title:'王者荣耀'
      },
      {
        title: 'QQ飞车'
      },
      {
        title: '穿越火线'
      },
      {
        title: '逆战'
      },
      {
        title: '梦幻三国'
      },
      {
        title: 'QQ炫舞'
      },
      {
        title: '跑跑卡丁车'
      },
      {
        title: '阴阳师'
      }
    ],
    currentTab:0,//控制轮播图默认展示第几页
    defaultNavColor: ['color-pink', 'color-pink', 'color-pink', 'color-pink', 'color-pink']
  },
  campusActive (e) {
    // console.log(e);
    let newNavColor = [];
    let index = e.currentTarget.dataset.index;//获取当前点击的索引值，在wxml中利用data-xxx的形式
    // console.log(index);
    for (let i = 0; i < this.data.defaultNavColor.length; i++) {
      
      if (index == i) {
        newNavColor.push('color-yellow');
      } else {
        newNavColor.push('color-pink');
      }
    }
    this.setData({
      currentTab:index,
      defaultNavColor:newNavColor
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        // console.log(clientHeight,clientWidth);系统给出的宽高单位是px，需要转化为rpx
        let ratio = 750 / clientWidth;//算出比例值，用于得出rpx
        let rpxHeight = clientHeight * ratio;
        // console.log(rpxHeight);
        that.setData({
          swiperRpxHeight:rpxHeight
        });
      },
    })
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