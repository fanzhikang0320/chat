// pages/index/index.js
//创建数据库对象
const db = wx.cloud.database({
  env: 'cloud990320'
});
//连接操作的表
const studentsCollection = db.collection('student');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 数据录入
  dbAdd () {
    let addData = {
      name: 'mary',
      age: 20,
      birthday: new Date('1987'),
      createTime: db.serverDate(),
      hobby: ['game','book'],
      isPartyMember: false,
      location: new db.Geo.Point(125,21)

    };
    studentsCollection.add({
      data: addData,
      success: res => {
        console.log(res);
      },
      fail: function (res) {
        console.error
      }
    });
  },
  //单条查询数据
  dbSelectOne () {
    //查询id为"d68532785e2916ab04dc360a3e451648"的学员
    studentsCollection.doc("d68532785e2916ab04dc360a3e451648").get().then(res => {
      console.log(res);
    })
  },
  //查询匹配数据
  dbSelectMulti () {
    studentsCollection.where({
      age: 20
    }).get().then(res => {
      console.log(res);
    }).catch(console.error);
  },
  cloudFun () {
    wx.cloud.callFunction({
      name:'add',
      data: {
        a: 10,
        b: 4
      },
      success: res => {
        wx.showToast({
          title: '值为：' + res.result.sum,
        })
        console.log(res);
      }
    })
  }
})