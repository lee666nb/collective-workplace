//index.js
//获取应用实例
const app = getApp()
 let username=''
 let password=''
Page({
  data: {
    username: '',
    password: '',
    clientHeight:'',
    pwdtype: true,
    image: '/image/closesee.png'
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
        username='';
        password='';
        wx.showToast({
            title: "登录成功",   
            icon: 'success',   
            duration: 1000,        
            })           
            setTimeout(function () {         
            wx.reLaunch({          
            url: '/page/component/index',          
            })       
            }, 1000)
    }else{
        wx.showToast({
            icon:'none',
            title: '账号或者密码错误',
          })
    }

  },
  goto() {
    if (this.data.pwdtype == true) {
      this.setData({
        pwdtype: false,
        image: '/image/opensee.png'
      })
    } else {
      this.setData({
        pwdtype: true,
        image: '/image/closesee.png'
      })
    }
 
  }
})
 
