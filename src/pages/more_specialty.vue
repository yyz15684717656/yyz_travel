<template>
	<div>
		 <li  class="return"><span @click="$router.go(-1)"><img src="../../public/images/history1.png" alt=""></span></li>
		<div class="beautiful_top"><gdTitle :data="btitle"></gdTitle></div>
		<specialty :speData="{speData:speData}" collectionName="specialtyMall"></specialty>
		<div class="more_view"><More :data="more" icon='/icon.png'></More></div>
	</div>
</template>

<script>
	import gdTitle from "../components/gd_title/index.vue"
	import More from "../components/more/index.vue"
	import specialty from   "../components/specialty/index.vue"
	export default {
		name:"more-cityside",
		data(){
			return {
				btitle:{title:"特产商城",img:"/images/index_icon06.png"},
				more:{title:"更多特产"},
				speData:""
			}
		},
		components:{
			More,
			specialty,
			gdTitle
			
		},
		beforeRouteEnter(to,from,next){
			next(_this=>{
				//查询cityside的全部展示数据
				_this.$axios({
				  url:'/api/goods/specialtyMall',
				  params:{_limit:20}
				}).then(
				  res=>{
					  _this.speData=res.data.data;
					  console.log(_this.speData);
				  }
				);
			})
		}
	}
</script>

<style scoped>
	.return{
		width: 30px;
		height: 30px;
	    display: block;
	    position: absolute;
	    top:20px;
	    left: 20px;
	    color: white;
	    background-color: rgba(0,156,218,0.5);
	    -webkit-border-radius: 20px;
	    -moz-border-radius: 20px;
	    border-radius: 20px;
	    text-align: center;
		box-sizing: border-box;
		padding-top: 7px;
		margin-top: -10px;
	}
	.return span img{
		width: 50%;
		height: 50%;
		
	
	}
</style>
