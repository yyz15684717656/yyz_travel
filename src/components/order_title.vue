<template>
	<div class="nav">
	    <ul class="am-avg-sm-4">
	        <li><a class="cur" href="#">全部</a></li>
	        <li><a href="#">待付款</a></li>
	        <li><a href="#">待收货</a></li>
	        <li><a href="#">待评价</a></li>
	    </ul>
	</div>
</template>

<script>
	export default {
		name:"order",
		props:{
			
		}
	}
</script>

<style scoped>
	 .nav {
	    margin-top: 10px;
	    background-color: white;
	    border-bottom: 1px solid #eee;
	}
	
	 .nav a {
	    display: block;
	    line-height: 40px;
	    font-size: 14px;
	    position: relative;
	    bottom: -1px;
	}
	.am-avg-sm-4{
		display: flex;
		align-items: center;
		width: 100%;
	}
	.am-avg-sm-4 li {
		width: 25%;
		text-align: center;
	}
	.nav a.cur {
	    color: #2dbb55;
	    border-bottom: 3px solid #2dbb55;
	}
</style>
