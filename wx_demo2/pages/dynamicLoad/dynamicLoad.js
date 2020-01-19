// pages/dynamicLoad/dynamicLoad.js
let url = 'http://www.imooc.com/course/ajaxlist';
let page = 0;
let page_size = 5;
let sort = 'last';
let is_easy = 0;
let lange_id = 0;
let pos_id = 0;
let unlearn = 0;

//请求数据

let loadMore = function (that) {
  //显示loading动画
  that.setData({
    hidden: false
  });
  //数据获取
  wx.request({
    url: url,
    data: {
      page: page,
      page_size: page_size,
      sort: sort,
      is_easy: is_easy,
      lange_id: lange_id,
      pos_id: pos_id,
      unlearn: unlearn
    },
    success: function (res) {
      console.log(res);
      let list = that.data.list;
      for (let i = 0 ; i < res.data.list.length ; i++) {
        list.push(res.data.list[i]);
      }
      //重新设置data
      that.setData({
        list: list
      });

      page ++;
      that.setData({
        hidden: true
      });
    }
  })
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    scrollHeight:0,
    hidden: true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //微信的scroll-view必须设置高度，需要在页面的onLoad中给scroll-view高度变量赋值
    let that = this;
    //高度的获取从微信客户端信息开始
    wx.getSystemInfo({
      success: function(res) {
        // console.log(res);
        that.setData({
          scrollHeight:res.windowHeight
        });
      },
    })

    loadMore(that);
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