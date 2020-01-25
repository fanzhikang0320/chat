// pages/newsIndex/newsIndex.js
Page({
  newsInfo: {
    newsTitle: '',
    newsDescription: '',
    newsAuthor: '',
    newsContent: '',
    newsSource: '',
  },
  
  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 清空表单
   */
  formreset () {
    console.log('reset');
  },
  /**
   * 获取表单数据
   */
  formsubmit (e) {
    let that = this;
    //接收数据
    this.newsInfo.newsTitle = e.detail.value.newsTitle;
    this.newsInfo.newsDescription = e.detail.value.newsDescription;
    this.newsInfo.newsAuthor = e.detail.value.newsAuthor;
    this.newsInfo.newsSource = e.detail.value.newsSource;
    this.newsInfo.newsContent = e.detail.value.newsContent;
    //错误验证
    let flag = this.validate(this.newsInfo);
    if (!flag) return;
    //传送数据给云端数据库做数据录入
    // this.addCloudNewsData(this.newsInfo);
    this.addCloudNewsDataByCloudDBOpt(this.newsInfo)
  },
  addCloudNewsDataByCloudDBOpt (newsInfo) {
    
    wx.cloud.callFunction({
      name: 'cloudDBOpt',
      data: {
        type: 'insert',
        data: newsInfo,
        db: 'news'
      },
      complete: res => {
        // console.log('result',res);
        // 如果返回的有_id代表有所存在,表示已经操作数据库成功
        if (res.result._id) {
          wx.showToast({
            title: '发布成功！',
            icon: 'none',
            duration: 500
          });
          setTimeout(() => {
            wx.switchTab({
              url: 'pages/hotNews/hotNews',
            })
          },500);
        }
      }
    });
  },





  /**
   * 添加云端数据
   */
  addCloudNewsData (data) {
    wx.cloud.callFunction({
      name: 'cloudNewsAdd',
      data: data,
      complete: res => {
        console.log('complete',res);
      }
    });
  },




  /**
   * 错误验证
   */
  validate (event,that) {
    if (event.newsTiltle == '' || event.newsDescription == '' || event.newsAuthor == '' || event.newsSource == '' || event.newsContent == '') {
      wx.showToast({
        title: '输入内容不能为空！',
        icon: 'none',
        duration: 500
      })
      return false;
    }
    return true;
  }
})