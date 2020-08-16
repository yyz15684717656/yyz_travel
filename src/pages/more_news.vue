<template>
	<div>
		 <router-link title="" class="return" to='/home'><span><img src="../../public/images/history1.png" alt=""></span></router-link>
		<div class="beautiful_top"><gdTitle :data="btitle"></gdTitle></div>
		<newsList :newsData="newsData" collectionName="newslist"></newsList>
		<div class="more_view"><More :data="more" icon='/icon.png'></More></div>
	</div>
</template>

<script>
	import gdTitle from "../components/gd_title/index.vue"
	import More from "../components/more/index.vue"
	import newsList from "../components/news_list/index.vue"
	export default {
		name:"more-cityside",
		data(){
			return {
				btitle:{title:"新闻资讯",img:"/images/index_icon08.png"},
				more:{title:"更多资讯"},
				newsData:""
			}
		},
		components:{
			More,
			newsList,
			gdTitle
			
		},
		beforeRouteEnter(to,from,next){
			next(_this=>{
				//查询newslist的全部展示数据
				_this.$axios({
				  url:'/api/goods/newslist',
				  params:{_limit:20}
				}).then(
				  res=>{
					  _this.newsData=res.data.data;
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
