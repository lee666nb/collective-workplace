import * as echarts from '../../ec-canvas/echarts';
const app = getApp();

function initChart(canvas, width, height, dpr) {
    if (!canvas) {
        console.error('Canvas element is not provided');
        return;
    }

    const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
    });
    canvas.setChart(chart);

    const bgPatternSrc = '/image/pie-bg.png';
    const option = {
        backgroundColor: {
            image: bgPatternSrc,
            repeat: 'repeat'
        },
        // backgroundColor: "#ffffff",
        title: {
            text: '各类皮肤病的患病年龄段(柱状图)',
            textStyle: {
                color: '#235894',
                fontSize: 15 // 调整标题字体大小
            },
            left: 'right',        // 将标题移动到右边
            top: 'top'            // 将标题放置在顶部
        },
        // legend: {
        //     data: ['A', 'B', 'C'],
        //     top: 10,
        //     left: 'center',
        //     backgroundColor: 'red',
        //     z: 10
        // },
        // grid: {
        //     containLabel: true
        // },
        // tooltip: {
        //     show: true,
        //     trigger: 'axis'
        // },
        // xAxis: {
        //     type: 'category',
        //     boundaryGap: false,
        //     data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        // },
        // yAxis: {
        //     type: 'value',
        //     splitLine: {
        //         lineStyle: {
        //             type: 'dashed'
        //         }
        //     }
        // },
        // series: [{
        //     name: 'A',
        //     type: 'line',
        //     smooth: true,
        //     data: [18, 36, 65, 30, 78, 40, 33]
        // }, {
        //     name: 'B',
        //     type: 'line',
        //     smooth: true,
        //     data: [12, 50, 51, 35, 70, 30, 20]
        // }, {
        //     name: 'C',
        //     type: 'line',
        //     smooth: true,
        //     data: [10, 30, 31, 50, 40, 20, 10]
        // }]
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['0-9岁', '10-19岁', '20-29岁', '30-39岁 ', '40-49岁', '50-59岁', '60岁及以上'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
    };

    try {
        chart.setOption(option);
    } catch (error) {
        console.error('Error setting chart option:', error);
    }

    return chart;
}

function initChart2(canvas, width, height, dpr) {
    if (!canvas) {
        console.error('Canvas element is not provided');
        return;
    }

    const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
    });
    canvas.setChart(chart);

    const piePatternSrc = '/image/pie-pattern.jpg';
    const bgPatternSrc = '/image/pie-bg.png';

    const option = {
        backgroundColor: {
            image: bgPatternSrc,
            repeat: 'repeat'
        },
        title: {
            text: '皮肤病类型分布（饼状图）',
            textStyle: {
                color: '#235894',
                fontSize: 15 
            },
            left: 'right',        // 将标题移动到右边
            top: 'top'            // 将标题放置在顶部
        },
        tooltip: {},
        series: [
            {
                name: 'pie',
                type: 'pie',
                selectedMode: 'single',
                selectedOffset: 30,
                clockwise: true,
                label: {
                    fontSize: 18,
                    color: '#235894'
                },
                labelLine: {
                    lineStyle: {
                        color: '#235894'
                    }
                },
                data: [
                    { value: 1048, name: '湿疹 (Eczema)：33%' },
                    { value: 735, name: '痤疮 (Acne): 25%' },
                    { value: 580, name: '荨麻疹 (Urticaria): 15%' },
                    { value: 484, name: '皮肤癌 (Skin Cancer): 17%' },
                    { value: 300, name: '其他 (Others): 10%' }
                ],
                itemStyle: {
                    opacity: 0.7,
                    color: {
                        image: piePatternSrc,
                        repeat: 'repeat'
                    },
                    borderWidth: 3,
                    borderColor: '#235894'
                }
            }
        ]
    };

    try {
        chart.setOption(option, true);
    } catch (error) {
        console.error('Error setting chart option:', error);
    }

    return chart;
}


function initChart3(canvas, width, height, dpr) {
    if (!canvas) {
        console.error('Canvas element is not provided');
        return;
    }

    const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
    });
    canvas.setChart(chart);

    const bgPatternSrc = '/image/pie-bg.png';
    const option = {
        title: {
            text: '皮肤病高发地区分布（环形图）',
            textStyle: {
                color: '#235894',
                fontSize: 15 
            },
            left: 'right',        
            top: 'top'            
        },
        backgroundColor: {
            image: bgPatternSrc,
            repeat: 'repeat'
        },
        series: [{
            label: {
                normal: {
                    fontSize: 14
                }
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['20%', '40%'],
            data: [{
                value: 55,
                name: '北京'
            }, {
                value: 20,
                name: '武汉'
            }, {
                value: 10,
                name: '杭州'
            }, {
                value: 20,
                name: '广州'
            }, {
                value: 38,
                name: '上海'
            }]
        }]
    };

    try {
        chart.setOption(option);
    } catch (error) {
        console.error('Error setting chart option:', error);
    }

    return chart;
}

Page({
    data: {
        indicatorDots: false,
        autoplay: false,
        interval: 3000,
        duration: 800,
        ec: {
            onInit: initChart
        },
        ect: {
            onInit: initChart2
        },
        ecs: {
            onInit: initChart3
        }
    },
    navigateToDiagnose() {  
        wx.reLaunch({  
            url: '/page/component/xianwei/xianwei'  
        });  
    },  
    navigateToKnowledge() {  
        wx.reLaunch({  
            url: '/page/component/run/run'  
        });  
    },  
    navigateToProfile() {  
        wx.reLaunch({  
            url: '/page/component/user/user'  
        });  
    },
    onReady() {
        // 可以添加初始化逻辑
    }
});
