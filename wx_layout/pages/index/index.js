// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperContent:[
      {
        url:'#',
        imgSrc:'/image/s1.jpg',

      },
      {
        url:'#',
        imgSrc:'/image/s2.jpg'
      },
      {
        url:'#',
        imgSrc:'/image/s3.jpg'
      },
      {
        url:'#',
        imgSrc:'/image/s4.jpg'
      }
    ],
    menuList:[
      [
          {
            url: '#',
            iconSrc: '/image/shop.png',
            title: '京东超市'
          },
          {
            url: '#',
            iconSrc: '/image/phone.png',
            title: '数码电气'
          },
          {
            url: '#',
            iconSrc: '/image/clothes.png',
            title: '京东服饰'
          },
          {
            url: '#',
            iconSrc: '/image/fresh.png',
            title: '京东生鲜'
          },
          {
            url: '#',
            iconSrc: '/image/gohome.png',
            title: '京东到家'
          },
          {
            url: '#',
            iconSrc: '/image/topup.png',
            title: '充值缴费'
          },
          {
            url: '#',
            iconSrc: '/image/puzzle.png',
            title: '9.9元拼'
          },
          {
            url: '#',
            iconSrc: '/image/quan.png',
            title: '领券'
          },
          {
            url: '#',
            iconSrc: '/image/money.png',
            title: '赚钱'
          },
          {
            url: '#',
            iconSrc: '/image/plus.png',
            title: 'PLUS会员'
          }
      ],
      [
        {
          url: '#',
          iconSrc: '/image/jinkou.png',
          title: '京东国际'
        },
        {
          url: '#',
          iconSrc: '/image/paimai.png',
          title: '京东拍卖'
        },
        {
          url: '#',
          iconSrc: '/image/weipinhui.png',
          title: '唯品会'
        },
        {
          url: '#',
          iconSrc: '/image/w3c.jpg',
          title: '玩3C'
        },
        {
          url: '#',
          iconSrc: '/image/wem.png',
          title: '沃尔玛'
        },
        {
          url: '#',
          iconSrc: '/image/meizhuang.png',
          title: '美妆馆'
        },
        {
          url: '#',
          iconSrc: '/image/travel.png',
          title: '京东旅行'
        },
        {
          url: '#',
          iconSrc: '/image/pp.png',
          title: '拍拍二手'
        },
        {
          url: '#',
          iconSrc: '/image/wuliu.png',
          title: '物流查询'
        },
        {
          url: '#',
          iconSrc: '/image/all.png',
          title: '全部'
        }
      ]
    ],
    seckillList:[
      {
        imgSrc:'https://img14.360buyimg.com/n1/s150x150_jfs/t1/105123/16/3327/142132/5ddf698eEce842960/e5d4310c3c5bcc82.jpg.dpg',
        newPrice:'342345',
        oldPrice:'4342'
      },
      {
        imgSrc: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/105123/16/3327/142132/5ddf698eEce842960/e5d4310c3c5bcc82.jpg.dpg',
        newPrice: '42342',
        oldPrice: '2334'
      },
      {
        imgSrc: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/105123/16/3327/142132/5ddf698eEce842960/e5d4310c3c5bcc82.jpg.dpg',
        newPrice: '3434',
        oldPrice: '2434'
      },
      {
        imgSrc: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/105123/16/3327/142132/5ddf698eEce842960/e5d4310c3c5bcc82.jpg.dpg',
        newPrice: '434',
        oldPrice: '434'
      },
      {
        imgSrc: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/105123/16/3327/142132/5ddf698eEce842960/e5d4310c3c5bcc82.jpg.dpg',
        newPrice: '235',
        oldPrice: '64534'
      },
      {
        imgSrc: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/105123/16/3327/142132/5ddf698eEce842960/e5d4310c3c5bcc82.jpg.dpg',
        newPrice: '32455',
        oldPrice: '3424'
      },
      {
        imgSrc: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/105123/16/3327/142132/5ddf698eEce842960/e5d4310c3c5bcc82.jpg.dpg',
        newPrice: '3434',
        oldPrice: '34234'
      },
      {
        imgSrc: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/105123/16/3327/142132/5ddf698eEce842960/e5d4310c3c5bcc82.jpg.dpg',
        newPrice: '4235',
        oldPrice: '243'
      },
      {
        imgSrc: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/105123/16/3327/142132/5ddf698eEce842960/e5d4310c3c5bcc82.jpg.dpg',
        newPrice: '434',
        oldPrice: '3434'
      },
      {
        imgSrc: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/105123/16/3327/142132/5ddf698eEce842960/e5d4310c3c5bcc82.jpg.dpg',
        newPrice: '342345',
        oldPrice: '342343'
      }
    ],
    bottomNav:[
      {
        url:'#',
        iconSrc:'/image/home.png'
      },
      {
        url: '#',
        iconSrc: '/image/feilei.png'
      },
      {
        url: '#',
        iconSrc: '/image/hongbao.gif'
      },
      {
        url: '#',
        iconSrc: '/image/shopcar.png'
      },
      {
        url: '#',
        iconSrc: '/image/noLogin.png'
      },
    ]
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