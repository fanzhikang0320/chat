// pages/doodle/doodle.js
Page({

  /**
   * 页面的初始数据
   */
  startX: 0,
  startY: 0,
  data: {
    pen:2,
    color:'#345234'

  },
  //选取笔的粗细
  penSelect (e) {
    this.setData({
      pen:parseInt(e.currentTarget.dataset.param)
    });
  },

  //选取笔的颜色
  colorSelect (e) {
    this.setData({
      color:e.currentTarget.dataset.param
    });
  },
  //触摸开始
  touchStart (e) {
    // 获取当前坐标位置
    // console.log(e);
    this.startX = e.changedTouches[0].x;//获取当前点击的x坐标
    this.startY = e.changedTouches[0].y;//获取当前点击的y坐标

    // 创建绘图上下文对象
    this.context = wx.createContext();
    this.context.setStrokeStyle(this.data.color);//设置画笔的颜色
    this.context.setLineWidth(this.data.pen);//设置画笔的宽度
    this.context.setLineCap('round');//设置画笔两端为圆角
    this.context.beginPath();//开始绘制

  },
  // 触摸移动
  touchMove (e) {
    var currentX = e.changedTouches[0].x;//获取移动后的x坐标
    var currentY = e.changedTouches[0].y; //获取移动后的y坐标
    //绘制起始点
    this.context.moveTo(this.startX,this.startY);
    // 绘制终点
    this.context.lineTo(currentX,currentY);
    //绘制实线（内存中完成）
    this.context.stroke();
    // 更新起始点
    this.startX = currentX;
    this.startY = currentY;
    
    wx.drawCanvas({
      canvasId:'myCanvas',
      reserve:true,//是否存储
      actions:this.context.getActions()//获取绘图动作的数组
    });
  },
  // 触摸结束
  touchEnd (e) {

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