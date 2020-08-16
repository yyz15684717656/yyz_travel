<template>
	<div class="list_nav">
		<li v-for="item of myNews">
		    <a title="" href="javascript:;" class="box">
		        <img :src="item.imgSrc">{{item.text}}
		        <i class="iconfont icon_i">&#xe62b;</i>
		    </a>
		</li>
	</div>
</template>

<script>
	import "../assets/icon/iconfont.css"
	export default {
		name:"my_news",
		props:{
			myNews:{
				type:Array,
				require:true
			}
		}
	}
</script>

<style scoped>
	  .list_nav {
	    margin: 10px 0;
	    background: white;
	    border-top: 1px solid #ddd;
	    border-bottom: 1px solid #ddd;
	}
	  .list_nav li {
	    border-bottom: 1px solid #eee;
	}
	  .list_nav li img{
	   vertical-align: middle;
	}
	  .list_nav li a {
	    display: block;
	    line-height: 54px;
	    padding: 0 10px;
	    font-size: 14px;
	}
	
	  .list_nav li img {
	    width: 30px;
	    margin-right: 10px;
	    -webkit-border-radius: 10%;
	    -moz-border-radius: 10%;
	    border-radius: 10%;
	}
	.icon_i{
		float: right;
		padding-right: 7px;
		box-sizing: border-box;
		font-size: 24px;
		color: #E0E0E0;
		
	}

</style>
