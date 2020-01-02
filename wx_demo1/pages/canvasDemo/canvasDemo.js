// pages/canvasDemo/canvasDemo.js
Page({

  /**
   * 页面的初始数据
   */
  //定义起始点x，y坐标
  startX:0,
  startY:0,
  isClear:false,//是否启用橡皮擦标记

  data: {
    penWidth:3,//画笔的粗细
    color:'#345234',//画笔的颜色
  },
  //选取笔的粗细
  penSelect (e) {
    let newPenWidth = parseInt(e.currentTarget.dataset.param);
    this.setData({
      penWidth:newPenWidth
    });
    this.isClear = false;
  },
  // 选取笔的颜色
  colorSelect (e) {
    let newColor = e.currentTarget.dataset.param;
    this.setData({
      color:newColor
    });
    this.isClear = false;
  },
  //橡皮擦
  clearCanvas (e) {
    if (this.isClear) {
      this.isClear = false;
    } else {
      this.isClear = true;
    }
  },
  //开始触摸屏幕
  touchStart (e) {
    this.startX = e.changedTouches[0].x;
    this.startY = e.changedTouches[0].y;
    //创建画板上下文
    this.context = wx.createContext();
    //判断是否启用橡皮擦功能
    if (this.isClear) {
      //启用时
      this.context.setStrokeStyle('#e6dcdc');//将画笔设置为画布的背景色
      this.context.setLineCap('round');
      this.context.setLineJoin('round');//设置两条线交叉处的样式
      this.context.setLineWidth(20);
      this.context.save();//保存当前坐标轴的缩放，旋转，平移信息
      this.context.arc(this.startX,this.startY,5,0,2 * Math.PI,true);//添加一个弧形路径到当前路径，是一个顺时针的绘制过程，这里总共画360度，圆形
      this.context.fill();//对当前的路径进行填充
      this.context.restore();//恢复之前保存过的坐标轴缩放，旋转，平移信息
    } else {
      this.context.setStrokeStyle(this.data.color);//设置画笔颜色
      this.context.setLineWidth(this.data.penWidth);//设置画笔粗细
      this.context.setLineCap('round');//设置线头两端为圆角
      this.context.beginPath();
    }

  },
  // 屏幕上面移动时
  touchMove (e) {
    let currentX = e.changedTouches[0].x;
    let currentY = e.changedTouches[0].y;
    // if (this.isClear) {
      this.context.save();
      this.context.moveTo(this.startX,this.startY);//绘制的起始点坐标
      this.context.lineTo(currentX,currentY);//绘制的终点坐标
      this.context.stroke();//对当前路径进行描边
      this.context.restore();//恢复之前的保存过的坐标轴缩放，旋转，平移信息

      // 更新当前的起始点坐标
      this.startX = currentX;
      this.startY = currentY;
    // }
  // console.log(e);
    wx.drawCanvas({
      canvasId:'myCanvas',//需要在哪个画板上进行绘制
      reserve:true,
      actions:this.context.getActions()//获取绘图动作数组
    });
  },
  // 触摸屏幕结束
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