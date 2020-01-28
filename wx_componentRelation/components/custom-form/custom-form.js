// components/custom-form/custom-form.js

const behavior = require('./behaviors.js');

Component({
  relations: {
    "behavior": {
      type: 'descendant',//关联的目标节点以为子孙节点
      target: behavior,
      linked: function (target) {
        console.log('linked');
      }

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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
