Page({
 
    /**
     * 页面的初始数据
     */
    data: {
      nickName : "社会你班德",
      gender : "男",
      province : "浙江省",
      city : "杭州",
      country : "中国"
    },
   
    updateMessageTap:function(){
    
      
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
