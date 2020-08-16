<template>
	<div>
		<div class="top"><ucNav text="我的收藏" arrow="gray" borderWidth="2"></ucNav></div>
		<specialty imgSrc="/images/project_01.jpg" text="孟津袖珍西瓜皮薄质优、携带方便、色泽艳丽、皮薄质优门峡..." time="2018/06/10" del="删除"></specialty>
		<specialty imgSrc="/images/project_02.jpg" text="孟津袖珍西瓜皮薄质优、携带方便、色泽艳丽、皮薄质优门峡..." time="2018/06/13" del="删除"></specialty>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "../layouts/footer.vue"
	import ucNav from "../components/uc-nav/index.vue"
	import specialty from "../components/specialty/index.vue"
	export default {
		name:"collection",
		components:{
			ucNav,
			specialty,
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
