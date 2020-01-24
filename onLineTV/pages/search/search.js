// pages/search/search.js
const db = wx.cloud.database({
  env: 'cloud990320'
});
const channelMenuObj = db.collection('channelMenu');
const _cmd = db.command;

Page({

  /**
   * 页面的初始数据
   */
  programName: '',
  data: {
    searchInfo: [],
    key: this.programName
  },
  /**
  * 获取节目名称
   */
  
  searchProgramName (e) {
    this.programName = e.detail.value;
  },
  /**
   * 搜索节目
   */
  search () { 
    let that = this;
    let searchTempResult = [];
    channelMenuObj.where({
      "programList.programName": that.programName
    }).get().then(res => {
      console.log(res);
      for (let i = 0 ; i < res.data.length ; i ++) {
        let programList = res.data[i].programList;
        for (let j = 0 ; j < programList.length ; j ++) {
          if (programList[j].programName == this.programName) {
            programList[j].channel = res.data[i].channelName;
            searchTempResult.push(programList[j]);
          }
        }
      }
      that.setData({
        searchInfo: searchTempResult
      });
    }).catch(console.error);
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