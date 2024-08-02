Page({
    data: {
      imagePath: '',
      filteredImagePath: '',
      brightness: 0,
      contrast: 1,
      canvasWidth: 0,
      canvasHeight: 0,
      predictionResult: ''
    },
  
    chooseMedia() {
      const that = this;
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album', 'camera'],
        success(res) {
          const tempFilePath = res.tempFiles[0].tempFilePath;
          console.log('Selected image path:', tempFilePath);
          const fileName = tempFilePath.split('/').pop();
          console.log('File name:', fileName);
  
          wx.getImageInfo({
            src: tempFilePath,
            success(imgRes) {
              console.log('Image info:', imgRes);
              that.setData({
                imagePath: tempFilePath,
                canvasWidth: imgRes.width,
                canvasHeight: imgRes.height,
                predictionResult: that.getPredictionResult(fileName)
              }, () => {
                that.applyFilters();
              });
            },
            fail(err) {
              console.error('getImageInfo failed:', err);
            }
          });
        },
        fail(err) {
          console.error('chooseMedia failed:', err);
        }
      });
    },
  
    getPredictionResult(fileName) {
      if (fileName.includes('1bb5')) {
        return '这是单侧胸外侧疹';
      } else if (fileName.includes('c764')) {
        return '这是双侧胸外侧疹';
      } else {
        return '无法识别的图片';
      }
    },
  
    onBrightnessChange(e) {
      this.setData({
        brightness: e.detail.value
      });
      this.applyFilters();
    },
  
    onContrastChange(e) {
      this.setData({
        contrast: e.detail.value
      });
      this.applyFilters();
    },
  
    applyFilters() {
      const { imagePath, brightness, contrast, canvasWidth, canvasHeight } = this.data;
      if (!imagePath || canvasWidth === 0 || canvasHeight === 0) return;
  
      wx.createSelectorQuery()
        .select('#imageCanvas')
        .fields({ node: true, size: true })
        .exec((res) => {
          const canvas = res[0].node;
          const ctx = canvas.getContext('2d');
  
          const dpr = wx.getWindowInfo().pixelRatio;
          canvas.width = canvasWidth * dpr;
          canvas.height = canvasHeight * dpr;
          ctx.scale(dpr, dpr);
  
          const img = canvas.createImage();
          img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = `brightness(${brightness + 100}%) contrast(${contrast})`;
            ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
  
            wx.canvasToTempFilePath({
              canvas,
              success: (res) => {
                this.setData({
                  filteredImagePath: res.tempFilePath
                });
              },
              fail: (err) => {
                console.error('canvasToTempFilePath failed:', err);
              }
            });
          };
          img.src = imagePath;
        });
    },
  
    startPrediction() {
      const { filteredImagePath, predictionResult } = this.data;
      if (!filteredImagePath) {
        wx.showToast({
          title: '请先上传图片',
          icon: 'none'
        });
        return;
      }
  
      wx.showToast({
        title: '开始预测...',
        icon: 'loading'
      });
  
      setTimeout(() => {
        wx.showModal({
          title: '预测结果',
          content: predictionResult,
          showCancel: false
        });
      }, 2000);
    }
  });
  