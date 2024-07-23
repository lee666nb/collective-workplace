
Page({
 
    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
          showModal: false,
          editInfo: {
            name: '',
            gender: '',
            age : '',
            duration : ''
          },

    },
    onLoad: function() {
        const app = getApp();
        this.setData({
          userInfo: app.globalData.userInfo
        });
      },
    showModal:function(){
        this.setData({
            showModal: true,
            editInfo: { ...this.data.userInfo }
          });
    },
    hideModal: function() {
        this.setData({
          showModal: false
        });
      },
    
      handleNameInput: function(e) {
        this.setData({
          'editInfo.name': e.detail.value
        });
      },
    
      handleGenderInput: function(e) {
        this.setData({
          'editInfo.gender': e.detail.value
        });
      },
      handleAgeInput: function(e) {
        this.setData({
          'editInfo.age': e.detail.value
        });
      },
      handleDurationInput: function(e) {
        this.setData({
          'editInfo.duration': e.detail.value
        });
      },
      saveInfo: function() {
        const app = getApp();
        const updatedUserInfo = { ...this.data.editInfo };
      
        // 更新全局变量
        app.setUserInfo(updatedUserInfo);
      
        // 更新页面数据
        this.setData({
          userInfo: updatedUserInfo,
          showModal: false
        });
      
        console.log('Saved userInfo:', updatedUserInfo); // 调试日志
      },
      navigateToAboutUs: function() {
        wx.navigateTo({
          url: '/page/component/aboutUs/aboutUs'
        });
      },
    
      navigateToUpdateLog: function() {
        wx.navigateTo({
          url: '/page/component/updateLog/updateLog'
        });
      },
      
    logoutTap:function(){
        wx.showActionSheet({
            itemList:['确定'], //文字数组
            success: (res) => {
              switch(res.tapIndex) {
                case 0:
                  console.log('点击了确定')
                  wx.redirectTo({
                    url: '/page/component/login/login',
                  })
                  break;	
               
              }
            },
          })
      
      
    },
   
  })
