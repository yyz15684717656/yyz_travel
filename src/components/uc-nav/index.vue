<template>
	
		<div class="nav" :style="{background:bgcolor,borderWidth:borderWidth-0+'px',color:color}">
			<ul>
				<li :class="arrow==='gray'?'gray':'default'" @click="$router.back()"></li>
				<span class="second" :style="{color:fontColor}">{{text}}</span>
			</ul>
		</div>
		
	
</template>

<script>
	/* eslint-disable */
	export default {
		name:"ucNav",
		data(){
			return {
				
			}
		},
		props:{
			bgcolor:{
				type:String,
				default:"transparent"
			},
			borderWidth:{
				type:String,
				default:2
			},
			arrow:{
				type:String,
				default:"default"
			},
			text:{
				type:String,
				default:""
			},
			fontColor:{
				type:String,
				default:""
			},
			color:{
				type:String
			}
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	
	   .nav{width:100%; /* position:fixed */;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
	  .nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;display: flex;}
	  /* margin-left:2.8rem在登录页面 */
	  .second{display: flex;font-size: 0.315789rem; font-weight: 900;margin-left: 1.8rem;letter-spacing: 8px;}
	  .nav ul li{width:0.29rem;height:0.31rem;  margin:0 0 0 0.38rem;}
	 .nav ul li.default{background:url(./assets/img/history.png);  background-size:100%;}
	  .nav ul li.gray{background:url(./assets/img/history1.png); background-size:100%;}
</style>
