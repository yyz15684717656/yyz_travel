<template>
	<div>
		<div>
			<ucNav borderWidth="5" text="购物车" arrow="gray"></ucNav>
		</div>
		<!----------------我的订单------------------>
		<div id="my_project_cart">
		    <div class="my_buy_cart">
				<ul>
					<specialty imgSrc="/images/my_order01.jpg" text="法国正品男士香水清新持久淡香诱惑古龙水香奈" :price=500 btn="删除"></specialty>
				</ul>
		    </div>
		</div>
		<!----------------全选结算------------------>
	 	<div id="choose_goods">
			<div class="choose_all">
				<div class="choose">
						<input type="checkbox" value="">
						<span class="allchange">全选</span>  
				</div>
				<ul>
					<li class="total">￥500</li>
					<li class="no_freight">不含运费</li>
				</ul>
			</div>
			<div class="settlement"><a href="sure_order.html">提交订单</a></div>
		</div>
		 <Footer></Footer>
	</div>	
	
</template>

<script>
	import ucNav from "../components/uc-nav/index.vue"
	import specialty from "../components/specialty/index.vue"
	import Footer from "../layouts/footer.vue"
	export default {
		name:'cart',
		props:{
			
		},
		components:{
			ucNav,
			specialty,
			Footer
		}
	}
</script>

<style scoped>
	.choose{
		padding-left: 0.175438rem;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}
	.allchange{
		padding-left:5px ;
	}
	#my_project_cart .my_buy_cart {
	    margin-top: 0.263157rem;
	}
	#my_project_cart .my_buy_cart li{
	    padding-left:120px;
		min-height:102px;
		margin-bottom:10px;
		position:relative;
		background-color: white;
		border-bottom: 1px solid #eee;
		border-top: 1px solid #eee;
	}
	#my_project_cart .my_buy_cart .opt{
		position:absolute;
		left:10px;
	}
	
	#my_project_cart .my_buy_cart .pic{
		position:absolute;
		left:30px;
	}
	
	
	#my_project_cart .my_buy_cart .goodimg{
	    width: 100px;
	    height: 100px;
	    padding: 10px;
	}
	#my_project_cart .my_buy_cart .project_cont{
	    font-size: 14px;
	    line-height: 18px;
		padding:10px;
	}
	#my_project_cart .my_buy_cart .project_cont p{
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
	}
	
	
	
	#my_project_cart .my_buy_cart .aidt{
	    border-bottom: 1px solid #eee;
	}
	#my_project_cart .am-ucheck-checkbox:checked + .am-ucheck-icons, .am-ucheck-radio:checked + .am-ucheck-icons{
	    color: #ff9531;
	}
	
	#my_project_cart .my_buy_cart .center h3 {
	    font-size: 14px;
	    height: 40px;
	    margin: 40px 0 0 0;
	}
	#my_project_cart .my_buy_cart .money{
	
	    color: #ff9531;
	    font-size: 18px;
	    margin-top: 5px;
	}
	
	
	#my_project_cart .my_buy_cart .number{
	
		margin-top:5px;
	}
	#my_project_cart .my_buy_cart .goodsdel{
		position:absolute;
		right:15px;
		bottom:15px;
		
	}
	#my_project_cart .my_buy_cart .goodsdel a{
		display:block;
		padding:0 5px;
		line-height:22px;
		border:1px solid #999;
	}
	#my_project_cart .my_buy_cart .goodsdel i{
		font-size:12px;
	}
	#my_project_cart .my_buy_cart .Spinner {
	    display: block;
	    overflow: hidden;
	    width: 100px;
	}
	
	#my_project_cart .my_buy_cart .Spinner .Amount {
	    width: 36px;
	    padding: 4px 5px;
	    line-height: 17px;
	    border-width: 1px 0;
	    border-style: solid;
	    border-color: #d9d9d9;
	    float: left;
	    text-align: center;
	    color: #565656;
	    outline: 0;
	}
	
	#my_project_cart .my_buy_cart .Spinner a {
	    display: inline-block;
	    width: 25px;
	    border: 1px solid #d9d9d9;
	    float: left;
	    cursor: pointer;
	    outline: 0;
	}
	
	#my_project_cart .my_buy_cart .Spinner .Decrease {
	    background-color: #f0f0f0;
	}
	
	#my_project_cart .my_buy_cart .Spinner a i {
	    font-style: normal;
	    background: url(/images/BuynBtn.png) no-repeat;
	    display: block;
	    width: 9px;
	    height: 9px;
	    margin: 8px;
	    text-indent: 999999%;
	    overflow: hidden;
	}
	
	#my_project_cart .my_buy_cart .Spinner .Decrease i {
	    background-position: -9px -9px;
	}
	
	#my_project_cart .my_buy_cart .Spinner .Increase i {
	    background-position: -9px -0px;
	    color: white
	}
	
	#my_project_cart .my_buy_cart .Spinner .DisDe i {
	    background-position: -0px -9px;
	}
	
	#my_project_cart .my_buy_cart .Spinner .DisIn i {
	    background-position: -0px -0px;
	}
	
	#choose_goods {
	    border-top: 1px solid #cccbca;
	    position: fixed;
	    bottom: 53px;
	    left: 0;
	    background: white;
	    z-index: 99;
	    text-align: center;
	    font-size: 12px;
	    padding-bottom: 0px;
	    padding-top: 0px;
	    width: 100%;
	}
	
	#choose_goods .choose_all {
	    font-size: 12px;
	    float: left;
	    width: 70%;
	    background-color: white;
	    line-height: 53px;
	}
	
	#choose_goods .choose_all p {
	    padding-left: 40px;
	    float: left;
	}
	
	#choose_goods .choose_all ul {
	    float: right;
	    height: 53px;
	    line-height: 22px;
	    padding-right: 10px;
	    padding-top: 5px;
	    padding-bottom: 5px;
	}
	
	#choose_goods .choose_all ul .total {
	    font-size: 18px;
	    color: #ff9531;
		margin-top: 5px;
	}
	
	#choose_goods .choose_all ul .no_freight {
	    float: right;
	    font-size: 8px;
	    color: #999999;
	}
	
	#choose_goods .choose_all .choose label {
	    position: absolute;
	    left: 10px;
	    float: left;
	    line-height: 53px;
	    margin-top: 15px;
	}
	
	#choose_goods .settlement a {
	    color: white;
	    float: right;
	    width: 30%;
	    background-color: #ff9531;
	    line-height: 1.052631rem;
	    font-size: 14px;
	}
	.choose_all{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
