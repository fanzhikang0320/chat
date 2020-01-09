// pages/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /*
  *保存文件至本地，会移动临时文件，保存后临时文件不可有
   */
  saveFile () {
    wx.chooseImage({
      success: function(res) {
        const tempFilePaths = res.tempFilePaths;
        // wx.saveFile({
        //   tempFilePath: tempFilePaths,
        //   success (res) {
        //     const saveFilePath = res.tempFilePaths;

        //   }
        // })

        /**
         * 保存相册
         */
        wx.saveImageToPhotosAlbum({
          filePath: tempFilePaths,
          success (res) {
            const saveFilePath = res.saveFilePath;
            console.log(saveFilePath);
          }
        })

      },
    })
  },

  /**
   * 获取临时文件
   */
  getFileInfo () {
    console.log('ok');
    wx.chooseImage({
      success: function(res) {
        const tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        wx.getFileInfo({
          filePath: tempFilePaths[0],
          success (res) {
            console.log(res);
          }
        })
      },
    })
    
  },
  /**
   * 获取已存取文件列表
   */
  getSavedFileList () {
    wx.getSavedFileList({
      success (res) {
        console.log(res)
      }
    })
  },
/**
 * 清除本地缓存文件
 */
  removeSaveFile () {
    wx.getSavedFileList({
      success (res) {
        if (res.fileList.length > 0) {
          for (let i = 0 ; i < res.fileList.length ; i ++) {
            wx.removeSavedFile({
              filePath: res.fileList[i].filePath,
              success() {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 800
                })
              }
            })
          }
        }
        
      }
    })
  },

/**
 * 打开文档
 */
  openDocument () {
    wx.downloadFile({
      url:'',
     success (res) {
       const filePath = res.tempFilePaths;
       wx.openDocument({
         filePath: filePath,
         success () {
           console.log('open');
         }
       })
     } 
    })
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