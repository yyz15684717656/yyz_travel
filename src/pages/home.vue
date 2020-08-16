<template>
	<div>
		<div class="home padding-top" v-if="banner.length>0 &&newsData.length>0 && tourism.length>0 && cityside.length>0&& speData.length>0">
			     <Header></Header>
				<swiper collectionName="banner" :data="banner"></swiper>
		        <nvList :list_data="list_data" ></nvList>
				<div class="gdtitle_margin-top"><gdTitle :data="gdTitle"></gdTitle></div>
				<div class="xxk_width"><Xxk collectionName="tourism" :tourismData="tourism"></Xxk></div>
				<gdTitle :data="gdTitle_1"></gdTitle>
				<specialty :speData="{speData:speData}" collectionName="specialtyMall"></specialty>
				<router-link to="/morespe" tag="li"><More :data="more" icon='/icon.png'></More></router-link>
				<div class="beautiful_top"><gdTitle :data="gdTitle_2"></gdTitle></div>
				<citySide collectionName="cityside" :citysideData="cityside"></citySide>
				<router-link to='morecityside' tag="div" class="more_view"><More :data="more_1" icon='/icon.png'></More></router-link>
				<gdTitle :data="gdTitle_3"></gdTitle>
				<newsList collectionName="newslist" :newsData="newsData"></newsList>
				<router-link to='morenews' tag="div"><More :data="more_2" icon='/icon.png'></More></router-link>
				<div class="clear_bottom"></div>
				<Footer></Footer>
		</div>
		<loading v-else></loading>
	</div>
</template>
<script>
	import Header from "../layouts/header.vue"
	import swiper from "../components/swiper/index.vue"
	import nvList from "../components/list/index.vue"
	import gdTitle from "../components/gd_title/index.vue"
	import Xxk from "../components/xxk/index.vue"
	import specialty from "../components/specialty/index.vue"
	import More from "../components/more/index.vue"
	import citySide from "../components/cityside/index.vue"
	import newsList from "../components/news_list/index.vue"
	import Footer from "../layouts/footer.vue"
	import loading from "../components/loading.vue"
	export default {
		name :"home",
		data(){
			return {
				list_data:[
					{title:"孟津旅游",imgSrc:"/images/index_icon01.png"},
					{title:"特产商城",imgSrc:"/images/index_icon02.png"},
					{title:"美丽乡村",imgSrc:"/images/index_icon03.png"},
					{title:"新闻资讯",imgSrc:"/images/index_icon04.png"}
				    ],
				gdTitle:{title:"孟津旅游",img:"/images/index_icon05.png"},
				gdTitle_1:{title:"特产商城",img:"/images/index_icon06.png"},
				gdTitle_2:{title:"美丽乡村",img:"/images/index_icon07.png"},
				gdTitle_3:{title:"新闻资讯",img:"/images/index_icon08.png"},
				more:{title:"更多特产"},
				more_1:{title:"更多景色"},
				more_2:{title:"更多资讯"},
				banner:'',
				tourism:"",
				cityside:"",
				speData:"",
				newsData:"",
			}
		},
		components:{
			Header,
			swiper,
			nvList,
			gdTitle,
			Xxk,
			specialty,
			More,
			citySide,
			newsList,
			Footer,
			loading
		},
		methods:{
			
		},
		mounted(){
			// //查询banner,tourism,speciality,cityside,news的数据
			axios.all([
			  axios({url:'/api/goods/banner',params:{_limit:4}}), 
			  axios({url:'/api/goods/tourism',params:{_limit:2}}),
			  axios({url:'/api/goods/specialtyMall',params:{_limit:3}}),
			  axios({url:'/api/goods/cityside',params:{_limit:2}}),
			  axios({url:'/api/goods/newslist',params:{_limit:2}}),
			]).then(axios.spread((banner, tourism,specialtyMall,cityside,newslist)=>{
			   this.banner=banner.data.data;
			   this.tourism=tourism.data.data;
			   this.speData=specialtyMall.data.data;
			   this.cityside=cityside.data.data;
			   this.newsData=newslist.data.data;
			}))
		}
	}
</script>

<style scoped>
	 /* eslint-disable */
	 .home{
		 height: 100%;
	 }
	 .padding-top{padding-top: px;}
	 .clear_bottom{width: 100%;height: auto;margin-bottom: 1.754385rem}
	 .gdtitle_margin-top{margin-top: 0.175438rem;}
	 .more_view{margin-bottom: 6px;}
</style>
