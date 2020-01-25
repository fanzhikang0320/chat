// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let num1 = event.num1;
  let num2 = event.num2;
  let symbol1 = event.symbol1;
  let result = '';
  if (symbol1 == '+') {
    result = num1 + num2;
  } 
  if (symbol1 == '-') {
    result = num1 - num2;
  }
  if (symbol1 == '*') {
    result = num1 * num2;
  }
  if (symbol1 == '/') {
    result = num1 / num2;
  }
  return result;
}