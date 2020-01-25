// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 创建云数据库对象
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  //接收数据
  let cloudNewsInfo = {
    cloudNewsTitle: event.newTitle,
    cloudNewsAuthor: event.newsAuthor,
    cloudNewsSource: event.newsSource,
    cloudNewsContent: event.newsContent,
    cloudNewsDescription: event.newsDescription
  }
  // 数据库操作
  return await db.collection('news').add({
    data: cloudNewsInfo
  })
  // 返回结果
}