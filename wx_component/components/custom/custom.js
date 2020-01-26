// components/custom/custom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myName:String,
    myAge: {
      type: Number,//传进来的属性值的数据类型
      value: 40,//属性初始值，可选
      observer: function (newVal,oldVal) {
        //属性值变动侦测方法
        // console.log('newVal',newVal);
        // console.log('oldVal',oldVal);
        // 调用methods当中的方法
        this._propertyChange(newVal,oldVal);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    firstContent: 'heihei'
  },

  /**
   * 组件的方法列表
   * 在组件里不要使用箭头函数，会造成this指向问题
   */
  methods: {
    mytap () {
      this.setData({
        firstContent: '77666'
      });
    },
    _myPrivateMethod: function () {
      //设置、替换
      this.replaceDataOnPath(['firstContent'],'我是替换firstContent当中的值');
      //执行替换
      this.applyDataUpdates();
    },
    // 属性变动侦测
    _propertyChange: function (newVal,oldVal) {
      console.log('oldVal',oldVal);
      console.log('newVal',newVal);
    }
  }
})
