// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '标题',
    },
    content: {
      type: String,
      value: '内容'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //显示弹框
    showDialog () {
      this.setData({
        isShow: true
      });
    },
    //隐藏弹框
    hideDialog () {
      this.setData({
        isShow: false
      });
    },
    //点击取消按钮
    _cancelEvent () {
      //触发回调
      this.triggerEvent('cancelEvent');
    },
    //点击确定按钮
    _confirmEvent () {
      //主动触发回调函数
      this.triggerEvent('confirmEvent');
    }
  }
})
