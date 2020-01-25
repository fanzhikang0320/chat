// pages/hotNews/hotNews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: []
  },
  /**
   * 从数据库获取新闻列表
   */
  getNewsList () {
    let that = this;
    wx.cloud.callFunction({
      name: 'cloudDBOpt',
      data: {
        type: 'get',
        db: 'news',
        condition: {},
        skip: 0,
        limit: 20
      },
      complete: res => {
        wx.hideLoading();
        // console.log('result',res.result.data);
          that.setData({
            listData: res.result.data
          });
      }
    });
  },
  /**
   * 删除数据
   */
  deleteNews (e) {
    let that = this;
    //获取id
    let id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '警告',
      content: '你确定要删除吗？',
      success: res => {
        if (res.confirm) {
          wx.cloud.callFunction({
            name: 'cloudDBOpt',
            data: {
              type: 'delete',
              condition: {
                _id: id
              },
              db: 'news'
            },
            complete: res => {
              //  console.log(res);
              //删除完成之后，重新获取从数据库拿值
              that.getNewsList();
            }
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showLoading({
      title: '正在加载...',
    })
    this.getNewsList();
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