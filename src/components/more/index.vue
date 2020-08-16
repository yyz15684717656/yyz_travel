<template>
	<div id="more" v-if="data">
	    <a title=""  href="javascript:;">
	        <span>{{data.title}}</span>
	        <i class="icon_i" v-if="icon">></i>
	    </a>
	</div>
	<div id="more" v-else>
		<a  href="javascript:;">
		    <span>没有更多了</span>
		</a>
	</div>
</template>

<script>
	export default {
		name:"more",
		props:{
			data:{
				type:Object,
				default:function(){
					return {title:"更多"}
				}
			},
			icon:{
				type:String,
				default:""
			}
		}
	}
</script>

<style scoped>
	#more{
	    text-align: center;
	    height: 60px;
	    line-height: 60px;
	    background-color: white;
	}
	#more span{
	    color:#999;
	    font-size: 14px;
	}
	#more {
		margin-bottom: 0.087719rem;
	}
	.icon_i{
		color: #009CDA;
		font-weight: 900;
		font-size: 0.280701rem;
		margin-left: 1px;
		margin-top: 0.026315rem;
		}
</style>
