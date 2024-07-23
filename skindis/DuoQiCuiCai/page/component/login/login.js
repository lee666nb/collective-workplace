Page({
  data: {
    tabIndex: 0 // tab下标
  },
  
  // tab点击
  tabClick: function(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.id
    });
  },
  
  // 获取验证码
  getCode: function() {
    wx.showToast({
      title: "获取验证码",
      icon: "none"
    });
  },

  // 注册
  register: function() {
    wx.navigateTo({
      url: '/page/register/register'
    });
  },
  
  // 登录
  login: function() {
    wx.showToast({
      title: "登录",
      icon: "none"
    });
  }
})
