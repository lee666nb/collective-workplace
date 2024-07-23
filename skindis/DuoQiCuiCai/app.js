App({
    onLaunch: function() {
      // 获取本地存储中的用户信息
      const userInfo = wx.getStorageSync('userInfo') || {
        gender: "男",
        name: "张三",
        age: "20",
        duration: "8个月"
      };
      this.globalData.userInfo = userInfo;
      console.log('Initial userInfo:', this.globalData.userInfo); // 调试日志
    },
    
    onShow: function() {
      console.log('App Show');
    },
    
    onHide: function() {
      console.log('App Hide');
    },
    
    globalData: {
      hasLogin: false,
      cartdata: [],
      cartTotalNum: 0,
      userInfo: null
    },
    
    // 用于更新用户信息并保存到本地存储
    setUserInfo: function(userInfo) {
      this.globalData.userInfo = userInfo;
      wx.setStorageSync('userInfo', userInfo);
      console.log('Updated userInfo:', userInfo); // 调试日志
    }
  })
  