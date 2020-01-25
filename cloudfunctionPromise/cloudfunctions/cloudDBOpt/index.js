// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database({
  env: 'cloud990320'
});
const _cmd = db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  // 连接数据库集合对象
  const targetDB = db.collection(event.db)
  try {
    // 如果传入的操作类型为插入
    if (event.type == 'insert') {
      return await targetDB.add({
        data: event.data
      })
    }
    // 更新数据
    if (event.type == 'update') {
      return await targetDB.doc(event.indexKey).update({
        data: event.data
      });
    }
    // 删除数据
    if (event.type == 'delete') {
      return await targetDB.where(event.condition).remove();
    }
    // 获取数据
    if (event.type == 'get') {
      return await targetDB.where(event.condition).skip(20 * event.skip).limit(event.limit).get();
    }
  } catch (e) {
    console.log(e);
  }
}