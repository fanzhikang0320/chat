// components/custom-form/custom-form-input.js
const behavior = require('./behaviors.js');


Component({
  behaviors: [behavior],
  relations: {
    "/components/custom-form/custom-form": {
      type: 'ancestor', //关联的节点应为祖先节点
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
