// pages/submitWorkerOrder/submitWorkerOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    title:'',
    content:''
  },
  /**
   * 用户按钮操作，唤起菜单
   */
  menuList:['在线提交','查看处理进度'],

  userOpt () {
    let that = this;
    wx.showActionSheet({
      itemList: that.menuList,
      itemColor:'#c9c9c9',
      success: function (res) {
        if (res.tapIndex == '0') {
          wx.navigateTo({
            url: '/pages/submitWorkerOrder/workerOrder/workerOrder'
          })
        } else {
          //初次加载，需要判断本页面是否
          wx.getStorage({
            key: 'workerOrder',
            success: function (res) {
              // console.log(res)
              //查看进度
              that.setData({
                isShow: !that.data.isShow
              });
              
            },
            fail: function (res) {
              wx.showModal({
                title: '提示',
                content: '您还没有任何工单哦~',
                showCancel: false
              })
            },
            complete: function () { 
              console.log('ok');
            }
          })
          

        }
      },
      fail: function (res) {},
      complete: function (res) {}
    });
    
  },
  /**
   * 催办进度 
   */
  urgent () {
    let that = this;
    wx.showToast({
      title: '以尽快为您送达',
      icon:"success",
      duration:1000,
      success: function () {
        console.log('成功加急');
      },
      fail: function () {
        wx.showToast({
          title: '操作失败！稍后再试'
        })
      },
      complete: function () {
        that.setData({
          isShow: that.data.isShow
        });
      } 
    })
  },

  /**
   * 清除工单
   */
  clearWorkerOrder () {
    // wx.clearStorage()
    wx.showModal({
      title: '警告',
      content: 'Are you sure reset!',
      showCancel: true,
      cancelText:'NO',
      cancelColor: '#f40',
      confirmText: 'OK',
      confirmColor: 'green',
      success: function (res) {
        if (res.confirm) {
          wx.removeStorage({
            key: 'workerOrder',
            success: function (res) {
              wx.showToast({
                title: '删除成功！',
                duration: 1000,
                success: function () {
                  setTimeout(function () {
                    wx.redirectTo({
                      url: '/pages/submitWorkerOrder/submitWorkerOrder',
                    })
                  },1000);
                }
              })
            },
          });
        }
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
    let that = this;
    //获取缓存数据
    wx.getStorage({
      key: 'workerOrder',
      success: function(res) {
        // console.log(res);
        that.setData({
          title: res.data.title,
          content: res.data.content
        });
      },
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