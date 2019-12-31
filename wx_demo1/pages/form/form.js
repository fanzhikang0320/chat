// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    multiIndex:[0,0,0],
    country:['美国','中国','日本'],
    multiArray:[
      ['中国','美国','日本'],
      ['北京','河南'],
      ['周口市','南阳市']
    ],
    time:'9:00',
    slidervalue:0
  },
  //触发改变时间
  bindchangeTime (e) {
    console.log(e);
  },
  bindMultiPicker (e) {
    // console.log(e);
    this.setData({
      multiIndex:e.detail.value
    });
  },
  // 当列选择器发生改变时
  bindMultiPickerColumn (e) {
    console.log(e);
  },
  // 当单列选择器发生改变时
  bindPickerChange (e) {
    // console.log(e.detail.value);
    this.setData({
      index:e.detail.value
    });
  },
  handleSubmit (e){
    console.log(e);
  },
  handleReset (e){
    console.log(e);
  },
  bindchangeTime (e) {
    console.log(e);
    this.setData({
      time:e.detail.value
    });
  },
  bindchangedate (e) {
    this.setData({
      date:e.detail.value
    });
  },
  bindchangeregion (e) {
    this.setData({
      region:e.detail.value
    });
  },
  bindchangeslider (e){
    console.log(e);
    this.setData({
      slidervalue:e.detail.value
    });
    console.log(this.data.slidervalue);
  },
  bindchangeswitch1 (e){
    console.log(e);
  },
  bindchangeswitch2 (e){
    console.log(e);
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