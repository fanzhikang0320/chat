// components/custom-component/custom-component.js
Component({
  //生命周期钩子函数
  created: function () {
    //不可以使用setData
  },
  attached: function () {
    this.setData({
      num1: 100,
      num2: 200
    });
  },
  //监听器(一旦有setData的操作就会调用))
  observers: {
    '**': function () {
      //每次setData任意值都会触发
    },
    'num1,num2': function (num1,num2) {
      //监听num1和num2的值有没有发生变化，一旦发生变化就会执行
      //不要再进行改变自己，否则会进入死循环
      // console.log('num1 and num2 change');
      // console.log(num1,num2);
      this.setData({
        sum: num1 + num2
      });
    },
    'student.**': function () {
      //监听student对象当中所有值变化
    },
    'student.name': function () {
      //监听student对象中的name值变化
    },
    'array.**': function () {
      //监听array当中的所有值变化
    },
    'array[0]': function () {
      //监听数组第一位值的变化
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    num1: 10,
    num2: 20,
    sum: 30,
    student: {
      name: 'alice',
      age: 19
    },
    array: [1,2,3]

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
