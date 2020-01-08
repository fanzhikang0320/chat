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
'专辑','演唱者'];
const _songsList = [
  {
    coverImgUrl:'/image/photo.jpg',
    singer:'蔡雅琴',
    name:'红色高跟鞋'
  },
  {
    coverImgUrl: '/image/photo.jpg',
    singer: '蔡雅琴',
    name: '红色高跟鞋'
  },
  {
    coverImgUrl: '/image/photo.jpg',
    singer: '蔡雅琴',
    name: '红色高跟鞋'
  },
  {
    coverImgUrl: '/image/photo.jpg',
    singer: '蔡雅琴',
    name: '红色高跟鞋'
  }
];
const _albumList = [
  {
    image:'/image/photo.jpg',
    name:'穿越火线',
    singer:'谢霆锋'
  },
  {
    image: '/image/photo.jpg',
    name: '穿越火线',
    singer: '谢霆锋'
  },
  {
    image: '/image/photo.jpg',
    name: '穿越火线',
    singer: '谢霆锋'
  },
  {
    image: '/image/photo.jpg',
    name: '穿越火线',
    singer: '谢霆锋'
  }
];
const _authorList = [
  {
    image:'/image/photo.jpg',
    singer:'一玟'
  },
  {
    image: '/image/photo.jpg',
    singer: '一玟'
  },
  {
    image: '/image/photo.jpg',
    singer: '一玟'
  }
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList:_songList,
    musicGroupName:_items[0],
    actionSheetHidden:true,
    actionSheetItems:_items,
    listTemplateName:'music-play-list',
    templateData:'',
    playing:false,
    playBar:{
      coverImgUrl:'/image/photo.jpg',
      name:'最甜情歌'
    }
  },
  /**
   * 列表选择
   */
  actionSheetTap () {
    this.setData({
      actionSheetHidden:!this.data.actionSheetHidden
    });
  },
  /**
   * 显示隐藏
   */
  actionSheetChange () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden 
    });
  },
  /**
   * item的单击
   */
  bindItemTap (e) {
    //单击链接的区域
    let _listTemplateName = '';
    let _templateData = '';
    //获知现在所点击的菜单
    // console.log(e.currentTarget.dataset.sheetitem);
    let sheetItem = e.currentTarget.dataset.sheetitem;
    //判断应该打开哪个模板的名字
    switch (sheetItem) {
      case '播放列表':
        _listTemplateName = 'music-play-list';
       
        break;
      case '歌曲' :
        _listTemplateName = 'songs-list';
        _templateData = _songsList;
        break;
      case '专辑' : 
        _listTemplateName = 'album-list';
        _templateData = _albumList;
        break;
      case '演唱者' : 
        _listTemplateName = 'author-list';
        _templateData = _authorList;
        break;
    }


    //显示或者隐藏
    this.setData({
      listTemplateName: _listTemplateName,
      templateData: _templateData,
      actionSheetHidden: !this.data.actionSheetHidden
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