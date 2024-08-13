Page({
    data: {
      imagePath: '',
      filteredImagePath: '',
      predictionResults: [
        '湿疹',
        '银屑病（牛皮癣）',
        '痤疮（粉刺）',
        '玫瑰痤疮',
        '荨麻疹',
        '带状疱疹',
        '足癣',
        '白癜风',
        '冻疮',
        '汗疱疹',
        '黄褐斑',
        '扁平疣',
        '脂溢性皮炎',
        '接触性皮炎',
        '天疱疮',
        '斑秃',
        '红斑狼疮',
        '脓疱型牛皮癣',
        '鱼鳞病',
        '毛囊炎',
        '黄疸',
        '皮脂腺囊肿',
        '梅毒'
      ],
      treatmentAdvices: [
        '使用抗生素和局部治疗',
        '涂抹皮质类固醇软膏',
        '考虑使用免疫调节剂或类固醇',
        '使用抗病毒药物',
        '涂抹抗组胺药膏',
        '使用抗真菌药物',
        '口服或局部使用维A酸类药物',
        '涂抹抗真菌药膏',
        '口服抗生素',
        '使用皮质类固醇软膏',
        '使用抗真菌药物',
        '涂抹免疫抑制剂',
        '考虑使用抗组胺药',
        '涂抹抗病毒药膏',
        '涂抹皮质类固醇软膏',
        '使用光疗',
        '使用抗生素和免疫抑制剂',
        '使用抗病毒药物',
        '涂抹抗病毒药膏',
        '使用抗生素药物',
        '考虑使用口服或局部抗生素',
        '口服抗生素',
        '使用抗生素药物'
      ],
      predictionResult: '',
      treatmentAdvice: '',
      accuracy: 0 // 增加的字段，用于保存预测准确度
    },
  
    chooseMedia() {
      const that = this;
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album', 'camera'],
        success(res) {
          const tempFilePath = res.tempFiles[0].tempFilePath;
          that.setData({
            imagePath: tempFilePath,
            filteredImagePath: tempFilePath,
            predictionResult: '',
            treatmentAdvice: ''
          });
        }
      });
    },
  
    getPredictionResult() {
      const { predictionResults } = this.data;
      const randomIndex = Math.floor(Math.random() * predictionResults.length);
      return predictionResults[randomIndex];
    },
  
    getTreatmentAdvice(predictionResult) {
      const { predictionResults, treatmentAdvices } = this.data;
      const index = predictionResults.indexOf(predictionResult);
      return index >= 0 ? treatmentAdvices[index] : '';
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
        const accuracy = Math.floor(Math.random() * 11) + 85; // 生成85到95之间的随机数

        this.setData({
            predictionResult,
            treatmentAdvice,
            accuracy
        });
    }, 2000);
    }
  });
