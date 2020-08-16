<template>
	<div>
		<div class="top"><ucNav text="旅游订单" arrow="gray" borderWidth="2"></ucNav></div>
		<orderTitle></orderTitle>
		<specialty imgSrc="/images/project_01.jpg" text="孟津县位于河南省中西部丘陵山区，洛阳市下辖县，东距郑州110公里，西距三门峡..."  bgColor="#f5f4f9" :price=300 title="x1" btn="付款" orderNum="20160813145033"></specialty>
		<specialty imgSrc="/images/project_02.jpg" text="孟津县位于河南省中西部丘陵山区，洛阳市下辖县，东距郑州110公里，西距三门峡..."  bgColor="#f5f4f9" :price=320 title="x2" btn="评论" orderNum="20160813145033"></specialty>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "../layouts/footer.vue"
	import ucNav from "../components/uc-nav/index.vue"
	import specialty from "../components/specialty/index.vue"
	import orderTitle from "../components/order_title.vue"
	export default {
		name:"collection",
		components:{
			ucNav,
			specialty,
			orderTitle,
			Footer
		},
		mounted(){
		}
	}
</script>

<style scoped>
	.top{
		margin-bottom: 5px;
	}
</style>

