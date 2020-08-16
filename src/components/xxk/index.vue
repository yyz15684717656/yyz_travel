<template>
  <div>
	  <ul class="am-tabs-nav am-nav am-nav-tabs am-avg-sm-2">
	  	<li @click="show($event)"><a href="javascript:;" class="am-active">旅游活动</a></li>
	  	<li @click="show1($event)"><a href="javascript:;">旅游景区</a></li>
	  </ul>
	  <div class="clear"></div>
	  <div class="am-tabs-bd">
	  	<div class="am-tab-panel am-fade am-in am-active"  v-show="boolean1==false">
	  		<ul>
	  			<li class="view">
	  				<div class="pic">
	  					<img src="./assets/trip_list_01.jpg">
	  					<div class="cont">
	  						<a title="" class="button" href="activity_detail.html">查看详情</a>
	  						<div class="num">
	  							<p><span>20/30</span>人报名</p>
	  							<p>出发时间<span>2017/10/02</span></p>
	  						</div>
	  					</div>
	  					<div class="clear"></div>
	  				</div>
	  				<div class="con">
	  					<span>黄河小浪底</span>
	  					<p>卫坡古民居翠湾果岭观唐生态园炎帝本草园洛阳粤钰青...</p>
	  				</div>
	  			</li>
				<li class="view">
					<div class="pic">
						<img src="./assets/trip_list_02.jpg">
						<div class="cont">
							<a title="" class="button" href="activity_detail.html">查看详情</a>
							<div class="num">
								<p><span>35/60</span>人报名</p>
								<p>出发时间<span>2018/10/15</span></p>
							</div>
						</div>
						<div class="clear"></div>
					</div>
					<div class="con">
						<span>洛阳粤钰青</span>
						<p>卫坡古民居翠湾果岭观唐生态园炎帝本草园洛阳粤钰青...</p>
					</div>
				</li>
	  		</ul>
	  	</div>
		
		<div class="am-tab-panel am-fade"  v-show="boolean==true" >
			<ul>
				<li class="view"
				v-for="item of tourismData"
				:key="item._id">
					<div class="pic">
						<img :src="item.tourImg">
						<div class="cont">
							<router-link  active-class="button" :to="{name:'tourismDetail',params:{_id:item._id},query:{collectionName:collectionName}}">查看详情</router-link>
							<div class="num">
								<p><span>{{item.title}}/{{item.sub_title}}</span>人报名</p>
								<p>出发时间<span>{{item.time |date}}</span></p>
							</div>
						</div>
						<div class="clear"></div>
					</div>
					<div class="con">
						<span>{{item.tourtitle}}</span>
						<p>{{item.tourContent}}</p>
					</div>
				</li>
			</ul>
		</div>
	  	
	  </div>
  </div>
</template>

<script>
	import $ from "jquery"
  export default{
     props:['tourismData','collectionName'],
	 data(){
		return {
			boolean:true,
			boolean1:true,
		}
	},
	methods:{
		show(ev){
			this.boolean1=true;
			this.boolean=true;
			$(ev.target).addClass('am-active')
			$(ev.target).parents().siblings().children().removeClass("am-active")
		},
		show1(ev){
			this.boolean1=false;
			this.boolean=false;
			$(ev.target).addClass('am-active')
			$(ev.target).parents().siblings().children().removeClass("am-active")
		},
	       }
  }
</script>

<style scoped>
    .am-nav-tabs > li.am-active > a, .am-nav-tabs > li.am-active > a:hover, .am-nav-tabs > li.am-active > a:focus{border:0;background:0;}
   .am-nav-tabs > li > a{border:0;}
   .am-nav-tabs{border:0;}
   .am-nav{display: flex;justify-content: space-evenly;}
   .am-nav-tabs > li > a{margin:0;}
   .am-nav > li > a{padding:0;}
   .am-tabs-bd{border:0;}
   .am-tabs-nav li a{
  	display: block;
      height: 44px;
  	line-height: 41px;
      font-size: 16px;
      position: relative;
      text-align: center;
      border-bottom: 1px solid #eee;
  }
   .am-nav-tabs  li a.am-active {
  	  color: #2dbb55;
      border-bottom: 3px solid #2dbb55;
  	
  }
  
  /* 切换 */
   .nav {
      background-color: white;
      text-align: center;
      border-bottom: 1px solid #eee;
  }
   .nav a {
      display: block;
      line-height: 40px;
      font-size: 16px;
      position: relative;
      bottom: -1px;
  }
   .nav a.cur {
      color: #2dbb55;
      border-bottom: 3px solid #2dbb55;
  }
   .view{
      margin-bottom: 10px;
  }
   li:last-child{
      margin: 0;
  }
   .view .pic{
      position: relative;
      width: 100%;
      height: 150px;
      overflow: hidden;
  }
  .am-tabs-bd{
  }
   .view .pic img{
      width: 100%;
  }
   .view .pic a{
      position: absolute;
      right: 20px;
      bottom: 10px;
      display: block;
      width: 120px;
      height: 40px;
      line-height: 40px;
      background:#ff9531;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      text-align: center;
      font-size: 16px;
      color: white;
  }
   .view .con {
      padding: 20px;
      background: white;
      border-bottom: 1px solid #eee;
  }
   .view .con span{
      display: block;
      text-align: left;
      font-size: 20px;
      line-height:24px;
  }
   .view .con p {
      font-size: 14px;
      color: #999;
      line-height: 14px;
      margin-top: 15px;
  }
  /*-----------旅游活动---------*/
   .am-tabs-bd .am-tab-panel{padding:0;}
   .am-tabs-d2 .am-tabs-nav{background:white;}
   .am-tabs-d2 .am-tabs-nav a{font-size: 16px;}
   .am-tabs-d2 .am-tabs-nav > .am-active:after{border:0;}
   .am-tabs-d2 .am-tabs-nav > .am-active{
  	border-bottom:3px solid #2dbb55;
  }
   .am-tabs-d2 .am-tabs-nav > .am-active a{
  	color: #2dbb55;
     
  }
   .nav {
      background-color: white;
      text-align: center;
      border-bottom: 1px solid #eee;
  }
   .nav a {
      display: block;
      line-height: 40px;
      font-size: 16px;
      position: relative;
      bottom: -1px;
  }
   .nav a.cur {
      color: #2dbb55;
      border-bottom: 3px solid #2dbb55;
  }
   .view{
      margin-bottom: 10px;
  }
   li:last-child{
      margin: 0;
  }
   .view .pic{
      position: relative;
      width: 100%;
      height: 150px;
      overflow: hidden;	
  }
  
   .view .pic img{
      width: 100%;
      min-height: 150px;
  }
   .view .pic a{
  	  float:right;
      display: block;
      width: 120px;
      height: 40px;
      line-height: 40px;
      background:#ff9531;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
      text-align: center;
      font-size: 16px;
      color: white;
	  box-sizing: border-box;
	  margin-right: 0.350877rem;
  }
   .view .cont{
  	position:absolute;
  	bottom:0;
  	width:100%;
  	padding:15px 15px 5px 15px;
  	background-image: -moz-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.5));
      background: -o-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 100%);
      background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0,0,0,0)), color-stop(1,rgba(0,0,0,0.5)));
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba(0,0,0,0)', endColorstr='rgba(0,0,0,0.5)', GradientType='0');
  }
  
   .view .pic .num{
      float:left;
  }
   .view .pic .num p{
      color: white;
      font-size: 12px;
  }
   .view .pic .num span{
      color: white;
      font-size:14px ;
      margin-right:5px;
  }
   .view .con {
      padding: 20px;
      background: white;
      border-bottom: 1px solid #eee;
  }
   .view .con span{
      display: block;
      text-align: left;
      font-size: 20px;
      line-height:20px;
  }
   .view .con p{
      font-size: 14px;
      color: #999;
      line-height: 14px;
      margin-top:10px;
  }
  #more{
      text-align: center;
      height: 60px;
      line-height: 60px;
      background-color: white;
  }
  #more span{
      color:#999;
      font-size: 14px;
  }
  #more i.am-icon-angle-right{
      color: #33cccc;
      font-size:20px;
      margin-left: 5px;
  }
  .am-tabs-nav li{
	  width: 50%;
  }
</style>
