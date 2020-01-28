var https = "https://hv.dingapp.com"; //主域名
var isSubscibe = '/api/wxUser/isSubscibe'; //检查是否订阅
var aps = '/api/adv/info'; //广告接口
var wxUser = '/api/wxUser/info'; //获取用户信息
var wxLogin = '/api/wxUser/login'; //获取微信openId
var wxformId = '/api/wxUser/subscibe';  //收集formId
var hotWord = '/api/hotWords/list';//热搜接口
var videoList = '/api/video/list';  //视频列表接口
var listHot = '/api/video/listHot'; //分析页面热点视频
var videoShare = '/api/video/share'; //分享视频
var limit = 3;
var videoPlay = '/api/video/play'; //统计播放次数

// 自定义request请求基类
function request (type,params,url,success,error,complete) {
  var methodType = 'application/json';
  //访问主域名
  var https = 'https://hv.dingapp.com';
  if (type == 'PUT') {
    var p = Object.keys(params).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
    url += '?' + p;
    params = {}
  };
  if (type == 'POST') {
    methodType = 'application/x-www-form-urlencoded';
  }
  wx.request({
    url: https + url,
    method: type,
    header: {
      'content-type': methodType
    },
    data: params,
    success: res => {
      success(res);
    },
    fail: res => {
      if (error) {
        error(res);
      }
    },
    complete: res => {
      if (complete) {
        complete(res);
      }
    }
  })
}


module.exports = {
  ajax: request,
  https: https,
  aps: aps,
  wxUser: wxUser,
  wxLogin: wxLogin,
  // hotformId: hotformId,
  wxformId: wxformId,
  hotWord: hotWord,
  videoList: videoList,
  listHot: listHot,
  videoPlay: videoPlay,
  videoShare: videoShare,
  isSubscibe: isSubscibe,
  limit: limit
}