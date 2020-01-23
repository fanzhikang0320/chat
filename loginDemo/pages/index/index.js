// pages/index/index.js
let phone = '',
  name = '',
  password = '';

const db = wx.cloud.database(); //创建数库对象
const col = db.collection('loginDatabase');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isZhuce: true
  },
  showZhuce () {
    this.setData({
      isZhuce: false
    });
  },
  showDenglu () {
    this.setData({
      isZhuce: true
    });
  },
  //获取电话
  getphone (e) {
    // console.log(e);
    phone = e.detail.value;
  },
  //获取密码
  getpassword (e) {
    password = e.detail.value;
  },
  //获取名字
  getname (e) {
    name = e.detail.value;
  },
  /**
   * 判断输入是否合法
   */
  validate () {
    if (name == '') {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'none'
      });
      return false;
    }
    if (phone == '' || phone.length != 11) {
      wx.showToast({
        title: '手机号填写错误',
        icon: 'none'
      });
      return false;
    }
    if (password == '' || password.length < 6) {
      wx.showToast({
        title: '请输入正确格式密码',
        icon:'none'
      });
      return false;
    }
  },
  /**
   * 注册
   * 1.获取用户的输入
   * 2.判断手机号是否存在
   * 3.注册信息入云数据库
   * 4.提示完成后跳转
   */
  reg () {
    let that = this;
    //判断输入的内容是否达到要求
    if (!this.validate()) {
      return ;
    }
    //判断手机号是否已经存在
    col.where({
      phone: phone
    }).get({
      success: res => {
        // console.log(res);
        if (res.data.length) {
          //该手机号已经存在
          wx.showToast({
            title: '该用户已经存在！',
            icon: 'none'
          })
        } else {
          //继续注册
          that.register()
        }
      }
    })

  },

  /**
   * 注册
   * 将数据添加数据库
   */
  register () {
    let that = this;
    col.add({
      data: {
        name: name,
        phone: phone,
        password: password
      },
      success: res => {
        console.log(res);
        // 提示用户，注册成功
        wx.showToast({
          title: '注册成功！',
          icon: 'none'
        });
        //转变为登录界面
        that.setData({
          isZhuce: false
        });
      }
    })
  },
  /**
   * 用户登录
   * 1.获取用户输入数据
   * 2.向数据库进行查找
   * 3.比较两个数据
   * 4.成功-》缓存-》跳转用户中心
   * 5.不成功-》提示
   */

  login () {
    if (phone == '' || phone.length != 11 || password == '' || password.length < 6) {
      wx.showToast({
        title: '请输入正确格式',
        icon: 'none'
      });
      return;
    } 
    col.where({
      phone: phone,
      password: password
    }).get({
      success: res => {
        // console.log('success',res);
        if (res.data.length) {
          let regInfo = {
            phone: phone,
            name: res.data[0].name,
            id: res.data[0]._id
          }
          wx.setStorage({
            key: 'regInfo',
            data: regInfo,
          })
          //跳转用户中心
          wx.redirectTo({
            url: '/pages/userCenter/userCenter',
          })
        } else {
          //提示错误
          wx.showToast({
            title: '账户或密码错误！',
            icon: 'none'
          })
        }
      },
      fail: res => {
        console.log('fail',res);
      }
    })
  }
})