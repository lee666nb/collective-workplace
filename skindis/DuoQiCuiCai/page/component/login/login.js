//index.js
//获取应用实例
const app = getApp()
 let username=''
 let password=''
Page({
  data: {
    username: '',
    password: '',
    clientHeight:''
  },


  //获取输入款内容
  content(e){
    username=e.detail.value
  },
  password(e){
    password=e.detail.value
  },
  //登录事件
  goadmin(){
    if(username=='')
    {
      wx.showToast({
        icon:'none',
        title: '账号不能为空',
      })
    }else if(password==''){
      wx.showToast({
        icon:'none',
        title: '密码不能为空',
      })
    }else if(username=='admin'&&password=='123456'){
   wx.switchTab({
     url: '/page/component/index',
   })
    }

  },
})
 
