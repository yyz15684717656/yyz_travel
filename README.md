###mongo数据库的有关库的构建
		(1).需要建的库
		    1.travelHome
		(2).需要建立的表
		    1.user 用于用户数据的登录注册
			  1.1字段包括  id username password ncheng icon  follow fans
						  { 
							  "id" : , 
							  "username" : "alis", 
							  "password" : "alis123", 
							  "follow" : 100, 
							  "fans" : 200, 
							  "nikename" : "杨叔", 
							  "icon" : "/upload/968a3b7218ee744931276a64c9b7ea01.png", 
							}
			2.banner 存放banner图的数据 便于后期动态显示页面内容
			  2-1.数据的结构为:
						    [
							  {
								"id" : 1, 
								"title" : "洛阳美景", 
								"sub_title" : "不一样的洛阳，不一样的美景", 
								"banner" : "/images/banner_101.png", 
								"time":234234,
								"detail" : { 
								  "auth" : "", 
								  "content" : "<p>龙门石窟：一场灵魂与身体的旅行<p>", 
								  "icon" : "/images/head.jpg",
								  "price":"230",
								  "time":12345612,
								  "ask":0379-656445441,
								  "address":"洛阳市关林庙会"
								  "inc":"中国三大石窟之一，历史悠久，开凿经历了多个朝代断续营造达500余年之中国三大窟之一，历史悠久，开凿经历了多个朝代断续营造达500余年之中国三大石窟之一，历史悠久，开凿经历 "
								}
							  }
							]
			3.tourism 存放孟津旅游的数据
			   3-1.数据的结构为：
			      tourism： [
			                  { 
			                	"id" : 1001, 
			                	"title" : "30", 
			                	"sub_title" : "30", 
			                	"tourImg" : "/img/trip_list_01.39c18f31.jpg", 
			                	"time":45215474,
								"tourtitle":"黄河小浪迪"，
								"tourContent":"卫坡古民居翠湾果岭观唐生态园炎帝本草园洛阳粤钰青..."
			                	"detail" : { 
			                	  "auth" : "", 
			                	  "content" : "<p>黄河发源于青藏高原巴颜喀拉山北麓的约古宗列盆地<p>", 
			                	  "icon" : "/images/hh_01.jpg" ,
			                	  "price":"0",
			                	  "inc":"黄河是中华文明最主要的发源地，中国人称其为“母亲河”。每年都会携带十六亿吨泥沙，其中有十二亿吨流入大海，剩下四亿吨长年留在黄河下游，形成冲积平原，有利于种植"
			                	},
			                  }
			                ]
							
			4. specialtyMall 存放特产商城的数据
				4-1.数据结构为
				    specialtyMall:  [
										  { 
											"id" : 2001, 
											"tourImg" : "/images/project_01.jpg",
											"spename":"孟津袖珍西瓜",
											"tourtitle":"梦想西瓜庄园",
											"price":158,
											"tourContent":"孟津袖珍西瓜皮薄质优、携带方便、色泽艳丽、皮薄质优门峡...",
											"detail" : {
											  "auth" : "", 
											  "content" : "<p><p>", 
											  "icon" : "/images/project_01.jpg" ,
											  "price":"158",
											  "address":"梦想西瓜庄园",
											  "inc":"安徽省农业科学院育成。极早熟，金黄瓤，口感佳。中心糖度13，边糖10，瓜椭圆形，花皮，单株坐瓜3-5个，种子少，单瓜重1．5-2千克，一般每667平方米产量3000千克左右。适宜春秋保护地栽培"
											}
										  }
								    ]
			5.  postnotes     存放用户发布的游记数据						
									[
										  { 
											"id" : xx,
											"postImg" : "xxxx",
											"time":5,
											"notetitle":"旅行主题",
											"tourContent":"旅行感悟",
											"follow":0,
											"fans":0
										   }
									 ]
			6.  collection      我的收藏页面的商品信息
									 [
									 	  { 
									 		"id" : xx,
											 "_id":"0001"
											 "spename":"xxxx"
											 "_tourid":"000x"
									 		"colImg" : "xxxx",
									 		"time":124551248,
									 		"coltitle":"旅行主题",
									 		"colContent":"商品信息"
									 	   }
									  ]
			
			7.  goodsOrder      商品订单页面的商品信息  
									 [
									 	  { 
									 		"id" : xx, 
											"_id":"0001"
											"spename":"xxxx"
									 		"goodsImg" : "xxxx",
									 		"goodstitle":"商品主题",
									 		"goodsContent":"商品信息"，
											 "price":300,
											 "num":1
											 "orderNum":"20170813145033",
											 "status":'0或者1或者2'
									 	   }
									  ]	
			
			8.  toursOrder      旅游订单页面的订单信息  
									 [
									 	  { 
									 		"id" : xx, 
											"_id":"000x"
											"spename":"xxxx"
									 		"toursImg" : "xxxx",
									 		"tourstitle":"商品主题",
									 		"toursContent":"孟津县位于河南省中西部丘陵山区，洛阳市下辖县，东距郑州110公里，西距三门峡...",
											 "price":300,
											 "num":1
											 "orderNum":"20170813145033",
											 "status":'0或者1或者2'
									 	   }
									  ]						  												
			9. cart             购物车的数据
									   [
									   	  { 
									   		 "id" : xx, 
								             "_id":"0001"
											 "spename":"xxxx"
											 "tourid":"000x"
											 "Img" : "xxxx",
											 "title":"商品主题",
										     "price":300,
											 "num":1
											 "orderNum":"20170813145033",
											 "status":'0或者1或者2'
									   	   }
									    ]	
			10.cityside         美丽乡村的数据
										[
											{
											"id" : 3001, 
											"tourImg" : "/images/beautiful_01.jpg",
											"spename":"依尔玛村",
											"tourtitle":"依尔玛村",
											"tourContent":"多浪河畔的依尔玛村，处处花团锦簇、绿树成荫。绿化围栏中，桃李盛开、杏花飘香...",
											"follow":'0',
											"fans":"0",
											 tel:'15684717652'
											"detail" : {
											  "auth" : "gd", 
											  "content" : "<p>依尔玛村<p>", 
											  "icon" : "/images/head.jpg",
											  "tourImg":"/images/beautiful_01.jpg"
											  "inc":"浪河畔的依尔玛村，处处花团锦簇、绿树成荫。绿化围栏中，桃李盛开、杏花飘香、桑葚挂满枝头；农家庭院里，绿油油的蔬菜地、咩咩欢叫的羊儿……这就是阿克苏市一颗熠熠闪光的星——依干其乡依尔玛村。"
											}
											}
										]
			11.newslist         新闻资讯的数据
										[
											{
											"id" : 4001, 
											"tourImg" : "/images/news_01.jpg",
											"spename":"互发旅游团",
											"tourtitle":"互发旅游团",
											"tourContent":"碚—绵阳深度探秘之旅”首发团一行70余人也抵达四川绵阳，开启了为期3天的行程...",
											"follow":'30',
											"detail" : {
											  "auth" : "gd", 
											  "content" : "<p>“老家河南•孟津过年”魅力孟津摄影展征稿启事<p>", 
											  "tourImg":"/images/news_01.jpg"
											  "inc":"绵阳首发团活动为期3天2晚，绵阳游客将深入北碚区，游览缙云山、偏岩古镇、金刀峡等知名景区，感受北碚当地的风土人情、人文历史与自然风光。北碚游客将到绵阳两弹城、江油方特东方神话、窦圌山、寻龙山龙隐镇等景区点游览，深入体验大美绵阳"
											}
											}
											
										]