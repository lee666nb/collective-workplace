// page/component/login/login.js
//index.js
//获取应用实例
const app = getApp()
 let username=''
 let email=''
 let password=''
 let repassword=''
Page({
  data: {
    username: '',
    email: '',
    password: '',
    repassword: '',
    pwdtype: true,
    repwdtype: true,
    image: '/image/closesee.png',
    reimage: '/image/closesee.png'
  },

  //获取输入款内容
  adminContent(e){
    username=e.detail.value
  },
  emailContent(e){
    email=e.detail.value
  },
  password(e){
    password=e.detail.value
  },
  repassword(e){
    repassword=e.detail.value
  },
  //注册事件
  zhuce(){
    if(username=='')
    {
      wx.showToast({
        icon:'none',
        title: '用户名不能为空',
      })
    }else if(password==''){
      wx.showToast({
        icon:'none',
        title: '密码不能为空',
      })
    }else if(email==''){
        wx.showToast({
          icon:'none',
          title: '邮箱不能为空',
        })
      }else if(username!=''&&email!=''&&password!=''&&repassword!=''){
        wx.showToast({
            title: "注册成功",   
            icon: 'success',   
            duration: 500,        
            })           
            setTimeout(function () {         
            wx.reLaunch({          
            url: '/page/component/login/login',          
            })       
            }, 500)
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
 
  },
  regoto() {
    if (this.data.repwdtype == true) {
      this.setData({
        repwdtype: false,
        reimage: '/image/opensee.png'
      })
    } else {
      this.setData({
        repwdtype: true,
        reimage: '/image/closesee.png'
      })
    }
 
  }
})
 
