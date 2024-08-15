import * as echarts from 'D:\collective-workplace\skindis\DuoQiCuiCai\page\component\ec-canvas';

Page({
  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
  },
  onLoad() {
    this.initChart();
  },
  initChart() {
    const pieChart = this.selectComponent('#pieChart');
    pieChart.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // 高分屏适配
      });
      const option = {
        series: [
          {
            name: '皮肤病分布',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 45, name: '湿疹' },
              { value: 25, name: '痤疮' },
              { value: 15, name: '荨麻疹' },
              { value: 10, name: '皮炎' },
              { value: 5, name: '其他' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      chart.setOption(option);
      return chart;
    });
  },
  navigateToDiagnose() {
    wx.reLaunch({
      url: '/page/component/xianwei/xianwei' // 替换为你的自我诊断页面
    });
  },
  navigateToKnowledge() {
    wx.reLaunch({
      url: '/page/component/run/run' // 替换为你的健康知识页面
    });
  },
  navigateToProfile() {
    wx.reLaunch({
      url: '/page/component/user/user' // 替换为你的个人信息页面
    });
  }
});
