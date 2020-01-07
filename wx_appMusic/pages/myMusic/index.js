// pages/index/index.js

const _songList = [
  {
    dataUrl:'http://mpge.5nd.com/2018/2018-5-10/85111/1.mp3',
    name:'哑巴',
    singer:'薛之谦',
    coverImgUrl:'http://img.5nd.com/86/photo/2018album/20185/85111.jpg'
  },
  {
    dataUrl: 'http://mpge.5nd.com/2018/2018-5-10/85111/1.mp3',
    name: '哑巴',
    singer: '薛之谦',
    coverImgUrl: 'http://img.5nd.com/86/photo/2018album/20185/85111.jpg'
  },
  {
    dataUrl: 'http://mpge.5nd.com/2018/2018-5-10/85111/1.mp3',
    name: '哑巴',
    singer: '薛之谦',
    coverImgUrl: 'http://img.5nd.com/86/photo/2018album/20185/85111.jpg'
  },
  {
    dataUrl: 'http://mpge.5nd.com/2018/2018-5-10/85111/1.mp3',
    name: '哑巴',
    singer: '薛之谦',
    coverImgUrl: 'http://img.5nd.com/86/photo/2018album/20185/85111.jpg'
  }
];
const _items = ['播放列表','歌曲',
'专辑','演唱者']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList:_songList,
    musicGroupName:_items[0],
    acionSheetHidden:true,
    actionSheetItems:_items
  },
  /**
   * 列表选择
   */
  actionSheetTap () {
    this.setData({
      acionSheetHidden:!this.data.actionSheetHidden
    });
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