const app = getApp()
 let username=''
 let password=''
 let qemail=''
Page({
  data: {
    tabIndex: 0 ,// tab下标
    username: '',
    password: '',
    qemail: '',
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
      email(e){
          qemail=e.detail.value
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

 
  
  // 登录
  login: function() {
    wx.showToast({
      title: "登录",
      icon: "none"
    });
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
                url: '/page/component/index/index',          
                })       
                }, 1000)
        }else{
            wx.showToast({
                icon:'none',
                title: '账号或者密码错误',
              })
        }
    
      },
      goadminx(){
        if(qemail=='')
        {
          wx.showToast({
            icon:'none',
            title: '邮箱不能为空',
          })
        }else if(password==''){
          wx.showToast({
            icon:'none',
            title: '密码不能为空',
          })
        }else if(qemail=='2734649446@qq.com'&&password=='123456'){
            qemail='';
            password='';
            wx.showToast({
                title: "登录成功",   
                icon: 'success',   
                duration: 1000,        
                })           
                setTimeout(function () {         
                wx.reLaunch({          
                url: '/page/component/index/index',          
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
