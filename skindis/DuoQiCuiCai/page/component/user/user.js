Page({
  data: {
      formData: {
          email: '',
          name: '',
          companyAddress: '',
          phone: ''
      }
  },

  submitForm: function(e) {
      const that = this;
      wx.request({
          url: 'https://www.alujuneokl.cn:443/submit',
          method: 'POST',
          data: e.detail.value,
          success: function(res) {
              if(res.statusCode === 200) {
                  wx.showToast({
                      title: '提交成功',
                      icon: 'success',
                      duration: 2000
                  });
                  // 清除表单数据
                  that.setData({
                      'formData.email': '',
                      'formData.name': '',
                      'formData.companyAddress': '',
                      'formData.phone': ''
                  });
              }
          },
          fail: function() {
              wx.showToast({
                  title: '提交失败',
                  icon: 'none',
                  duration: 2000
              });
          }
      });
  }
});
