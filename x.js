// 环形进度图
var option1 = {
	backgroundColor: 'rgba(0,0,0,0)',
	tooltip: {
		trigger: "item"
	},
	grid: {
	    // top: 'center',
	    // height: 90,
	    left: 0,
	    right: 0,
		top:0,
		bottom:0
	},
	graphic: [{
		type: 'text',
		left: 'center',
		top: '55%',
		style: {
			text: 'AUSTRALIA',
			fill: '#52C2D6',
			font: 'normal 18px "Microsoft YaHei", sans-serif',
			fontSize:12
		}
	}],
	series: [{
			name: "",
			type: "gauge",
			// radius: "50%",
			// center: ['50%', '50%'],
			startAngle: 0,
			endAngle: 359.9,
			splitNumber: 50,
			hoverAnimation: true,
			axisTick: {
				show: false
			},
			splitLine: {
				length: 20,
				lineStyle: {
					width: 3,
					color: "#0D2331"
				}
			},
			axisLabel: {
				show: false
			}, 
			pointer: {
				show: false
			},
			axisLine: {
				lineStyle: {
					opacity: 0
				}
			},
			detail: {
				show: false
			},
			data: [{
				value: 50,
				name: ""
			}]
		},
		{
			name: "",
			type: "pie",
			radius: ["60%", "70%"],
			center: ['50%', '50%'],
			silent: true,
			clockwise: true,
			startAngle: 0,
			z: 0,
			zlevel: 0,
			label: {
				normal: {
					position: "center",

				}
			},
			data: [{
					value: 40,
					name: "",
					label: {
						normal: {
							formatter: function(param) {
								return param.data.value
							},
							fontSize: 24,
							color: '#FDAC00',
							fontFamily: 'Silom'
						}
					},
					itemStyle: {
						normal: {
							color: "#63EBFF"
						}
					}
				},
				{
					value:60,
					name: "",
					label: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							color: "#113044"
						}
					}
				}
			]
		}
	]
};

// 三进度条
option2 = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {},
    xAxis: {
        max: 100,
        splitLine: {
            show: false
        },
        offset: 10,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        data: ['SYSTEM', 'SYSTEM', 'SYSTEM'],
        inverse: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                color: '#FDAC00',
                fontSize: 12
            }
        }
    },
    grid: {
        top: 'top',
        height: 90,
        left: 40,
        right: 0
    },
    series: [{ // 外边框
            name: '',
            type: 'pictorialBar',
            symbol: 'reat',
            //barWidth: '10%',
            symbolOffset: ['-1%', 0], //位置
            symbolSize: ['102%', 24],
            itemStyle: {
                normal: {
                    color: 'rgba(54,215,182,0.27)'
                }
            },
            z: 0, //图层
            symbolRepeat: null,
            symbolBoundingData: 100,
            // data: [61, 75, 35],
			data: [100,100,100],
            animationEasing: 'elasticOut',

        },
        { // 内边框
            name: '',
            type: 'pictorialBar',
            symbol: 'reat',
            //barWidth: '9%',
            //barMaxWidth: '20%',
            symbolOffset: ['-0.5%', 0],
            symbolSize: ['101%', 22],
            itemStyle: {
                normal: {

                    color: 'black'
                }
            },
            z: -20,
            symbolRepeat: null,
            symbolBoundingData: 100,
            // data: [61, 75, 35],
			data: [100,100,100],
            animationEasing: 'elasticOut',

        },
        {
            // current data
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    // color: '#36d7b6',
					color:"#52C2D6"
                }
            },
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbolClip: true,
            symbolSize: 20,
            symbolBoundingData: 100,
            data: [61, 75, 35],
            z: 99999999,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        }, {
            // full data
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgba(54,215,182,0.27)'
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        return (params.value);
                    },
                    position: 'right',
                    offset: [10, 0],
                    textStyle: {
                        color: 'darkorange',
                        fontSize: 18
                    }
                }
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbol: 'rect',
            symbolSize: 20,
            symbolBoundingData: 100,
            data: [891, 1220, 660],
            z: 99999,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        }
    ]
};

// 三仪表盘
option3 = {
    backgroundColor: 'rgba(0,0,0,0)',
	grid: {
	    top: 'top',
	    left: 0,
	    right: 0
	},
    tooltip: {
        formatter: '{a} <br/>{c} {b}'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 220,
            splitNumber: 5,
            radius: '50%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
					color: [[0.09, "#52C2D6"], [0.82, "#52C2D6"], [1, "#52C2D6"]],
                    // color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                    width: 1,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2
                }
            },
            axisLabel: {            // 坐标轴小标记
                fontWeight: 'bolder',
				fontSize:10,
                color: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 2
            },
            axisTick: {            // 坐标轴小标记
                length: 5,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2
                }
            },
            splitLine: {           // 分隔线
                length:10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 1,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2
                }
            },
            pointer: {           // 分隔线
                shadowColor: '#fff', //默认透明
                shadowBlur: 1
            },
            title: {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 5,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2
                }
            },
            detail: {
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth:0,
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 1,
                offsetCenter: [0, '50%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
					fontSize:14,
                    color: '#FDAC00'
                }
            },
            data: [{value: 40, name: 'km/h'}]
        },
        {
            name: '转速',
            type: 'gauge',
            center: ['15%', '55%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 7,
            endAngle: 45,
            splitNumber: 5,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                   color: [[0.09, "#52C2D6"], [0.82, "#52C2D6"], [1, "#52C2D6"]],
                    width: 1,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2
                }
            },
            axisLabel: {            // 坐标轴小标记
                fontWeight: 'bolder',
                color: '#fff',
				fontSize:8,
                shadowColor: '#fff', //默认透明
                shadowBlur: 2
            },
            axisTick: {            // 坐标轴小标记
                length: 6,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2
                }
            },
            splitLine: {           // 分隔线
                length: 10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 1,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2
                }
            },
            pointer: {
                width: 2,
                shadowColor: '#fff', //默认透明
                shadowBlur: 1
            },
            title: {
                offsetCenter: [0, '-30%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontStyle: 'italic',
					fontSize:5,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 1
                }
            },
            detail: {
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                // shadowBlur: 5,
                // width: 80,
                // height: 30,
                offsetCenter: [25, '20%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
					fontSize:9,
                    color: '#fff'
                }
            },
            data: [{value: 1.5, name: 'x1000 r/min'}]
        },
        {
            name: '油表',
            type: 'gauge',
            center: ['85%', '50%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.09, "#52C2D6"], [0.82, "#52C2D6"], [1, "#52C2D6"]],
                    width: 1,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 5,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2
                }
            },
            axisLabel: {
                fontWeight: 'bolder',
				fontSize:8,
                color: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 2,
                formatter: function (v){
                    switch (v + '') {
                        case '0': return 'E';
                        case '1': return 'Gas';
                        case '2': return 'F';
                    }
                }
            },
            splitLine: {           // 分隔线
                length:5,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:1,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2
                }
            },
            pointer: {
                width:1,
                shadowColor: '#fff', //默认透明
                shadowBlur: 1
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{value: 0.5, name: 'gas'}]
        },
        {
            name: '水表',
            type: 'gauge',
            center: ['85%', '50%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.09, "#52C2D6"], [0.82, "#52C2D6"], [1, "#52C2D6"]],
                    width: 1,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false
            },
            axisLabel: {
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff', //默认透明
				fontSize:6,
                shadowBlur: 2,
                formatter: function(v){
                    switch (v + '') {
                        case '0': return 'H';
                        case '1': return 'Water';
                        case '2': return 'C';
                    }
                }
            },
            splitLine: {           // 分隔线
                length: 5,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 1,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 2
                }
            },
            pointer: {
                width: 1,
                shadowColor: '#fff', //默认透明
                shadowBlur: 1
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data:[{value: 0.5, name: 'gas'}]
        }
    ]
};


//多环形图
option4 = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#2bdeff', '#1897fe', '#9f51ff', '#ff32e4', "#fd3744"],
    tooltip: {
        trigger: 'item',
        formatter: "{a}:<br/>{b}(起)",

    },
      legend: {
            type: 'scroll',
            orient: 'vertical',
            right: '3%',
            top: '5%',
            itemWidth:5,itemHeight:5,
            itemGap:5,
            textStyle:{
                color:'#FDAC00'
            },
            data: ['AUSTRALIA 01','AUSTRALIA 02','AUSTRALIA 03','AUSTRALIA 04','AUSTRALIA 05']
          },
    series: [{
        name: 'AUSTRALIA 01',
        type: 'pie',
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: ['80%', '80%'],
        itemStyle: {
            normal: {
                 label: {
                    show: false,
                    textStyle: {
                        fontSize: 24
                    }
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#2bdeff",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 9,
            name: '44'
        }, {
            value: 4,
            name: '',
            itemStyle: {
				normal: {
					 color: "rgba(0,0,0,0)",
					borderWidth: 0
				}
			}
        }]
    }, {
        name: 'AUSTRALIA 02',
        type: 'pie',
        clockWise: false,
        radius: ['70%', '70%'],
        hoverAnimation: false,
         itemStyle: {
            normal: {
                label: {
                    show: false,
                    textStyle: {
                        fontSize: 24
                    }
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#1897fe",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 7,
            name: '27%'
        }, {
            value: 7,
            name: '',
            itemStyle: {
				normal: {
					 color: "rgba(0,0,0,0)",
					borderWidth: 0
				}
			}
        }]
    }, {
        name: 'AUSTRALIA 03',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
         radius: ['60%', '60%'],
        itemStyle: {
            normal: {
                 label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#9f51ff",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 6,
            name: '26%'
        }, {
            value: 7,
            name: '',
            itemStyle: {
				normal: {
					 color: "rgba(0,0,0,0)",
					borderWidth: 0
				}
			}
        }]
    }, {
        name: 'AUSTRALIA 04',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
         radius: ['50%', '50%'],
        itemStyle: {
            normal: {
                 label: {
                    show: false,
                    textStyle: {
                        fontSize: 24
                    }
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#ff32e4",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 5,
            name: '13%'
        }, {
            value: 7,
            name: '',
            itemStyle: {
				normal: {
					 color: "rgba(0,0,0,0)",
					borderWidth: 0
				}
			}
        }]
    }, {
        name: 'AUSTRALIA 05',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
         radius: ['40%', '40%'],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    textStyle: {
                        fontSize: 24
                    }
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#fd3744",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 2,
            name: '3%'
        }, {
            value: 8,
            name: '',
            itemStyle: {
				normal: {
					 color: "rgba(0,0,0,0)",
					borderWidth: 0
				}
			}
        }]
    }]
};


// 心电图
var beats=[15,0,-13,140,-45,0];
var date=[];

for (var i = 0; i < 50; i++) {
    // data.push(Math.ceil(Math.random() * 800));
    date.push(getTime(Math.round(new Date().getTime() / 1000) - i))
}
var data=[0,0,0,0,0,15,0,-13,140,-45,0,0,0,0,0,15,0,-13,140,-45,0,0,0,0,0,15,0,-13,140,-45,0,0,0,0,0,15,0,-13,140,-45,0,0,0,0,0,15,0,-13,140,-45]
console.log(data)
option5 = {
	backgroundColor: 'rgba(0,0,0,0)',
    grid: [{
        left: 0,
        right: 0,
        top: 30,
        bottom: 10,
        containLabel: true
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        data: date
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            }
        }
    }],
    series: [{
        name: '发送',
        type: 'line',
        smooth:true,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1,
				color:'#63EBFF'
            }
        },
        data: data
    },{
        name: '统计',
        type: 'gauge',
        splitNumber: 8, //刻度数量
        min: 0,
        max: 200,
        radius: '80%', //图表尺寸
        center: ['50%', '80%'],
        startAngle: 180,//刻度起始
        endAngle: 0,//刻度结束
        axisLine: {
          show: true,
          lineStyle: {
			opacity:0.1,
            width: 0,
            shadowBlur: 0,
            color: [[0.1, '#17D5F7'],[0.2, '#1BF0AC'],[0.3, '#3ED25E'],[0.4, '#A2DA2A'],[0.5, '#DBF743'],[0.6, '#F4DE48'],[0.7, '#F3B92F'],[0.8, '#F5841F'],[0.9, '#F15041'],[1, '#F12C2C']]
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: 'auto',
            width: 4
          },
          length: 22,
          splitNumber: 2
        },
        splitLine: {
          show: false,
          length: 22,
          lineStyle: {
            color: 'auto',
          }
        },
        axisLabel: {
          show: false
        },
        pointer: { //仪表盘指针
          show: 0,
          length: '70%',
          width: 2
        },
        title: {
          show: true,
          offsetCenter: [0, '5%'], // x, y，单位px
          textStyle: {
            color: '#ddd',
            fontSize: 12
          }
        },
        detail: {
          // borderColor: '#fff',
          // shadowColor: '#fff', //默认透明
          shadowBlur: 2,
          offsetCenter: [0, '-20%'], // x, y，单位px
          textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            color: 'rgba(255,255,255,0.4)',
            fontSize: 62,
            fontWeight:'bold',
			fontFamily:"lcdD"
          },
          formatter: '{value}'
        },
        data: [{
          name: "HEARTBEATS",
          value: 100
        }]
      },
      {
        name: '内部白色刻度',
        type: 'gauge',
        splitNumber: 8, //刻度数量
        min: 0,
        max: 100,
        radius: '60%', //图表尺寸
        center: ['50%', '80%'],
        startAngle: 180,//刻度起始
        endAngle: 0,//刻度结束
        axisLine: {
          show: true,
          lineStyle: {
            width: 0,
            shadowBlur: 0,
            color: [
              [0.2, '#fff'],
              [1, '#fff']
            ]
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: 'auto',
            width: 1
          },
          length: 5,
          splitNumber: 2
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'auto',
            width: 1
          },
          length: 8,
          splitNumber: 10
        },
        axisLabel: {
          show: false
        },
        pointer: { //仪表盘指针
          show: false
        },
        title: {
          show: false
        },
        detail: {
          show:false
        },
        data: [{name:'',value:0}]
      }]
};

var earth_canvas = document.createElement('canvas');
var mapChart = echarts.init(earth_canvas, null, {
    width: 4096, height: 2048
});
mapChart.setOption({
    series : [
        {
            type: 'map',
            map: 'world',
            // 绘制完整尺寸的 echarts 实例
            top: 0, left: 0,
            right: 0, bottom: 0,
            boundingCoords: [[-180, 90], [180, -90]]
        }
    ]
});
$("canvas").show()

optionX = {
    backgroundColor: '#000',
    globe: {
		baseTexture:'x/earth.jpg',
		globeRadius:50,
        // baseTexture: mapChart,
        heightTexture: 'x/bathymetry_bw_composite_4k.jpg',

        displacementScale: 0.1,

        shading: 'realistic',

        environment: 'x/starfield.jpg',

        light: {
            ambient: {
                intensity: 1
            },
            main: {
                intensity: 1.5
            }
        },

        layers: [{
            type: 'blend',
            blendTo: 'emission',
            texture: 'x/night.jpg'
        }, {
            type: 'overlay',
            texture:  'x/clouds.png',
            shading: 'lambert',
            distance: 5
        }]
    },
    series: []
}
var earth=chart(optionX, "earth");

var x1=chart(option1, "x1");
var x2=chart(option2, "x2");
var x3=chart(option3, "x3");
var x4=chart(option4, "x4");
var x5=chart(option5, "x5");

//心电图动态变化
var beatsNum=0; beatsInterval=1,beatsTimes=0;
var o5=x5.getOption();
setInterval(function() { 
	// return;
    data.shift();
	if(beatsNum<=beats.length){
		data.push(beats[beatsNum]); 
	}else if((beatsNum>beats.length) && (beatsNum<(beats.length+beatsInterval))){
		data.push(0)
	}else{
		data.push(0)
		beatsNum=0;
		beatsTimes=parseInt(60/((beats.length+beatsInterval)/10))
		// console.log(beatsTimes);
		o5.series[1].data[0].value=beatsTimes;
		o5.series[1].axisLine.lineStyle.color=colorFunc(beatsTimes/120)
		x5.setOption(o5)
	}
	beatsNum++;	
    date.shift()
    date.push(getTime(Math.round(new Date().getTime() / 1000)))
    x5.setOption({
        series: [{
            data: data
        }],
        xAxis: [{
            data: date
        }],
    });
}, 100)

waveChart(62,1,x1)
function waveChart(num,range,chart){
	var x=0;
	var res=num;
	var flag=1;
	var option=chart.getOption();
	setInterval(function(){
		if(flag){
			res+=1;
			if(res>=num+range){
				flag=0
			}
		}else{
			res-=1;
			if(res<=num-range){
				flag=1
			}
		}
		// console.log(res);
		option.series[1].data[0].value=res;
		option.series[1].data[1].value=(100-res);
		x++;
		// if(x%3==0){
		// 	option.series[1].data[0].label.normal.formatter=res
		// }
		
		chart.setOption(option)
	},200)
}

waveChart2(44,2,x2)
function waveChart2(num,range,chart){
	var res=num;
	var flag=1;
	var option=chart.getOption();
	setInterval(function(){
		if(flag){
			res+=1;
			if(res>=num+range){
				flag=0
			}
		}else{
			res-=1;
			if(res<=num-range){
				flag=1
			}
		}
		// console.log(res);
		option.series[2].data=[res,res+31,res+15];
		// option.series[4].data=[res,res+31,res+15];
		chart.setOption(option)
	},100)
}

function chart(option, id) {
	var mychart = echarts.init(document.getElementById(id), 'dark');
	mychart.setOption(option);
	// console.log(mychart)
	$(window).resize(function(){
		mychart.resize()
	})
	return mychart;
}



xtable("xtable1");
xtable("xtable2")
function xtable(id){
	;
	var str=""
	for (var i = 0; i < 10; i++) {
		str+="<li>"+
			   "<p>"+"AUSTRALIA LAND".slice(0,parseInt(Math.random()*7)+5)+ i +"</p>"+
			   "<p>EMECY"+ i +"</p>"+
			   "<p>"+parseInt(Math.random()*100)+"%"+ i +"</p>"+
			"</li>";
	}
	$("#"+id).html(str);
}

animate2("xlist")
animate("xtable1");
animate("xtable2");

function animate(id){
	var $table=$("#"+id)
	setInterval(function(){
		var $li=$table.find("li:first");
		var li_str=$li.html();// console.log(li_str)
		$li.fadeOut(500,function(){
			$li.remove();
			var $li2=$("<li >"+li_str+"</li>")
			$table.append($li2); 
			// $li2.hide()
			// $li2.fadeIn("slow")
		})
		// $li.hide()
	},2000)
}

function animate2(id){
	var $table=$("#"+id)
	setInterval(function(){
		var $li=$table.find("li:first");
		var li_str=$li.html(); //console.log(li_str)
		$li.fadeOut(500,function(){
			$li.remove();
			$table.find("li:nth-child(3)").addClass("point").removeClass("default")
			$table.find("li:first").css({
				"background-size": "70% 70%"
			})
			// $table.css({
			// 	transform:"translate(0,-3%)"
			// })
			// 
			
		})
		$table.find("li:nth-child(3)").addClass("default").removeClass("point")
		var $li2=$("<li >"+li_str+"</li>")
		$table.append($li2); 
		// $table.css({
		// 	transform:"translate(0,-3%)"
		// })
		
	},3500)
}



// wave(100,5)
function wave(num,range){
	var res=num;
	var flag=1;
	setInterval(function(){
		if(flag){
			res+=1.5;
			if(res>=num+range){
				flag=0
			}
		}else{
			res-=1.5;
			if(res<=num-range){
				flag=1
			}
		}
		console.log(res)
	},50)
}


// 心跳扇形图颜色进度处理
function colorFunc(value){
	var colorRange=[[0.1, '#17D5F7'],[0.2, '#1BF0AC'],[0.3, '#3ED25E'],[0.4, '#A2DA2A'],[0.5, '#DBF743'],[0.6, '#F4DE48'],[0.7, '#F3B92F'],[0.8, '#F5841F'],[0.9, '#F15041'],[1, '#F12C2C']];
	var index=parseInt(value*10);
	var arr=colorRange.slice(0,index);
	if(arr.length<10){
		arr.push([1, '#464646'])
	}
	// console.log(arr)
	return arr;
}



// 格式化时间
function getTime() {
    var ts = arguments[0] || 0;
    var t, h, i, s;
    t = ts ? new Date(ts * 1000) : new Date();
    h = t.getHours();
    i = t.getMinutes();
    s = t.getSeconds();
    // 可根据需要在这里定义时间格式
    return (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);
}
// 生成初始数据