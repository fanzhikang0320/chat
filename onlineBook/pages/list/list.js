// pages/list/list.js
const db = wx.cloud.database({
  env: 'cloud990320'
});
const imgListObj = db.collection('imageList');
const _cmd = db.command;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: []
  },
  //获取图库数据列表
  getImgList () {
    let that = this;
    //从云端数据库获取
    imgListObj.get({
      success: res => {
        // console.log(res);
        that.setData({
          dataList: res.data
        })
      }
    })
  },

  /**
   * 发布图片
   */
  qufabu () {
    //跳转至上传图片页面
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  /**
   * 删除图片
   */
  deleteImg (e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    let fileID = e.currentTarget.dataset.imgurl;
    wx.showModal({
      title: '警告',
      content: '确定要删除吗？',
      success: res => {
        if (res.confirm) {
          
          //删除云数据库记录
          imgListObj.doc(id).remove({
            success: res => {
              //重新绑定
              that.getImgList();
              //同步删除云储存文件
              that.deleteCloudFile(fileID);
              
            },
            fail: res => {
              console.log('fail',res);
            }
          });
        }
      },
      fail: res => {
        console.log('fail',res);
      }
      
    })
    
  },
  /**
   * 删除云存储文件
   */
  deleteCloudFile (fileID) {
    wx.cloud.deleteFile({
      fileList:[fileID],
      success: res => {
        wx.showToast({
          title: '删除成功',
          icon: 'none',
          duration: 1000
        })
      },
      fail: res => {
        console.log('deleteFail',res);
      }
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
    this.getImgList ();
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