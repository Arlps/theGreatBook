// api()
function api(){
	var url="";
	//天气  data
	// url="https://api.jisuapi.com/weather/query?appkey=1793aab537f9d9e9&city=揭阳";
	
	//万年历
	// url="https://api.jisuapi.com/calendar/query?appkey=1793aab537f9d9e9&date=";
	
	//星座
	// url="https://api.jisuapi.com/astro/all?appkey=1793aab537f9d9e9";
	
	//周公
	// url="https://api.jisuapi.com/dream/search?appkey=1793aab537f9d9e9&keyword=鞋&pagenum=1&pagesize=10"
	
	//笑话
	// url="https://api.jisuapi.com/xiaohua/text?pagenum=1&pagesize=10&sort=addtime&appkey=1793aab537f9d9e9"
	
	//国家
	// url="https://api.jisuapi.com/country/query?name=&continent=亚洲&language=&iscountry=0&appkey=1793aab537f9d9e9"
	
	var data=query(url,function(data){
		console.log(data);
		return data;
	});
	
}

function query(url,callback){
	var data;
	$.ajax({
		url: url,//商品列表
		async:false,
		dataType:"jsonp",
		success: function(res) {
			// console.log(res)
			callback(res.result);
		}
	})
}

var weather = {
	"city": "揭阳",
	"cityid": 83,
	"citycode": "101281901",
	"date": "2020-02-29",
	"week": "星期六",
	"weather": "多云",
	"temp": "24",
	"temphigh": "28",
	"templow": "20",
	"img": "1",
	"humidity": "64",
	"pressure": "1011",
	"windspeed": "2.4",
	"winddirect": "南风",
	"windpower": "2级",
	"updatetime": "2020-02-29 10:46:00",
	"index": [{
		"iname": "空调指数",
		"ivalue": "较少开启",
		"detail": "您将感到很舒适，一般不需要开启空调。"
	}, {
		"iname": "运动指数",
		"ivalue": "较适宜",
		"detail": "天气较好，较适宜进行各种运动，但考虑气温较高且湿度较大，请适当降低运动强度，并及时补充水分。"
	}, {
		"iname": "紫外线指数",
		"ivalue": "中等",
		"detail": "属中等强度紫外线辐射天气，建议涂擦SPF高于15、PA+的防晒护肤品，戴帽子、太阳镜。"
	}, {
		"iname": "感冒指数",
		"ivalue": "少发",
		"detail": "各项气象条件适宜，无明显降温过程，发生感冒机率较低。"
	}, {
		"iname": "洗车指数",
		"ivalue": "适宜",
		"detail": "适宜洗车，未来持续两天无雨天气较好，适合擦洗汽车，蓝天白云、风和日丽将伴您的车子连日洁净。"
	}, {
		"iname": "空气污染扩散指数",
		"ivalue": "中",
		"detail": "气象条件对空气污染物稀释、扩散和清除无明显影响。"
	}, {
		"iname": "穿衣指数",
		"ivalue": "热",
		"detail": "天气热，建议着短裙、短裤、短薄外套、T恤等夏季服装。"
	}],
	"aqi": {
		"so2": "14",
		"so224": "",
		"no2": "31",
		"no224": "",
		"co": "1.200",
		"co24": "",
		"o3": "66",
		"o38": "",
		"o324": "",
		"pm10": "95",
		"pm1024": "",
		"pm2_5": "70",
		"pm2_524": "",
		"iso2": "4",
		"ino2": "15",
		"ico": "12",
		"io3": "20",
		"io38": "",
		"ipm10": "72",
		"ipm2_5": "93",
		"aqi": "94",
		"primarypollutant": "PM2.5",
		"quality": "良",
		"timepoint": "2020-02-29 10:00:00",
		"aqiinfo": {
			"level": "二级",
			"color": "#FFFF00",
			"affect": "空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱影响",
			"measure": "极少数异常敏感人群应减少户外活动"
		}
	},
	"daily": [{
		"date": "2020-02-29",
		"week": "星期六",
		"sunrise": "06:36",
		"sunset": "18:17",
		"night": {
			"weather": "阴",
			"templow": "20",
			"img": "2",
			"winddirect": "微风",
			"windpower": "3级"
		},
		"day": {
			"weather": "多云",
			"temphigh": "28",
			"img": "1",
			"winddirect": "微风",
			"windpower": "3级"
		}
	}, {
		"date": "2020-03-01",
		"week": "星期日",
		"sunrise": "06:36",
		"sunset": "18:17",
		"night": {
			"weather": "多云",
			"templow": "16",
			"img": "1",
			"winddirect": "微风",
			"windpower": "3级"
		},
		"day": {
			"weather": "多云",
			"temphigh": "29",
			"img": "1",
			"winddirect": "微风",
			"windpower": "3级"
		}
	}, {
		"date": "2020-03-02",
		"week": "星期一",
		"sunrise": "06:35",
		"sunset": "18:17",
		"night": {
			"weather": "多云",
			"templow": "14",
			"img": "1",
			"winddirect": "微风",
			"windpower": "3级"
		},
		"day": {
			"weather": "多云",
			"temphigh": "25",
			"img": "1",
			"winddirect": "微风",
			"windpower": "3级"
		}
	}, {
		"date": "2020-03-03",
		"week": "星期二",
		"sunrise": "06:34",
		"sunset": "18:18",
		"night": {
			"weather": "阴",
			"templow": "14",
			"img": "2",
			"winddirect": "微风",
			"windpower": "3级"
		},
		"day": {
			"weather": "多云",
			"temphigh": "24",
			"img": "1",
			"winddirect": "微风",
			"windpower": "3级"
		}
	}, {
		"date": "2020-03-04",
		"week": "星期三",
		"sunrise": "06:33",
		"sunset": "18:18",
		"night": {
			"weather": "多云",
			"templow": "13",
			"img": "1",
			"winddirect": "微风",
			"windpower": "3级"
		},
		"day": {
			"weather": "阴",
			"temphigh": "23",
			"img": "2",
			"winddirect": "微风",
			"windpower": "3级"
		}
	}, {
		"date": "2020-03-05",
		"week": "星期四",
		"sunrise": "06:32",
		"sunset": "18:19",
		"night": {
			"weather": "多云",
			"templow": "11",
			"img": "1",
			"winddirect": "微风",
			"windpower": "3级"
		},
		"day": {
			"weather": "多云",
			"temphigh": "21",
			"img": "1",
			"winddirect": "微风",
			"windpower": "3级"
		}
	}, {
		"date": "2020-03-06",
		"week": "星期五",
		"sunrise": "06:31",
		"sunset": "18:19",
		"night": {
			"weather": "多云",
			"templow": "14",
			"img": "1",
			"winddirect": "微风",
			"windpower": "3级"
		},
		"day": {
			"weather": "小雨",
			"temphigh": "19",
			"img": "7",
			"winddirect": "微风",
			"windpower": "3级"
		}
	}],
	"hourly": [{
		"time": "12:00",
		"weather": "多云",
		"temp": "26",
		"img": "1"
	}, {
		"time": "13:00",
		"weather": "多云",
		"temp": "27",
		"img": "1"
	}, {
		"time": "14:00",
		"weather": "晴",
		"temp": "28",
		"img": "0"
	}, {
		"time": "15:00",
		"weather": "晴",
		"temp": "28",
		"img": "0"
	}, {
		"time": "16:00",
		"weather": "晴",
		"temp": "27",
		"img": "0"
	}, {
		"time": "17:00",
		"weather": "晴",
		"temp": "27",
		"img": "0"
	}, {
		"time": "18:00",
		"weather": "晴",
		"temp": "26",
		"img": "0"
	}, {
		"time": "19:00",
		"weather": "晴",
		"temp": "25",
		"img": "0"
	}, {
		"time": "20:00",
		"weather": "晴",
		"temp": "24",
		"img": "0"
	}, {
		"time": "21:00",
		"weather": "多云",
		"temp": "23",
		"img": "1"
	}, {
		"time": "22:00",
		"weather": "多云",
		"temp": "22",
		"img": "1"
	}, {
		"time": "23:00",
		"weather": "阴",
		"temp": "21",
		"img": "2"
	}, {
		"time": "12:00",
		"weather": "多云",
		"temp": "28",
		"img": "1"
	}, {
		"time": "13:00",
		"weather": "多云",
		"temp": "29",
		"img": "1"
	}, {
		"time": "14:00",
		"weather": "多云",
		"temp": "29",
		"img": "1"
	}, {
		"time": "15:00",
		"weather": "多云",
		"temp": "28",
		"img": "1"
	}, {
		"time": "16:00",
		"weather": "多云",
		"temp": "28",
		"img": "1"
	}, {
		"time": "17:00",
		"weather": "多云",
		"temp": "27",
		"img": "1"
	}, {
		"time": "18:00",
		"weather": "多云",
		"temp": "26",
		"img": "1"
	}, {
		"time": "19:00",
		"weather": "多云",
		"temp": "25",
		"img": "1"
	}, {
		"time": "20:00",
		"weather": "晴",
		"temp": "24",
		"img": "0"
	}, {
		"time": "21:00",
		"weather": "晴",
		"temp": "23",
		"img": "0"
	}, {
		"time": "22:00",
		"weather": "晴",
		"temp": "21",
		"img": "0"
	}, {
		"time": "23:00",
		"weather": "多云",
		"temp": "21",
		"img": "1"
	}]
}


var canlendar = {
	"year": "2020",
	"month": "02",
	"day": "29",
	"week": "六",
	"lunaryear": "2020",
	"lunarmonth": "二月",
	"lunarday": "初七",
	"ganzhi": "庚子",
	"shengxiao": "鼠",
	"star": "双鱼座",
	"huangli": {
		"nongli": "农历二〇二〇年二月初七",
		"taishen": "仓库炉房内南",
		"wuxing": "金箔金",
		"chong": "冲（丙申）猴",
		"sha": "煞北",
		"jiri": "天刑建日",
		"zhiri": "天刑（黑道日）",
		"xiongshen": "河魁 五虚 触水龙 元武 八专",
		"jishenyiqu": "天恩 益後",
		"caishen": "正南",
		"xishen": "正南",
		"fushen": "西北",
		"suici": ["庚子年", "戊寅月", "壬寅日"],
		"yi": ["解除", "破屋", "馀事勿取"],
		"ji": ["诸事不宜"]
	}
}

var star12 = [{
	"astroid": 1,
	"astroname": "白羊座",
	"date": "3-21~4-19",
	"pic": "http://api.jisuapi.com/astro/static/images/baiyang.png"
}, {
	"astroid": 2,
	"astroname": "金牛座",
	"date": "4-20~5-20",
	"pic": "http://api.jisuapi.com/astro/static/images/jinniu.png"
}, {
	"astroid": 3,
	"astroname": "双子座",
	"date": "5-21~6-21",
	"pic": "http://api.jisuapi.com/astro/static/images/shuangzi.png"
}, {
	"astroid": 4,
	"astroname": "巨蟹座",
	"date": "6-22~7-22",
	"pic": "http://api.jisuapi.com/astro/static/images/juxie.png"
}, {
	"astroid": 5,
	"astroname": "狮子座",
	"date": "7-23~8-22",
	"pic": "http://api.jisuapi.com/astro/static/images/shizi.png"
}, {
	"astroid": 6,
	"astroname": "处女座",
	"date": "8-23~9-22",
	"pic": "http://api.jisuapi.com/astro/static/images/chunv.png"
}, {
	"astroid": 7,
	"astroname": "天秤座",
	"date": "9-23~10-23",
	"pic": "http://api.jisuapi.com/astro/static/images/tianping.png"
}, {
	"astroid": 8,
	"astroname": "天蝎座",
	"date": "10-24~11-22",
	"pic": "http://api.jisuapi.com/astro/static/images/tianxie.png"
}, {
	"astroid": 9,
	"astroname": "射手座",
	"date": "11-23~12-21",
	"pic": "http://api.jisuapi.com/astro/static/images/sheshou.png"
}, {
	"astroid": 10,
	"astroname": "摩羯座",
	"date": "12-22~1-19",
	"pic": "http://api.jisuapi.com/astro/static/images/mojie.png"
}, {
	"astroid": 11,
	"astroname": "水瓶座",
	"date": "1-20~2-18",
	"pic": "http://api.jisuapi.com/astro/static/images/shuiping.png"
}, {
	"astroid": 12,
	"astroname": "双鱼座",
	"date": "2-19~3-20",
	"pic": "http://api.jisuapi.com/astro/static/images/shuangyu.png"
}]


var dream = {
	"total": 43,
	"pagenum": 1,
	"pagesize": 10,
	"list": [{
		"name": "皮鞋匠",
		"content": "<p>女人梦见她的丈夫或爱人是一个皮鞋匠，预示她将会游刃有余地做自己喜欢做的事，并且她的愿望也将会得到满足。</p>"
	}, {
		"name": "破鞋",
		"content": "<p>梦见破鞋，也有破邪之意，预示着困难会过去。</p>"
	}, {
		"name": "皮鞋开胶",
		"content": "<p>梦见皮鞋开胶，不祥之兆，生活会遭厄运。</p><p>病人梦见皮鞋开胶，病情会加重。</p><p>商人梦见皮鞋开胶，即将到来的机会会很快失去。</p>"
	}, {
		"name": "鞋 穿鞋",
		"content": "<p>男人梦见穿新鞋，要交好运。</p><p>已婚女人梦见穿新鞋，夫妻会相亲相爱。</p><p>未婚女子想见穿新鞋，会嫁给一位宽宏大量聪明能干的男子。</p><p>未婚男子梦见穿新鞋，不久能得到恋人的爱。</p><p>梦见买鞋，很快要去旅行，商人梦见买鞋，生意会兴旺。</p><p>鞋匠梦见修鞋，会影响自己的前途。</p><p>梦见穿旧鞋，倒霉的日子会到来。</p><p>梦见鞋子丢了，灾难会临头。</p><p>梦见偷别人的鞋，朋友会与他为敌。</p><p>梦见用鞋打人，职位会被提升。</p><p>梦见送鞋给别人，会应邀出席婚礼。</p>"
	}, {
		"name": "新鞋",
		"content": "<p>男人梦见穿新鞋，要交好运。</p><p>已婚女人梦见穿新鞋，夫妻会相亲相爱。</p><p>未婚女子想梦见穿新鞋，会嫁给一位宽宏大量聪明能干的男子。</p><p>未婚男子梦见穿新鞋，不久能得到恋人的爱。</p><p>梦见在鞋店购买新鞋，金钱运下降。</p>"
	}, {
		"name": "皮鞋",
		"content": "<p>梦见皮鞋，预示着要远行。</p><p>商人梦见皮鞋，会找到赚钱的好项目。</p><p>梦见穿旧皮鞋，生活会遭厄运。</p><p>梦见皮鞋丢了，会大难临头。</p>"
	}, {
		"name": "拖鞋",
		"content": "<p>男人梦见拖鞋，灾祸要临头。</p><p>女人梦见拖鞋，会与丈夫分离。</p><p>未婚男子梦见拖鞋，会取得研究成果，生活幸福。</p><p>未婚女子梦见拖鞋，会嫁给一位品德高尚虔诚的教徒。</p><p>梦见穿银拖鞋，会名声大噪身居高位。</p><p>梦见穿金拖鞋，会生病或受损。</p><p>梦见穿新的皮拖鞋，一切会顺心如意。</p><p>梦见拖鞋破裂，预兆要搬家。</p><p>梦见买拖鞋，不久要建新房。</p><p>梦见丢失了拖鞋，会受敌人的骗，遭受损失。</p>"
	}, {
		"name": "红鞋",
		"content": "<p>梦见穿红鞋，预示着保持自己的形象需要付出很大的代价。</p><p>梦见红鞋穿了一会就破了，预示着自己的形象不能永久保持。</p>"
	}, {
		"name": "买鞋子",
		"content": "<p>首先鞋子代表的是你在现实生活中采取的行动方式。</p><p>就像所有的服饰一样，鞋子在某些时候，也代表了某种你想让别人留下深刻印象的身分地位；但是，除了对一双罕见的鞋子啧啧称奇之外，我们最关心的，其实是鞋子究竟合不合脚的问题。因此，当你梦见鞋子，往往表示着，在你生活中的某个层面也许浮现出“到底适不适合”的疑虑。</p><p>周公解梦中关于梦见买鞋子的解释：</p><p>旅游者梦见买鞋子，预示着自己旅途愉快。</p><p>梦见买鞋子，预示着自己很快要去旅行。</p><p>商人梦见买鞋子，生意兴旺，财源广进。</p>"
	}, {
		"name": "不合穿的鞋",
		"content": "<p>梦见穿不合脚穿的鞋，爱情方面将发生意外。情敌出现的可能性很大。这时不可大意气用事，如果对抗意识太强，反而会引起情人的厌恶。</p>"
	}]
}


var laugh = {
	"total": 79510,
	"pagenum": 1,
	"pagesize": 10,
	"list": [{
		"content": "&nbsp; &nbsp; 小区门口修车师傅生意特好。人实在,只要不换零件，常常不收钱或只收个块把钱辛苦钱。最近发现他心黑了，价钱明显上调,就连充个气也收1块钱。旁边书报亭大妈是知情人，: 唉，多担待一下吧！他家上个月二胎,一窝生了四个带把的。。。。",
		"addtime": "2019-06-09 03:20:33",
		"url": "http://m.kaixinhui.com/detail-128249.html"
	}, {
		"content": "前天和同事去逛超市，说好久没买肉吃了，于是去看猪肉，结果看到的最便宜的猪肉都要十八块多，同事当场惊呼：“猪怎么了，这是！”卖肉的师傅笑着说：“猪没事，就是涨价了。”",
		"addtime": "2019-05-04 03:20:03",
		"url": "http://m.kaixinhui.com/detail-128248.html"
	}, {
		"content": "去小卖部买烟，10块钱一盒的，给老板100，老板喜咪咪的看着我说：“我没零钱找你，就让我闺女陪你一晚抵账得了。”我一激动：“你老别介啊，我攒个私房钱出来偷偷买烟，真的很不容易啊！”老板：“怎么，你不愿意？要不然我去把我闺女叫出来！”我：“别！别！这钱你不用找了，千万别让您闺女知道我藏私房钱啊！”老板：“好女婿，只要你经常来买东西，我保证不说！哈哈哈”",
		"addtime": "2019-05-04 03:20:03",
		"url": "http://m.kaixinhui.com/detail-128247.html"
	}, {
		"content": "昨天路过单位餐厅门口的金鱼池，正好看到一条小金鱼蹦到外边了，还在张嘴，就捡起来扔到池子里。回到家跟老婆聊天时随口说起，老婆抱怨着说，“我说你个缺心眼的，怎么不去向它要幢别墅呢！”",
		"addtime": "2019-04-12 03:20:03",
		"url": "http://m.kaixinhui.com/detail-128246.html"
	}, {
		"content": "刚才在QQ上有个还在上大学的姑娘突然跟我讲：“朋友介绍我去打工，今天晚上要到一个酒吧领舞，现在有点不敢去。”我：“有什么不敢去的？”姑娘：“刚才在小摊上只吃了碗牛肉面，怕到时候饿。”──姑娘，你心太宽了！",
		"addtime": "2019-04-12 03:20:03",
		"url": "http://m.kaixinhui.com/detail-128245.html"
	}, {
		"content": "为什么古装剧里总是有女人会对恩人说：小女子无以为报，唯有以身相许，古代真的存在这种现象吗？ 扯淡，那是因为她喜欢他，要是不喜欢，她就会说：小女子无以为报，唯有来生再报了。",
		"addtime": "2019-04-10 03:20:03",
		"url": "http://m.kaixinhui.com/detail-128244.html"
	}, {
		"content": "网上聊了一妹子，今天见面。问老妈要了二百块钱，老妈问我干嘛用，我说约会，她高高兴兴的就给了。刚出家门，老爸就把我拽到一边说“小子，二百块钱给我一百，半个月不知道烟的滋味了。”我说“爸，这是我和女朋友的约会钱，不能给你。”老爸说了。“你约什么会，那是我刚建的小号，为了抽颗烟我和你聊了半个月了，快拿来。‘’",
		"addtime": "2019-04-10 03:20:03",
		"url": "http://m.kaixinhui.com/detail-128243.html"
	}, {
		"content": "家长对孩子的教育真的非常重要。有些男孩，小时候调皮的很，偷了邻居家一根针，家长也不管，一根针嘛，没事。结果孩子长大了，不好好学习每天呆在家里刺十字绣。",
		"addtime": "2019-04-10 03:20:03",
		"url": "http://m.kaixinhui.com/detail-128242.html"
	}, {
		"content": "一女人问大师：大师，在这么复杂险恶的世界，我一个弱女子如何保护自己？大师说：你把妆卸了！",
		"addtime": "2019-04-10 03:20:03",
		"url": "http://m.kaixinhui.com/detail-128241.html"
	}, {
		"content": "楼主大四女生，这几天和同一宿舍的女生一起去找工作，在火车站，碰到一个大姐，带着一个四五岁的小男孩侯车，小男孩总是粘着我，要坐我腿上，同宿舍的女生很是羡慕我有人缘，我得意的问小男孩：“你为什么老是喜欢坐姐姐腿上？” 小男孩用稚嫩的口气回答：“姐姐腿上肉多，坐着舒服” 我：“尼玛，这是谁家小哔崽子，快点领走！”",
		"addtime": "2019-04-10 03:20:03",
		"url": "http://m.kaixinhui.com/detail-128240.html"
	}]
}
