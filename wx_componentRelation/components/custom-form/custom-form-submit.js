// components/custom-form/custom-form-submit.js
const behavior = require('./behaviors.js');
Component({
  behaviors: [behavior],
  realtions: {
    '/components/custom-form/custom-form': {
      type: 'ancestor',//关联节点应为祖先节点

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
