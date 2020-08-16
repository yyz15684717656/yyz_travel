<template>
	<div>
		<div id="user_center">
		    <div class="user_header">
		        <a href="javascript:;" @click="leave"><img class="set" src="images/set_up.png"></a>
		        <div class="pic">
		            <a title="" href="user_data.html">
		                <img :src="$baseUrl+user.icon"/>
		            </a>
		        </div>
		        <div class="name">
		            <label>*{{nc}}*</label>
		            <p>人生旅程，不同的是沿途风景以及看风景的心情</p>
		        </div>
				<a class="sign" data-am-modal="{target: '#my-alert'}" @click="out">每日签到</a>
				<div id="sign_layer">
					<div class="am-modal am-modal-alert" tabindex="-1" id="my-alert">
					  <div class="am-modal-dialog">
						<div class="win-m">
							<img src="images/sign-m.png"/>
							<div class="tex">
								<p class="p1">签到成功</p>
								<p class="p1">获得<span class="already-sign">20</span>积分</p>
								<p class="p2">每天签到都可以获得积分哦</p>
							</div>
							<div class="am-modal-footer">
							  <span class="am-modal-btn" @click="know">知道了</span>
							</div>
						</div>
						
					  </div>
					</div>
				</div>
		        <div class="clear"></div>
		    </div>
		    <div class="user_nav">
		        <div class="order_nav">
		            <ul class="box_nav am-avg-sm-4">
						<nvList :list_data="data"></nvList>
		                <div class="clear"></div>
		            </ul>
		        </div>
				<div class="box4">
					<li class="box3"><myCarts title="积分" imgSrc="images/user_center_icon5.png" score="580"></myCarts></li>
					<router-link class="box3" to="/cart" tag="li"><myCarts title="购物车" imgSrc="images/icon-shop_car2.png" label="9"></myCarts></router-link>
				</div>
		        <ul class="list_nav">
			   <myNews :myNews="data_mynews"></myNews>
		        </ul>
		    </div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "../layouts/footer.vue"
	import nvList from '../components/list_my-other/index.vue'
	import myNews from "../components/my_news.vue"
	import myCarts from "../components/myScore/mycart.vue"
	import $ from "jquery"
	export default {
		name:'my',
		data(){
			return {
				data:[
					{title:"发布游记" ,imgSrc:"images/user_center_icon1.png"},
					{title:"我的收藏" ,imgSrc:"images/user_center_icon2.png"},
					{title:"商品订单" ,imgSrc:"images/user_center_icon3.png"},
					{title:"旅游订单" ,imgSrc:"images/user_center_icon4.png"}
				    ],
				data_mynews:[
					{text:"我的游记",imgSrc:" /images/user_center_icon6.png"},
					{text:"我的评论",imgSrc:" /images/user_center_icon7.png"}
				],
				data_scroe:[
					{title:"积分",imgSrc:"/images/user_center_icon5.png",sroce:580},
					{title:"购物车",imgSrc:"/images/icon-shop_car2.png",label:9},
				],
				user:{},
				nc:""
			}
		},
		beforeRouteEnter(to,from,next){
		  // 每次去服务器抓取最新
		    axios.get('/api/user')
		    .then(
		      res => res.data.err === 0 ?
		        next(_this=>_this.user=res.data.data) :
		        next('/login')
		    )
		  
		  
		  //找本地抓取信息
		},
		components:{
			Footer,
			nvList,
			myNews,
			myCarts
		},
		methods:{
			out(ev){
				$("#sign_layer")[0].style.display="block"
			},
			know(){
				$("#sign_layer")[0].style.display="none"
			},
			leave(){
				this.$router.replace({name:'login'});
			}
		},
		mounted(){
			let data=localStorage.getItem("user");
			data=JSON.parse(data);
			this.nc=data.data.nikename
		}
	}
</script>

<style scoped>
	#user_center{
		
	    background:#f5f5f8;
	}
	
	#user_center .user_header {
	    width: 100%;
	    position: relative;
	    padding-top: 25px;
	    text-align: center;
	    height: 180px;
	    background-image: -moz-linear-gradient(top, #adebcb, #5fd9cb); /*火狐*/
	    background: -o-linear-gradient(top, #adebcb 0%, #5fd9cb 100%); /*Opera*/
	    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #adebcb), color-stop(1, #5fd9cb)); /*Chrome*/
	    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#adebcb', endColorstr='#5fd9cb', GradientType='0'); /*IE*/
	}
	#user_center .user_header .set{
	    position:absolute;
		right:15px;
		top:15px;
	    width: 30px;
		z-index:1000;
	}
	#user_center .user_header .pic {
		position:relative;
	}
	#user_center .user_header .pic img {
	    border: 2px solid white;
	    width: 70px;
	    height: 70px;
	    -webkit-border-radius: 50%;
	    -moz-border-radius: 50%;
	    border-radius: 50%;
	    box-shadow: 0 0 8px rgba(0,102,102,0.6);
	}
	#user_center .user_header .name{
	    margin-top:5px;
	    height: 30px;
	}
	#user_center .user_header .name label{
	
	    font-size: 18px;
	    color: white;
	}
	#user_center .user_header p {
	    color: white;
	}
	#user_center .sign{
		position:absolute;
		top:15px;
		left:15px;
	    margin-left: 10px;
		z-index:1000;
	    display: block;
	    border: 1px solid #fff;
	    background-color: rgba(58,201,184,0.5);
	    width: 60px;
	    height: 30px;
	    line-height: 30px;
	    text-align: center;
	    -webkit-border-radius: 5px;
	    -moz-border-radius: 5px;
	    border-radius: 5px;
	    color: #fff;
	}
	
	/*-----------------签到弹层----------------*/
	#sign_layer .am-modal {
	    top: 10%;
	    left: 0;
	    margin: 0;
	    width: 100%;
	}
	
	#sign_layer .win-m {
	    position: absolute;
	    overflow: hidden;
	    -webkit-animation: large .3s cubic-bezier(0.16, 0.59, 0.13, 1.32) forwards;
	    animation: large .3s cubic-bezier(0.16, 0.59, 0.13, 1.32) forwards;
	}
	
	#sign_layer .win-m img {
	    width: 100%;
	}
	
	#sign_layer .tex {
	    position: absolute;
	    bottom: 75px;
	    text-align: center;
	    width: 100%;
	}
	
	#sign_layer .win-m .p1 {
	    font-size: 24px;
	    color: #454f54;
	    line-height: 35px;
	}
	
	#sign_layer .win-m .p1 span {
	    color: #ff9531;
	    padding: 0 8px;
	}
	
	#sign_layer .win-m .p2 {
	    text-align: center;
	    line-height: 35px;
	    color: #aeb2b6;
	    font-size: 20px;
	}
	
	#sign_layer .am-modal-footer {
	    width: 180px;
	    height: 42px;
	    position: absolute;
	    left: 50%;
	    margin-left: -90px;
	    bottom: 20px;
	}
	
	#sign_layer .am-modal-btn {
		display: block;
	    line-height: 42px;
	    -webkit-border-radius: 21px;
	    border-radius: 21px;
	    color: #fff;
	    font-size: 20px;
	    background: #4dc3ff;
	    -webkit-transition: all .2s;
	    transition: all .2s;
	    text-align: center;
	}
	
	#sign_layer .am-modal-btn:hover {
	    background: #24b4fe;
	    cursor: pointer;
	}
	
	
	

	#user_center .user_nav .box_nav {
	    background: white;
	    border-bottom: 1px solid #ddd;
	}
	#user_center .user_nav .box_nav li a {
	    display: block;
	   
	   
	    font-size: 14px;
	}
	
	#user_center .user_nav .box_nav li img {
	    padding-top: 10px;
	    width: 60px;
	    margin-bottom: 5px;
	}
	
	.box_nav{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	#sign_layer {
		display: none;
	}
	.box3 {
		display: flex;
		justify-content: space-evenly;
	}
	.box4  {
		display: flex;
	}
	.box4 li{
		width: 50%;
	}
</style>
