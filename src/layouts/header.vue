<template>
  
    <div class="index_head">
    	<div class="logo">
    		<a href="#"><img src="/images/logo.png"></a>
    	</div>
    	<!----------------搜索------------------>
		<UcInput :label="label" :bgColor="bgColor" :width="width"></UcInput>
		 <a class="phone">
			<img src="/images/phone.png">
		</a>
    </div>
</template>

<script>
	import UcInput from "../components/uc-input.vue"
  export default {
    name:'Header',
    props:{},
    data(){
      return {
	   label:"景点",
	   bgColor:"#eee",
	   width:2.7
      }
    },
    components:{UcInput},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	.header{
		width: 100%;
	}
	.index_head {
	    position: fixed;
	    top: 0;
	    z-index: 999;
	    /* padding: 10px 50px 0 70px; */
	    background-color: white;
	    height: 50px;
	    width: 100%;
		padding-left: 70px;
		box-sizing: border-box;
		padding-top: 10px;
	}
	 .index_head .logo {
	    position: absolute;
	    top: 6px;
	    left: 10px;
	}
	a, a:link, a:visited {
	    text-decoration: none;
	}
	.index_head .logo img {
	    height: 40px;
	}
	.phone{
		position: absolute;
		top: 14px;
		right: 10px;
	}
	.phone img{
		height: 25px;
		width: 25px;
	}
</style>
