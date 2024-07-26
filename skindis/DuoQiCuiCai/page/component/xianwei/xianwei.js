Page({
  data: {
    imagePath: ''
  },
  
  chooseImage: function() {
    const that = this;
    wx.chooseImage({
      count: 1, // 可以选择的图片数量
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机
      success: function(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          imagePath: tempFilePaths[0]
        });
      }
    });
  },

  startPrediction: function() {
    wx.showModal({
      title: '预测结果',
      content: '这是皮肤病。',
      showCancel: false
    });
  }
});
