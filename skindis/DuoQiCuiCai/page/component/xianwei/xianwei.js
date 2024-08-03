Page({
    data: {
      imagePath: '',
      filteredImagePath: '',
      brightness: 0,
      contrast: 1,
      canvasWidth: 0,
      canvasHeight: 0,
      predictionResults: [
        '这是单侧胸外侧疹',
        '这是双侧胸外侧疹',
        '湿疹',
        '接触性荨麻疹'
      ],
      treatmentAdvices: [
        '建议使用抗生素和局部治疗。',
        '建议立即就医，可能需要口服或静脉注射抗生素。',
        '建议涂抹皮质类固醇软膏',
        '可考虑使用免疫调节剂或类固醇'
      ],
      predictionResult: '',
      treatmentAdvice: ''
    },
  
    chooseMedia() {
      const that = this;
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album', 'camera'],
        success(res) {
          const tempFilePath = res.tempFiles[0].tempFilePath;
          console.log('选择的图片路径:', tempFilePath);
          const fileName = tempFilePath.split('/').pop();
          console.log('文件名:', fileName);
  
          wx.getImageInfo({
            src: tempFilePath,
            success(imgRes) {
              console.log('图片信息:', imgRes);
              that.setData({
                imagePath: tempFilePath,
                canvasWidth: imgRes.width,
                canvasHeight: imgRes.height,
                // 清空预测结果和治疗建议
                predictionResult: '',
                treatmentAdvice: ''
              }, () => {
                that.applyFilters();
              });
            },
            fail(err) {
              console.error('获取图片信息失败:', err);
            }
          });
        },
        fail(err) {
          console.error('选择媒体失败:', err);
        }
      });
    },
  
    getPredictionResult() {
      const { predictionResults } = this.data;
      // 从预测结果列表中随机抽取一个结果
      const randomIndex = Math.floor(Math.random() * predictionResults.length);
      return predictionResults[randomIndex];
    },
  
    getTreatmentAdvice(predictionResult) {
      const { predictionResults, treatmentAdvices } = this.data;
      // 找到对应的治疗建议
      const index = predictionResults.indexOf(predictionResult);
      return index >= 0 ? treatmentAdvices[index] : '';
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
                console.error('canvasToTempFilePath 失败:', err);
              }
            });
          };
          img.src = imagePath;
        });
    },
  
    startPrediction() {
      const { filteredImagePath } = this.data;
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
        const predictionResult = this.getPredictionResult();
        const treatmentAdvice = this.getTreatmentAdvice(predictionResult);
        wx.showModal({
          title: '预测结果',
          content: `${predictionResult} 预测值: ${Math.floor(Math.random() * 8) + 85}%`,
          showCancel: false
        });
        this.setData({
          predictionResult,
          treatmentAdvice
        });
      }, 2000);
    }
  });
  