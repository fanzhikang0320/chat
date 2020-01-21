/**
 * 在worker线程中会自动创建worker对象
 */
//接收主线程的数据
worker.onMessage((res) => {
  console.log('这是worker内的接收数据',res);
  let x = res.x;
  let y = res.y;
  let sum = add(x,y);
  console.log(sum);
});

function add (x,y) {
  return x + y
}





