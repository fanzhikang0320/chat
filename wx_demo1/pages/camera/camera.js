// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'',
    show:false
  },
  // bindinitdone (e){
  //   console.log('相机初始化完成',e);
  // },
  takephoto (){
    const ctx = wx.createCameraContext();//获取相机对象
    let that = this;
    // 调用拍照方法
    ctx.takePhoto({
      quality:'high',//高质量
      success: (res) => {
        // console.log(res);
        that.setData({
          src:res.tempImagePath,//临时存储路径
          show:true
        }),

        //设置到缓存当中
        wx.setStorage({
          key: 'photoPeople',
          data: res.tempImagePath,
        }),

        //拍摄完成后，跳转到另一个页面进行展示图片，利用缓存读取路径信息
        wx.redirectTo({
          url: '/pages/camera/showPhoto',
        })
      },
      error: (error) => {
        console.log(error);
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