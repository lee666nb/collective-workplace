Page({
  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
  },
  navigateToDiagnose() {  
    wx.reLaunch({  
      url: '/page/component/xianwei/xianwei' // 假设你有一个diagnose页面  
    });  
  },  
  navigateToKnowledge() {  
    wx.reLaunch({  
      url: '/page/component/run/run' // 假设你有一个knowledge页面  
    });  
  },  
  navigateToProfile() {  
    wx.reLaunch({  
      url: '/page/component/user/user' // 假设你有一个profile页面  
    });  
  }  
  
})

