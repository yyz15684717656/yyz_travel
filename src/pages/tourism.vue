<template>
	<div>
		<gdTitle :data="gdTitle"></gdTitle>
		<xxk collectionName="tourism" :tourismData="tourismData"></xxk>
		<div class="box"><more :data="more"></more></div>
		<Footer></Footer>
	</div>
</template>

<script>
	import gdTitle from "../components/gd_title/index.vue"
	import xxk from "../components/xxk/index.vue"
	import more from "../components/more/index.vue"
	import Footer from "../layouts/footer.vue"
	export default {
		name:"tourism",
		data(){
			return {
				gdTitle:{title:"孟津旅游"},
				tourismData:"",
				more:{title:"查看更多>>"}
			}
		},
		components:{
			gdTitle,
			xxk,
			more,
			Footer
		},
		mounted(){
			
		},
		beforeRouteEnter(to,from,next){
			next(_this=>{
				//查询tourism的数据
				_this.$axios({
				  url:'/api/goods/tourism',
				  params:{_limit:20}
				}).then(
				  res=>{
					  _this.tourismData=res.data.data;
				  }
				);
			})
		}
	}
</script>

<style scoped>
	.box{
		margin-bottom: 0.877192rem;
	}
</style>
