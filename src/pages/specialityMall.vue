<template>
	<div>
		<div class="box">
			<div><UcInput :text="text" :width="width" :bgColor="bgColor"></UcInput></div>
			<span class="car_icon"><img src="../../public/images/icon-shop_car.png" alt=""></span>
		</div>
		<!-- <spe imgSrc="/images/project_01.jpg" text="孟津袖珍西瓜皮薄质优、携带方便、色泽艳丽、皮薄质优门峡..." :price=300 title="杰尔逊西瓜庄园"></spe> -->
		<spe :speData="{speData:speData}" collectionName="specialtyMall"></spe>
		<more :data="more_data"></more>
		<Footer></Footer>
	</div>
</template>

<script>
	import UcInput from "../components/uc-input.vue"
	import spe from "../components/specialty/index.vue"
	import Footer from "../layouts/footer.vue"
	import more from "../components/more/index.vue"
	export default {
		name:"specialityMall",
		data(){
			return {
				text:"要买什么?",
				width:3.1,
				bgColor:"#ccc",
				more_data:{title:"没有更多了"},
				speData:"",
			}
		},
		components:{
			UcInput,
			spe,
			more,
			Footer
		},
		beforeRouteEnter(to,from,next){
			next(_this=>{
				//查询specialityMall的数据
				_this.$axios({
				  url:'/api/goods/specialtyMall',
				  params:{_limit:20}
				}).then(
				  res=>{
					  _this.speData=res.data.data;
				  }
				);
			})
		},
	}
</script>

<style scoped>
	.box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.175438rem 0 0.175438rem 0.210526rem;
		box-sizing: border-box;
	}
	.car_icon{
		width: 0.526315rem;
		height: 0.491228rem;
		display: inline-block;
		margin-right: 0.175438rem;
	}
	.car_icon img{
		width: 100%;
		height: 100%;
	}
</style>
