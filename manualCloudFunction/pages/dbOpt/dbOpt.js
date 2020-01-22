// pages/dbOpt/dbOpt.js

//创建数据库对象
const db = wx.cloud.database({
  env:'cloud990320'//连接数据库的环境id
});



Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList:[],
  },
  formSubmit (e) {
    console.log(e);
    let userInfo = {
      userName: e.detail.value.userName,
      userAge: e.detail.value.userAge
    }

    this.cloudDBadd(userInfo);
  },
  // 往云数据库添加内容
  cloudDBadd (userInfo) {
  //向test1db添加数据
    // db.collection('test1db').add({
    //   data: {
    //     name: userInfo.userName,
    //     age: parseInt(userInfo.userAge),
    //     createTime: db.serverDate()
    //   },
    //   success: res => {
    //     //成功录入后返回新数据的id
    //     console.log(res);
    //   }

    // })
    // 利用promise来进行插入
    // db.collection('test1db').add({
    //   data: {
    //     name: userInfo.userName,
    //     age: parseInt(userInfo.userAge),
    //     createTime: db.serverDate()
    //   }
    // }).then( res => {
    //   console.log(res);
    // }).catch(console.error)


  },
  // 读取数据库,获取用户数据
  getUserData () {
    // 1、回调方式
    let that = this;
    // db.collection('test1db').get({
    //   success: res => {
    //     console.log(res);
    //     that.setData({
    //       userList: res.data
    //     });
    //   }
    // });

    // 2.promise方式
    db.collection('test1db').get().then(res => {
      console.log(res);
      that.setData({
        userList: res.data
      });
    })
  },
  // 更新单条数据

  updateForm (e) {
    this.newVal = e.detail.value.updateField;
    // e.detail.value.databaseField;
    db.collection('test1db').doc('74b140b45e27eef20494e7604a04d28b').update({
      data: {
        name: this.newVal
      }
    }).then(res => {
      console.log(res);
      wx.showToast({
        title: '更新了'+ res.stats.updated + '条数据', 
      })
    })

  },
  // 更新全部数据
  allUpdate (e) {
    let newValue = e.detail.value.newValue;
    //调用云函数
    wx.cloud.callFunction({
      name:'update',
      data: {
        name: newValue
      }
    }).then(res => {
      console.log(res);
    }).catch(console.error)
  },
  // 删除数据
  deleteData (e) {
    // e.detail.value.deleteId;
    db.collection('test1db').doc(e.detail.value.deleteId).remove().then(res => {
      console.log(res);
      wx.showToast({
        title: '删除成功',
      })
    }).catch(console.error)
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