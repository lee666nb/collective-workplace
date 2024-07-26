Page({
  data: {
    imagePath: '',
    brightness: 0,
    contrast: 1
  },

  chooseImage: function() {
    const that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          imagePath: tempFilePaths[0]
        }, () => {
          that.updateImage();
        });
      }
    });
  },

  onBrightnessChange: function(e) {
    this.setData({
      brightness: e.detail.value
    });
    this.updateImage();
  },

  onContrastChange: function(e) {
    this.setData({
      contrast: e.detail.value
    });
    this.updateImage();
  },

  updateImage: function() {
    const that = this;
    const ctx = wx.createCanvasContext('imageCanvas');
    wx.getImageInfo({
      src: this.data.imagePath,
      success: function(res) {
        const width = res.width;
        const height = res.height;
        ctx.drawImage(that.data.imagePath, 0, 0, width, height);
        ctx.draw(false, () => {
          wx.canvasGetImageData({
            canvasId: 'imageCanvas',
            x: 0,
            y: 0,
            width: width,
            height: height,
            success: function(res) {
              const imageData = res.data;
              const adjustedData = that.adjustImageData(imageData, width, height, that.data.brightness, that.data.contrast);
              wx.canvasPutImageData({
                canvasId: 'imageCanvas',
                data: adjustedData,
                x: 0,
                y: 0,
                width: width,
                height: height,
                success: function() {
                  wx.canvasToTempFilePath({
                    canvasId: 'imageCanvas',
                    success: function(result) {
                      that.setData({
                        imagePath: result.tempFilePath
                      });
                    }
                  });
                }
              });
            }
          });
        });
      }
    });
  },

  adjustImageData: function(imageData, width, height, brightness, contrast) {
    const data = new Uint8ClampedArray(imageData);
    for (let i = 0; i < data.length; i += 4) {
      for (let j = 0; j < 3; j++) { // 调整R、G、B通道
        data[i + j] = this.clamp(data[i + j] * contrast + brightness);
      }
    }
    return data;
  },

  clamp: function(value) {
    return Math.max(0, Math.min(255, value));
  },

  startPrediction: function() {
    wx.showModal({
      title: '预测结果',
      content: '这是皮肤病。',
      showCancel: false
    });
  }
});
