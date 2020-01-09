// pages/wifi/wifi.js
Page({
  wifiName:'',
  wifiPassword:'',
  /**
   * 页面的初始数据
   */
  data: {
    wifiList:[]
  },
  /**
   * 连接wifi
   */
  connectWifi (e) {
    // console.log(res);
    this.wifiName = e.detail.value.wifiName;//获取用户输入的wifiName
    this.wifiPassword  = e.detail.value.wifiPassword;//获取用户输入的wifiPassword
    let that = this;
    //检测手机型号，获取当前手机信息（并不是所有手机都支持）
    wx.getSystemInfo({
      success: function(res) {
        let system = '';
        // console.log(res);
        if (res.platform == 'android') {
          system = parseInt(res.system.substr(8));
        } else if (res.platform == 'ios') {
          system = parseInt(res.system.substr(4));
        } else if (res.platform == 'android' && system < 6) {
          //提示手机不支持
          wx.showToast({
            title: '当前手机版本不支持',
          })
          return;
        } else if (res.platform == 'ios' && system < 11.2) {
          wx.showToast({
            title: '当前手机版本不支持',
          })
          return;
        }

        //初始化wifi模块
        that.initWifi ();
      },
    })
  },

  // 初始化wifi模块
  initWifi () {
    let that = this;
    wx.startWifi({
      success:function (res) {
        that.connectWifi();
      },
      fali: function () {
        wx.showToast({
          title: '接口调用失败，建议重启后再试'
        })
      }
    })
  },
  //连接wifi
  connectWifi () {
    let that = this;
    wx.connectWifi({
      SSID: that.wifiName,//wifi账户
      password:that.wifiPassword,//wifi密码
      success:function (res) {
        wx.showToast({
          title: 'wifi连接成功',
          duration:1000
        })
      },
      fail: function () {
        wx.showToast({
          title: 'wifi连接失败！',
          duration:500
        })
      }
    })
  },
  /**
   * 搜索附近wifi
   */
  searchWifi () {
    //获取手机信息
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        let isAndroid = res.platform;
        if (isAndroid) {
          that.startWifi();
        } else {
          wx.showModal({
            title: '提示',
            content: '请手动开启wifi，避免功能无法正常使用',
            showCancel:false,
            success: function () {
              //开启wifi搜索
              that.startWifi();
            },
            fali: function () {
              wx.showToast({
                title: '功能无法正常使用！',
              })
            }
          });
        }
      },
    })
  },

  /**
   * 开启wifi
   */
  startWifi () {
    let that = this;
    wx.startWifi({
      success: function () {
        that.getWifiList();//获取wifi列表
      },
      fail: function () {
        wx.showToast({
          title: '无法开启wifi，请重试',
          duration:500
        })
      }
    })
  },
  /**
   * 获取wifi列表
   */
  getWifiList () {
    let that = this;
    console.log('getWifiList');
    wx.getWifiList({
      
      success: function (res) {
        //监控所得到的wifi列表
        console.log('success');
        wx.onGetWifiList((res) => {
          const wifiList = res.wifiList.map(function (wifi) {
            const strength = Math.ceil(wifi.signalStrength * 4);
            return Object.assign(wifi,{ strength });
          });
          console.log(res);
          console.log(wifiList);
        });
        that.setData({
          wifiList: wifiList
        });
      },
      fali: function () {
        console.log('fail');
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