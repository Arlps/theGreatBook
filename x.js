// 上左扇形图
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
			splitNumber: 65,
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
					value: 50,
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
					value: 15,
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

// 进度图
var maxData = 2000;
option2 = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {},
    xAxis: {
        max: maxData,
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
            symbolBoundingData: maxData,
            data: [891, 1220, 660],
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
            symbolBoundingData: maxData,
            data: [891, 1220, 660],
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
            symbolBoundingData: maxData,
            data: [891, 1220, 660],
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
            symbolBoundingData: maxData,
            data: [891, 1220, 660],
            z: 99999,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        }
    ]
};

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
// 
// setInterval(function (){
//     option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
//     option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
//     option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
//     option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
//     myChart.setOption(option);
// },2000)



/*
    @songcxa
    @2017-11-15
*/
placeHolderStyle = {
    normal: {
         color: "rgba(0,0,0,0)",
        borderWidth: 0
    },
    
};
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
            itemStyle: placeHolderStyle
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
            itemStyle: placeHolderStyle
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
            itemStyle: placeHolderStyle
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
            itemStyle: placeHolderStyle
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
            itemStyle: placeHolderStyle
        }]
    }]
};


var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
option5 = {
	backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {},
    visualMap: {
        max: 20,
		show:false,
        inRange: {
            // color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
			color:['#313695',"#52C2D6","#fff"]
        }
    },
	// globe:{
	// 	top:0,
	// 	bottom:0
	// },
    xAxis3D: {
        type: 'category',
        data: hours,
		axisLabel: {
		    margin: 10,
		    textStyle: {
		        color: '#52C2D6',
		        fontSize: 12
		    }
		}
		
    },
    yAxis3D: {
        type: 'category',
        data: days,
		axisLabel: {
		    margin: 10,
		    textStyle: {
		        color: '#52C2D6',
		        fontSize: 12
		    }
		}
    },
    zAxis3D: {
        type: 'value',
		axisLabel: {
		    margin: 10,
		    textStyle: {
		        color: '#52C2D6',
		        fontSize: 12
		    }
		}
    },
    grid3D: {
		top:"-10%",
		bottom:"-10%",
        boxWidth: 150,
        boxDepth: 100,
        viewControl: {
            // projection: 'orthographic'
        },
        light: {
            main: {
                intensity: 1.2,
                shadow: true
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
        type: 'bar3D',
        data: data.map(function (item) {
            return {
                value: [item[1], item[0], item[2]],
            }
        }),
        shading: 'lambert',

        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1,
				color:"#52C2D6"
            }
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#52C2D6'
                }
            },
            itemStyle: {
                color: '#52C2D6'
            }
        }
    }]
}


chart(option1, "x1");
chart(option2, "x2");
chart(option3, "x3");
chart(option4, "x4");
// chart(option5, "x5");
// var op = myChart.getOption();
// op.series[1].data[1].value = 80;
// myChart.setOption(op);

function update(chart,data,interval){
	setInterval(function(){
		var option=chart.setOption();
		
		chart.setOption(option)
	},interval)
}

function wave(data,percent){
	var value=data;
	
}


function chart(option, id) {
	var mychart = echarts.init(document.getElementById(id), 'dark');
	mychart.setOption(option);
	console.log(mychart)
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
		var li_str=$li.html(); console.log(li_str)
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
		var li_str=$li.html(); console.log(li_str)
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



