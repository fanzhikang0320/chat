// pages/index/index.js
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
    showImg: true,
    imgList: []

  },
  /**
   * 上传文件
   */
  upload () {
    let that = this;

    //用户选择自己要上传的图片
    wx.chooseImage({
      count: 2, //最多支持几张图片同时上传
      success: function(res) {
        //显示加载图标
        wx.showLoading({
          title: '正在上传...'
        })
        let imgArray = [];
        //多图片处理
        res.tempFilePaths.forEach((item,index) => {
          //定义上传到云端的随机名称
          let imgName = Math.random(1000000) * 100 + '.png'
          //云存储
          wx.cloud.uploadFile({
            cloudPath: imgName,
            filePath: item,
            success: res => {
              if (res.statusCode == 200) {
                wx.hideLoading();//隐藏loading图标
                imgArray.push(res.fileID); 
                that.setData({
                  imgList: imgArray,
                  showImg: false
                });
                //将图片插入数据库
                that.addImgList(res.fileID);
              }
            },
            fail: res => {
              console.log('error', res);
            }
          });
        });
        
      },
    })
  },
  /**
   * 添加图片列表
   */
  addImgList (cloudImgUrl) {
    // console.log(res);
    let dbData = {
      name: 'jjj',
      imgUrl: cloudImgUrl,
      time: this.getNowFormatData()
    }
    //添加图片到云端数据库
    imgListObj.add({
      data: dbData,
      success: res => {
        // console.log(res);
        wx.showToast({
          title: '上传完成',
          icon: 'none',
          duration: 500
        })
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/list/list',
          })
        },500)
      },
      fail: res => {
        console.log('error',res);
      }
    })
  },

/**
 * 格式化日期
 */
getNowFormatData () {
  let date = new Date();
  let seperator1 = '-';
  let seperator2 = ':';
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = '0' + month;
  }
  if (strDate >=0 && strDate <= 9 ) {
    strDate = '0' + strDate;
  }
  let currentDate = date.getFullYear() + seperator1 + month + seperator1 +strDate + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
  return currentDate; 
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