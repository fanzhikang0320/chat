// components/custom-li/custom-li.js
Component({
  relations: {
    '/components/custom-li/custom-li': {
      type: 'parent', //关联的目标节点应为父节点
      // 生命周期的执行点
      linked: function (val) {
        //每次被插入custom-ul时执行，val是custom-ul节点的实例对象，触发点在attached生命周期之后
        console.log('linked',val);
      },
      linkeChanged: function (val) {
        //每次被移动后执行，触发点在moved生命周期之后
      },
      unlinked: function (val) {
        //每次在被移除时执行，触发点是在detached生命周期之后
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    lival: {
      type: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
