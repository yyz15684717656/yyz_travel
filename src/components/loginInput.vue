<template>
	<div class="num">
		<li class="num_list">
		    <img :src="imgSrc">
		    <div class="am-form-group" >
		        <input :type="type" :placeholder="text" :style="{backgroundColor:bgColor,width:width}"  @input="$emit('input',$event.target.value)"/>
		    </div>
		    <div class="clear"></div>
		</li>
	</div>
</template>

<script>
	export default {
		name:"loginInput",
		props:{
			text:{
				type:String,
				default:""
			},
			imgSrc:{
				type:String,
				default:""
			},
			bgColor:{
				type:String,
				default:''
			},
			width:{
				type:String,
				default:""
			},
			type:{
				type:String,
				default:"text"
			}
		}
	}
</script>

<style scoped>
	.num .num_list .am-form-group{
	    margin: 0;
	}
	.num_list input{
		line-height: 25px;
	}
	.num .num_list img{
	  
	    width: 25px;
	    float: left;
	}
	.num input{
	    float: left;
	    border: none ;
	    background: none;
	    margin-left: 10px;
	    font-size: 16px;
	    text-align: left;
	    /* height: 60px; */
	    /* line-height: 60px; */
	    width: 80%;
	}
</style>
